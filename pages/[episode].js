export default function EpisodePage({ episode }) {
    return (
        <>
            <h1>{ episode.title }</h1>
            <p>{ episode.episode_number }</p>
            <p>{ episode.pub_date }</p>
            <p>{ episode.url }</p>
            <audio controls>
                <source src={ episode.url } type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio> 
        </>
    )
}

export async function getStaticProps(context) {

    const epNumber = context.params.episode

    const res = await fetch('https://champion-weasel-77.hasura.app/v1/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `query MyQuery {
            podcast_episode(where: {episode_num: {_eq: "${epNumber}"}}) {
                episode_num
                bytes
                description
                explicit
                pub_date
                title
                seconds
                url
            }
        }`
        }),
    })

    const data = await res.json()
    const episode = data.data.podcast_episode

    return {
        props: {
            episode: episode[0]
        }
    };
}

export async function getStaticPaths() {

    const wacky = await fetch('https://champion-weasel-77.hasura.app/v1/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `
            query MyQuery {
                podcast_episode_aggregate {
                    nodes {
                        episode_num
                    }
                }
            }`
        }),
    })

    const res = await wacky.json()
    const episode_numbers = res.data.podcast_episode_aggregate.nodes

    const paths = episode_numbers.map((ep) => {
        return {
            params: {
                episode: ep.episode_num
            }
        }
    })

    return {
        paths,
        fallback: false,
    }
}
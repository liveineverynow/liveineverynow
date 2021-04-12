import { oneEpisode, allEpisodes } from '../util.js'
import Player from '../components/Player/Player.js'
import { useRouter } from 'next/router'

export default function EpisodePage({ episode }) {

    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Player 
                episode_num={episode.episode_num}
                title={episode.title}
                description={episode.description}
                pub_date={episode.pub_date}
                url={episode.url}
            />
        </>
    )
}

export async function getStaticProps(context) {

    const epNumber = context.params.episode

    const episode = await oneEpisode(epNumber)

    if (!episode) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    return {
        props: {
            episode,
        },
        revalidate: 5,
    };
}

export async function getStaticPaths() {

    return {
        paths: [],
        fallback: true,
    }
}

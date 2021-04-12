import { oneEpisode, allEpisodes } from '../util.js'
import Player from '../components/Player/Player.js'

export default function EpisodePage({ episode }) {
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

    return {
        props: {
            episode,
        },
        revalidate: 5,
    };
}

export async function getStaticPaths() {

    const episodes = await allEpisodes()

    const paths = episodes.map(ep => {
        return {
            params: { episode: ep.episode_num }
        }
    })

    //let nums = []

    //for (let i=1; i<20; i++) {
        //nums.push(i.toString().padStart(3, '0'))
    //}

    //const paths = nums.map(num => {
        //return {
            //params: { episode: num }
        //}
    //})

    return {
        paths,
        fallback: false,
    }
}

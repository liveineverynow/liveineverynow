import EmailForm from '../components/emailForm'
import Footer from '../components/footer'
import Head from 'next/head'
import {
    allEpisodes,
    publishedEpisodes,
    oneEpisode,
} from '../util.js'

import Player from '../components/Player/Player.js'

function HomePage({ episodes }) {

    return (
    <>
        <Head>
            <title>LIVEINEVERYNOW. Podcast</title>
            <link
                type="application/rss+xml"
                rel="alternate"
                title="LIVEINEVERYNOW. Podcast"
                href="/api/feed"
            />
        </Head>

        <div>
            <h1>LIVEINEVERYNOW. Podcast</h1>
	    <img width="500"
	src="https://liveineverynow.s3-us-west-2.amazonaws.com/cover_new.jpg"
	alt="Podcast Cover Art" />

        </div>

        {
        episodes.map((el, index) => {
            return <Player 
                key={index}
                episode_num={el.episode_num}
                title={el.title}
                description={el.description}
                pub_date={el.pub_date}
                url={el.url}
            />
        })
        }
    </>
    )
}

export async function getStaticProps() {
    const episodes = await publishedEpisodes()

    return {
        props: {
            episodes
        },
        revalidate: 5,
    }
}


export default HomePage

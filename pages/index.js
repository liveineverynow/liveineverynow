import EmailForm from '../components/emailForm'
import Footer from '../components/footer'
import Head from 'next/head'

function HomePage() {

    return (
    <>
        <Head>
            <title>LIVEINEVERYNOW. Podcast</title>
            <link type="application/rss+xml" rel="alternate" title="LIVEINEVERYNOW. Podcast" href="/api/feed"/>
        </Head>

        <div>
            <h1>LIVEINEVEYNOW. Podcast</h1>
        </div>
    </>
    )
}

export default HomePage

import { formattedDate } from '../../util.js'
require('isomorphic-fetch');

function buildRSS(episodes) {
    const sorted = episodes.sort((a, b) => {
        const aDate = Date.parse(a.pub_date)
        const bDate = Date.parse(b.pub_date)
        return bDate - aDate 
    })

    const episodesXML = sorted.map( episode => {

        const epXML = `
    <item>
        <title>${episode.episode_num} - ${episode.title}</title>
        <link>https://podcast.liveineverynow.com</link>
        <description>
            ${episode.description}\n\ntwitter: @liveineverynow\ninstagram: liveineverynow\nwebsite: https://liveineverynow.com
        </description>
        <content:encoded>
            <![CDATA[
                <p>${episode.description}</p>
                <br/>
                <p><a href="https://twitter.com/liveineverynow">Twitter</a></p>
                <p><a href="https://instagram.com/livineverynow">Instagram</a></p>
                <p><a href="https://liveineverynow.com">https://liveineverynow.com</a></p>
                <p><a href="https://discord.gg/9cX4EG3Uzz">https://discord.gg/9cX4EG3Uzz</a></p>
            ]]>
        </content:encoded>

        <guid>https://podcast.liveineverynow.com/${episode.episode_num}</guid>

        <pubDate>${formattedDate(episode.pub_date, true)}</pubDate>

        <enclosure 
            url="${episode.url}"
            type="audio/mpeg"
            length="${episode.bytes}"
        />
        <itunes:duration>${episode.seconds}</itunes:duration>
        <itunes:explicit>yes</itunes:explicit>
    </item>
`
        const pd = new Date(Date.parse(episode.pub_date))
        const testDate = new Date('2021-04-15T08:00:00')
        //if (testDate > pd) {
        if (Date.now() > pd) {
            return epXML
        }
        else {
            return ""
        }

    })

    const episodesXMLString = episodesXML.join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8" ?>

<rss 
    version="2.0"
    xmlns:atom="http://www.w3.org/2005/Atom"
    xmlns:cc="http://web.resource.org/cc/"
    xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
    xmlns:media="http://search.yahoo.com/mrss/"
    xmlns:content="http://purl.org/rss/1.0/modules/content/"
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    >

    <channel>
    <atom:link href="https://podcast.liveineverynow.com/api/feed" rel="self" type="application/rss+xml" />

    <!-- Title -->
    <title>LIVEINEVERYNOW. Podcast</title>

    <!-- Author -->
    <itunes:author>LIVEINEVERYNOW.</itunes:author> 

    <!-- Description -->
    <description>Learning the tools and ideas to live happier, healthier, and more present lives.</description>

    <!-- Cover Image -->
    <itunes:image href="https://liveineverynow.s3-us-west-2.amazonaws.com/cover.jpg" />

    <!-- Language -->
    <language>en-us</language>

    <!-- Explicit -->
    <itunes:explicit>yes</itunes:explicit>

    <!-- Homepage -->
    <link>https://podcast.liveineverynow.com</link>

    <!-- Owner -->
    <itunes:owner>
    <itunes:email>work@liveineverynow.com</itunes:email>
    <itunes:name>LIVEINEVERYNOW.</itunes:name>
    </itunes:owner>

    <!-- Keywords -->
    <itunes:keywords>wisdom,knowledge,creativity,entrepreneur,strength,business,science,productivity,mindfulness</itunes:keywords>

    <!-- Categories -->
    <itunes:category text="Society &amp; Culture"></itunes:category>
    <itunes:category text="Business"></itunes:category>
    <itunes:category text="Education"></itunes:category>

    <!-- ================================== -->
    <!-- =========== Episodes ============= -->
    <!-- ================================== -->

    ${episodesXMLString}

    </channel>
</rss>
`

    return xml
}

export default async function feedFunc(req, response) {
    const wacky = await fetch('https://champion-weasel-77.hasura.app/v1/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `
            query MyQuery {
                podcast_episode_aggregate {
                    nodes {
                        bytes
                        description
                        episode_num
                        explicit
                        pub_date
                        title
                        seconds
                        url
                    }
                }
            }`
        }),
    })

    const res = await wacky.json()
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/xml; charset=utf-8");
    response.send(buildRSS(res.data.podcast_episode_aggregate.nodes))
}

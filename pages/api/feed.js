require('isomorphic-fetch');

function buildRSS(episodes) {
    let episodesXML = ``
    episodes.map( episode => {
        episodesXML += `
        <item>
            <title>${episode.episode_number.toString().padStart(3, '0')} - ${episode.title}</title>
            <description>
                ${episode.description}
            </description>

            <guid>liveineverynow${episode.id}${episode.pub_date}</guid>

            <pubDate>Sat, 25 Jul 2020 12:00:00 GMT</pubDate>

            <enclosure url="${episode.url}"
                        type="audio/mpeg" length="${episode.bytes}"/>
            <itunes:explicit>yes</itunes:explicit>
            <itunes:duration>${episode.seconds}</itunes:duration>
        </item>
        `
    })

    const xml = `<?xml version="1.0" encoding="UTF-8" ?>

    <rss version="2.0"
        xmlns:googleplay="http://www.google.com/schemas/play-podcasts/1.0"
        xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
    <channel>

        <!-- Title -->
        <title>LIVEINEVERYNOW. Podcast</title>

        <!-- Author -->
        <itunes:author>LIVEINEVERYNOW.</itunes:author> 

        <!-- Description -->
        <description>Learning the tools and ideas we use on our journey through business, creativity, and life.</description>

        <!-- Cover Image -->
        <itunes:image href="https://liveineverynow.com/podcast/cover.jpg" />
        
        <!-- Language -->
        <language>en-us</language>

        <!-- Explicit -->
        <itunes:explicit>yes</itunes:explicit>

        <!-- Homepage -->
        <link>https://liveineverynow.com/podcast</link>

        <!-- Owner -->
        <itunes:owner>
        <itunes:email>work@liveineverynow.com</itunes:email>
                <itunes:name>LIVEINEVERYNOW.</itunes:name>
        </itunes:owner>

        <!-- Keywords -->
        <itunes:keywords>wisdom,knowledge,creativity,entrepreneur,strength,business,science,productivity,mindfulness</itunes:keywords>

        <!-- Categories -->
            <itunes:category text="Business"></itunes:category>
            <itunes:category text="Culture &amp; Society"></itunes:category>
            <itunes:category text="Technology"></itunes:category>
            <itunes:category text="Education"></itunes:category>
            <itunes:category text="Health"></itunes:category>






        <!-- ================================== -->
        <!-- =========== Episodes ============= -->
        <!-- ================================== -->

        ${episodesXML}

    </channel>
    </rss>
    `

    return xml
}

export default async function feedFunc(req, response) {
    fetch('https://champion-weasel-77.hasura.app/v1/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `
        query MyQuery {
            podcast_episode_aggregate {
                nodes {
                bytes
                description
                episode_number
                explicit
                id
                pub_date
                title
                seconds
                url
                }
            }
        }`
    }),
    })
    .then(res => res.json())
    .then(
        res => {
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/xml; charset=utf-8");
            response.send(buildRSS(res.data.podcast_episode_aggregate.nodes))
        });
}
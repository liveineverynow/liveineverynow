require('isomorphic-fetch');

function buildRSS(episodes) {
    let episodesXML = ``
    episodes.map( episode => {
        let pd = new Date(Date.parse(episode.pub_date))

        let days = [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
        ]
        let months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ]

        let day = days[pd.getDay()]
        let month = months[pd.getMonth()]
        let date = pd.getDate()
        let year = pd.getFullYear()
        let hour = pd.getHours()
        let mins = pd.getMinutes()

        // TODO: change pubdate to correct time of day
        const epXML = `
    <item>
        <title>${episode.episode_number.toString().padStart(3, '0')} - ${episode.title}</title>
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
            ]]>
        </content:encoded>

        <guid>liveineverynow${episode.id}${episode.pub_date}</guid>

        <pubDate>${day}, ${date} ${month} ${year} ${hour.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')}:00 EST</pubDate>

        <enclosure 
            url="${episode.url}"
            type="audio/mpeg"
            length="${episode.bytes}"
        />
        <itunes:duration>${episode.seconds}</itunes:duration>
        <itunes:explicit>yes</itunes:explicit>
    </item>
`
        if (Date.now() > pd) {
            episodesXML += epXML
        }
    })

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
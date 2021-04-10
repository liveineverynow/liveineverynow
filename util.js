// API call wrapper
async function apiQuery(gql_string) {
    const apiEndpoint = 'https://champion-weasel-77.hasura.app/v1/graphql'
    const request = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: gql_string }),
    })

    const response = await request.json()
    return response
}

// Returns all data from all episodes
export async function allEpisodes() {
    const query = `
        query allEpisodes {
            podcast_episode(order_by: {episode_num: desc}) {
                episode_num
                title
                description
                pub_date
                url
                explicit
                seconds
                bytes
            }
        }
    `
    const response = await apiQuery(query)
    const data = response.data
    if (!data) {
        return []
    }

    const allEpisodes = data.podcast_episode
    return allEpisodes
}

// Returns all data from one episode
export async function oneEpisode(episodeNumber) {
    const query = `
        query oneEpisode {
            podcast_episode_by_pk(episode_num: "${episodeNumber}") {
                episode_num
                title
                description
                pub_date
                url
                explicit
                seconds
                bytes
            }
        }
    `

    const response = await apiQuery(query)
    const data = response.data
    if (!data) {
        return {
            episode_num: '000',
            title: 'Does not exists',
            description: 'Not a valid episode number',
            pub_date: '1969-04-20T04:20:20',
            url: 'https://liveineverynowisthebest.com/error.mp3',
            explicit: true,
            seconds: 1,
            bytes: 1,
        }
    }
    const episode = data.podcast_episode_by_pk
    if (episode) {
        return episode
    }
    else { 
        return {
            episode_num: '000',
            title: 'Does not exists',
            description: 'Not a valid episode number',
            pub_date: '1969-04-20T04:20:20',
            url: 'https://liveineverynowisthebest.com/error.mp3',
            explicit: true,
            seconds: 1,
            bytes: 1,
        }
    }
}

// Transform datestring
export function formattedDate(dateString, podcastFormat=false) {
    let pd = new Date(Date.parse(dateString))

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
    let fullMonths = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]

    let day = days[pd.getDay()]
    let month = months[pd.getMonth()]
    let fullMonth = fullMonths[pd.getMonth()]
    let date = pd.getDate()
    let year = pd.getFullYear()
    let hour = pd.getHours().toString().padStart(2, '0')
    let mins = pd.getMinutes().toString().padStart(2, '0')

    if (podcastFormat) {
       return `${day}, ${date} ${month} ${year} ${hour}:${mins}:00 EST`
    }

    return `${date} ${fullMonth} ${year}`
}

import AppleMusic from './svgs/AppleMusic'
import Spotify from './svgs/Spotify'
import Twitter from './svgs/Twitter'
import GooglePlay from './svgs/GooglePlay'
import Globe from './svgs/Globe'
import Rss from './svgs/Rss'
import Youtube from './svgs/Youtube'
import Instagram from './svgs/Instagram'

import React from 'react'

import PropTypes from 'prop-types'

export default function Icon(props) {

    const selectedIcon = props.selected

    let toRender = <Globe />

    switch (selectedIcon) {
        case 'Instagram':
            toRender = <Instagram />
            break;
        case 'AppleMusic':
            toRender = <AppleMusic />
            break;
        case 'Spotify':
            toRender = <Spotify />
            break;
        case 'Rss':
            toRender = <Rss />
            break;
        case 'GooglePlay':
            toRender = <GooglePlay />
            break;
        case 'Youtube':
            toRender = <Youtube />
            break;
        case 'Twitter':
            toRender = <Twitter />
            break;
        default:
            toRender = <Globe />
            break;
    }

    return toRender
}

Icon.propTypes = {
    selected: PropTypes.oneOf([
        'AppleMusic',
        'Globe',
        'GooglePlay',
        'Instagram',
        'Rss',
        'Spotify',
        'Twitter',
        'Youtube'
    ])
}
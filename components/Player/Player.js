import React from 'react'
import {
    formattedDate,
} from '../../util.js'

import styles from './Player.module.css'

export default function Player({
        episode_num,
        title,
        description,
        pub_date,
        url,
    }) {

    return (
    <div className={styles.card} >
        <h2 className={styles.red}>{ episode_num } - { title }</h2>
        <p>{ formattedDate(pub_date) }</p>
        <audio controls>
            <source src={ url } type="audio/mpeg"/>
            Your browser does not support the audio element.
        </audio>
    <p>{ description }</p>
    </div>
    )
}

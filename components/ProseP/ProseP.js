import React from 'react'

import styles from './ProseP.module.css'

export default function ProseP(props) {

    const text = props.text || "None given"

    const red = props.red || false

    if (red) {
        return (
            <p className={styles.red}>{text}</p>
        )
    }

    return (
        
        <p>{text}</p>
    )


}
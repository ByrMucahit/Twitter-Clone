import React from "react"

import cn from 'classnames'

import styles from './stack.module.css'

function Stack({ gap=10, column=false, chidlren}) {
    return <div className={cn([styles.stack, column && styles.column])}>{chidlren}</div>
}

export default Stack;
import React from "react"

import cn from "classnames"

import styles from "../components/stack.module.css"

function Stack({  column = false, child }) {
    return (
    <div className={cn([styles.stack, column && styles.column])}
   
    >{child}
    </div>
    )
}

export default Stack
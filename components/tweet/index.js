import React from "react"

import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

import Photo from "../photo";
import styles from './style.module.css'
import IconButton from "../button/icon";
import * as Icon from '../icons'

function Tweet({name, slug, datetime, text}){
    return <article className={styles.tweet}>

        {/* Avatar */}
        <div className={styles.avatar}>
            <Photo/>
        </div>

        {/* Body */}
        <div className={styles.body}>
            <header className={styles.header}>
                <span className={styles.name}>{name}</span> <span>@{slug}</span> . <span>{formatDistanceToNowStrict(datetime)}</span>
            </header>

            <div className={styles.content}>{text}</div>

            <footer className={styles.footer}>
                <div className={styles.footerButton}>
                    {/* Reply */}
                    <IconButton>
                        <Icon.Reply />
                    </IconButton>
                </div>
                    {/* Retweet*/ }
                <div className={styles.footerButton}>
                    <IconButton>
                        <Icon.Retweet />
                    </IconButton>
                </div>

                
                {/* Like */}
                <div className={styles.footerButton}>
                    <IconButton>
                        <Icon.Like />
                    </IconButton>
                </div>
                {/* share  */}
                <div className={styles.footerButton}>
                    <IconButton>
                        <Icon.Share />
                    </IconButton>
                </div>

            </footer>
        </div>
            </article>
}

export default Tweet;
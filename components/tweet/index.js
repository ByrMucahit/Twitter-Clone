import React from "react"

import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

import Photo from "../photo";
import styles from './style.module.css'
import IconButton from "../button/icon";
import * as Icon from '../icons'

function Tweet({created_at,
                retweet_count,
                favorite_count,
                retweeted,
                favorited,
                text,
                user}){
    
    // created_at
    // favorite_count
    // retweet_count
    // retweeted
    // favorited
    // text
    // user.name
    // user.profile_image_url_https
    // user.screen_name

    
    return <article className={styles.tweet}>

         {/*Avatar*/} 
        <div className={styles.avatar}>
            <Photo src={user.profile_image_url_https}/>
        </div>

         {/*Body*/} 
        <div className={styles.body}>
            <header className={styles.header}>
                <span className={styles.name}>{user.name}</span> <span>@{user.screen_name}</span> . <span>{formatDistanceToNowStrict(new Date(created_at))}</span>
            </header>

            <div className={styles.content}>{text}</div>

            <footer className={styles.footer}>
                <div className={styles.footerButton}>
                     {/*Reply*/} 
                    <IconButton>
                        <Icon.Reply />
                    </IconButton>
                    {false && <span>3</span>}
                </div>
                     {/*Retweet*/}
                <div className={styles.footerButton}>
                    <IconButton>
                        <Icon.Retweet />
                    </IconButton>
                    {retweet_count && <span>{retweet_count}</span>}
                </div>

                
                 {/*Like*/} 
                <div className={styles.footerButton}>
                    <IconButton>
                        <Icon.Like />
                    </IconButton>
                    {favorite_count && <span>{favorite_count}</span>}
                </div>
                 {/*share*/}  
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
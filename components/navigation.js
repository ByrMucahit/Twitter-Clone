import React from 'react'
import styles from './navigation.module.css'

import NavButton from './navigation-button'
import TextTitle from './text-title'
import { 
    Twitter, 
    Home, 
    Explore, 
    Notification, 
    Message, 
    Bookmark, 
    Lists,
    Profile,
    More
 } from './icons'


 const MENU = [
    {
        key: 'twitter',
        icon: <Twitter />,
        title: '',
        notify: 0
    },
     {
         key: 'home',
         icon: <Home />,
         title: 'Home',
         notify: 0
     },
     {
        key: 'explore',
        icon: <Explore />,
        title: 'Explore',
        notify: 0
    },
    {
        key: 'notification',
        icon: <Notification/>,
        title: 'Notification',
        notify: 17
    },
    {
        key: 'message',
        icon: <Message/>,
        title: 'Message',
        notify: 0
    },
    {
        key: 'bookmark',
        icon: <Bookmark/>,
        title: 'Bookmark',
        notify: 0
    },
    {
        key: 'list',
        icon:<Lists/>,
        title: 'Lists',
        notify: 0
    },
    {
        key: 'profile',
        icon: <Profile/>,
        title: 'Profile',
        notify: 0
    },
    {
        key:'more',
        icon: <More/>,
        title: 'More',
        notify: 0
    }
    
 ]

function Navigation({flat=false, selectedKey}) {
    return (
    <nav className={styles.nav}> 
        { MENU.map((menu) => {
            const showTitle = !flat && menu.title.length > 0
                return(
                <NavButton 
                key={menu.key}
                notify={menu.notify }
                selected={selectedKey ===  menu.key }
                >
                         {menu.icon}
                   {showTitle > 0 && <TextTitle>{menu.title}</TextTitle> }     
                </NavButton>

                )
                })}
    </nav>
    )
}

export default Navigation;
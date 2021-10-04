import React from 'react'

import NavButton from './navigation-button'
import styles from './navigation.module.css'
import TitleBold from './title-bold'
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

function Navigation({selectedKey}) {
    return <nav className={styles.nav}>
        <NavButton>
            <Twitter/>
        </NavButton>

        <NavButton selected={selectedKey === 'home'}>
            <Home />
            <TitleBold>Home</TitleBold>
        </NavButton>

        <NavButton selected={selectedKey === 'explorer'}>
            <Explore />
            <TitleBold>Explore</TitleBold>
        </NavButton>

        <NavButton notify={17} selected={selectedKey === 'notification'}>
            <Notification />
            <TitleBold>Notification</TitleBold>
        </NavButton>

        <NavButton selected={selectedKey === 'messages'}>
            <Message />
            <TitleBold>Message</TitleBold>
        </NavButton>

        <NavButton selected={selectedKey === 'bookmark'}>
            <Bookmark />
            <TitleBold>Bookmark</TitleBold>
        </NavButton>

        <NavButton selected={selectedKey === 'lists'}>
            <Lists />
            <TitleBold>List</TitleBold>
        </NavButton>

        <NavButton selected={selectedKey === 'profile'}>
            <Profile />
            <TitleBold>Profile</TitleBold>
        </NavButton>

        <NavButton selected={selectedKey === 'more'}>
            <More />
            <TitleBold>More</TitleBold>
        </NavButton>
    </nav>
}

export default Navigation;
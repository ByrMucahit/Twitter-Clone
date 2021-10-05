import React from 'react'

import NavButton from './navigation-button'
import styles from './navigation.module.css'
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

function Navigation({selectedKey}) {
    return <nav className={styles.nav}>
        <NavButton>
            <Twitter/>
        </NavButton>

        <NavButton selected={selectedKey === 'home'}>
            <Home />
            <TextTitle>Home</TextTitle>
        </NavButton>

        <NavButton selected={selectedKey === 'explorer'}>
            <Explore />
            <TextTitle>Explore</TextTitle>
        </NavButton>

        <NavButton notify={17} selected={selectedKey === 'notification'}>
            <Notification />
            <TextTitle>Notification</TextTitle>
        </NavButton>

        <NavButton selected={selectedKey === 'messages'}>
            <Message />
            <TextTitle>Message</TextTitle>
        </NavButton>

        <NavButton selected={selectedKey === 'bookmark'}>
            <Bookmark />
            <TextTitle>Bookmark</TextTitle>
        </NavButton>

        <NavButton selected={selectedKey === 'lists'}>
            <Lists />
            <TextTitle>List</TextTitle>
        </NavButton>

        <NavButton selected={selectedKey === 'profile'}>
            <Profile />
            <TextTitle>Profile</TextTitle>
        </NavButton>

        <NavButton selected={selectedKey === 'more'}>
            <More />
            <TextTitle>More</TextTitle>
        </NavButton>
    </nav>
}

export default Navigation;
import * as Icon from '../components/icons'


export default {
    TABLET_SIZE: 980,
    DESKTOP_SIZE: 1270
}

export const MENU = [
    {
        key: 'twitter',
        path: '/',
        icon: <Icon.Twitter  style={{ fontSize: 30, color: 'white'}}/>,
        iconSelected: <Icon.HomeSolid style= {{ fontSize: 30, color: 'white'}}/>,
        title: '',
        notify: 0
    },
     {
         key: 'home',
         path: '/',
         icon: <Icon.Home />,
         iconSelected: <Icon.HomeSolid />,
         title: 'Home',
         notify: 0
     },
     {
        key: 'explore',
        path: '/explore',
        icon: <Icon.Explore />,
        iconSelected: <Icon.ExploreSolid />,
        title: 'Explore',
        notify: 0
    },
    {
        key: 'notification',
        path: '/notification',
        icon: <Icon.Notification/>,
        iconSelected: <Icon.NotificationFill />,
        title: 'Notification',
        notify: 17
    },
    {
        key: 'message',
        path: '/message',
        icon: <Icon.Message/>,
        iconSelected: <Icon.MessagesFill />,
        title: 'Message',
        notify: 0
    },
    {
        key: 'bookmark',
        path: '/bookmark',
        icon: <Icon.Bookmark/>,
        iconSelected: <Icon.BookmarkFill />,
        title: 'Bookmark',
        notify: 0
    },
    {
        key: 'list',
        path: '/list',
        icon:<Icon.Lists/>,
        iconSelected: <Icon.ListsFill />,
        title: 'Lists',
        notify: 0
    },
    {
        key: 'profile',
        path: '/profile',
        icon: <Icon.Profile/>,
        iconSelected: <Icon.ProfileFill />,
        title: 'Profile',
        notify: 0
    },
    {
        key:'more',
        path: '/more',
        icon: <Icon.More/>,
        iconSelected: <Icon.HomeSolid />,
        title: 'More',
        notify: 0
    }
    
 ]
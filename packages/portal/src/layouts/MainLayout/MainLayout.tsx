import { NavLink, Route, Routes } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import { FollowersIcon, FriendsIcon, Header, HomeIcon, MenuDrawer, MenuIcon, MessageIcon, NotificationIcon, StoreIcon, VideoIcon } from '@snappix/components';
import { MainPage } from '../../pages/MainPage';
import { AuthPage } from '../../pages/AuthPage';
import { NewsFeed } from '../../pages/NewsFeed';
import { PersonalUserPage } from '../../pages/PersonalUserPage';

const menuItemList = [
    {
        title: 'Home',
        url: '/',
        Image: HomeIcon,
        selectSideMenu: 'center',
    },
    {
        title: 'Game',
        url: '/auth',
        Image: VideoIcon,
        selectSideMenu: 'center',
    },
    {
        title: 'Лого',
        url: '/news',
        Image: StoreIcon,
        selectSideMenu: 'center',
    },
    {
        title: 'Лого',
        url: '/user',
        Image: FollowersIcon,
        selectSideMenu: 'center',
    },
    {
        title: 'Лого',
        url: '/3',
        Image: MenuIcon,
        selectSideMenu: 'right',
    },
    {
        title: 'Лого',
        url: '/4',
        Image: MessageIcon,
        selectSideMenu: 'right',
    },
    {
        title: 'Лого',
        url: '/5',
        Image: NotificationIcon,
        selectSideMenu: 'right',
    },
]

const menuItemListDrawer = [
    {
        title: 'Friends',
        url: '/friends',
        Image: FriendsIcon,
    },
    {
        title: 'Message',
        url: '/message',
        Image: MessageIcon,
    },
    {
        title: 'Groups',
        url: '/group',
        Image: FollowersIcon,
    },
]

export const MainLayout = () => {
    return (
        <Box display={'flex'}>
            <CssBaseline />
            <MenuDrawer menuItem={NavLink} menuItemListDrawer={menuItemListDrawer} />
            <Box display={'flex'} flexDirection={'column'} width={'100%'}>
                <Header menuItem={NavLink} menuItemList={menuItemList} />
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    width={'100%'}
                    bgcolor={'#181820'}
                >
                    <Routes>
                        <Route path='/' element={<MainPage />} />
                        <Route path='/auth' element={<AuthPage />} />
                        <Route path='/news' element={<NewsFeed />} />
                        <Route path='/user' element={<PersonalUserPage />} />
                    </Routes>
                </Box>
            </Box>
        </Box>
    )
}
import Home from '../page/Home';
import Join from '../page/Join';
import Login from '../page/Login';
import Mypage from '../page/Mypage';
import FriendList from '../page/FriendList';

export const routes = [
    {
        path: '/',
        component: Home,
        showMenubar: true,
    },
    {
        path: '/join/',
        component: Join,
        showMenubar: false,
    },
    {
        path: '/login/',
        component: Login,
        showMenubar: false,
    },
    {
        path: '/mypage',
        component: Mypage,
        showMenubar: true,
    },
    {
        path: '/friends/',
        component: FriendList,
        showMenubar: true,
    },
];
import FriendList from './page/FriendList';

export default const menus = [
    {
        title: '친구목록',
        link: '/friends/',
        showState: 'logged_in',
        component: FriendList,
    },
];
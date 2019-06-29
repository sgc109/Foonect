import React from 'react';
class MenubarScreen extends React.Component {
    render() {
        return (
            <>
                <Menubar
                    loggedIn={this.state.loggedIn}
                ></Menubar>
                <Route path='/' component={Home} />
                <Route path='/mypage' component={Mypage} />
                <Route path='/friends' component={FriendList} />
            </>
        );
    }
}

export default App;

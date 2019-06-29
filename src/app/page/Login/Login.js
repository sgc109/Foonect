import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    render() {

        const { handleLogin } = this.props;

        return (
            <div className="Login">
                <div className="modal">
                    <div className="textField">이메일</div>
                    <input type="text" />
                    <div className="textField">비밀번호</div>
                    <input type="text" />
                    <button onClick={handleLogin}><Link to="/">로그인</Link></button>
                </div>
            </div>
        );
    }
}

export default Login;
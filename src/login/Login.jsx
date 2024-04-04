import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
    const [user, setUser] = useState({});
    const [token, setToken] = useState('');

    // Hàm giải mã token
    const decodedToken = (token) => {
        return jwtDecode(token);
    };

    const handleCallbackResponse = (response) => {
        console.log(response.credential);
        const userObject = decodedToken(response.credential);
        setUser(userObject);
        document.getElementById('signInDiv').hidden = true;
    };

    const handleLogout = () => {
        setUser({});
        document.getElementById('signInDiv').hidden = false;
    };

    useEffect(() => {
        const tokenFromLocalStorage = localStorage.getItem('token');
        if (tokenFromLocalStorage) {
            setToken(tokenFromLocalStorage);
            const userObject = decodedToken(tokenFromLocalStorage);
            setUser(userObject);
        }

        google.accounts.id.initialize({
            client_id: '909825439256-k6jsq6uek5fc3756k0b1j454eenuculv.apps.googleusercontent.com',
            callback: handleCallbackResponse,
        });

        google.accounts.id.renderButton(document.getElementById('signInDiv'), {
            theme: 'outline',
            size: 'large',
        });
        google.accounts.id.prompt();
    }, []);

    return (
        <div style={{ height: '60vh', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
            <div id="signInDiv"></div>
            {Object.keys(user).length !== 0 && (
                <button onClick={handleLogout}>SignOut</button>
            )}
            {user && (
                <div>
                    <h1>{user.name}</h1>
                </div>
            )}
        </div>
    );
};

export default Login;
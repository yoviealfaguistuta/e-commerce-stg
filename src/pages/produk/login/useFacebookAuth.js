import { useState, useEffect } from 'react';

function useFacebookAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userFb, setUser] = useState(null);

    useEffect(() => {
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: 'YOUR_APP_ID',
                cookie: true,
                xfbml: true,
                version: 'v12.0'
            });

            window.FB.getLoginStatus(function (response) {
                if (response.status === 'connected') {
                    setIsAuthenticated(true);
                    setUser(response.authResponse.userID);
                } else {
                    setIsAuthenticated(false);
                    setUser(null);
                }
            });
        };

        // Load the SDK asynchronously
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }, []);

    const handleLoginFb = () => {
        window.FB.login(function (response) {
            if (response.status === 'connected') {
                setIsAuthenticated(true);
                setUser(response.authResponse.userID);
            } else {
                setIsAuthenticated(false);
                setUser(null);
            }
        }, { scope: 'public_profile,email' });
    };

    const handleLogout = () => {
        window.FB.logout(function (response) {
            setIsAuthenticated(false);
            setUser(null);
        });
    };

    return {
        isAuthenticated,
        userFb,
        handleLoginFb,
        handleLogout
    };
}

export default useFacebookAuth;

import { useState, useEffect } from 'react';

function useGoogleAuth() {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
                client_id: 'YOUR_CLIENT_ID'
            }).then(() => {
                const auth = window.gapi.auth2.getAuthInstance();
                setIsSignedIn(auth.isSignedIn.get());
                setUser(auth.currentUser.get());

                auth.isSignedIn.listen((isSignedIn) => {
                    setIsSignedIn(isSignedIn);
                });

                auth.currentUser.listen((user) => {
                    setUser(user); 
                });
            });
        });
    }, []);

    const handleLogin = () => {
        window.gapi.auth2.getAuthInstance().signIn();
    };

    const handleLogout = () => {
        window.gapi.auth2.getAuthInstance().signOut();
    };

    return {
        isSignedIn,
        user,
        handleLogin,
        handleLogout
    };
}

export default useGoogleAuth;
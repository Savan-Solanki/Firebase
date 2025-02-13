import React, { useEffect, useState } from 'react';
import { app } from './firebase';
import { getAuth, GoogleAuthProvider, onAuthStateChanged,signOut, signInWithPopup, updateCurrentUser } from 'firebase/auth';
import MainPage from './MainPage';

const auth = getAuth(app);

const GoogleAuth = () => {
    const [user,setUser] = useState(null)
    const provider = new GoogleAuthProvider();

    const signInGoogle = () => {
        signInWithPopup(auth, provider)
        .then(() => console.log("Sign In Success"))
        .catch((err)=>console.log(err))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (CurrentUser) => {
            setUser(CurrentUser)
        })

        return () => unsubscribe()
    }, [user])

    const signOutGoogle = () => {
        signOut(auth)
    }

    return (
        <div>
            {user !== null ? (
                <MainPage SignOut={signOutGoogle}/>
            ) : (
                <div>
                    <h1>Google Auth</h1>
                    <button onClick={signInGoogle}>Sign In With Google</button>
                </div>
            )}
        </div>
    );
}

export default GoogleAuth;
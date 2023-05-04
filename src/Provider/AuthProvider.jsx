import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../FireBase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();
const GitHubProvider = new GithubAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] =useState(true);

    const googlePopup = () =>{
        setLoading(true)
        return signInWithPopup(auth,GoogleProvider);
    }
    const gitPopup = () =>{
        setLoading(true)
        return signInWithPopup(auth,GitHubProvider);
    }
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside auth state observed',loggedUser);
            setUser(loggedUser);
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    },[])
    const logOut = () =>{
        setLoading(true)
        signOut(auth);
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
}
    
    const authInfo ={
        user,
        googlePopup,
        gitPopup,
        createUser,
        signIn,
        loading,
        logOut,
        updateUserProfile,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
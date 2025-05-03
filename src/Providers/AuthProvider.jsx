import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebaseinit/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
export const AuthContext= createContext(null)
const auth =getAuth(app)
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const signUp =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn =(email,passowrd)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const updateInfo=(name)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName: name
        })
    }


    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            console.log('state changed')
            setLoading(false)
        })
    },[])

    const authInfo={
        user,loading,signIn,signUp,signInWithGoogle,updateInfo
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
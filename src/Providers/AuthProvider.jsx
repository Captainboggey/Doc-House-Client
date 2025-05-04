import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebaseinit/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from '../Hooks/useAxiosPublic';
export const AuthContext= createContext(null)
const auth =getAuth(app)
const axiosPublic =useAxiosPublic()
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const signUp =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn =(email,password)=>{
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
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }


    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            const logged = {email: currentUser?.email}
            if(currentUser){
                axiosPublic.post('/jwt',logged)
                .then(res=>{
                    // console.log(res.data)
                    if(res.data.token){
                        localStorage.setItem('access-token',res.data.token)
                    setLoading(false)
                    }
                    
                })
            }else{
                localStorage.removeItem('access-token')
                setLoading(false)
            }
            console.log('state changed')
            
        })
        return()=>{
            unSubscribe()
        }
    },[])

    const authInfo={
        user,loading,signIn,signUp,signInWithGoogle,updateInfo,logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
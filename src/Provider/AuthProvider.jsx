import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.confige";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";


const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const creatUser = (email, password, displayName, photoURL) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password, displayName, photoURL)
    };

    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOutUser = () =>{
        setLoading(true)
        return signOut(auth);
    }

    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const updateUser = (name, Photo, email) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: Photo, email: email,
          })
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        });
        return()=>{
            unSubscribe();
        }
    },[])
    console.log(user);
    const authinfo = {creatUser, loginUser, googleLogin, user, logOutUser, githubLogin, updateUser, loading}
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
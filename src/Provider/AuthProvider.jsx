import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.confige";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";


const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const creatUser = (email, password, displayName, photoURL) =>{
        return createUserWithEmailAndPassword(auth, email, password, displayName, photoURL)
    };

    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOutUser = () =>{
        return signOut(auth);
    }

    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogin = () =>{
        return signInWithPopup(auth, githubProvider)
    }

    const updateUser = (name, Photo, email) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: Photo, email: email,
          })
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
        });
        return()=>{
            unSubscribe();
        }
    },[])
    console.log(user);
    const authinfo = {creatUser, loginUser, googleLogin, user, logOutUser, githubLogin, updateUser}
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
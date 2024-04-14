import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.confige";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

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


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
        });
        return()=>{
            unSubscribe();
        }
    },[])
    console.log(user);
    const authinfo = {creatUser, loginUser, googleLogin, user, logOutUser}
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
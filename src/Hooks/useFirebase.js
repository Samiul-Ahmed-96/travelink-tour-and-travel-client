import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from "../Firebase/firebaseInit";

initializeAuthentication();

const useFirebase = () => {
    
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading,setIsLoading] = useState(true);

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    //handle google sign in
    const signInUsingGoogle = () => {
       return signInWithPopup(auth, googleProvider)
    }

    //Sign Out handler
    const handleSignOut = () =>{
        setIsLoading(true)
        signOut(auth)
        .then(()=>{
        setUser({});
        })
        .finally(()=>setIsLoading(false))
    }
    //observer
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth,user =>{
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false)
        })
        return()=> unsubscribed;
    },[])
    

    return {
        user,
        error,
        isLoading,
        setUser,
        setIsLoading,
        setError,
        signInUsingGoogle,
        handleSignOut
    }
}

export default useFirebase;
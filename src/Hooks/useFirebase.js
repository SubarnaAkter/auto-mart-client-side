import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";

initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [authError, setAuthError] = useState('')

    const auth = getAuth();
    
    //regitration
    const registerUser = (email, password,name,history) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
               const newUser={email,displayName:name}
                setUser(newUser)
                savedUser(email,name)
                updateProfile(auth.currentUser, {
                    displayName:name,
                  }).then(() => {
                  
                  }).catch((error) => {
                   
                  });
                history.replace('/')
                setAuthError('');
            })
            .catch((error) => {

                setAuthError(error.message);

            })
            .finally(() => setLoading(false));
    }
    //login
    const loginUser = (email, password, location, history) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password, location, history)
            .then((result) => {
                setUser(result.user)
                const destination = location?.state?.from || '/';
                history.replace(destination)
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    }
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)
            }
            else {
                setUser({})
            }
            setLoading(false)

        });

        return () => unsubscribe;
    }, [])
    const logOut = () => {
        setLoading(true)
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch((error) => {

            })
            .finally(() => setLoading(false));;
    }
    
    const savedUser=(email,displayName)=>{
        const user={email,displayName}
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(user)
          })
            .then(res => res.json())
            .then(data => {
      
             
            })
    }

    return {
        user,
        registerUser,
        logOut,
        loginUser,
        loading,
        authError,
       
    }
};

export default useFirebase;
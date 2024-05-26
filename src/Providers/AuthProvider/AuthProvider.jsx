import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import app from '../../firebase/firebase.config'
import useAxios from "../../hooks/useAxios";


export const AuthContext = createContext();
const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxios();


    const googleContinue = () => {
        return signInWithPopup(auth, googleprovider)
    }






    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        setLoading(true);
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            const userEmail = currentUser?.email || user?.email;
            console.log(currentUser);
            setLoading(false);
            const loggedUser = { email: userEmail };
            if (currentUser) {
                axiosSecure.post('/jwt', loggedUser)
                    .then(res => {
                        console.log(res.data)
                    });


            }
            else{
                axiosSecure.post('/logout', loggedUser)
                .then(res => {
                    console.log(res.data)
                });


            }


        })

        return () => {
            return unSubscribe();
        }
    }, [])

    const setProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const authInfo =
    {
        user,
        loading,
        signUp,
        signInUser,
        logOut,
        setProfile,
        googleContinue,




    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;
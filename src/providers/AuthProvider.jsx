/* eslint-disable react/prop-types */
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import app from '../utils/firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
    }

    const authInfo = {
        createUser,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
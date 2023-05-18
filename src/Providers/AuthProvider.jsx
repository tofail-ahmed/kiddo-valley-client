import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null)
      const [loading, setLoading] = useState(true)

      const createUser = (email, password, name) => {
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password, name)
      }
      const signIn = (email, password,) => {
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password)
      }
      const logOut = () => {
            setLoading(true)
            return signOut(auth)
      }
      const updateUserProfile = (name, photoUrl) => {
            return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: photoUrl
            })
      }



      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, currentUser => {
                  setUser(currentUser)
                  setLoading(false)
            })
            return () => {
                  return unsubscribe
            }
      }, [])

      const authInfo = {
            user,
            createUser,
            signIn,
            loading,
            updateUserProfile,
            logOut

      }
      return (
            <div>
                  <AuthContext.Provider value={authInfo}>
                        {children}
                  </AuthContext.Provider>
                  
            </div>
      );
};

export default AuthProvider;
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const userInfo = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [user, setUser] = useState(null);

  const createUserE_P = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn_E_P = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };
  const logOut = () => {
    return signOut(auth);
  };

  const updateUser = (Name, url) => {
    updateProfile(auth.currentUser, {
      displayName: Name,
      photoURL: url,
    })
      .then(() => {})
      .catch((error) => {
        alert("something wrong");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);
  const authInfo = {
    createUserE_P,
    logIn_E_P,
    googleSignIn,
    githubSignIn,
    logOut,
    user,
    updateUser,
    setUser,
  };
  return (
    <div>
      <userInfo.Provider value={authInfo}>{children}</userInfo.Provider>
    </div>
  );
};

export default AuthProvider;

import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
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
    signInWithEmailAndPassword(auth, email, password)
      .then()
      .catch(() => {
        alert("wrong password");
      });
  };
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then()
      .catch(() => {
        alert("wrong password");
      });
  };
  const githubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then()
      .catch(() => {
        alert("wrong password");
      });
  };
  const logOut = () => {
    return signOut(auth);
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
  };
  return (
    <div>
      <userInfo.Provider value={authInfo}>{children}</userInfo.Provider>
    </div>
  );
};

export default AuthProvider;

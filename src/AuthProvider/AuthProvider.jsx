import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  // Google Authentication
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    signInWithPopup(auth, googleProvider);
  };
  // Facebook Login
  const facebookProvider = new FacebookAuthProvider();
  const facebookLogin = () => {
    signInWithPopup(auth, facebookProvider);
  };
  // github Login
  const githubProvider = new GithubAuthProvider();
  const githubLogin = () => {
    signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    setUser(null);
    signOut(auth);
  };

  useEffect(() => {
    const observerUser = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        console.log("no User");
      }
    });
    return () => observerUser();
  }, []);

  const authInfo = {
    user,
    createUser,
    login,
    logOut,
    googleLogin,
    facebookLogin,
    githubLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

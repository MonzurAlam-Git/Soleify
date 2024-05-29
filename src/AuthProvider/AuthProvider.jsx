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

const auth = getAuth(app);
export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Authentication
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // Facebook Login
  const facebookProvider = new FacebookAuthProvider();
  const facebookLogin = () => {
    return signInWithPopup(auth, facebookProvider);
  };
  // github Login
  const githubProvider = new GithubAuthProvider();
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    setUser(null);
    signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
        console.log("Logged In User :", user.email);
      } else {
        setLoading(false);
        console.log("No user");
      }
    });

    // return unSubscribe;
    return () => {
      return unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    login,
    logOut,
    googleLogin,
    facebookLogin,
    githubLogin,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

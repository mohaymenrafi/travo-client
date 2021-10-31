import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import authInit from '../firebase/firebase.init';

authInit();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  const signInWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        console.log('logged out');
      })
      .catch((error) => console.error(error.message))
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    setIsLoading(true);
    const unsubscribed = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);
  return {
    signInWithGoogle,
    user,
    logOut,
    setUser,
    setIsLoading,
    isLoading,
  };
};

export default useFirebase;

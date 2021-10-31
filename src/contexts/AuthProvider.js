import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const authContext = createContext();

/* eslint-disable */

const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    return (
        <authContext.Provider value={allContext}>{children}</authContext.Provider>
        );
    };
    
/* eslint-enable */

export default AuthProvider;

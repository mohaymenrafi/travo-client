import { useContext } from 'react';
import { authContext } from '../contexts/AuthProvider';

const useAuth = () => useContext(authContext);

export default useAuth;

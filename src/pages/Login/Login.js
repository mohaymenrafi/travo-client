import React from 'react';
import './Login.css';

import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { signInWithGoogle, setUser, setIsLoading } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirectUri = location.state?.from || '/';

  const handleGoogleLogIn = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        history.push(redirectUri);
        console.log(result.user);
      })
      .catch((error) => console.error(error.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="bg-paste px-4 py-32">
      <div className="container mx-auto py-12">
        <h2 className="text-white text-center font-work text-3xl">
          Login/Signup with Google To Book Your Package
        </h2>

        <div>
          <button
            type="button"
            className="default-btn mx-auto block mt-12"
            onClick={handleGoogleLogIn}
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

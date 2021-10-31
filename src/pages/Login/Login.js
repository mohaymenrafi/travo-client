import React from 'react';
import './Login.css';
import { useForm } from 'react-hook-form';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const { signInWithGoogle, setUser, setIsLoading } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirectUri = location.state?.from || '/';
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
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
      <div className="container mx-auto">
        <h2 className="text-white text-center font-work text-3xl">
          Login To Book Your Package
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="login lg:w-4/12 mx-auto mt-8"
        >
          <input placeholder="Name" {...register('name')} />
          <input
            placeholder="Email"
            {...register('email', { required: true })}
          />
          <input
            type="submit"
            value="Login"
            className="default-btn cursor-pointer	"
          />
        </form>
        <h3 className="text-center text-xl font-medium font-work my-6">Or</h3>
        <div>
          <button
            type="button"
            className="default-btn mx-auto block"
            onClick={handleGoogleLogIn}
          >
            Log in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

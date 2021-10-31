import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

/*eslint-disable*/

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if(isLoading) {
   return <div>
          <div className="h-screen w-screen z-50 flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          </div>
    </div>
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;

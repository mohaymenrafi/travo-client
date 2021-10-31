import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './UserMenu.css';

const UserMenu = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="flex flex-col lg:flex-row usermenu">
      <NavLink to="/my-account" className="inline-block">
        {user?.displayName}
      </NavLink>
      <button
        type="button"
        className="font-work text-lg uppercase text-orange font-medium ml-4"
        onClick={logOut}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../images/logo.svg';
import useAuth from '../../hooks/useAuth';
import UserMenu from './UserMenu/UserMenu';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { user, logOut } = useAuth();
  return (
    <div className="header">
      <div className="pc-header container mx-auto p-4 grid grid-cols-2 lg:grid-cols-3 items-center">
        <div className="logo flex items-center justify-start">
          <NavLink exact to="/">
            <img src={logo} alt="" width="161" height="57" />
          </NavLink>
        </div>

        <div className="lg:col-span-2">
          {/* hamburger menu button */}

          <div className="lg:hidden flex justify-end">
            <button
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
              className={
                navbarOpen
                  ? 'bg-paste text-white px-4 py-2'
                  : 'bg-orange text-white px-4 py-2'
              }
            >
              {navbarOpen ? (
                <FontAwesomeIcon icon={faTimes} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </div>
          {/* hamburger menu button end */}

          <div className="hidden lg:block">
            <nav className="flex items-center justify-end">
              <NavLink activeClassName="navActive" exact to="/">
                Home
              </NavLink>
              <NavLink activeClassName="navActive" to="/about">
                About
              </NavLink>
              <NavLink activeClassName="navActive" to="/tours">
                Tours
              </NavLink>

              <NavLink activeClassName="navActive" to="/contact">
                Contact
              </NavLink>
              {user?.displayName || user?.email ? (
                <UserMenu />
              ) : (
                <NavLink activeClassName="navActive" to="/login">
                  Login
                </NavLink>
              )}
            </nav>
          </div>
        </div>
      </div>
      {/* mobile navbar  */}
      <div
        className={navbarOpen ? 'lg:hidden mobile-nav bg-paste py-8' : 'hidden'}
      >
        <nav className="flex flex-col">
          <NavLink activeClassName="navActive" exact to="/">
            Home
          </NavLink>
          <NavLink activeClassName="navActive" to="/about">
            About
          </NavLink>
          <NavLink activeClassName="navActive" to="/tours">
            Tours
          </NavLink>
          <NavLink activeClassName="navActive" to="/contact">
            Contact
          </NavLink>
          {user?.displayName || user?.email ? (
            <UserMenu />
          ) : (
            <NavLink activeClassName="navActive" to="/login">
              Login
            </NavLink>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;

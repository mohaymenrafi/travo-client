import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => (
  <div className="notFound text-center text-white font-work px-4 py-32">
    <h2 className="text-6xl lg:text-9xl font-bold">404</h2>
    <h2 className="text-4xl lg:text-5xl font-semibold tracking-widest my-2">
      Oops!
    </h2>
    <h2 className="text-3xl font-regular my-2">The page can't be found.</h2>
    <Link exact to="/">
      <button type="button" className="default-btn mt-8">
        GO HOME
      </button>
    </Link>
  </div>
);

export default NotFound;

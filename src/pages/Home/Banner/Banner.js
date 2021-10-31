import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../images/banner-home.jpg';
import './Banner.css';

const Banner = () => (
  <div className="banner">
    <div className="container mx-auto px-4 py-32 md:py-48">
      <h2 className="font-abril text-5xl text-white lg:w-5/12 leading-normal	">
        Look & Feel The World
      </h2>
      <h3 className="text-2xl font-work font-regular text-white sm:w-8/12 lg:w-5/12">
        It is always sad to leave a place to which one knows one will never
        return.
      </h3>
      <Link to="/tours">
        <button type="button" className="default-btn mt-12">
          Book Now
        </button>
      </Link>
    </div>
  </div>
);

export default Banner;

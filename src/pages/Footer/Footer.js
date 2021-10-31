import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.svg';

const Footer = () => (
  <footer className="footer px-4 pt-12 pb-6">
    <div className="container mx-auto">
      <div>
        <Link exact to="/">
          <img
            src={logo}
            alt=""
            width="161"
            height="57"
            className="block mx-auto"
          />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 btext-color">
        <div>
          <h3 className="text-2xl uppercase font-work font-semibold mb-4">
            Pay safely with us
          </h3>
          <p className="text-lg font-regular ">
            With our secure payment gateway, you're now even more secure while
            doing online pay to book our packages. For any queries let us know.
          </p>
        </div>
        <div>
          <h3 className="text-2xl uppercase font-work font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="flex flex-col font-work text-lg font-regular">
            <Link exact to="/">
              Home
            </Link>
            <Link to="/about"> About </Link>
            <Link to="/tours"> Tours </Link>
            <Link to="/contact"> Contact </Link>
            <Link to="/login"> Login </Link>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl uppercase font-work font-semibold mb-4">
            Support
          </h3>
          <ul className="flex flex-col font-work text-lg font-regular">
            <Link to="/refund"> Refund Policy </Link>
            <Link to="/privacy"> Privacy & Policy </Link>
            <Link to="/terms"> Terms & Conditions </Link>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl uppercase font-work font-semibold mb-4">
            Contact info
          </h3>
          <ul className="flex flex-col font-work text-lg font-regular">
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:support@travo.com" className="ml-2">
                support@travo.com
              </a>
            </li>
            <li className="mt-4">
              <FontAwesomeIcon icon={faPhoneAlt} />
              <a href="tel:+91569459231" className="ml-2">
                +91 569 459 231
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container mx-auto mt-8">
      <hr className="border-t border-gray-400" />
      <p className="text-center mt-4 font-work">
        Copyright © 2021 Travo by Abdus. All Rights Reserved.{' '}
      </p>
    </div>
  </footer>
);

export default Footer;

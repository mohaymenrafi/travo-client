import {
  faMapMarker,
  faMapMarkerAlt,
  faStore,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const TourInfo = () => (
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4 py-32">
    <div className="bg-lightPaste px-8 py-12 rounded-xl flex items-center flex-col sm:flex-row">
      <div className="bg-white p-4 rounded-xl text-orange">
        <FontAwesomeIcon icon={faStore} size="2x" />
      </div>
      <div className="sm:ml-6 mt-4 text-center sm:mt-0 sm:text-left">
        <h2 className="font-work text-2xl font-medium text-semiBlack">
          Shops & Boutiques
        </h2>
        <p className="text-lg ">
          Shopping is an activity in which a customer browses the available
          goods or services presented by one or more retailers
        </p>
      </div>
    </div>
    <div className="bg-lightPaste px-8 py-12 rounded-xl flex items-center flex-col sm:flex-row">
      <div className="bg-white p-4 rounded-xl text-orange">
        <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
      </div>
      <div className="sm:ml-6 mt-4 text-center sm:mt-0 sm:text-left">
        <h2 className="font-work text-2xl font-medium text-semiBlack">
          Sightseeing
        </h2>
        <p className="text-lg ">
          Sightseeing is the activity of going to a new place and checking out
          all of the attractions and cool features of that place.
        </p>
      </div>
    </div>
    <div className="bg-lightPaste px-8 py-12 rounded-xl flex items-center flex-col sm:flex-row">
      <div className="bg-white p-4 rounded-xl text-orange">
        <FontAwesomeIcon icon={faUtensils} size="2x" />
      </div>
      <div className="sm:ml-6 mt-4 text-center sm:mt-0 sm:text-left">
        <h2 className="font-work text-2xl font-medium text-semiBlack">
          Restaurants
        </h2>
        <p className="text-lg ">
          A restaurant, or, more informally, an eatery, is a business that
          prepares and serves food and drinks to customers.
        </p>
      </div>
    </div>
  </div>
);

export default TourInfo;

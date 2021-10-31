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
    <div className="bg-lightPaste px-8 py-12 rounded-xl flex items-center">
      <div className="bg-white p-4 rounded-xl text-orange">
        <FontAwesomeIcon icon={faStore} size="2x" />
      </div>
      <div className="ml-6">
        <h2 className="font-work text-2xl font-medium text-semiBlack">
          Shops & Boutiques
        </h2>
        <p className="text-lg ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          vero.
        </p>
      </div>
    </div>
    <div className="bg-lightPaste px-8 py-12 rounded-xl flex items-center">
      <div className="bg-white p-4 rounded-xl text-orange">
        <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
      </div>
      <div className="ml-6">
        <h2 className="font-work text-2xl font-medium text-semiBlack">
          Sightseeing
        </h2>
        <p className="text-lg ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          vero.
        </p>
      </div>
    </div>
    <div className="bg-lightPaste px-8 py-12 rounded-xl flex items-center">
      <div className="bg-white p-4 rounded-xl text-orange">
        <FontAwesomeIcon icon={faUtensils} size="2x" />
      </div>
      <div className="ml-6">
        <h2 className="font-work text-2xl font-medium text-semiBlack">
          Restaurants
        </h2>
        <p className="text-lg ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          vero.
        </p>
      </div>
    </div>
  </div>
);

export default TourInfo;

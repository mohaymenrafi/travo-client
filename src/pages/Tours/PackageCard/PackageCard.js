import {
  faClock,
  faMapMarkedAlt,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

/*eslint-disable*/ 
const PackageCard = ({ tourPack }) => {
    const { name, shortDetails, duration, price, location, img, _id } = tourPack;
    /* eslint-enable */ 
  return (
    <div className="shadow-md rounded-xl flex flex-col justify-between	bg-white">
      <div>
        <img src={img} alt="" className="rounded-xl" />
        <h2 className="text-semiBlack font-work font-semibold text-2xl px-8 my-6">
          {name}
        </h2>
        <p className="px-8 text-lg mb-6">{shortDetails}</p>
      </div>
      <div>
        <div className="px-8 flex justify-between items-center mb-8">
          <Link to={`/tour-details/${_id}`}>
            <button type="button" className="default-btn-color">
              Book Now
            </button>
          </Link>
          <h3 className="text-orange font-work font-semibold text-xl">
            ${price}
          </h3>
        </div>
        <div className="flex justify-between px-8 py-6 border-t border-lightGray">
          <h3 className="text-orange text-xl font-medium font-work">
            <FontAwesomeIcon icon={faClock} /> {duration}
          </h3>
          <h3 className="text-orange text-xl font-medium font-work">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {location}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;

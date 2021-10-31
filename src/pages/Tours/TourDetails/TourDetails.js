import {
  faClock,
  faCommentDollar,
  faDollarSign,
  faHandPointRight,
  faMapMarkerAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookForm from './BookForm/BookForm';
import './TourDetails.css';

const TourDetails = () => {
  const { id } = useParams();
  const [packDetails, setPackDetails] = useState({});
  useEffect(() => {
    axios
      .get(`https://chilling-barrow-28883.herokuapp.com/packages/${id}`)
      .then((res) => setPackDetails(res.data[0]));
  }, []);
  const { name, img, duration, price, location, details } = packDetails;
  return (
    <div>
      <div className="tourDetails-header">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-white text-center text-5xl lg:text-6xl font-bold font-work py-16">
            Tour Details
          </h2>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-6xl font-abril text-semiBlack font-bold">
            {name}
          </h2>
          <div className="bg-orange px-12 py-12 rounded-xl mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-white text-center text-2xl font-work">
              <FontAwesomeIcon icon={faClock} />
              <h2>{duration} Days</h2>
            </div>
            <div className="text-white text-center text-2xl font-work">
              <FontAwesomeIcon icon={faUser} />
              <h2>18+ Age</h2>
            </div>
            <div className="text-white text-center text-2xl font-work">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <h2>{location}</h2>
            </div>
            <div className="text-white text-center text-2xl font-work">
              <FontAwesomeIcon icon={faCommentDollar} />
              <h2>${price}</h2>
            </div>
          </div>
          <div>
            <p className="text-semiBlack text-xl my-12">{details}</p>
          </div>
        </div>
        <aside>
          <h2 className="text-3xl font-abril text-semiBlack font-bold">
            <FontAwesomeIcon
              icon={faHandPointRight}
              className="text-orange mr-4"
            />
            Book This Package
          </h2>
          <BookForm tourName={name} />
        </aside>
      </div>
    </div>
  );
};

export default TourDetails;

import React from 'react';
import { Link } from 'react-router-dom';

const BookNow = () => (
  <div className="bg-paste px-4 py-32">
    <div className="container mx-auto">
      <h2 className="text-5xl md:text-6xl font-yester text-center">
        Interested?
      </h2>
      <h2 className="text-5xl md:text-6xl mt-4 font-abril text-center">
        Book your package today
      </h2>
      <Link to="/tours">
        <button type="button" className="default-btn mx-auto block mt-12">
          Book Now
        </button>
      </Link>
    </div>
  </div>
);

export default BookNow;

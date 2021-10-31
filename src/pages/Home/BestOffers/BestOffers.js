import React from 'react';
import { Link } from 'react-router-dom';
import useTourPackHome from '../../../hooks/useTourPackHome';
import PackageCard from '../../Tours/PackageCard/PackageCard';

const BestOffers = () => {
  const [tourPackages] = useTourPackHome();
  return (
    <div className="bg-lightGray">
      <div className="container mx-auto py-32 px-4">
        <h3 className="text-center font-yester text-5xl text-paste mb-4">
          Our Trending
        </h3>
        <h2 className="text-center font-abril text-6xl font-bold mb-4 text-semiBlack">
          Best Offers
        </h2>
        <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {tourPackages.map((tourPack) => (
            <PackageCard key={tourPack._id} tourPack={tourPack} />
          ))}
        </div>
        <Link to="/tours">
          <button
            type="button"
            className="default-btn-color mt-8 mx-auto block"
          >
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BestOffers;

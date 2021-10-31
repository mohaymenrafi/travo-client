import useAuth from '../../hooks/useAuth';
import useTourPackages from '../../hooks/useTourPackages';
import PackageCard from './PackageCard/PackageCard';
import './Tours.css';

const Tours = () => {
  const [tourPackages, isTourPackagesLoading] = useTourPackages();
  if (isTourPackagesLoading) {
    return (
      <div>
        <div className="h-screen w-screen z-50 flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="tour-header">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-white text-center text-5xl lg:text-6xl font-bold font-work py-16">
            Our Packages
          </h2>
        </div>
      </div>
      <div className="container mx-auto px-4 py-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {tourPackages.map((tourPack) => (
          <PackageCard key={tourPack._id} tourPack={tourPack} />
        ))}
      </div>
    </div>
  );
};

export default Tours;

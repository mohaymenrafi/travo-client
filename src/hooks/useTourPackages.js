import axios from 'axios';
import { useEffect, useState } from 'react';

const useTourPackages = () => {
  const [tourPackages, setTourPackages] = useState([]);
  const [isTourPackagesLoading, setTourPackagesLoading] = useState(true);
  useEffect(() => {
    setTourPackagesLoading(true);
    axios
      .get('https://chilling-barrow-28883.herokuapp.com/packages')
      .then((res) => setTourPackages(res.data))
      .finally(setTourPackagesLoading(false));
  }, []);
  return [tourPackages, isTourPackagesLoading];
};
export default useTourPackages;

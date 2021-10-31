import axios from 'axios';
import { useEffect, useState } from 'react';

const useTourPackHome = () => {
  const [tourPackages, setTourPackages] = useState([]);
  useEffect(() => {
    axios
      .get('https://chilling-barrow-28883.herokuapp.com/packages/home')
      .then((res) => setTourPackages(res.data));
  }, []);
  return [tourPackages];
};
export default useTourPackHome;

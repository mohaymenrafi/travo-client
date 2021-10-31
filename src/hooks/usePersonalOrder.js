import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import useAuth from './useAuth';

const usePersonalOrder = () => {
  const [personalOrder, setPersonalOrder] = useState([]);
  const { user } = useAuth();
  const email = user?.email;
  const uri = `https://chilling-barrow-28883.herokuapp.com/orders?email=${email}`;
  useEffect(() => {
    axios.get(uri).then((res) => setPersonalOrder(res.data));
    console.log(uri);
  }, []);
  return [personalOrder];
};

export default usePersonalOrder;

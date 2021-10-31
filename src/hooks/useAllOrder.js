import axios from 'axios';
import { useEffect, useState } from 'react';

const useAllOrder = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get('https://chilling-barrow-28883.herokuapp.com/orders/')
      .then((res) => setOrders(res.data));
  }, []);
  return [orders, setOrders];
};

export default useAllOrder;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllOrderCard from './AllOrderCard/AllOrderCard';

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [monitorOrders, setMonitorOrders] = useState(true);
  useEffect(() => {
    axios
      .get('https://chilling-barrow-28883.herokuapp.com/orders/')
      .then((res) => setOrders(res.data));
  }, [monitorOrders]);
  return (
    <div>
      <h2 className="text-center text-4xl font-semibold font-work">
        All Orders
      </h2>
      <div className="grid grid-cols-1 pt-8 gap-y-6">
        {orders.map((order) => (
          <AllOrderCard
            key={order._id}
            allOrder={order}
            monitorOrders={monitorOrders}
            setMonitorOrders={setMonitorOrders}
          />
        ))}
      </div>
    </div>
  );
};

export default AllOrders;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MyOrderCard from '../MyOrderCard/MyOrderCard';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
  const [personalOrder, setPersonalOrder] = useState([]);
  const [monitorDelete, setMonitorDelete] = useState(true);
  const { user } = useAuth();
  const email = user?.email;
  const uri = `https://chilling-barrow-28883.herokuapp.com/orders?email=${email}`;
  useEffect(() => {
    axios.get(uri).then((res) => setPersonalOrder(res.data));
  }, [monitorDelete]);
  return (
    <div>
      <h2 className="text-center text-4xl font-semibold font-work">
        My Orders
      </h2>
      <div className="grid grid-cols-1 pt-8 gap-y-6">
        {personalOrder.map((order) => (
          <MyOrderCard
            key={order._id}
            order={order}
            setMonitorDelete={setMonitorDelete}
            monitorDelete={monitorDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default MyOrders;

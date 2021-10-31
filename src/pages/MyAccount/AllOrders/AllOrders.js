import React from 'react';
import useAllOrder from '../../../hooks/useAllOrder';
import OrderCard from '../OrderCard/OrderCard';

const AllOrders = () => {
  const [orders, setOrders] = useAllOrder();
  return (
    <div>
      <h2 className="text-center text-4xl font-semibold font-work">
        All Orders
      </h2>
      <div className="grid grid-cols-1 pt-8 gap-y-6">
        {orders.map((order) => (
          <OrderCard key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default AllOrders;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import usePersonalOrder from '../../../hooks/usePersonalOrder';
import OrderCard from '../OrderCard/OrderCard';

const MyOrders = () => {
  const [personalOrder] = usePersonalOrder();
  return (
    <div>
      <h2 className="text-center text-4xl font-semibold font-work">
        My Orders
      </h2>
      <div className="grid grid-cols-1 pt-8 gap-y-6">
        {personalOrder.map((order) => (
          <OrderCard key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default MyOrders;

import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import AllOrders from './AllOrders/AllOrders';
import MyOrders from './MyOrders/MyOrders';

const MyAccount = () => {
  const { user } = useAuth();
  const [showOrder, setShowOrder] = useState('myOrder');
  return (
    <div className="container mx-auto px-4 py-32 grid grid-cols-1 lg:grid-cols-3 gap-16">
      <aside>
        <div className=" border border-lightGray pt-8">
          <img
            src={user?.photoURL}
            alt="Display Pic Not found"
            className="block rounded-full mx-auto"
          />
          <h2 className="text-center font-work mt-6 text-xl break-words	px-4">
            {user?.displayName}
          </h2>
          <h2 className="text-center font-work mt-2 text-xl break-words	px-4">
            {user?.email}
          </h2>
          {/* my order button  */}
          <button
            type="button"
            onClick={() => setShowOrder('myOrder')}
            className="font-semibold font-work text-2xl text-semiBlack mt-4 bg-lightGray p-6 cursor-pointer w-full text-left"
          >
            My Orders
          </button>
          {/* all order button  */}
          <button
            type="button"
            onClick={() => setShowOrder('allOrder')}
            className="font-semibold font-work text-2xl text-semiBlack mt-2 bg-lightGray p-6 cursor-pointer w-full text-left"
          >
            All Orders
          </button>
        </div>
      </aside>
      <div className="lg:col-span-2">
        {showOrder === 'myOrder' ? <MyOrders /> : <AllOrders />}
      </div>
    </div>
  );
};

export default MyAccount;

import axios from 'axios';
import React from 'react';
import useDeleteOrder from '../../../hooks/useDeleteOrder';
import './OrderCard.css';
/*eslint-disable*/
const OrderCard = ({order}) => {
  const {name, email, phone, date, numberOfTicket, _id,packageName,status  } = order;
  const handleDeleteOrder = (id) => {
    const confirmation = confirm('are you sure, you want to delete?')
    console.log(confirmation)
    if(confirmation){
      useDeleteOrder(id)
      alert('The order has been deleted!')
      window.location.reload(true);
    }  else{
      console.info('you did not confirm to delete the order!')
    }
  }
  /* eslint-enable */
  const handleStatus = (id) => {
    console.log(id);
  };
  return (
    <div className="order-card border border-lightGray rounded-xl p-6 text-semiBlack text-xl grid grid-cols-1 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <h2 className="my-2">
          <span className="font-bold text-paste">Name: </span>
          {name}
        </h2>
        <h2 className="my-2">
          <span className="font-bold text-paste">Email: </span>
          {email}
        </h2>
        <h2 className="my-2">
          <span className="font-bold text-paste">Package Name: </span>
          {packageName}
        </h2>
        <h2 className="my-2">
          <span className="font-bold text-paste">Phone: </span>
          {phone}
        </h2>
        <h2 className="my-2">
          <span className="font-bold text-paste">Date: </span>
          {date}
        </h2>
        <h2 className="my-2">
          <span className="font-bold text-paste">Tickets Booked: </span>
          {numberOfTicket}
        </h2>
        <div>
          <span className="font-bold text-paste">Order Status: </span>
          <button
            type="button"
            className="text-white px-6 py-2 rounded-sm bg-danger"
          >
            {status}
          </button>
        </div>
      </div>
      <div className="flex flex-col content-end">
        <button
          type="button"
          className="default-btn-color mt-6"
          onClick={() => handleStatus(_id)}
        >
          Approve
        </button>

        <button
          className="default-btn-color mt-6"
          type="button"
          onClick={() => handleDeleteOrder(_id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default OrderCard;

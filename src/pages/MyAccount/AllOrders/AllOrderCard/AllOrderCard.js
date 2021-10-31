import axios from 'axios';
import React from 'react';
/*eslint-disable*/
const AllOrderCard = (props) => {
    const {name,email, packageName, phone, date, numberOfTicket, status, _id} = props.allOrder; 
    const monitorOrders  =props.monitorOrders
    const setMonitorOrders = props.setMonitorOrders
    const handleDeleteOrder = (id) => {
        const confirmation = confirm('Do you want to delete this order?');
        if (confirmation) {
            const url = `https://chilling-barrow-28883.herokuapp.com/orders/${id}`;
            axios.delete(url).then((res) => {
                if (res.data.deletedCount) {
                    console.log(res.data.deletedCount);
                    alert('Your order has been deleted');
                    setMonitorOrders(!monitorOrders);
                }
            });
        }
    };
    const handlePendingOrders = (id) => {
        const confirmation = confirm('Do you want to approve the order?')
        /* eslint-enable */
    if (confirmation) {
      const url = `https://chilling-barrow-28883.herokuapp.com/orders/${id}`;
      axios
        .put(url, {
          status: 'approved',
        })
        .then((res) => {
          if (res.data.modifiedCount) {
            alert('The Order is approved');
            setMonitorOrders(!monitorOrders);
          }
        });
    }
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
      </div>
      <div className="flex flex-col content-end justify-center">
        <div>
          <h2 className="text-center font-work font-semibold text-2xl">
            Order Status
          </h2>
          <h2
            className={`${
              status === 'pending' ? 'bg-danger ' : 'bg-paste '
            }text-center font-work font-semibold text-white p-2 rounded mt-2 capitalize`}
          >
            {status}
          </h2>
        </div>

        {status === 'pending' ? (
          <button
            className="default-btn-color mt-6"
            type="button"
            onClick={() => handlePendingOrders(_id)}
          >
            Approve
          </button>
        ) : (
          ''
        )}
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

export default AllOrderCard;

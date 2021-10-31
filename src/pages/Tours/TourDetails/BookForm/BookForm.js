import React from 'react';
import './BookForm.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAuth from '../../../../hooks/useAuth';
/*eslint-disable*/
const BookForm = ({ tourName }) => {
  /* eslint-enable */
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post('https://chilling-barrow-28883.herokuapp.com/orders', data)
      .then((res) => {
        if (res.data.insertedId) {
          alert(
            'we have received your booking request. We will reach you soon'
          );
        } else {
          alert(
            'something went wrong, please contact website owner via email to place booking'
          );
        }
      })
      .catch((error) => console.error(error));
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="book-form">
        <input
          defaultValue={user?.displayName ? user.displayName : ''}
          placeholder="Name"
          {...register('name')}
        />
        <input
          defaultValue={user?.email ? user.email : ''}
          placeholder="Email"
          type="email"
          {...register('email', { required: true })}
        />
        <input
          value={tourName}
          placeholder="Package Name"
          type="text"
          {...register('packageName')}
        />
        <input type="number" {...register('phone')} placeholder="Phone" />
        <input type="date" {...register('date')} placeholder="Date" />
        <input
          {...register('numberOfTicket', { min: 1, max: 15, required: true })}
          placeholder="Number of Ticket (Max 15)"
          type="number"
        />
        <input
          type="hidden"
          value="pending"
          {...register('status')}
          placeholder="Phone"
        />
        <input
          type="submit"
          className="default-btn-color cursor-pointer"
          value="Book Now"
        />
      </form>
    </div>
  );
};

export default BookForm;

import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddAPackage.css';

const AddAPackage = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post('https://chilling-barrow-28883.herokuapp.com/packages', data)
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };
  return (
    <div className="bg-lightGray px-4 py-16">
      <h2 className="text-5xl md:text-6xl font-work font-bold text-semiBlack text-center">
        Fill in the Details
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="add-form md:w-10/12 mx-auto bg-paste px-4 md:px-16 lg:w-7/12 py-16"
      >
        <input type="text" {...register('name')} placeholder="Place Name" />
        <input type="text" {...register('duration')} placeholder="Duration" />
        <input type="text" {...register('price')} placeholder="Price" />
        <input type="text" {...register('location')} placeholder="Location" />
        <input type="text" {...register('img')} placeholder="Image Url" />
        <textarea
          type="text"
          rows="3"
          {...register('shortDetails')}
          placeholder="Short info"
        />
        <textarea
          type="text"
          rows="6"
          {...register('details')}
          placeholder="Details"
        />
        <input type="submit" className="default-btn cursor-pointer" />
      </form>
    </div>
  );
};

export default AddAPackage;

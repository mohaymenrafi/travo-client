import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import mapImage from '../../images/contact-map-image.jpg';

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="contact">
      <div className="contact-header">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-white text-center text-5xl lg:text-6xl font-bold font-work py-16">
            Contact Us
          </h2>
        </div>
      </div>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 py-16 items-center">
        <div>
          <h3 className="font-yester text-3xl md:text-5xl text-paste mb-4">
            Community
          </h3>
          <h2 className="font-abril text-5xl md:text-6xl font-bold mb-4 text-semiBlack">
            Contact Us
          </h2>
          <p className="text-lg font-work text-semiblack mt-4">
            Many of the destinations are out of the way and there maybe limited
            coverage so Intrepid cannot guarantee your phone will work as
            desired. Contact your phone provider before you leave about global
            roaming and the costs involved, and get their advice on the coverage
            you’ll receive in the places you’re travelling in.
          </p>
          <Link to="/tours">
            <button type="button" className="default-btn-color mt-8">
              Book Now
            </button>
          </Link>
        </div>
        <div>
          <img src={mapImage} alt="" className="rounded-lg" />
        </div>
      </div>
      {/* form  */}
      <div className="bg-lightGray">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-center font-abril font-bold md:text-7xl text-5xl text-semiBlack mb-12">
            Leave Your Comment
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="contact-form md:w-10/12 lg:w-7/12 mx-auto"
          >
            <input
              placeholder="Name"
              {...register('name', { maxLength: 20 })}
            />
            <input
              placeholder="Email"
              {...register('email', { required: true })}
            />
            <textarea
              placeholder="Enter your comment here"
              rows="5"
              {...register('age', { min: 18, max: 99 })}
            />
            <input type="submit" className="default-btn-color" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

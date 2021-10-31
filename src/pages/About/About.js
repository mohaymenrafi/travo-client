import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faFile,
  faMoneyBillWave,
} from '@fortawesome/free-solid-svg-icons';
import groupImg from '../../images/about-sec.jpg';
import tarra from '../../images/Tarra.jpg';
import barcelona from '../../images/barcelona.jpg';
import tainan from '../../images/tainan.jpg';
import ubud from '../../images/ubud.jpg';
import kao from '../../images/kao.jpg';
import semi from '../../images/semi.jpg';
import whyus from '../../images/why-us.jpg';

const About = () => (
  <div className="about">
    <div className="about-header">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-white text-center text-5xl lg:text-6xl font-bold font-work py-16">
          About Us
        </h2>
      </div>
    </div>
    {/* ------popoular tours----- */}
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 py-16 items-center">
      <div>
        <h3 className="font-yester text-3xl md:text-5xl text-paste mb-4">
          Our Most
        </h3>
        <h2 className="font-abril text-5xl md:text-6xl font-bold mb-4 text-semiBlack">
          Popular Tours
        </h2>
        <p className="text-lg font-work text-semiblack mt-4">
          Travo has come a long way since then, now giving over 100,000
          travelers a year the opportunity to experience small group travel
          across all 7 continents. They use local transport, sleep in local
          accommodation from Cambodian stilt houses to Moroccan riads, and
          employ 100% local leaders. With three different adventure styles
          including basix, original and comfort, themes ranging from cycling
          trips to family holidays, and itineraries crafted with the perfect
          balance of must-see sights and free time, Travo caters to every type
          of traveller no matter their age, budget or adventure style.
        </p>
        <Link to="/tours">
          <button type="button" className="default-btn-color mt-8">
            Book Now
          </button>
        </Link>
      </div>
      <div>
        <img src={groupImg} alt="" className="rounded-lg" />
      </div>
    </div>
    {/* ------images seciton----- */}
    <div className="bg-lightBg">
      <div className="container mx-auto px-4 py-32 grid grid-cols-1 md:grid-cols-4 gap-6 justify-items-stretch 	">
        <img src={tarra} alt="" className="h-full rounded-3xl" />
        <img src={barcelona} alt="" className="h-full rounded-3xl" />
        <img src={tainan} className="row-span-2 rounded-3xl" alt="" />
        <img src={ubud} className="row-span-2 rounded-3xl" alt="" />
        <img src={kao} alt="" className="h-full rounded-3xl" />
        <img src={semi} alt="" className="h-full rounded-3xl" />
      </div>
    </div>
    {/* ------why choose us----- */}
    <div className="choose-us">
      <div className="container mx-auto px-4 py-32 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="font-yester text-3xl md:text-5xl text-paste mb-4">
            Why
          </h3>
          <h2 className="font-abril text-5xl md:text-6xl font-bold mb-4 text-semiBlack">
            Choose Us
          </h2>
          <div className="mt-12">
            <div className="flex items-center my-8">
              <FontAwesomeIcon
                icon={faMoneyBillWave}
                size="2x"
                color="#25bdc1"
              />
              <span className="uppercase font-medium font-work text-xl ml-4">
                booking with spread payments
              </span>
            </div>
            <div className="flex items-center my-8">
              <FontAwesomeIcon icon={faFile} size="2x" color="#25bdc1" />
              <span className="uppercase font-medium font-work text-xl ml-8">
                fully licensed tour operator
              </span>
            </div>
            <div className="flex items-center my-8">
              <FontAwesomeIcon icon={faBed} size="2x" color="#25bdc1" />
              <span className="uppercase font-medium font-work text-xl ml-4">
                Sleep & Travel in comform
              </span>
            </div>
          </div>
        </div>
        <div>
          <img src={whyus} alt="" className="rounded-xl" />
        </div>
      </div>
    </div>
  </div>
);

export default About;

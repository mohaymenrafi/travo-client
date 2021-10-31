import React from 'react';
import aboutImg from '../../../images/home-about.jpg';

const WhyUs = () => (
  <div className="bg-lightGray">
    <div className="container mx-auto py-32 px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <img src={aboutImg} alt="" className="rounded-xl" />
      </div>
      <div>
        <h3 className=" font-yester text-3xl md:text-5xl text-paste mb-4">
          a few words
        </h3>
        <h2 className=" font-abril text-5xl md:text-6xl font-bold mb-4 text-semiBlack">
          About Us
        </h2>
        <p className="text-lg">
          Back in 1989, two guys from Melbourne, Australia by the names of
          Darrell and Manch set off on an adventure to the other side of the
          world. They travelled to Africa and without air conditioning on their
          modified truck, they filled it with supplies, some beer, a bunch of
          aviator sunglasses, and some friends. On that adventure, they came up
          with the idea that perhaps others may be interested in this style of
          travel too. Just like that, Travo was born.
          <br /> <br />
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
      </div>
    </div>
  </div>
);

export default WhyUs;

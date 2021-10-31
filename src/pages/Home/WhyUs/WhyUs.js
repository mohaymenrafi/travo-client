import React from 'react';
import aboutImg from '../../../images/home-about.jpg';

const WhyUs = () => (
  <div className="bg-lightGray">
    <div className="container mx-auto py-32 px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <img src={aboutImg} alt="" className="rounded-xl" />
      </div>
      <div>
        <h3 className=" font-yester text-5xl text-paste mb-4">a few words</h3>
        <h2 className=" font-abril text-6xl font-bold mb-4 text-semiBlack">
          About Us
        </h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          aut hic, libero, labore quae error delectus recusandae magni in minus
          animi accusamus eum. Eveniet quam blanditiis harum quas asperiores
          libero atque, iusto excepturi commodi nesciunt!
          <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          aut hic, libero, labore quae error delectus recusandae magni in minus
          animi accusamus eum. Eveniet quam blanditiis harum quas asperiores
          libero atque, iusto excepturi commodi nesciunt!
          <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          aut hic, libero, labore quae error delectus recusandae magni in minus
          animi accusamus eum. Eveniet quam blanditiis harum quas asperiores
          libero atque, iusto excepturi commodi nesciunt!
        </p>
      </div>
    </div>
  </div>
);

export default WhyUs;

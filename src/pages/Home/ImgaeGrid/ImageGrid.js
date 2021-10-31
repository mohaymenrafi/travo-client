import React from 'react';
import img1 from '../../../images/spain.png';
import img2 from '../../../images/tarragona.jpg';
import img3 from '../../../images/barcelona-2.jpg';
import img4 from '../../../images/semi-2.jpg';
import img5 from '../../../images/denpasar.jpg';
import img6 from '../../../images/bali.png';

const ImageGrid = () => (
  <div>
    <div className="container mx-auto my-24 md:my-32 px-4">
      <h3 className="font-yester text-3xl md:text-5xl text-paste mb-4">
        Choose Your
      </h3>
      <h2 className="font-abril text-5xl md:text-6xl font-bold mb-4 text-semiBlack">
        Perfect Holiday
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center mt-16">
        <img src={img1} alt="" className="rounded-xl" />
        <img src={img2} alt="" className="rounded-xl" />
        <img src={img3} alt="" className="rounded-xl" />
        <img src={img4} alt="" className="rounded-xl" />
        <img src={img5} alt="" className="rounded-xl" />
        <img src={img6} alt="" className="rounded-xl" />
      </div>
    </div>
  </div>
);

export default ImageGrid;

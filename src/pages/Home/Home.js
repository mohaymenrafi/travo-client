import React from 'react';
import './Home.css';
import Banner from './Banner/Banner';
import ImageGrid from './ImgaeGrid/ImageGrid';
import BestOffers from './BestOffers/BestOffers';
import TourInfo from './TourInfo/TourInfo';
import WhyUs from './WhyUs/WhyUs';
import BookNow from './BookNow/BookNow';

const Home = () => (
  <div>
    <Banner />
    <ImageGrid />
    <BestOffers />
    <TourInfo />
    <WhyUs />
    <BookNow />
  </div>
);

export default Home;

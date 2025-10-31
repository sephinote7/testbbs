import React from 'react';
import { Link } from 'react-router-dom';
import SwiperComp from '../../components/layout/SwiperComp';

function HomeComp() {
  return (
    <div>
      <SwiperComp></SwiperComp>;<h1 className="text-center py-3">Home</h1>;
    </div>
  );
}

export default HomeComp;

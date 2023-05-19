import React from 'react';

import img1 from '../../assets/edu-toy-1.jpg'
import img2 from '../../assets/edu-toy-2.jpg'
import img3 from '../../assets/edu-toy-3.jpg'

const HomeBanner = () => {


  return (
    <div className="carousel w-full bg-slate-400 py-4 ">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-[100vw] h-[60vh]" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      <div className=" absolute top-8 carousel-caption">
          
          <p>Engage your child's curiosity with this interactive educational toy. It promotes learning through play and enhances cognitive development.</p>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-[100vw] h-[60vh]" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
       <div className=" absolute top-8 carousel-caption">
          
          <p>Spark your child's creativity with this hands-on educational toy. It encourages imagination and fine motor skill development.</p>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-[100vw] h-[60vh]" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
        <div className=" left-4 absolute top-4 font-bold text-3xl text-zinc-700 carousel-caption">
          
          <p>Explore the wonders of science <br /> with this educational toy kit. <br /> It provides hands-on experiments  <br /> and encourages STEM learning.</p>
        </div>
      </div> 
    </div>
  );
};

export default HomeBanner;

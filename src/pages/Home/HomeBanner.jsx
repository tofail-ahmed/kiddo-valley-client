import React from 'react';

import img1 from '../../assets/home-banner-1.jpg'
import img3 from '../../assets/home-banner-2.jpg'
import img2 from '../../assets/home-banner-3.jpg'
import { Link } from 'react-router-dom';

const HomeBanner = () => {


  return (
    <div className="carousel w-full bg-slate-400 py-4 my-8 ">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-[100vw] h-[60vh]" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
        <div className=" left-[30vw] absolute top-[10vh]   text-fuchsia-600 font-bold text-3xl carousel-caption">
          
          <p>Engage your child's curiosity <br /> with this interactive educational toy. <br /> It promotes learning through play and <br /> enhances cognitive development.</p>
          <p><Link  className='btn btn-info' to={'/alltoys'}>Explore</Link></p>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-[100vw] h-[60vh]" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
        <div className=" left-[30vw] absolute top-[5vh]   text-rose-400 font-bold text-3xl carousel-caption">
          
          <p>Spark your child's creativity <br /> with this hands-on educational toy. <br /> It encourages imagination and <br /> fine motor skill development.</p>
          <p><Link  className='btn btn-info' to={'/alltoys'}>Explore</Link></p>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-[100vw] h-[60vh]" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
        <div className=" left-[30vw] absolute top-[10vh]   text-fuchsia-600 font-bold text-3xl carousel-caption">
          
          <p>Explore the wonders of science <br /> with this educational toy kit. <br /> It provides hands-on experiments  <br /> and encourages STEM learning.</p>
        <p><Link  className='btn btn-info' to={'/alltoys'}>Explore</Link></p>
        </div>
      </div> 
    </div>
  );
};

export default HomeBanner;

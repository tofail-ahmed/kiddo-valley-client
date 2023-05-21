import React from 'react';
import img1 from '../../assets/gallery/gallery-1.jpg'
import img2 from '../../assets/gallery/gallery-2.jpg'
import img3 from '../../assets/gallery/gallery-3.jpg'
import img4 from '../../assets/gallery/gallery-4.jpg'
import img5 from '../../assets/gallery/gallery-5.jpg'
import img6 from '../../assets/gallery/gallery-6.jpg'
import { Link } from 'react-router-dom';

const HomeGallery = () => {
  return (
    <div className="grid grid-cols-1 bg-slate-600 p-4   md:grid-cols-2 gap-4 md:w-1/2">
      <div className="gallery-item border-4 rounded">
        <img src={img1} alt="Gallery Image 1" className="w-[50vw] h-[50vh]" />
        <div className="gallery-caption p-2">
          
        <p className="text-md font-semibold text-zinc-200">A baby who is playing is a happy one.</p>
          <p><Link  className='btn btn-info ' to={'/alltoys'}>Explore More</Link></p>
        </div>
      </div>
      <div className="gallery-item border-4 rounded">
        <img src={img2} alt="Gallery Image 2" className="w-[50vw] h-[50vh]" />
        <div className="gallery-caption p-2">
          
        <p className="text-md font-semibold text-zinc-200">We make your kid’s dream world a reality.</p>
          <p><Link  className='btn btn-info' to={'/alltoys'}>Explore More</Link></p>
        </div>
      </div>
      <div className="gallery-item border-4 rounded">
        <img src={img3} alt="Gallery Image 3" className="w-[50vw] h-[50vh]" />
        <div className="gallery-caption p-2">
          
        <p className="text-md font-semibold text-zinc-200">The joy toys bring us is too great.</p>
          <p><Link  className='btn btn-info' to={'/alltoys'}>Explore More</Link></p>
        </div>
      </div>
      <div className="gallery-item border-4 rounded">
        <img src={img4} alt="Gallery Image 2" className="w-[50vw] h-[50vh]" />
        <div className="gallery-caption p-2">
         
        <p className="text-md font-semibold text-zinc-200">You can never be too old to play with toys.</p>
          <p><Link  className='btn btn-info' to={'/alltoys'}>Explore More</Link></p>
        </div>
      </div>
      <div className="gallery-item border-4 rounded">
        <img src={img5} alt="Gallery Image 3" className="w-[50vw] h-[50vh]" />
        <div className="gallery-caption p-2">
         
        <p className="text-md font-semibold text-zinc-200">Moments of joy your whole family will cherish.</p>
          <p><Link  className='btn btn-info' to={'/alltoys'}>Explore More</Link></p>
        </div>
      </div>
      <div className="gallery-item border-4 rounded">
        <img  src={img6} alt="Gallery Image 4" className="w-[50vw] h-[50vh]" />
        <div className="gallery-caption p-2">
          
          <p className="text-md font-semibold text-zinc-200">Your passion for toys makes us make better toys. 4</p>
          <p><Link  className='btn btn-info' to={'/alltoys'}>Explore More</Link></p>
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;

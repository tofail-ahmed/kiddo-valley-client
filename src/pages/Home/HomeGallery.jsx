import React from 'react';
import img1 from '../../assets/edu-toy-1.jpg'
import img2 from '../../assets/edu-toy-2.jpg'
import img3 from '../../assets/edu-toy-3.jpg'

const HomeGallery = () => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 gap-4 my-8 md:w-1/2">
      <div className="gallery-item border-4 rounded">
        <img src={img1} alt="Gallery Image 1" className="w-[50vw] h-[50vh]" />
        <div className="gallery-caption p-2">
          <h3 className="text-lg font-semibold">Image 1</h3>
          <p className="text-sm">Description of Image 1</p>
        </div>
      </div>
      <div className="gallery-item border-4 rounded">
        <img src={img2} alt="Gallery Image 2" className="w-[50vw] h-[50vh]" />
        <div className="gallery-caption p-2">
          <h3 className="text-lg font-semibold">Image 2</h3>
          <p className="text-sm">Description of Image 2</p>
        </div>
      </div>
      <div className="gallery-item border-4 rounded">
        <img src={img3} alt="Gallery Image 3" className="w-[50vw] h-[50vh]" />
        <div className="gallery-caption p-2">
          <h3 className="text-lg font-semibold">Image 3</h3>
          <p className="text-sm">Description of Image 3</p>
        </div>
      </div>
      <div className="gallery-item border-4 rounded">
        <img src={img2} alt="Gallery Image 2" className="w-[50vw] h-[50vh]" />
        <div className="gallery-caption p-2">
          <h3 className="text-lg font-semibold">Image 2</h3>
          <p className="text-sm">Description of Image 2</p>
        </div>
      </div>
      <div className="gallery-item border-4 rounded">
        <img src={img3} alt="Gallery Image 3" className="w-[50vw] h-[50vh]" />
        <div className="gallery-caption p-2">
          <h3 className="text-lg font-semibold">Image 3</h3>
          <p className="text-sm">Description of Image 3</p>
        </div>
      </div>
      <div className="gallery-item border-4 rounded">
        <img  src={img1} alt="Gallery Image 4" className="w-[50vw] h-[50vh]" />
        <div className="gallery-caption p-2">
          <h3 className="text-lg font-semibold">Image 4</h3>
          <p className="text-sm">Description of Image 4</p>
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;

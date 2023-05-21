import React from 'react';
import img1 from '../../assets/edu-fun/learningisfun-1.webp'
import img2 from '../../assets/edu-fun/learningisfun-2.webp'
import img3 from '../../assets/edu-fun/learningisfun-3.webp'
import { Link } from 'react-router-dom';


const Education = () => {
      return (
            <section className="bg-slate-400 py-16 md:w-1/2">
            <div className="container mx-auto px-4">
              <div className='md:flex'>
                <img className='md:w-[13vw] m-2' src={img1} alt="" />
                <img className='md:w-[13vw] m-2' src={img2} alt="" />
                <img className='md:w-[13vw] m-2' src={img3} alt="" />
              </div>
              <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-green-200 py-4 px-6">
                  <h2 className="text-3xl font-bold text-white">Education Made Fun</h2>
                </div>
                <div className="py-8 px-6">
                  <p className="text-gray-700">
                    Unlock the power of learning! Our educational toy brings together entertainment and knowledge, making education an enjoyable journey.
                  </p>
                </div>
                <div className="flex justify-center pb-8">
                  <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full focus:outline-none">
                  <p><Link  className='btn btn-info' to={'/alltoys'}>Explore</Link></p>
                  </button>
                </div>
              </div>
            </div>
          </section>
      );
};

export default Education;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img3 from '../../assets/gallery/gallery-1.jpg'
import img1 from '../../assets/gallery/gallery-2.jpg'
import img2 from '../../assets/gallery/gallery-3.jpg'

const Aos = () => {
      useEffect(() => {
            AOS.init({
                  duration: 1800, // Duration of animation in milliseconds (default: 1000)
                  easing: 'ease-out', // Easing function for animation (default: 'ease')
                  //   once: true, // Whether animation should only happen once (default: false)
                  mirror: false, // Whether elements should animate out while scrolling past them (default: false)
            });
      }, []);

      return (
            <div className='md:flex'>
                  <div>
                        <h1 data-aos="fade-up">Welcome to My Website</h1>
                        <img src={img1} alt="Example" data-aos="slide-left" />
                       
                  </div>
                  <div>
                        <h1 data-aos="fade-up">Welcome to My Website</h1>
                        <img src={img2} alt="Example" data-aos="zoom-in" />
                        
                  </div>
                  <div>
                        <h1 data-aos="fade-up">Welcome to My Website</h1>
                        <img src={img3} alt="Example" data-aos="slide-right" />
                       
                  </div>
            </div>
      );
};

export default Aos;
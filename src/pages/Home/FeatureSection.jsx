import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const FeatureSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1800, // Duration of animation in milliseconds (default: 1000)
      easing: 'ease-out', // Easing function for animation (default: 'ease')
      //   once: true, // Whether animation should only happen once (default: false)
      mirror: false, // Whether elements should animate out while scrolling past them (default: false)
    });
  }, []);
  return (
    <section className="bg-zinc-500 py-16" data-aos="slide-right">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Features That Inspire</h2>
          <p className="text-gray-300 mb-8">
            Discover the amazing features of our educational toy that will ignite curiosity and foster learning in an engaging way.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-purple-700 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Interactive Learning</h3>
              <p className="text-gray-300">
                Dive into interactive lessons, quizzes, and games that make learning a joyful experience.
              </p>
            </div>
            <div className="bg-purple-700 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Creative Exploration</h3>
              <p className="text-gray-300">
                Encourage creativity through hands-on activities, art projects, and problem-solving challenges.
              </p>
            </div>
            <div className="bg-purple-700 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Personalized Progress</h3>
              <p className="text-gray-300">
                Track individual progress, set goals, and unlock achievements to celebrate learning milestones.
              </p>
            </div>
            <div className="bg-purple-700 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Safe and Engaging</h3>
              <p className="text-gray-300">
                Ensuring a safe and immersive learning environment that keeps children motivated and engaged.
              </p>
            </div>
            <><Link className='btn btn-active' to={"/blog"}>See More</Link></>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

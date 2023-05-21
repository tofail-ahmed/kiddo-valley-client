import React from 'react';

const FeatureSection = () => {
  return (
    <section className="bg-purple-800 py-16">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

import React from 'react';
import DynamicTitle from '../../DynamicTitle/DynamicTitle';
import HomeBanner from './HomeBanner';
import HomeGallery from './HomeGallery';
import SubCategory from './SubCategory';
import Education from './Education';
import FeatureSection from './FeatureSection';

const Home = () => {
      const pageTitle='Kiddo_Valley-Home'
      return (
            <div>
                   <DynamicTitle title={pageTitle} />
                  <h2>This is Home</h2>
                  <HomeBanner></HomeBanner>
                 <div className='md:flex gap-4'>
                 <HomeGallery></HomeGallery>
                  <SubCategory></SubCategory>
                 </div>
                  <div className='md:flex gap-4'>
                 <Education></Education>
                        <FeatureSection></FeatureSection>
                  </div>
            </div>
      );
};

export default Home;
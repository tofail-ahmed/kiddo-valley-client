import React from 'react';
import DynamicTitle from '../../DynamicTitle/DynamicTitle';
import HomeBanner from './HomeBanner';
import HomeGallery from './HomeGallery';

const Home = () => {
      const pageTitle='Kiddo_Valley-Home'
      return (
            <div>
                   <DynamicTitle title={pageTitle} />
                  <h2>This is Home</h2>
                  <HomeBanner></HomeBanner>
                  <HomeGallery></HomeGallery>
            </div>
      );
};

export default Home;
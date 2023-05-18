import React from 'react';
import DynamicTitle from '../../DynamicTitle/DynamicTitle';

const Home = () => {
      const pageTitle='Kiddo_Valley-Home'
      return (
            <div>
                   <DynamicTitle title={pageTitle} />
                  <h2>This is Home</h2>
            </div>
      );
};

export default Home;
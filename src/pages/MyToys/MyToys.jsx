import React from 'react';
import DynamicTitle from '../../DynamicTitle/DynamicTitle';

const MyToys = () => {
      const pageTitle='Kiddo_Valley-MyToys'
      return (
            <div>
                   <DynamicTitle title={pageTitle} />
                  <h2>this is my toys</h2>
            </div>
      );
};

export default MyToys;
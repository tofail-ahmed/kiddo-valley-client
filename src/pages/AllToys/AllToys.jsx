import React from 'react';
import DynamicTitle from '../../DynamicTitle/DynamicTitle';

const AllToys = () => {
      const pageTitle='Kiddo_Valley-AllToys'
      return (
            <div>
                  <DynamicTitle title={pageTitle} />
                  <h2>This is all toys</h2>
            </div>
      );
};

export default AllToys;
import React from 'react';
import DynamicTitle from '../../DynamicTitle/DynamicTitle';

const AddToy = () => {
      const pageTitle='Kiddo_Valley-AddToys'
      return (
            <div>
                   <DynamicTitle title={pageTitle} />
                  <h2>This is add a toy</h2>
            </div>
      );
};

export default AddToy;
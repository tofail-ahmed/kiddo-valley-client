import React from 'react';
import DynamicTitle from '../../DynamicTitle/DynamicTitle';

const NotFound = () => {
      const pageTitle='Kiddo_Valley-ERROR:404'
      return (
            <div>
                  
                   <DynamicTitle title={pageTitle} />
                  <h3>This is 404 error</h3>
            </div>
      );
};

export default NotFound;
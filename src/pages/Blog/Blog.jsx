import React from 'react';
import DynamicTitle from '../../DynamicTitle/DynamicTitle';

const Blog = () => {
      const pageTitle='Kiddo_Valley-Blog'
      return (
            <div>
                   <DynamicTitle title={pageTitle} />
                  <h3>this is blog</h3>
            </div>
      );
};

export default Blog;
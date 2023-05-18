import React from 'react';
import DynamicTitle from '../../DynamicTitle/DynamicTitle';

const SignUp = () => {
      const pageTitle='Kiddo_Valley-SignUp'
      return (
            <div>
                   <DynamicTitle title={pageTitle} />
                  <h2>This is SignUp</h2>
            </div>
      );
};

export default SignUp;
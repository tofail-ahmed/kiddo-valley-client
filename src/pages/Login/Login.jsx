import React from 'react';
import { Link } from 'react-router-dom';
import DynamicTitle from '../../DynamicTitle/DynamicTitle';

const Login = () => {

      const pageTitle = 'Kiddo_Valley-Login';




      return (
            <div>
                  <DynamicTitle title={pageTitle} />
                  <h2>This is login</h2>
                  <Link to={'/signup'}>SignUp</Link>
            </div>
      );
};

export default Login;
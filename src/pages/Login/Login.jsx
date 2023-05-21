import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import DynamicTitle from '../../DynamicTitle/DynamicTitle';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
      const { signIn } = useContext(AuthContext)
      const pageTitle = 'Kiddo_Valley-Login';

      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const navigate = useNavigate()
      const location = useLocation()
      console.log(location)

      const from = location.state?.from?.pathname || '/'


      const handleLogin = (e) => {
            e.preventDefault();

            // Log the values in the console

            console.log('Email:', email);
            console.log('Password:', password);


            // Reset the form

            setEmail('');
            setPassword('');


            signIn(email,password)
            .then(result=>{
                  console.log(result.user);
                 
                  navigate(from, { replace: true })
            })
            .then(error=>{
                  console.log(error.message);
            })

      };




      return (
            <div>
                  <DynamicTitle title={pageTitle} />
                  <div className="flex items-center justify-center min-h-screen bg-gray-100">
                        <div className="bg-white shadow-md rounded-md p-8">
                              <h2 className="text-2xl font-bold mb-4">Sign up</h2>
                              <form onSubmit={handleLogin}>

                                    <div className="mb-4">
                                          <label htmlFor="email" className="block font-medium mb-1">Email</label>
                                          <input
                                                type="email"
                                                id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                          />
                                    </div>
                                    <div className="mb-4">
                                          <label htmlFor="password" className="block font-medium mb-1">Password</label>
                                          <input
                                                type="password"
                                                id="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                          />
                                    </div>


                                    <button type="submit" className="bg-blue-500 text-white rounded-md py-2 px-4">Login</button>

                              </form>
                              <p>Haven't any account?<Link className='text-blue-700 font-bold' to={'/signup'}>SignUp</Link></p>
                        </div>
                  </div>
            </div>
      );
};

export default Login;
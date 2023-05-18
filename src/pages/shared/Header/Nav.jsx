import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
      return (
            <div className='lg:flex' >
                  <Link className='text-md font-bold' to={'/'}>Home  </Link>
                  <Link className='text-md font-bold' to={'/alltoys'}>  All toys  </Link>
                  <Link className='text-md font-bold' to={'/blog'}>  Blog  </Link>
                  <Link className='text-md font-bold' to={'/addtoys'}>  Add toys  </Link>
                  <Link className='text-md font-bold' to={'/mytoys'}>  My toys   </Link>
                  <Link className='text-md font-bold' to={'/login'}>  Login   </Link>
            </div>
      );
};

export default Nav;
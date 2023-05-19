import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import logo from '../../../assets/Valley.png'
import { AuthContext } from '../../../Providers/AuthProvider';
import ActiveLink from '../../../ActiveLink/ActiveLink';

const Header = () => {

      const { user, logOut } = useContext(AuthContext)


      console.log(user);

      const handleLogout = () => {
            logOut()
                  .then(() => { })
                  .catch(error => console.log(error))

      }



      return (
            <div className='border-4' >


                  <div className="navbar bg-base-100">
                        <div className="navbar-start">
                              <div className="dropdown">
                                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                                          <li><Link className='text-md font-bold' to={'/'}>Home  </Link></li>
                                          <li><Link className='text-md font-bold' to={'/alltoys'}>  All toys  </Link></li>
                                          <li><Link className='text-md font-bold' to={'/blog'}>  Blog  </Link></li>
                                          <li><Link className='text-md font-bold' to={'/addtoys'}>  Add toys  </Link></li>
                                          <li><Link className='text-md font-bold' to={'/mytoys'}>  My toys   </Link></li>
                                          {/* <li> <Link className='text-md font-bold' to={'/login'}>  Login   </Link></li> */}
                                    </ul>
                              </div>
                             <Link className='w-1/6' to={'/'}> <  img src={logo} alt="" /></Link>
                             <Link to={'/'}> <a className="btn btn-ghost normal-case text-xl" >daisyUI</a></Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                              <ul className="menu menu-horizontal px-1">
                                    <li><ActiveLink className='text-md font-bold' to={'/'}>Home  </ActiveLink></li>
                                    <li><ActiveLink className='text-md font-bold' to={'/alltoys'}>  All toys  </ActiveLink></li>
                                    <li><ActiveLink className='text-md font-bold' to={'/blog'}>  Blog  </ActiveLink></li>
                                    <li><ActiveLink className='text-md font-bold' to={'/addtoys'}>  Add toys  </ActiveLink></li>
                                    <li><ActiveLink className='text-md font-bold' to={'/mytoys'}>  My toys   </ActiveLink></li>
                                    
                              </ul>
                        </div>
                        <div className="navbar-end">



                              {
                                    user ? <>

                                          <img className='w-[50px] border-4 me-4' style={{ borderRadius: "50%", height: "50px" }} title={user.displayName} src={user.photoURL} />

                                          <button className='btn btn-error' onClick={handleLogout}>LogOut</button>
                                    </>
                                          : <ActiveLink className='text-md font-bold btn btn-info' to={'/login'}>  Login   </ActiveLink>
                              }
                        </div>
                  </div>
            </div>

      );
};

export default Header;
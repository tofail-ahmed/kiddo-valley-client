import React from 'react';
import Header from '../pages/shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import Home from '../pages/Home/Home';
import { ToastContainer } from 'react-toastify';

const Main = () => {
      return (
            <div className='mx-8'>
                  <Header></Header>
                  
                  <ToastContainer />
                  <Outlet></Outlet>
                  <Footer></Footer>
            </div>
      );
};

export default Main;
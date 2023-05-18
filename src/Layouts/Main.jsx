import React from 'react';
import Header from '../pages/shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';

const Main = () => {
      return (
            <div>
                  <Header></Header>
                  <h2>This is main content body</h2>
                  <Outlet></Outlet>
                  <Footer></Footer>
            </div>
      );
};

export default Main;
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layouts/Main.jsx';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import Blog from './pages/Blog/Blog.jsx';
import AllToys from './pages/AllToys/AllToys.jsx';
import AddToy from './pages/AddToy/AddToy.jsx';
import MyToys from './pages/MyToys/MyToys.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import ToyDetails from './pages/AllToys/ToyDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },{
        path:'/blog',
        element:<Blog></Blog>
      },{
        path:'/alltoys',
        element:<AllToys></AllToys>
      },{

        path:'/:id',
        element:<ToyDetails></ToyDetails>,
        loader:({params})=>fetch(`http://localhost:5000/allToys/${params.id}`)
      },
      {
        path:'/addtoys',
        element:<AddToy></AddToy>
      },{
        path:'/mytoys',
        element:<MyToys></MyToys>
      }
    ],
    
  },
  {
    path:'/*',
    element:<NotFound></NotFound>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

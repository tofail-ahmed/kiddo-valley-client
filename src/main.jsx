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
import UpdateToy from './pages/MyToys/UpdateToy.jsx';
import Details from './pages/Home/Details.jsx';
import PrivateRoute from './pages/AddToy/routes/PrivateRoute.jsx';
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
        element:<AllToys></AllToys>,
        loader:()=>fetch('https://kiddo-valley-server.vercel.app/totalToys')
      },{

        path:'/:id',
        element:<ToyDetails></ToyDetails>,
        loader: ({ params }) => fetch(`https://kiddo-valley-server.vercel.app/allToys/${params.id}`)
      },
      {
        path:'/addtoys',
        element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
      },{
        path:'/mytoys',
        element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
      },{
        path:'/mytoys/:id',
        element:<UpdateToy></UpdateToy>,
        loader: ({ params }) => fetch(`https://kiddo-valley-server.vercel.app/allToys/${params.id}`)

      }, {
        path: '/details/:id',
        element: <Details></Details>,
        loader: ({ params }) => fetch(`https://kiddo-valley-server.vercel.app/allToys/${params.id}`)
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

import React, { useContext, useEffect, useState } from 'react';
import DynamicTitle from '../../DynamicTitle/DynamicTitle';
import { AuthContext } from '../../Providers/AuthProvider';

import { Link } from 'react-router-dom';

const MyToys = () => {
      const pageTitle='Kiddo_Valley-MyToys'
      const {user}=useContext(AuthContext)
      const [myToys,setMyToys]=useState([])
      const [sortOrder, setSortOrder] = useState('desc'); // Track the current sort order




      useEffect(()=>{
            // fetch(`http://localhost:5000/mytoys/${user?.email}`)
            // fetch(`http://localhost:5000/mytoys/${user?.email}?sort=${sortOrder}`)

            fetch(`http://localhost:5000/mytoys/${user?.email}?sort=${sortOrder}`)
            .then(res=>res.json())
            .then(data=>{
                  setMyToys(data);
            })
      }, [user, sortOrder])

      console.log("my toys",myToys);


     


      const handleDelete = id => {
            const proceed = confirm("Are you confirm to delete this servie?")
            if (proceed) {
                  fetch(`http://localhost:5000/alltoys/${id}`, {
                        method: "DELETE"
                  })
                        .then(res => res.json()).then(data => {
                              console.log(data)
                              const remaing = myToys.filter(myToy => myToy._id !== id)
                              setMyToys(remaing)
                        })
            }
      }

      const toggleSortOrder = () => {
            const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
            setSortOrder(newSortOrder);
      };





      return (
            <div>
                   <DynamicTitle title={pageTitle} />
                  <div className='flex m-4 text-center'> <p>Sort By Price</p>
                        <button className='btn btn-sm' onClick={toggleSortOrder}>
                              {sortOrder === 'asc' ? '▲' : '▼'}
                        </button></div>
                  
                  <div>
                  <table>
      <thead>
        <tr className='bg-slate-400'>
          <th className='w-[150px]'>Picture</th>
          <th>Name</th>
          <th>Seller Name</th>
          <th>Seller Email</th>
          <th>Sub-category</th>
          <th>Price</th>
          <th>Rating</th>
          <th>Available Quantity</th>
          <th>Description</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {myToys.map((myToy, index) => (
          <tr className='border-2' key={index}>
            <td><img className='w-[100px] h-[100px]' src={myToy.toy_pic} alt="Toy" /></td>
            <td>{myToy.toy_name}</td>
            <td>{myToy.seller_name}</td>
            <td>{myToy.seller_email}</td>
            <td>{myToy.subcategory}</td>
            <td>{myToy.price}</td>
            <td>{myToy.rating}</td>
            <td>{myToy.available_quantity}</td>
            <td className='w-[400px]' >{myToy.description}</td>
            <td> <Link to={`/mytoys/${myToy._id}`}> <button className='btn btn-primary' >Update</button></Link> </td>
            <td> <button className='btn btn-warning' onClick={() => handleDelete(myToy._id)} >Delete</button> </td>
          </tr>
        ))}
      </tbody>
    </table>
                  </div>
            </div>
      );
};

export default MyToys;


// {
//       myToys.map(myToy=> <ToyTable
//       key={myToy._id}
//       myToy={myToy}
//       ></ToyTable>
           
//       )   
// }
// onClick={() => handleBookingConfirm(myToy._id)}
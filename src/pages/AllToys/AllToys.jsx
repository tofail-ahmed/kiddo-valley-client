import React, { useState } from 'react';
import DynamicTitle from '../../DynamicTitle/DynamicTitle';
import { useEffect } from 'react';
import Toy from './Toy';

const AllToys = () => {
      const pageTitle='Kiddo_Valley-AllToys'
      const [allToys, setAllToys] = useState([])
      useEffect(() => {
            fetch('https://kiddo-valley-server.vercel.app/alltoys')
                  .then(res => res.json())
                  .then(data => setAllToys(data))
      }, [])
      // console.log(allToys);



      const handleSearch = e => {
            e.preventDefault()
            const form=e.target
            const text = form.text.value;
            console.log(text);
             fetch(`https://kiddo-valley-server.vercel.app/search/${text}`)
             .then(res=>res.json())
             .then(data=>{
                  setAllToys(data);
             })

      }
      return (
            <div>
                  <DynamicTitle title={pageTitle} />
                  <form onSubmit={handleSearch} >
                       <p className='m-4 text-center'> Search Toy By Name or Category <input className='border-2 p-4' type="text" name="text" placeholder='Category or Name' id="" />
                        <input className='btn btn-success' type="submit" value="Search" /></p>
                  </form>
                  <div>
                        <div className="overflow-x-auto">
                              <table className="table table-compact w-full">
                                    <thead>
                                          <tr>
                                                <th></th>
                                                <th>seller</th>
                                                <th>Toy</th>
                                                <th>Sub-Cat</th>
                                                <th>Quantity <br />available</th>
                                                <th>Price</th>
                                                <th></th>

                                          </tr>
                                    </thead>
                                    <tbody>
                                          
                                                {
                                                allToys.map((toy, idx) => <Toy
                                                                  key={toy._id}
                                                                  toy={toy}
                                                                  idx={idx}
                                                      >
                                                      </Toy>
                                                )
                                          }
                                    </tbody>
                              </table>

                        </div>
                  </div>
            </div>
      );
};


export default AllToys;









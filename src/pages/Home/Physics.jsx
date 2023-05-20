import React, { useEffect, useState } from 'react';

const Physics = () => {
      const [physics, setPhysics] = useState([])
      useEffect(() => {
            fetch(`http://localhost:5000/category/Physics%20Toy`

            )
                  .then(res => res.json())
                  .then(data => {
                        setPhysics(data);
                  })
      }, [])
      console.log(physics);
      return (
            <div>
                  <div className="overflow-x-auto">
                        <table className="table w-full">
                              {/* head */}
                              <thead>
                                    <tr>
                                          <th></th>
                                          <th>Name</th>
                                          <th>Job</th>
                                          <th>Favorite Color</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {/* row 1 */}
                                    {
                                          physics.map((toy,idx) =>
                                                <tr key={toy._id}>
                                                      <th>{idx+1}</th>
                                                      <td>{toy.toy_name}</td>
                                                      <td>{toy.price}</td>
                                                      <td>{toy.rating}</td>
                                                </tr>

                                          )
                                    }

                              </tbody>
                        </table>
                  </div>
            </div>
            
      );
};

export default Physics;
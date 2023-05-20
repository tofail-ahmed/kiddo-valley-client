import React, { useEffect, useState } from 'react';

const Math = () => {
      const [math, setMath] = useState([])
      useEffect(() => {
            fetch(`http://localhost:5000/category/Mathematics%20Toy`

            )
                  .then(res => res.json())
                  .then(data => {
                        setMath(data);
                  })
      }, [])
      console.log(math);

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
                                          math.map((toy,idx) =>
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

export default Math;
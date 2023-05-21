import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Math = () => {
      const [math, setMath] = useState([])
      useEffect(() => {
            fetch(`https://kiddo-valley-server.vercel.app/category/Mathematics%20Toy`

            )
                  .then(res => res.json())
                  .then(data => {
                        setMath(data);
                  })
      }, [])
      console.log(math);

      return (
            <div>
                  {
                        math.map(toy =>
                              <div key={toy._id} className="  p-4">
                                    <div className="bg-white rounded-lg shadow-lg ">
                                          <div className='flex '>

                                                <div className=" w-1/3 p-4  content-center grow">
                                                      <h2 className="text-lg font-bold">{toy.toy_name}</h2>
                                                      <p className="text-gray-600 mb-2">Price:${toy.price} Only</p>
                                                      <div className='flex justify-center'>
                                                            <p>Ratings:</p>
                                                            <span className="text-yellow-400 mr-1">&#9733;</span>
                                                            <span className="text-gray-600">{toy.rating}</span>
                                                      </div>
                                                      <div className="p-4 rounded-b-lg">
                                                            <Link to={`details/${toy._id}`}>  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                                                  View Details
                                                            </button></Link>
                                                      </div>

                                                </div>

                                                <img src={toy.toy_pic} alt={toy.toy_name} className="w-1/2 h-48   rounded-t-lg" />
                                          </div>

                                    </div>
                              </div>
                        )
                  }
            </div>
      );
};

export default Math;
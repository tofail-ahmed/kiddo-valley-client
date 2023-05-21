import React, { useState } from 'react';
import DynamicTitle from '../../DynamicTitle/DynamicTitle';
import { useEffect } from 'react';
import Toy from './Toy';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
      const pageTitle='Kiddo_Valley-AllToys'
      const { totalToys } = useLoaderData()
      const [allToys, setAllToys] = useState([])
      const [pageNumber, setPageNumber] = useState(0)
      const [itemsPerPage, setItemsPerPage] = useState(20)


      const totalPage = Math.ceil(totalToys / itemsPerPage)
      const pageNumbers = [...Array(totalPage).keys()]


      

      useEffect(() => {
            fetchData();
      }, [pageNumber, itemsPerPage]);

      const fetchData = async () => {
            try {
                  const response = await fetch(`http://localhost:5000/alltoys?page=${pageNumber}&limit=${itemsPerPage}`);
                  const result = await response.json();
                  setAllToys(result)
            }
            catch (error) {
                  console.error('error fetching data', error);
            }
      }



      const handleItemsPerPageChange = (e) => {
            const newItemsPerPage = parseInt(e.target.value, 10);
            setItemsPerPage(newItemsPerPage);
      }


      const handleSearch = e => {
            e.preventDefault()
            const form=e.target
            const text = form.text.value;
            console.log(text);
            fetch(`http://localhost:5000/search/${text}`)
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

                  {/* //pagination */}

                  <div className='text-center my-8 bg-slate-400 p-4'>

                        
                        {
                              pageNumbers.map(number => <button className={pageNumber === number ? "bg-green-500 text-white mx-4 rounded-lg p-4 font-bold" : 'bg-cyan-400 mx-4 rounded-lg p-2 font-bold'} onClick={() => setPageNumber(number)} key={number}>PAGE:{number+1}</button>)
                        }
                        <select id="itemsPerPage" value={itemsPerPage} onChange={handleItemsPerPageChange}>
                              <option value="5">5</option>
                              <option value="10">10</option>
                              <option value="20">20</option>
                              <option value="50">50</option>
                        </select>
                  </div >
            </div>
      );
};


export default AllToys;









import React, { useContext } from 'react';
import DynamicTitle from '../../DynamicTitle/DynamicTitle';
import { AuthContext } from '../../Providers/AuthProvider';

const AddToy = () => {
      const {user}=useContext(AuthContext)
      const pageTitle='Kiddo_Valley-AddToys'
      const handleAddToy = e => {
            e.preventDefault()
            const form = e.target
            const url = form.url.value
            const toyName = form.toyName.value
            const sellerName = form.sellerName.value
            const sellerEmail = form.sellerEmail.value
            const quantity = form.quantity.value
            const subCategory = form.subCategory.value
            const price = form.price.value
            const rating = form.rating.value
            const description = form.description.value

            const toy = {
                  toy_pic: url,
                  toy_name: toyName,
                  seller_name:sellerName,
                  seller_email: user?.email,
                  available_quantity: quantity,
                  subcategory: subCategory,
                  price: price,
                  rating: rating,
                  description: description


            }
            console.log(toy);
            fetch('http://localhost:5000/addtoy', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(toy)
            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data)

                  })
      }
      return (
            <div>
                   <DynamicTitle title={pageTitle} />
                  <h2>This is add a toy</h2>
                  <div className="card-body ">
                        <h1 className='text-5xl font-bold text-rose-500	 text-center mb-4'></h1>
                        <form onSubmit={handleAddToy}>
                              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    <div className="form-control">

                                          <input type="text" name='url' placeholder="URL" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">

                                          <input type="text" name='toyName' placeholder="Toy Name" className="input input-bordered" />

                                    </div>
                                    <div className="form-control">

                                          <input type="text" name='sellerName' placeholder="Seller Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">

                                          <input type="text" name='sellerEmail' defaultValue={user?.email} className="input input-bordered" />
                                    </div>

                                    <div className="form-control">

                                          <input type="text" name='quantity' placeholder="Available Quantity" className="input input-bordered" />
                                    </div>
                                    <div className="form-control ">

                                          <input type="text" name='subCategory' placeholder="Sub-Category" className="input input-bordered" />

                                    </div>
                                    <div className="form-control">

                                          <input type="text" name='price' placeholder="Price" className="input input-bordered" />
                                    </div>
                                    <div className="form-control ">

                                          <input type="text" name='rating' placeholder="Ratings" className="input input-bordered" />

                                    </div>
                              </div>
                              <div className="form-control my-6 ">

                                    <input type="text" name='description' placeholder="Toy Description" className="input input-bordered" />

                              </div>



                              <input className='btn btn-primary btn-block my-8' type="submit" value="Add Toy" />

                        </form>
                  </div>
            </div>
      );
};

export default AddToy;
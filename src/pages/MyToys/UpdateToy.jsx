import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const UpdateToy = () => {
      const { user } = useContext(AuthContext)
      const { _id, toy_pic, toy_name, seller_name, seller_email, available_quantity, subcategory, price, rating, description } = useLoaderData()
      const notify = () => toast("Toy Updated!");

      const handleUpdateToy = e => {
            e.preventDefault()
            const form = e.target
            const url = form.url.value
            const toyName = form.toyName.value
            const sellerName = form.sellerName.value
            const sellerEmail = user?.email
            const quantity = form.quantity.value
            const subCategory = form.subCategory.value
            const price = form.price.value
            const rating = form.rating.value
            const description = form.description.value
            const id = form.id.value


            const toy = {
                  toy_pic: url,
                  toy_name: toyName,
                  seller_name: sellerName,
                  seller_email: sellerEmail,
                  available_quantity: quantity,
                  subcategory: subCategory,
                  price: price,
                  rating: rating,
                  description: description,
                  _id: id


            }
            console.log("toy data from form", toy);


            fetch(`https://kiddo-valley-server.vercel.app/alltoys/${id}`, {
                  method: "PUT",
                  headers: {
                        "content-type": "application/json"
                  },
                  body: JSON.stringify(toy)
            }

            )
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                              notify()

                        }
                  })


      }
      return (
            <div>
                  <form onSubmit={handleUpdateToy}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                              <div className="form-control">

                                    <input type="text" name='url' defaultValue={toy_pic} className="input input-bordered" />
                              </div>
                              <div className="form-control">

                                    <input type="text" name='toyName' defaultValue={toy_name} className="input input-bordered" />

                              </div>
                              <div className="form-control">

                                    <input type="text" name='sellerName' defaultValue={seller_name} className="input input-bordered" />
                              </div>
                              <div className="form-control">

                                    <input type="text" name='sellerEmail' defaultValue={user?.email} className="input input-bordered" />
                              </div>

                              <div className="form-control">

                                    <input type="text" name='quantity' defaultValue={available_quantity} className="input input-bordered" />
                              </div>
                              <div className="form-control ">

                                    <input type="text" name='subCategory' defaultValue={subcategory} className="input input-bordered" />

                              </div>
                              <div className="form-control">

                                    <input type="text" name='price' defaultValue={price} className="input input-bordered" />
                              </div>
                              <div className="form-control ">

                                    <input type="text" name='rating' defaultValue={rating} className="input input-bordered" />

                              </div>
                              <div className="form-control ">

                                    <input type="text" name='id' defaultValue={_id} className="input input-bordered hidden" />

                              </div>

                        </div>
                        <div className="form-control my-6 ">

                              <input type="text" name='description' defaultValue={description} className="input input-bordered" />

                        </div>



                        <input className='btn btn-primary btn-block my-8' type="submit" value="Add Toy" />

                  </form>
            </div>
      );
};

export default UpdateToy;




// fetch(`https://kiddo-valley-server.vercel.app/alltoys/${id}`, {
//       method: "PATCH",
//       headers: {
//             'content-type': 'application/json'
//       },
//       body: JSON.stringify({ status: 'confirm' })
// }).then(res => res.json()).then(data => {
//       console.log(data);
//       if (data.modifiedCount > 0) {
//             //update State
//             const remaing = myToys.filter(toy => toy._id !== id)
//             const updated = myToys.find(toy => toy._id === id)
//             updated.status = 'confirm'
//             const newBookings = [updated, ...remaing]
//             setMyToys(newBookings)
//       }
// })
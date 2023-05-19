import React from 'react';
import { Link } from 'react-router-dom';

const Toy = ({ toy, idx }) => {
      const {_id, seller_name, toy_name, subcategory, available_quantity, price } = toy
      console.log('toy', toy);
      return (
            <>


                  <tr>
                        <th>{idx + 1}</th>
                        <td>{seller_name}</td>
                        <td>{toy_name}</td>
                        <td>{subcategory}</td>
                        <td>{available_quantity}</td>
                        <td>{price}</td>
                        <td> <Link to={`/${_id}`}>
                              <button className="btn btn-info">Details</button>
                        </Link>  </td>


                  </tr>


            </>
      );
};

export default Toy;
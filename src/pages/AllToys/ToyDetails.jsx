import React from 'react';
import { useLoaderData } from 'react-router-dom';
import img from '../../assets/edu-toy-1.jpg'

const ToyDetails = () => {
      const {toy_name,available_quantity,toy_pic,subcategory,seller_name,seller_email,rating,price,description}=useLoaderData()
      
      return (
            <div className='my-8'>
                <div className="bg-teal-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
      <div className="relative">
        <img src={img} alt={toy_name} className="w-1/4 h-auto mb-4 rounded-md" />
        <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 shadow-md">
          <span className="text-gray-700">Ratings:{rating}/5</span>
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2">{toy_name}</h3>
      <div className="flex items-center mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a8 8 0 100 16 8 8 0 000-16zM1 10a9 9 0 1118 0 9 9 0 01-18 0z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M10 4a6 6 0 100 12 6 6 0 000-12zM4 10a1 1 0 112 0 1 1 0 01-2 0zm9-5a1 1 0 11-2 0 1 1 0 012 0zm0 10a1 1 0 11-2 0 1 1 0 012 0z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-gray-600">Supplier:{seller_name}</p>
      </div>
      <div className="flex items-center mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a8 8 0 100 16 8 8 0 000-16zM1 10a9 9 0 1118 0 9 9 0 01-18 0z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-gray-600">Supplier-email:{seller_email}</p>
      </div>
      <div className="flex items-center mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a8 8 0 100 16 8 8 0 000-16zM1 10a9 9 0 1118 0 9 9 0 01-18 0z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-gray-600">Discount Price: ${price}</p>
      </div>
      <div className="flex items-center mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a8 8 0 100 16 8 8 0 000-16zM1 10a9 9 0 1118 0 9 9 0 01-18 0z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-gray-600 text-2xl">Only {available_quantity} left</p>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        Add to Cart
      </button>
    </div>
                  
            </div>
      );
};

export default ToyDetails;
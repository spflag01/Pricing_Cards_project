import React from 'react';
import account from '../../../assets/user.png';
import rocket from '../../../assets/rocket.png'
import packages from '../../../assets/package.png'

const GetStart = () => {
    return (
        <div>
    
    <section className="container mx-auto   w-full px-10 py-12">

      <div className="border-2 border-dotted border-blue-400 p-12">


        <h2 className="text-xl font-bold text-center mb-5">
          Get Started In 3 Steps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-dotted border-blue-400">


         
          <div className="relative flex flex-col items-center text-center p-6 border-b md:border-b-0 md:border-r border-gray-200">

            <span className="absolute top-1 right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              1
            </span>

            <img
              src={account}
              alt="Create Account"
              className="w-12 h-12 object-contain mb-3"
            />

            <h3 className="font-bold text-sm mb-2">
              Create Account
            </h3>

            <p className="text-xs text-gray-500">
              Sign up in seconds and access your dashboard to get started.
            </p>
          </div>

          

          <div className="relative flex flex-col items-center text-center p-6 border-b md:border-b-0 md:border-r border-gray-200">

            <span className="absolute top-1 right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>

            <img
              src={rocket}
              alt="Choose Products"
              className="w-12 h-12 object-contain mb-3"
            />

            <h3 className="font-bold text-sm mb-2">
              Choose Products
            </h3>

            <p className="text-xs text-gray-500">
              Browse our collection and select the tools that fit your needs.
            </p>
          </div>

          
          <div className="relative flex flex-col items-center text-center p-6">

            <span className="absolute top-1 right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>

            <img
              src={packages}
              alt="Start Creating"
              className="w-12 h-12 object-contain mb-3"
            />

            <h3 className="font-bold text-sm mb-2">
              Start Creating
            </h3>

            <p className="text-xs text-gray-500">
              Download your tools and start creating immediately.
            </p>
          </div>

        </div>
      </div>
    </section>


        </div>
    );
};

export default GetStart;
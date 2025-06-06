// src/HomePage.jsx
import React from 'react';

function HomePage() {
  // Dummy functions for clicks, replace with actual logic later
  const handleSignInClick = () => console.log('Sign In clicked');
  const handleSignUpClick = () => console.log('Sign Up clicked');
  const handleSearch = () => console.log('Search performed');
  const handleCategoryClick = (categoryName) => console.log(`Category clicked: ${categoryName}`);
  const handleProductClick = (productName) => console.log(`Product clicked: ${productName}`);

  return (
    <div className="min-h-screen bg-gray-50 font-sans pt-0 pl-30 pr-30">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
        <div className="flex items-center space-x-2">
          <h1 className="text-3xl font-bold text-orange-500">Grocer<span className="text-yellow-500">Mart</span> </h1>
        </div>
        <nav className="hidden md:flex space-x-15 text-lg text-gray-400 font-medium">
          <a href="#" className="text-orange-500 border-b-2 border-orange-500 pb-1">Home</a>
          <a href="#" className="hover:text-orange-500">Categories</a>
          <a href="#" className="hover:text-orange-500">Sales</a>
          <a href="#" className="hover:text-orange-500">FAQ</a>
          <a href="#" className="hover:text-orange-500">About</a>
          <a href="#" className="hover:text-orange-500">Contact</a>
        </nav>
        {/* Icons and Buttons */}
        <div className="flex items-center space-x-13">
          <div className="relative">
            <button className="text-gray-900 hover:text-orange-500 text-2xl">🛍️</button>
            {/* <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">•</div> */}
          </div>
          <a href="#" onClick={handleSignInClick} className="text-orange-500 text-lg hover:underline">Sign In</a>
          <a href="#" onClick={handleSignUpClick} className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">Sign Up</a>
        </div>
      </header>

      {/* Main Hero Section */}
      <section className="flex flex-col md:flex-row items-center md:justify-between px-2 py-5 bg-white">
        {/* Text Content */}
        <div className="max-w-xl pl-7 mb-8 md:mb-0">
          <h2 className="text-7xl font-bold text-gray-800 mb-4">
            Let your <span className="text-orange-500">groceries</span> come to you
          </h2>
          <p className="text-gray-400 text-2xl mb-6">
            Get fresh groceries online without stepping out to make delicious food with the freshest ingredients.
          </p>

          {/* Search Box */}
          <div className="flex">
            <input
              type="text"
              placeholder="Search here"
              className="w-3/4 px-4 py-3 rounded-l-lg text-gray-600 text-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
            <button onClick={handleSearch} className="bg-yellow-500 hover:bg-orange-600 px-4 py-3 rounded-r-lg text-white font-semibold transition">
              🔍
            </button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex items-center space-x-2">
              <div className="text-green-500">✅</div>
              <span className="text-gray-400 text-lg">Fresh Vegetables</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-green-500">✅</div>
              <span className="text-gray-400 text-lg">100% Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-green-500">✅</div>
              <span className="text-gray-400 text-lg">Cash on Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-green-500">✅</div>
              <span className="text-gray-400 text-lg">Fast Delivery</span>
            </div>
          </div>
        </div>

        {/* Image of person */}
        <div className="relative w-full md:w-1/2 flex justify-center h-[500px] bg-transparent">
        <img
            src="/images/boy.png"
            alt="Person with groceries"
            className="w-[350px] h-full object-cover"
        />
        </div>

        {/* Right Section */}
        <div className="max-w-md mx-auto p-6">
            <div className="flex flex-col gap-6">
                {/* Product Card: Spinach */}
                <div onClick={() => handleProductClick('Fresh Spinach')} className="bg-orange-50 p-5 rounded-4xl shadow hover:shadow-lg transition w-full border border-black transform hover:scale-105 cursor-pointer"> {/* Added hover effect and cursor */}
                <img
                    src="/images/spinach.png"
                    alt="Fresh Spinach"
                    className="w-full h-32 object-cover rounded mb-3"
                />
                <div className="text-center">
                    <h4 className="font-semibold mb-1">Fresh Spinach</h4>
                    <p className="text-orange-500 font-semibold">$12.00</p>
                </div>
                </div>

                {/* Product Card: Carrots */}
                <div onClick={() => handleProductClick('Fresh Carrots')} className="bg-orange-50 p-4 rounded-4xl shadow hover:shadow-lg transition w-full border border-black transform hover:scale-105 cursor-pointer"> {/* Added hover effect and cursor */}
                <img
                    src="/images/carrot.png"
                    alt="Fresh Carrots"
                    className="w-full h-32 object-cover rounded mb-3"
                />
                <div className="text-center">
                    <h4 className="font-semibold mb-1">Fresh Carrots</h4>
                    <p className="text-orange-500 font-semibold">$9.00</p>
                </div>
                </div>
            </div>
        </div>
      </section>

      {/* Features icons section - Converted to buttons */}
      <section className="flex flex-col md:flex-row justify-around py-12 bg-white pl-10">
        {/* Dairy Products */}
        <button onClick={() => handleCategoryClick('Dairy Products')} className="flex flex-col items-center p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-center w-full md:w-1/5 my-2 md:my-0 border border-gray-200 hover:bg-gray-100">
            <div className="w-16 h-16 flex items-center justify-center mb-8">
                <span className='text-5xl'>🧈</span>
            </div>
            <h4 className="font-semibold text-2xl mb-2 text-gray-800">Dairy Products</h4>
            <p className="text-gray-400 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </button>
        {/* Vegetables & Fruits */}
        <button onClick={() => handleCategoryClick('Vegetables & Fruits')} className="flex flex-col items-center p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-center w-full md:w-1/5 my-2 md:my-0 border border-gray-200 hover:bg-gray-100">
            <div className="w-16 h-16 flex items-center justify-center mb-8">
                <span className='text-5xl'>🫛</span>
            </div>
            <h4 className="font-semibold text-2xl mb-2 text-gray-800">Vegetables & Fruits</h4>
            <p className="text-gray-400 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </button>

        {/* Spices & Seasonings */}
        <button onClick={() => handleCategoryClick('Spices & Seasonings')} className="flex flex-col items-center p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-center w-full md:w-1/5 my-2 md:my-0 border border-gray-200 hover:bg-gray-100">
            <div className="w-16 h-16 flex items-center justify-center mb-8">
                <span className='text-5xl'>🧂</span>
            </div>
            <h4 className="font-semibold text-2xl mb-2 text-gray-800">Spices & Seasonings</h4>
            <p className="text-gray-400 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </button>

        {/* Honey */}
        <button onClick={() => handleCategoryClick('Honey')} className="flex flex-col items-center p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-center w-full md:w-1/5 my-2 md:my-0 border border-gray-200 hover:bg-gray-100">
            <div className="w-16 h-16 flex items-center justify-center mb-8">
                <span className='text-5xl'>🐝</span>
            </div>
            <h4 className="font-semibold text-2xl mb-2 text-gray-800">Honey</h4>
            <p className="text-gray-400 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </button>

        {/* Flour */}
        <button onClick={() => handleCategoryClick('Flour')} className="flex flex-col items-center p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-center w-full md:w-1/5 my-2 md:my-0 border border-gray-200 hover:bg-gray-100">
            <div className="w-16 h-16 flex items-center justify-center mb-8">
                <span className='text-5xl'>🌾</span>
            </div>
            <h4 className="font-semibold text-2xl mb-2 text-gray-800">Flour</h4>
            <p className="text-gray-400 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </button>
      </section>

    </div>
  );
}

export default HomePage;

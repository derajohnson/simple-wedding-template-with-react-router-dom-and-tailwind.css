import React from 'react';

const Home = () => {
  return (
    <div>
      <div
        className="bg-scroll"
        style={{
          background: 'url(./imgs/christian.jpg) no-repeat center center',
          backgroundSize: 'cover',
          height: '600px',
        }}
      />
      <div className="mt-10 sm:flex-none md:flex ml-10 mr-10">
        <div className="sm:flex-1 md:flex-1 lg:flex-initial xl:flex-1 ">
          <img src="./imgs/hero2.jpg" alt="main-img" />
        </div>
        <div className="sm:flex-1 md:flex-1 lg:flex-initial xl:flex-1 text-center pt-20 self-center">
          <p className="text-xl text-gray-500 mb-5">JOIN US TO CELEBRATE</p>
          <p className="text-xl text-gray-500 mb-10">THE WEDDING DAY OF</p>
          <h2
            className="text-6xl text-blue-500 mb-16"
            style={{fontFamily: 'Parisienne'}}
          >
            Nora & Patch
          </h2>
          <p className="text-xl text-gray-500 mb-5">WHICH IS CELEBRATED ON </p>
          <p className="text-xl text-gray-500 mb-5">JUNE | 18 | 2028</p>
          <p className="text-xl text-gray-500 mb-5">STARTING AT 9:00 PM</p>
          <p className="text-xl text-gray-500 mb-5">SAINT JOHN'S CATHEDRAL</p>
        </div>
      </div>
      <div className="mt-20 font-bold text-3xl mb-10 text-blue-500 text-center" style={{fontFamily: 'Parisienne'}}>
        BRIDE AND GROOM
      </div>
      <div className="sm:flex-none md:flex">
        <div className='ml-5 mr-5 sm:flex-1 md:flex-1 lg:flex-initial xl:flex-1 '>
          <img className='rounded-lg' src="./imgs/bride.jpg" alt="bride" />
          <p className='text-2xl text-center mt-6 mb-5'>Nora Grey</p>
          <p className='text-center'>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </p>
        </div>

        <div className='ml-5 mr-5 sm:flex-1 md:flex-1 lg:flex-initial xl:flex-1'>
          <img className='rounded-lg' src="./imgs/groom.jpg" alt="groom" />
          <p className='text-2xl text-center mt-6 mb-5'>Patch Jeremy</p>
          <p className='text-center'>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </p>
        </div>
      </div>
    </div>
  );
};

export {Home};

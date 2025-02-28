import React from 'react';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <section id="home" className="relative bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-24 md:pt-32 md:pb-40">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Modern Solutions for</span>
              <span className="block text-indigo-600 dark:text-indigo-400">Modern Businesses</span>
            </h1>
            <p className="mt-6 max-w-md mx-auto text-lg text-gray-600 dark:text-gray-400 sm:text-xl md:mt-8 md:max-w-3xl">
              We build cutting-edge web applications using Laravel and React, delivering seamless user experiences and robust backend solutions.
            </p>
            <div className="mt-10 sm:flex sm:justify-center">
              <div className="rounded-md shadow">
                <a
                  href="#services"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                >
                  Our Services
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white dark:bg-gray-800 dark:text-indigo-400 dark:border-gray-700 dark:hover:bg-gray-700 hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                >
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-indigo-100 dark:from-indigo-900/20 to-transparent"></div>
    </section>
  );
};

export default Home;
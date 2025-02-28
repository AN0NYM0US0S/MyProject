import React from 'react';
import { Globe, Database, Server, Layout, Code, Shield } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Full-stack web applications built with Laravel and React, tailored to your specific business needs.',
      icon: Globe,
    },
    {
      title: 'Backend Development',
      description: 'Robust Laravel backends with efficient job queues, API development, and database optimization.',
      icon: Server,
    },
    {
      title: 'Frontend Development',
      description: 'Modern, responsive React interfaces with state-of-the-art UI/UX design principles.',
      icon: Layout,
    },
    {
      title: 'Database Design',
      description: 'Optimized database architecture ensuring data integrity, security, and performance.',
      icon: Database,
    },
    {
      title: 'API Development',
      description: 'RESTful and GraphQL APIs that connect your services and enable seamless integration.',
      icon: Code,
    },
    {
      title: 'Security Implementation',
      description: 'Comprehensive security measures to protect your application and user data.',
      icon: Shield,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Comprehensive Web Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-400 mx-auto">
            We offer a wide range of services to help your business succeed online with cutting-edge technology.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center rounded-md bg-indigo-100 dark:bg-indigo-900 p-3 text-indigo-600 dark:text-indigo-400">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">{service.title}</h3>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-indigo-700 dark:bg-indigo-800 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 lg:py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-extrabold text-white">Ready to transform your web presence?</h3>
              <p className="mt-4 text-lg text-indigo-100">
                Let's discuss how our services can help your business grow and succeed in the digital landscape.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition-colors duration-200"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
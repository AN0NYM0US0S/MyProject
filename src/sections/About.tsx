import React from 'react';
import { Code, Server, Users, Shield } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      name: 'Frontend Excellence',
      description: 'We craft beautiful, responsive interfaces using React that provide exceptional user experiences across all devices.',
      icon: Code,
    },
    {
      name: 'Backend Expertise',
      description: 'Our Laravel implementations are robust, secure, and optimized for performance with efficient job queues and processing.',
      icon: Server,
    },
    {
      name: 'Collaborative Approach',
      description: 'We work closely with clients to understand their needs and deliver solutions that exceed expectations.',
      icon: Users,
    },
    {
      name: 'Security First',
      description: 'Security is built into every layer of our applications, from the database to the user interface.',
      icon: Shield,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            A better way to build web applications
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-400 lg:mx-auto">
            We're a team of experienced developers specializing in Laravel and React, dedicated to creating modern, efficient, and scalable web solutions.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                <div>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900 dark:text-white">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
          <div className="lg:grid lg:grid-cols-2">
            <div className="px-6 py-12 lg:p-12">
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">Our Mission</h3>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                To deliver exceptional web solutions that help businesses thrive in the digital landscape through innovative technology and thoughtful design.
              </p>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                We believe in clean code, transparent communication, and building long-term relationships with our clients.
              </p>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Team collaboration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
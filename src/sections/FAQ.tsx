import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in Laravel for backend development and React for frontend development. We also have expertise in Linux administration, Nginx configuration, and GitHub workflows.',
    },
    {
      question: 'How long does a typical web project take to complete?',
      answer: 'Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months or more. We provide detailed timelines during our initial consultation.',
    },
    {
      question: 'Do you offer ongoing maintenance and support?',
      answer: 'Yes, we offer various maintenance and support packages to keep your website secure, up-to-date, and running smoothly. We can tailor a support plan to meet your specific needs.',
    },
    {
      question: 'How do you handle project management and communication?',
      answer: 'We use agile methodologies with regular check-ins and updates. Communication is typically handled through a combination of email, video calls, and project management tools to ensure transparency throughout the development process.',
    },
    {
      question: 'Can you work with existing codebases or do you only build from scratch?',
      answer: 'We can work with existing codebases, performing code audits, refactoring, and adding new features. We also build projects from scratch when needed. Our team is adaptable to various project requirements.',
    },
    {
      question: 'What is your approach to web security?',
      answer: 'Security is integrated into every aspect of our development process. We follow OWASP guidelines, implement proper authentication and authorization, use HTTPS, perform regular security audits, and keep all software updated with security patches.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">FAQ</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-400 mx-auto">
            Find answers to common questions about our services, process, and expertise.
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center px-4 py-3 bg-gray-50 dark:bg-gray-800 text-left focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">{faq.question}</span>
                  <span className="ml-6 flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-indigo-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    )}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-4 py-3 bg-white dark:bg-gray-900">
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-base text-gray-600 dark:text-gray-400">
            Don't see your question here?
          </p>
          <a
            href="#contact"
            className="mt-3 inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300"
          >
            Contact us for more information
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
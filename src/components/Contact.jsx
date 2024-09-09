import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contact Me</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Feel free to reach out via email at <a href="mailto:your-email@example.com" className="text-blue-500">your-email@example.com</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;

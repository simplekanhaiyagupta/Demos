import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-bounce">
        Hi, I'm Kanhaiya Kumar
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300">
        I am a [Your Profession] specializing in [Your Skills].
      </p>
    </section>
  );
};

export default Hero;

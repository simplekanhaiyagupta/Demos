import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Projects</h2>
        {/* Example Project Card */}
        <div className="bg-white dark:bg-gray-900 p-5 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Project Title</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Description of the project with key features.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

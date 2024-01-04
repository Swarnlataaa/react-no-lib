// src/Projects.js
import React from "react";

const Projects = () => {
  return (
    <section
      className="bg-cover bg-center text-white py-16"
      style={{ backgroundImage: "url('project-background.jpg')" }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">BLOG</h3>
            <p className="mt-2 text-gray-700">
              Just another blog on the internet by another human
            </p>
            <a
              href="https://swarnlataaa.github.io/Blog/"
              className="mt-4 text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">Open source projects</h3>
            <p className="mt-2 text-gray-700">
              Open source project contributions
            </p>
            <a
              href="https://www.github.com/swarnlataaa"
              className="mt-4 text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">Writing work</h3>
            <p className="mt-2 text-gray-700">Writing genres I explored</p>
            <a
              href="https://effulgent-gumption-52149f.netlify.app/"
              className="mt-4 text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>

          {/* Add more project cards here */}
        </div>
      </div>
    </section>
  );
};

export default Projects;

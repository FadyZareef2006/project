import React from 'react';
import { projects } from '../data/projects';
import ProjectGallery from '../components/ProjectGallery';

export default function Projects() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-amber-300 mb-4">Our Projects</h1>
          <p className="text-amber-500 max-w-2xl mx-auto">
            Explore our portfolio of successful projects across various sectors.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-amber-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <ProjectGallery images={project.images} />
                <div className="p-6">
                  <div className="mb-4">
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="space-y-2">
                    {project.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '25+', label: 'Years Experience' },
              { number: '50+', label: 'Team Members' },
              { number: '98%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-amber-300 mb-2">{stat.number}</div>
                <div className="text-amber-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
import React from 'react';
import { ProjectCard } from '@/components/ProjectCard';
import { getProjects } from '@/lib/projects';

export default function FashionPage() {
  const { fashion } = getProjects();

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-white text-3xl sm:text-4xl font-light tracking-wide mb-4">
            Fashion Projects
          </h1>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Design collections and creative fashion explorations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
          {fashion.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` } as React.CSSProperties}
            />
          ))}
        </div>

        {/* Back Navigation */}
        <div className="text-center mt-12">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to projects
          </a>
        </div>
      </div>
    </div>
  );
} 
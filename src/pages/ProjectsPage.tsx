import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const ProjectsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Featured Projects
      </h1>
      <p className="text-gray-400 text-base md:text-lg text-center mb-12 md:mb-16 max-w-3xl mx-auto px-4">
        A collection of my most impactful projects, showcasing my expertise in web development,
        cloud architecture, and user experience design.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="group glass-card rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500"
          >
            <div className="relative h-48 md:h-56 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 group-hover:text-teal-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 md:px-3 py-1 rounded-full text-xs md:text-sm bg-white/5 text-teal-300 border border-teal-300/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <ProjectLink href={project.github} icon={<Github className="w-4 h-4" />}>
                  View Code
                </ProjectLink>
                <ProjectLink href={project.demo} icon={<ExternalLink className="w-4 h-4" />}>
                  Live Demo
                </ProjectLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface ProjectLinkProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

function ProjectLink({ href, icon, children }: ProjectLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-gray-400 hover:text-teal-300 group/link text-sm md:text-base"
    >
      {icon}
      <span>{children}</span>
      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
    </a>
  );
}

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with React and Node.js, featuring real-time inventory management and AI-powered recommendations.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, file sharing, and team analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Firebase', 'Material-UI'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Real-time Chat App',
    description: 'A modern messaging application with end-to-end encryption, file sharing, and voice/video call capabilities.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Socket.io', 'Express'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
];

export default ProjectsPage;
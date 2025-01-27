import React from 'react';
import { Award, BookOpen, Code, ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-20">
        <div className="relative inline-block animate-float mb-8">
          <div className="absolute inset-0 bg-teal-400 rounded-full blur-2xl opacity-20"></div>
          <img
            src="https://media.licdn.com/dms/image/v2/C5103AQH_ArdainqqrA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517009312324?e=1743638400&v=beta&t=KyyUVwJXTZ7uLl6Y-M0YPOail6Zomq98-nVwariJtmU"
            alt="Profile"
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/10"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Mario Buenida Varela
        </h1>
        <p className="text-xl md:text-2xl text-teal-300 mb-6 md:mb-8">Senior Software Engineer</p>
        <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed px-4">
          Passionate software engineer with 8+ years of experience in building scalable web applications.
          Specialized in React, TypeScript, and cloud architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
        {skills.map((skill, index) => (
          <div
            key={skill.title}
            className="group glass-card p-6 md:p-8 rounded-2xl hover:bg-white/10 transition-all duration-500"
          >
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-teal-400 rounded-lg blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <skill.icon className="relative w-8 h-8 md:w-10 md:h-10 text-teal-300" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-teal-300 transition-colors">
              {skill.title}
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              {skill.description}
            </p>
          </div>
        ))}
      </div>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <div className="space-y-6 md:space-y-8">
          {experience.map((job, index) => (
            <div
              key={job.company}
              className="glass-card p-6 md:p-8 rounded-2xl hover:bg-white/10 transition-all duration-500 group"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold group-hover:text-teal-300 transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-teal-300 text-base md:text-lg">{job.company}</p>
                </div>
                <p className="text-gray-400 text-sm md:text-base mt-2 md:mt-0">{job.period}</p>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {job.description}
              </p>
              <div className="mt-6 flex items-center text-teal-300 group-hover:translate-x-2 transition-transform">
                <span className="text-sm md:text-base mr-2">View Details</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const skills = [
  {
    icon: Code,
    title: 'Technical Skills',
    description: 'React, TypeScript, Node.js, AWS, Docker, and more. Experienced in building scalable applications.',
  },
  {
    icon: BookOpen,
    title: 'Education',
    description: 'MSc in Computer Science from Tech University. Focus on distributed systems and AI.',
  },
  {
    icon: Award,
    title: 'Certifications',
    description: 'AWS Solutions Architect, Google Cloud Professional, and other industry certifications.',
  },
];

const experience = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Corp',
    period: '2020 - Present',
    description: 'Leading a team of developers in building scalable web applications using React and Node.js. Implemented microservices architecture and improved system performance by 40%.',
  },
  {
    title: 'Software Engineer',
    company: 'Innovation Labs',
    period: '2018 - 2020',
    description: 'Developed and maintained multiple client projects using modern web technologies. Specialized in front-end development and UI/UX implementation.',
  },
];

export default HomePage;
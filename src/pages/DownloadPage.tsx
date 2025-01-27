import React from 'react';
import { FileDown, FileText, Download, CheckCircle } from 'lucide-react';

const DownloadPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="relative inline-block animate-float mb-6 md:mb-8">
            <div className="absolute inset-0 bg-teal-400 rounded-full blur-2xl opacity-20"></div>
            <FileText className="relative w-16 h-16 md:w-20 md:h-20 text-teal-300" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Download My CV
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4">
            Get a comprehensive overview of my professional experience, technical skills,
            and achievements in your preferred format.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-6 md:p-8 mb-8 md:mb-12 hover:bg-white/10 transition-all duration-500">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Available Formats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {formats.map((format) => (
              <a
                key={format.name}
                href={format.url}
                download
                className="group glass-card p-4 md:p-6 rounded-xl hover:bg-white/10 transition-all duration-500"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-teal-400 rounded-lg blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                      <format.icon className="relative w-6 h-6 md:w-8 md:h-8 text-teal-300" />
                    </div>
                    <div>
                      <p className="font-bold text-base md:text-lg group-hover:text-teal-300 transition-colors">
                        {format.name}
                      </p>
                      <p className="text-xs md:text-sm text-gray-400">{format.size}</p>
                    </div>
                  </div>
                  <Download className="w-4 h-4 md:w-5 md:h-5 text-teal-300 transform group-hover:scale-110 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">CV Highlights</h2>
          <div className="space-y-4 md:space-y-6">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-teal-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const formats = [
  {
    name: 'PDF Format',
    icon: FileDown,
    size: '1.2 MB',
    url: '/cv.pdf',
  },
  {
    name: 'Word Format',
    icon: FileText,
    size: '985 KB',
    url: '/cv.docx',
  },
];

const highlights = [
  {
    title: 'Technical Expertise',
    description: '8+ years of experience in full-stack development with modern technologies.',
  },
  {
    title: 'Leadership',
    description: 'Led multiple teams and successfully delivered enterprise-scale projects.',
  },
  {
    title: 'Innovation',
    description: 'Implemented cutting-edge solutions resulting in significant performance improvements.',
  },
  {
    title: 'Recognition',
    description: 'Received multiple awards for technical excellence and team collaboration.',
  },
];

export default DownloadPage;
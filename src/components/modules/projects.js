import React from 'react';
import { Code2, Globe, Cpu, Microscope,Gamepad2 } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  technologies: string;
  points: string[];
  icon: React.ReactNode;
  color: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "A T L A S",
      subtitle: "AI Research Agent",
      technologies: "Langchain , LangGraph , Generative Ai , React ",
      points: [
        "Engineered an Advanced Research Agent Capable of Conducting Autonomous Research",
        "Incorporated LangSearch, a Reflection Agent, and RAG-based Knowledge Integration into the System."
      ],
      icon: <Microscope className="w-8 h-8" />,
      color: "#C68EFD"
    },
    {
      title: "Innovis",
      subtitle: "Research and Collaboration Platform",
      technologies: "React, Spring Boot, AWS, MongoDB, Agile",
      points: [
        "Developed a cloud-based collaboration platform supporting real-time document sharing.",
        "Integrated AWS services (EC2, S3) to scale the platform."
      ],
      icon: <Globe className="w-8 h-8" />,
      color: "#3B82F6" // blue
    },
    {
      title: "Slate",
      subtitle: "Real-Time Interactive Game Pad Application",
      technologies: "React Native, WebSockets, Real-Time Communication",
        points: [
    "Developed a cross-platform Game Pad application using React Native",
    "Integrated WebSockets for real-time communication between clients and server"
  ],
      icon: <Gamepad2 className="w-8 h-8" />,
      color: "#C68EFD"
    },
    {
      title: "Echo",
      subtitle: "Online Blogging Platform",
      technologies: "MERN Stack (MongoDB, Express.js, React.js, Node.js), JWT Authentication",
      points: [
        "Developed a blogging platform using React for FrontEnd and Express.js for Backend",
        "Optimized MongoDB queries and implemented RESTful APIs for seamless communication."
      ],
      icon: <Code2 className="w-8 h-8" />,
      color: "#10B981" // emerald
    },
    {
      title: "Apex",
      subtitle: "Webpage Generator Using Gemini LLM API",
      technologies: "Gemini LLM API, Flask, React Native",
      points: [
        "Created a webpage generator that generates pages from user prompts without code.",
        "Integrated Gemini LLM API and optimized backend with Flask.",
        "Developed a mobile frontend with React Native for user interaction."
      ],
      icon: <Cpu className="w-8 h-8" />,
      color: "#8B5CF6" // violet
    }
  ];

  return (
    <div className="py-24 px-4 bg-gradient-to-br bg-gray-100"  id='work'>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-20">
          <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-600">
            Projects
          </span>
        </h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 ease-out border border-gray-200 hover:border-opacity-0 bg-purple-50"
            >
              <div 
                className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ 
                  backgroundImage: `linear-gradient(120deg, ${project.color}10, ${project.color}30)`,
                  boxShadow: `0 0 80px ${project.color}40 inset`
                }}
              ></div>

              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ 
                  boxShadow: `0 0 15px ${project.color}60`,
                  borderRadius: 'inherit'
                }}
              ></div>
              
              <div className="relative p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start gap-6">

                  <div 
                    className="p-5 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-500"
                    style={{ 
                      backgroundColor: `${project.color}15`,
                      color: project.color,
                      boxShadow: `0 0 0 rgba(0,0,0,0)`,
                      transition: 'all 0.5s ease'
                    }}
                  >
                    <div className="transform group-hover:rotate-12 transition-transform duration-600">
                      {project.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-3xl font-bold text-black group-hover:tracking-wider transition-all duration-500">
                        {project.title}
                      </h3>
                      <p 
                        className="text-xl text-gray-600 group-hover:text-gray-700 transition-colors duration-500"
                        style={{ color: `${project.color}90` }}
                      >
                        {project.subtitle}
                      </p>
                    </div>
                    
                    {/* Technologies with hover effect */}
                    <div 
                      className="inline-block px-4 py-2 rounded-full mb-5 transition-all duration-500"
                      style={{ 
                        backgroundColor: `${project.color}15`,
                        borderLeft: `3px solid ${project.color}`,
                      }}
                    >
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Technologies:</span> {project.technologies}
                      </p>
                    </div>
                    
                    {/* Project points with hover effects */}
                    <ul className="space-y-3">
                      {project.points.map((point, pointIndex) => (
                        <li 
                          key={pointIndex} 
                          className="flex items-start group-hover:translate-x-1 transition-transform duration-500"
                        >
                          <div 
                            className="min-w-2 h-2 rounded-full mt-2 mr-3 transition-all duration-500 group-hover:scale-125"
                            style={{ backgroundColor: project.color }}
                          ></div>
                          <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-500">
                            {point}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

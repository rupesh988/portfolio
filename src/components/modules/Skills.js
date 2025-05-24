import React, { useEffect, useRef } from 'react';
import { Code, Globe, Smartphone, Cloud, Database, GitBranch,Brain } from 'lucide-react';

export default function Skills() {
  const containerRef = useRef(null);

  const skillCategories = [
    { title: "Programming", icon: <Code className="w-6 h-6" />, skills: ["JavaScript", "Python", "Java"], color: "#3B82F6" },
    { title: "Web and Mobile Development", icon: <Globe className="w-6 h-6" />, skills: ["React.js", "React Native", "Node.js", "Express.js", "Flask", "HTML/CSS"], color: "#10B981" },
    { title: "Generative AI", icon: <Brain className="w-6 h-6" />, skills: ["LangChain", "Ollama", "RAG", "LLMs", "Vector DBs"], color: "#F43F5E" },
    { title: "Cloud", icon: <Cloud className="w-6 h-6" />, skills: ["AWS (EC2, Lambda, S3)", "Azure"], color: "#8B5CF6" },
    { title: "Tools", icon: <GitBranch className="w-6 h-6" />, skills: ["Git", "CI/CD"], color: "#EF4444" },
    { title: "Databases", icon: <Database className="w-6 h-6" />, skills: ["MongoDB", "MySQL"], color: "#F59E0B" }
  ];
  

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('animate-in'));
    }, { threshold: 0.1 });

    const items = document.querySelectorAll('.skill-item');
    items.forEach(item => observer.observe(item));
    return () => items.forEach(item => observer.unobserve(item));
  }, []);

  return (
    <div className="py-20 px-4 bg-gray-100" ref={containerRef} id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-16">
          <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700">
            Skills
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-item opacity-0 translate-y-10 transition-all duration-1000 ease-out"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full bg-white rounded-xl shadow-md overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 opacity-80" />
                <div className="relative p-6 h-full flex flex-col">
                  <div className="flex items-center mb-5">
                    <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: `${category.color}20`, color: category.color }}>
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center opacity-0 translate-x-4"
                        style={{
                          animation: 'fadeSlideIn 0.5s forwards',
                          animationDelay: `${(index * 0.1) + (skillIndex * 0.1) + 0.3}s`
                        }}
                      >
                        <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: category.color }} />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 rounded-tl-full opacity-10" style={{ backgroundColor: category.color }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}

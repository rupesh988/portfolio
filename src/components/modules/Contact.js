import React, { useState } from 'react';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';

export default function ContactLinks() {
  const [activeIndex, setActiveIndex] = useState(null);

  const socialLinks = [
    { 
      name: 'Email', 
      icon: <Mail className="w-5 h-5" />, 
      url: 'mailto:inrupesh.in@gmail.com',
      color: '#FF6B6B' 
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin className="w-5 h-5" />, 
      url: 'https://www.linkedin.com/in/rupesh988',
      color: '#4ECDC4' 
    },
    { 
      name: 'Github', 
      icon: <Github className="w-5 h-5" />, 
      url: 'https://github.com/rupesh988',
      color: '#FFE66D' 
    },
    { 
      name: 'Instagram', 
      icon: <Instagram className="w-5 h-5" />, 
      url: 'https://www.instagram.com/rupesh.reddy1',
      color: '#FF8811' 
    }
  ];

  return (
    <div className="py-24 px-4 bg-gradient-to-br bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-16">
          <span className="text-5xl font-bold text-black">Connect</span>
        </h2>
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden flex items-center justify-center gap-2 p-3 rounded-xl transition-all duration-300"
              style={{ 
                backgroundColor: activeIndex === index ? link.color : 'rgba(30, 41, 59, 0.8)',
                borderLeft: `3px solid ${link.color}`,
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div style={{ color: activeIndex === index ? '#fff' : link.color }}>
                {link.icon}
              </div>
              <span className="font-medium" style={{ color: activeIndex === index ? '#fff' : '#e2e8f0' }}>
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

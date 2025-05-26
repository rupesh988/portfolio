import React from 'react';
import { Code, Coffee, Lightbulb, Laptop } from 'lucide-react';

export default function AboutMe() {
  return (
    <div className="py-12 md:py-24 px-4 bg-gradient-to-br   bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-8 md:mb-16">
          <span className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700">
            About Me
          </span>
        </h2>

        <div className="relative">
          {/* Decorative elements - hidden on mobile to reduce clutter */}
          <div className="hidden md:block absolute -top-10 -left-10 w-20 h-20 rounded-full opacity-10 bg-white  blur-xl"></div>
          <div className="hidden md:block absolute -bottom-10 -right-10 w-20 h-20 rounded-full opacity-10 bg-whiteblur-xl"></div>

          <div className="relative overflow-hidden rounded-xl md:rounded-2xl border   transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50"></div>

            <div className="relative p-6 md:p-10">
              <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start">
                {/* Left column with image and icons */}
                <div className="w-full lg:w-1/3 space-y-4 md:space-y-6 mb-6 md:mb-0">
                  <div className="relative group max-w-xs mx-auto lg:max-w-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg md:rounded-xl opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img 
                      src="https://raw.githubusercontent.com/rupesh988/me/refs/heads/main/meing.jpg" 
                      alt="Rupesh" 
                      className="relative rounded-lg md:rounded-xl w-full h-auto object-cover aspect-square"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                  
                  </div>
                </div>


                <div className="w-full lg:w-2/3">
                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-black mb-1 md:mb-2">
                        Hey there! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700">Rupesh</span>
                      </h3>
                      <p className="text-base md:text-xl text-gray-800">
                        A third-year Computer Science student
                      </p>
                    </div>

                    <div className="prose prose-invert max-w-none text-sm md:text-base">
                      <p className="text-gray-800 leading-relaxed">
                        I'm passionate about coding and solving problems. My toolkit includes React-Native,JavaScript, Python, and AWS, 
                        and I've worked on projects ranging from web development to cloud-based apps. I specialize in building 
                        scalable applications with React-Native,Expo, React.js, Node.js, and Flask.
                      </p>

                      <p className="text-gray-800 leading-relaxed mt-3 md:mt-4">
                        I love creating things that work seamlessly and look good doing it. When I'm not coding, 
                        you can find me brainstorming new project ideas or trying to figure out how to make my coffee 
                        machine smarter than me.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 md:gap-3 pt-1 md:pt-2">
                      {["JavaScript", "React.js", "Node.js", "Python", "AWS", "SpringBoot"].map((skill, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:scale-105"
                          style={{ 
                            backgroundColor: `hsl(${210 + index * 30}, 70%, 50%, 0.15)`,
                            color: `hsl(${210 + index * 30}, 70%, 70%)`,
                            border: `1px solid hsl(${210 + index * 30}, 70%, 50%, 0.3)`
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

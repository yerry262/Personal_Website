import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Zap, Cpu, Wifi, Smartphone, Globe } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('professional');

  const professionalProjects = [
    {
      title: "AMD Instinct MI300 AI Solution Testing",
      description: "Led comprehensive system-level testing for AMD's flagship AI solution, ensuring compliance with rigorous performance and reliability standards.",
      technologies: ["Python", "Pandas", "System Testing", "AI Hardware"],
      highlights: [
        "Created production screening programs for multiple SKUs",
        "Achieved >95% yield rate through advanced debugging",
        "Collaborated with cross-functional teams",
        "Enhanced product performance and reduced time-to-market"
      ],
      icon: Cpu,
      category: "Hardware Testing"
    },
    {
      title: "Ryzen 9000 & X3D Series Validation",
      description: "Comprehensive testing suite for AMD's latest desktop processor lineup, validating critical hardware and firmware components.",
      technologies: ["Python", "Diagnostic Tools", "Jupyter Notebooks", "Data Analysis"],
      highlights: [
        "Validated 20 distinct SKUs",
        "Implemented automated testing protocols",
        "Optimized production screening efficiency",
        "Enhanced system reliability metrics"
      ],
      icon: Zap,
      category: "Processor Testing"
    },
    {
      title: "GE Healthcare Automation Optimization",
      description: "Revolutionized ceramic wafer manufacturing through advanced PLC programming and HMI design, achieving significant efficiency gains.",
      technologies: ["PLC Programming", "HMI Design", "Universal Robots", "MySQL"],
      highlights: [
        "30% reduction in production time",
        "Integrated multiple communication protocols",
        "Real-time data logging and monitoring",
        "Enhanced manufacturing process reliability"
      ],
      icon: Code,
      category: "Industrial Automation"
    }
  ];

  const personalProjects = [
    {
      title: "LED Matrix Spotify Visualizer",
      description: "Interactive LED display that syncs with Spotify's API to show real-time album artwork and music visualization.",
      technologies: ["ESP32", "Spotify API", "LED Matrix", "Embedded Systems"],
      highlights: [
        "Real-time album artwork display",
        "API integration with streaming services",
        "Custom embedded firmware development",
        "Music-responsive lighting effects"
      ],
      icon: Smartphone,
      category: "IoT & API Integration",
      github: "https://github.com/yerry262",
      demo: "#"
    },
    {
      title: "Multi-Rotor Drone Fleet",
      description: "Built and programmed various drone configurations including quadcopters, hexcopters, and octocopters with custom flight controllers.",
      technologies: ["Flight Controllers", "PID Tuning", "Sensors", "Real-time Control"],
      highlights: [
        "Custom flight controller programming",
        "Advanced PID loop optimization",
        "Multi-sensor integration",
        "Stable autonomous flight systems"
      ],
      icon: Zap,
      category: "Robotics & Control Systems",
      github: "https://github.com/yerry262"
    },
    {
      title: "iPhone BLE Media Controller",
      description: "Custom wireless device using ESP32C3 for seamless iPhone media control via Bluetooth Low Energy.",
      technologies: ["ESP32C3", "Bluetooth LE", "iOS Integration", "Embedded C"],
      highlights: [
        "Seamless iPhone integration",
        "Low-power BLE implementation",
        "Custom hardware design",
        "Intuitive user interface"
      ],
      icon: Wifi,
      category: "Wireless Communication",
      github: "https://github.com/yerry262"
    },
    {
      title: "iOS Security Research Tool",
      description: "Educational security research project using ESP32C3 and Sour Apple library to explore Bluetooth pairing vulnerabilities.",
      technologies: ["ESP32C3", "Sour Apple Library", "Security Research", "BLE"],
      highlights: [
        "Security vulnerability research",
        "Bluetooth protocol analysis",
        "Educational cybersecurity tool",
        "Responsible disclosure practices"
      ],
      icon: Code,
      category: "Security Research",
      github: "https://github.com/yerry262"
    },
    {
      title: "Smart Home Web Dashboard",
      description: "Comprehensive web application for monitoring and controlling smart home devices with secure remote access.",
      technologies: ["Web Development", "IoT Integration", "Tunneling", "React"],
      highlights: [
        "Secure remote access implementation",
        "Real-time device monitoring",
        "Clean, intuitive UI design",
        "Advanced networking protocols"
      ],
      icon: Globe,
      category: "Web Development & IoT",
      github: "https://github.com/yerry262",
      demo: "#"
    },
    {
      title: "Ethereum Node Operation",
      description: "Full Ethereum Proof-of-Stake node operation contributing to blockchain network security and decentralization.",
      technologies: ["Blockchain", "Ethereum", "Node Operation", "Smart Contracts"],
      highlights: [
        "Full node synchronization and maintenance",
        "Consensus mechanism participation",
        "Blockchain network contribution",
        "Decentralized systems expertise"
      ],
      icon: Cpu,
      category: "Blockchain Technology",
      github: "https://github.com/yerry262"
    }
  ];

  const projects = activeTab === 'professional' ? professionalProjects : personalProjects;

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg"
          alt="Advanced Technology"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900/95 to-dark-800/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of professional achievements and personal innovations spanning 
            system-level testing, automation, and cutting-edge technology exploration.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="glass rounded-xl p-2 inline-flex">
            <button
              onClick={() => setActiveTab('professional')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'professional'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-blue-400'
              }`}
            >
              Professional Work
            </button>
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'personal'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-blue-400'
              }`}
            >
              Personal Projects
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 hover-lift group"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-xl bg-blue-500/20 mr-4 group-hover:bg-blue-500/30 transition-colors">
                    <project.icon className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-200 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-blue-400 text-sm font-medium">{project.category}</p>
                  </div>
                </div>
                
                {/* Project Links */}
                {project.github && (
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-blue-400 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-slate-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-blue-400 font-semibold mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="text-slate-300 flex items-start text-sm">
                      <span className="text-blue-400 mr-2 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, tIndex) => (
                  <span
                    key={tIndex}
                    className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

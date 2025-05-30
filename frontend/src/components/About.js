import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Award, Users, Code, Zap } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      title: "Senior Product Development Engineer",
      company: "Advanced Micro Devices (AMD)",
      location: "Austin, TX",
      period: "01/2021 - Current",
      highlights: [
        "Lead system-level testing (SLT) for AMD's Instinct MI300 AI solution and Ryzen 9000, 9000X3D, and 7000X3D series Desktop Processors",
        "Created and released production screening programs for 20 distinct SKUs",
        "Achieved yield rate exceeding 95% through Python and Pandas analysis",
        "Collaborated with platform, design, and diagnostic teams to enhance product performance"
      ]
    },
    {
      title: "Controls and Systems Engineer",
      company: "GE Healthcare",
      location: "Milwaukee, WI",
      period: "05/2019 - 01/2021",
      highlights: [
        "Developed and tested ladder logic for PLCs to manage device communications",
        "Optimized ceramic wafer manufacturing processes achieving 30% reduction in production time",
        "Designed industrial devices communicating over field-bus, Ethernet/IP, EtherCat, and Modbus",
        "Integrated MySQL databases with PLC systems for real-time data logging"
      ]
    },
    {
      title: "Undergraduate Research Assistant",
      company: "Marquette University",
      location: "Milwaukee, WI",
      period: "09/2018 - 05/2019",
      highlights: [
        "Designed physical and electrical controls of an end effector for Universal Robots",
        "Implemented dual servo control with RS232 communication protocol",
        "Created custom control interfaces and meaningful user displays"
      ]
    }
  ];

  const skills = [
    { name: "Python & Pandas", level: 95, icon: Code },
    { name: "System Testing", level: 98, icon: Zap },
    { name: "PLC Programming", level: 90, icon: Users },
    { name: "Process Optimization", level: 85, icon: Award },
    { name: "Cross-functional Leadership", level: 92, icon: Users },
    { name: "Data Analysis", level: 88, icon: Code }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581094016871-d948d70c26cd"
          alt="Professional Engineering Workspace"
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
            About Me
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A passionate mechanical engineer with expertise in system-level testing, 
            automation, and creative problem-solving at the intersection of hardware and software.
          </p>
        </motion.div>

        {/* Personal Info & Education */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          {/* Personal Info */}
          <div className="glass rounded-2xl p-8 hover-lift">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
              <MapPin className="mr-3" size={24} />
              Personal Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center text-slate-300">
                <span className="font-semibold w-24">Location:</span>
                <span>Austin, Texas</span>
              </div>
              <div className="flex items-center text-slate-300">
                <span className="font-semibold w-24">Email:</span>
                <a href="mailto:jerry21steele@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  jerry21steele@gmail.com
                </a>
              </div>
              <div className="flex items-center text-slate-300">
                <span className="font-semibold w-24">Role:</span>
                <span>Senior Product Development Engineer</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="glass rounded-2xl p-8 hover-lift">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
              <Award className="mr-3" size={24} />
              Education
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-slate-200">Bachelor of Science: Mechanical Engineering</h4>
                <p className="text-blue-400">Marquette University</p>
                <p className="text-slate-400">Milwaukee, WI • May 2019</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-200">High School Diploma</h4>
                <p className="text-blue-400">St. John's Northwestern Military Academy</p>
                <p className="text-slate-400">May 2015</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center gradient-text mb-12">Professional Experience</h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-8 hover-lift relative"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-blue-400">{exp.title}</h4>
                    <p className="text-lg text-slate-200">{exp.company}</p>
                    <p className="text-slate-400 flex items-center mt-1">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </p>
                  </div>
                  <div className="flex items-center text-blue-300 mt-2 lg:mt-0">
                    <Calendar size={16} className="mr-2" />
                    <span className="font-mono text-sm">{exp.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="text-slate-300 flex items-start">
                      <span className="text-blue-400 mr-2 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center gradient-text mb-12">Core Competencies</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 hover-lift"
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="text-blue-400 mr-3" size={24} />
                  <h4 className="text-lg font-semibold text-slate-200">{skill.name}</h4>
                </div>
                
                <div className="w-full bg-dark-700 rounded-full h-2 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full"
                  />
                </div>
                <p className="text-blue-300 text-sm font-mono">{skill.level}%</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

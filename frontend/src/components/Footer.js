import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/yerry262',
      label: 'GitHub',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/jerry-steele-08a2b012b/',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      href: 'mailto:jerry21steele@gmail.com',
      label: 'Email',
      color: 'hover:text-green-400'
    }
  ];

  const quickLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '/resume.pdf', download: true }
  ];

  const technologies = [
    'Python & Pandas',
    'System Testing',
    'PLC Programming',
    'Industrial Automation',
    'Embedded Systems',
    'Blockchain Technology'
  ];

  return (
    <footer className="relative bg-dark-900 border-t border-slate-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">Jerry Steele</h3>
            <p className="text-slate-400 mb-6 leading-relaxed max-w-md">
              Senior Product Development Engineer passionate about system-level testing, 
              automation, and innovative engineering solutions. Currently leading testing 
              initiatives for AMD's cutting-edge processors and AI solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-slate-400">
                <MapPin size={16} className="mr-3 text-blue-400" />
                <span>Austin, Texas</span>
              </div>
              <div className="flex items-center text-slate-400">
                <Mail size={16} className="mr-3 text-blue-400" />
                <a 
                  href="mailto:jerry21steele@gmail.com" 
                  className="hover:text-blue-400 transition-colors"
                >
                  jerry21steele@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.2, y: -2 }}
                  viewport={{ once: true }}
                  className={`p-3 glass rounded-xl text-slate-400 ${social.color} transition-all duration-200 hover:shadow-lg`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-blue-400 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    download={link.download}
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-blue-400 mb-6">Technologies</h4>
            <div className="space-y-2">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="text-slate-400 text-sm"
                >
                  <span className="text-blue-400 mr-2">•</span>
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="py-8 border-t border-slate-800"
        >
          <div className="text-center">
            <h4 className="text-xl font-semibold gradient-text mb-4">
              Stay Connected
            </h4>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              Interested in engineering insights, technology trends, or potential collaborations? 
              Let's connect and explore opportunities together.
            </p>
            <motion.a
              href="mailto:jerry21steele@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-3 rounded-xl font-semibold inline-flex items-center space-x-2"
            >
              <Mail size={20} />
              <span>Get In Touch</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-slate-500 text-sm flex items-center"
            >
              Built by Jerry Steele. © {currentYear}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex space-x-6 text-sm text-slate-500"
            >
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

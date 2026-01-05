import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, Linkedin, Github, ExternalLink, Shield, Code, Award, Briefcase, ChevronDown, Star, Zap, Target, TrendingUp, Lock, Database, Globe } from 'lucide-react';

export default function PremiumPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    cybersecurity: [
      { name: 'IBM QRadar', level: 90 },
      { name: 'Splunk', level: 85 },
      { name: 'CrowdStrike', level: 88 },
      { name: 'Fortinet', level: 82 },
      { name: 'Wazuh', level: 85 },
      { name: 'LogRhythm', level: 80 }
    ],
    programming: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'TypeScript', level: 85 },
      { name: 'React/Next.js', level: 92 },
      { name: 'Google Colab', level: 80 }
    ],
    tools: [
      { name: 'Penetration Testing', level: 85 },
      { name: 'Threat Detection', level: 90 },
      { name: 'SOC Operations', level: 88 },
      { name: 'Incident Response', level: 85 }
    ]
  };

  const experience = [
    {
      title: 'SOC Analyst (L1)',
      company: 'COMMTEL Cyber Security Solutions',
      period: 'Oct 2024 - Jan 2025',
      description: 'Mastered SIEM tools (IBM QRadar, LogRhythm, Wazuh) and EDR tools (CrowdStrike, FortiSIEM) for advanced threat detection and incident response.',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Sales Executive',
      company: 'FALAK NAZ GROUP (Builder)',
      period: 'July 2020 - Present',
      description: 'Leading business operations and strategic client relations in real estate development sector.',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Junior Clerk cum Stenographer',
      company: 'Malir Development Authority',
      period: 'Jan 2014 - Jan 2023',
      description: 'Managed critical documentation, transcribed legal proceedings with 100 WPM shorthand speed.',
      icon: Briefcase,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const certifications = [
    { title: 'Cybersecurity Tools & Attack', org: 'IBA (Coursera)', icon: Lock },
    { title: 'Security Operation Center', org: 'CISCO', icon: Shield },
    { title: 'Ethical Hacker Internship', org: 'Kairiz Cyber Technology', icon: Zap },
    { title: 'Frontend Development', org: 'Completed', icon: Code },
    { title: 'Data Science & ML', org: 'EHUNAR - Govt. of Pakistan', icon: Database },
    { title: 'Cloud Applied Gen AI Engineer', org: 'Governor Initiative (Ongoing)', icon: Globe }
  ];

  const stats = [
    { label: 'Certifications', value: '20+', icon: Award },
    { label: 'Years Experience', value: '10+', icon: Briefcase },
    { label: 'Projects Completed', value: '50+', icon: Target },
    { label: 'WPM Shorthand', value: '100', icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/90 backdrop-blur-xl shadow-lg shadow-blue-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                HN
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'certifications', 'contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`}
                  className="relative group text-sm uppercase tracking-wider hover:text-cyan-400 transition-colors"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden z-50">
              {isMenuOpen ? <X size={28} className="text-cyan-400" /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-xl border-t border-blue-500/20">
            <div className="px-6 py-8 space-y-4">
              {['home', 'about', 'skills', 'experience', 'certifications', 'contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg uppercase tracking-wider hover:text-cyan-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-7xl mx-auto text-center z-10">
          <div className="mb-8 animate-fade-in">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm uppercase tracking-widest mb-8">
              Welcome to My Digital Space
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              HAFIZ
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              NAVEED
            </span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 text-xl md:text-2xl mb-8 text-gray-300">
            <span className="flex items-center gap-2">
              <Shield className="text-blue-400" size={24} />
              Cybersecurity Specialist
            </span>
            <span className="text-cyan-400">|</span>
            <span className="flex items-center gap-2">
              <Code className="text-cyan-400" size={24} />
              Frontend Developer
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transforming digital threats into opportunities. Building secure, scalable solutions with cutting-edge technology and innovative thinking.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="#contact" className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50">
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a href="https://my-journey-murex.vercel.app" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-cyan-500/50 rounded-full font-semibold hover:bg-cyan-500/10 transition-all hover:scale-105 flex items-center gap-2">
              View Portfolio <ExternalLink size={18} />
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://linkedin.com/in/hafiz-naveed-uddin-h-n-96072524b" target="_blank" rel="noopener noreferrer" className="p-4 border border-blue-500/30 rounded-full hover:bg-blue-500/10 hover:border-blue-500 transition-all hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/NAVEED261" target="_blank" rel="noopener noreferrer" className="p-4 border border-gray-500/30 rounded-full hover:bg-gray-500/10 hover:border-gray-400 transition-all hover:scale-110">
              <Github size={24} />
            </a>
            <a href="mailto:HNAVEED264@gmail.com" className="p-4 border border-cyan-500/30 rounded-full hover:bg-cyan-500/10 hover:border-cyan-500 transition-all hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-cyan-400" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-black/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all">
                  <stat.icon className="mx-auto mb-3 text-cyan-400" size={32} />
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Passionate about securing the digital future</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-black/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-500/50 transition-all">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <Shield size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Security Expert</h3>
                <p className="text-gray-400 leading-relaxed">
                  Specialized in SOC operations, threat detection, and incident response with hands-on experience in enterprise-grade SIEM and EDR tools.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-black/50 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 hover:border-purple-500/50 transition-all">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                  <Code size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Full Stack Developer</h3>
                <p className="text-gray-400 leading-relaxed">
                  Proficient in modern web technologies including React, Next.js, TypeScript, and Python for building scalable applications.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-black/50 backdrop-blur-xl border border-pink-500/20 rounded-3xl p-8 hover:border-pink-500/50 transition-all">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <Award size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Certified Professional</h3>
                <p className="text-gray-400 leading-relaxed">
                  20+ certifications from leading institutions including CISCO, Microsoft, IBA, and pursuing advanced AI specialization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Technical Arsenal
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Mastering the tools that matter</p>
          </div>

          <div className="space-y-12">
            {Object.entries(skills).map(([category, skillList], idx) => (
              <div key={category} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
                <div className="relative bg-black/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-500/50 transition-all">
                  <h3 className="text-3xl font-bold mb-8 capitalize bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {category.replace('_', ' ')}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {skillList.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300 font-semibold">{skill.name}</span>
                          <span className="text-cyan-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-32 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Career Journey
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Building expertise through diverse experiences</p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-black/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-500/50 transition-all">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <exp.icon size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        {exp.title}
                      </h3>
                      <p className="text-cyan-300 text-lg mb-2">{exp.company}</p>
                      <p className="text-gray-500 text-sm mb-4">{exp.period}</p>
                      <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="relative py-32 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Continuously learning and growing</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-black/50 backdrop-blur-xl border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500/50 transition-all h-full">
                  <cert.icon className="text-yellow-400 mb-4" size={32} />
                  <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                  <p className="text-gray-400 text-sm">{cert.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-black/50 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-12">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Let's Connect
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Ready to discuss how I can help secure your digital infrastructure or build your next project?
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <a href="mailto:HNAVEED264@gmail.com" className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold hover:scale-105 transition-all hover:shadow-2xl hover:shadow-cyan-500/50">
                  <Mail size={20} />
                  <span>HNAVEED264@gmail.com</span>
                </a>
                <a href="tel:03002385209" className="flex items-center gap-3 px-8 py-4 border-2 border-cyan-500/50 rounded-full font-semibold hover:bg-cyan-500/10 transition-all hover:scale-105">
                  <Phone size={20} />
                  <span>0300-2385209</span>
                </a>
              </div>

              <div className="flex justify-center gap-4">
                <a href="https://linkedin.com/in/hafiz-naveed-uddin-h-n-96072524b" target="_blank" rel="noopener noreferrer" className="p-4 border border-blue-500/30 rounded-full hover:bg-blue-500/10 hover:border-blue-500 transition-all hover:scale-110">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/NAVEED261" target="_blank" rel="noopener noreferrer" className="p-4 border border-gray-500/30 rounded-full hover:bg-gray-500/10 hover:border-gray-400 transition-all hover:scale-110">
                  <Github size={24} />
                </a>
                <a href="https://my-journey-murex.vercel.app" target="_blank" rel="noopener noreferrer" className="p-4 border border-cyan-500/30 rounded-full hover:bg-cyan-500/10 hover:border-cyan-500 transition-all hover:scale-110">
                  <ExternalLink size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-cyan-500/20 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-2">&copy; 2025 Hafiz Naveed Uddin. All rights reserved.</p>
          <p className="text-gray-500 text-sm">Frontend Developer | Cybersecurity Specialist | AI Enthusiast</p>
        </div>
      </footer>
    </div>
  );
}

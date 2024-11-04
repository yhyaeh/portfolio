import React, { useState, useEffect } from 'react';
import { Code2, ShoppingBag, Layout, Github, Linkedin, Mail, ExternalLink, ChevronRight, Sun, Moon } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-white' : 'bg-gradient-to-br from-blue-50 to-slate-100 text-slate-900'}`}>
      {/* Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
          isDark ? 'bg-slate-700 text-yellow-400 hover:bg-slate-600' : 'bg-white text-slate-700 hover:bg-slate-100 shadow-lg'
        }`}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 md:py-32">
        <div className="max-w-4xl animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-emerald-500 text-transparent bg-clip-text animate-gradient">
            Front-end Developer & WordPress Expert
          </h1>
          <p className={`text-xl md:text-2xl mb-8 transition-colors duration-300 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Hi, I'm Yhya. I craft exceptional digital experiences through clean code and thoughtful design.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="group bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 hover:scale-105">
              Get in touch 
              <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#work" className={`transition-all duration-300 hover:scale-105 px-6 py-3 rounded-lg font-medium ${
              isDark ? 'bg-slate-700 hover:bg-slate-600' : 'bg-white hover:bg-slate-100 shadow-lg'
            }`}>
              View my work
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className={`py-20 transition-colors duration-300 ${isDark ? 'bg-slate-800/50' : 'bg-white/50'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 className="w-12 h-12 text-blue-500 mb-4" />,
                title: "Front-end Development",
                desc: "Building responsive and performant web applications using React, TypeScript, and modern CSS frameworks."
              },
              {
                icon: <Layout className="w-12 h-12 text-emerald-500 mb-4" />,
                title: "WordPress Development",
                desc: "Creating custom themes, plugins, and optimizing WordPress sites for performance and SEO."
              },
              {
                icon: <ShoppingBag className="w-12 h-12 text-purple-500 mb-4" />,
                title: "E-commerce Solutions",
                desc: "Implementing WooCommerce and custom e-commerce solutions with secure payment integrations."
              }
            ].map((skill, index) => (
              <div 
                key={index}
                className={`group p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isDark ? 'bg-slate-700/50 hover:bg-slate-700' : 'bg-white hover:shadow-xl'
                }`}
              >
                {skill.icon}
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className={isDark ? 'text-slate-300' : 'text-slate-600'}>{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
                title: "Luxury Fashion E-commerce",
                desc: "Custom WooCommerce solution with advanced filtering and AR try-on feature.",
                tags: ["React", "WordPress"]
              },
              {
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2340",
                title: "SaaS Analytics Dashboard",
                desc: "Real-time analytics dashboard with dynamic data visualization.",
                tags: ["TypeScript", "Tailwind"]
              }
            ].map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl">
                <img 
                  src={project.img}
                  alt={project.title}
                  className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-90 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-slate-300 mb-4">{project.desc}</p>
                  <div className="flex gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 transition-colors duration-300 ${isDark ? 'bg-slate-800/50' : 'bg-white/50'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Let's Work Together</h2>
          <div className="max-w-2xl mx-auto flex flex-col gap-6">
            {[
              { icon: <Mail className="w-6 h-6 text-blue-500" />, text: "contact@yhya.dev", href: "mailto:contact@yhya.dev" },
              { icon: <Github className="w-6 h-6" />, text: "GitHub", href: "https://github.com" },
              { icon: <Linkedin className="w-6 h-6 text-blue-500" />, text: "LinkedIn", href: "https://linkedin.com" }
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('mailto') ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isDark ? 'bg-slate-700/50 hover:bg-slate-700' : 'bg-white hover:shadow-xl'
                }`}
              >
                {contact.icon}
                <span>{contact.text}</span>
                <ExternalLink className="w-5 h-5 ml-auto transform group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t transition-colors duration-300 py-8 ${
        isDark ? 'border-slate-700/50 text-slate-400' : 'border-slate-200 text-slate-600'
      }`}>
        <div className="container mx-auto px-6 text-center">
          © {new Date().getFullYear()} Yhya. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
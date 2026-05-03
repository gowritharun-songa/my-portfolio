'use client'
import { useState } from "react";
import { ShoppingBag, ShoppingCart, Music, Hand, Gem, ExternalLink, Github, X, CheckCircle2, Feather } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      icon: <ShoppingBag size={40} className="text-blue-600 dark:text-blue-400" />,
      title: "Have IT – Creator Marketplace",
      date: "Oct 2025",
      description: "Built a marketplace platform connecting creators with customers, featuring JWT authentication, merchant dashboards, and dynamic product showcases.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      viewLink: "https://haveit-frontend.onrender.com",
      githubLink: "https://github.com/gowritharun-songa/HaveIT"
    },
    {
      id: 2,
      icon: <ShoppingCart size={40} className="text-blue-600 dark:text-blue-400" />,
      title: "Shoe Fusion – E-commerce",
      date: "Feb – Mar 2025",
      description: "Led a team of four to build a full-stack MERN e-commerce platform. Designed MongoDB schemas, built RESTful APIs, and handled product and user data.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      githubLink: "https://github.com/gowritharun-songa/Shoe-Fusion"
    },
    {
      id: 3,
      icon: <Music size={40} className="text-blue-600 dark:text-blue-400" />,
      title: "Music Player – Java",
      date: "April 2025",
      description: "Developed a CLI-based music player using Java Sound API with playback controls and file handling.",
      technologies: ["Java", "Java Sound API"],
      githubLink: "https://github.com/gowritharun-songa/Music-Player"
    },
    {
      id: 4,
      icon: <Hand size={40} className="text-blue-600 dark:text-blue-400" />,
      title: "Rock Paper Scissors",
      date: "March 2025",
      description: "Developed a simple Rock - Paper - Scissors game using the frontend tech stack.",
      technologies: ["HTML", "CSS", "JavaScript"],
      viewLink: "https://gowritharun-songa.github.io/Rock-Paper-Scissors/",
      githubLink: "https://github.com/gowritharun-songa/Rock-Paper-Scissors"
    },
    {
      id: 5,
      icon: <Gem size={40} className="text-blue-600 dark:text-blue-400" />,
      title: "Jewellery Security",
      date: "Nov 2025",
      description: "Detects motion using ultrasonic distance measurements and triggers a buzzer alarm when someone comes near the jewellery.",
      technologies: ["C++", "Arduino"],
      githubLink: "https://github.com/gowritharun-songa/Jewellery-Security"
    },
    {
      id: 6,
      icon: <Feather size={40} className="text-blue-600 dark:text-blue-400" />,
      title: "Memory Archive",
      date: "Feb 2026",
      description: "Memory Archive is a full-stack application for storing and sharing personal memories.",
      technologies: ["Next.js", "MongoDB", "Express", "Tailwind CSS"],
      viewLink: "https://memory-archive-two.vercel.app",
      githubLink: "https://github.com/gowritharun-songa/memory-archive"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-blue-600/80 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-xl transition-all duration-500 group flex flex-col"
            >
              <div className="p-8 flex items-center justify-center bg-slate-50 dark:bg-slate-950 group-hover:bg-blue-600/5 transition-colors h-48 relative overflow-hidden">
                <div className="z-10 group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100">
                  {project.icon}
                </div>
                <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-400 dark:text-slate-600 tracking-widest uppercase">
                  {project.date}
                </div>
              </div>
              
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-2.5 rounded-xl bg-slate-900 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold transition-all shadow-sm"
                  >
                    Details
                  </button>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white transition-all border border-slate-200 dark:border-slate-700"
                    aria-label="View Code"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white dark:bg-slate-900 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  {selectedProject.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white">{selectedProject.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{selectedProject.date}</p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Project Overview</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Key Features & Achievements</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.id === 1 && (
                      <>
                        <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                          <CheckCircle2 size={18} className="text-green-500 mt-1 flex-shrink-0" />
                          <span>Secure JWT Authentication & Authorization</span>
                        </li>
                        <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                          <CheckCircle2 size={18} className="text-green-500 mt-1 flex-shrink-0" />
                          <span>Merchant Dashboard for Product Management</span>
                        </li>
                        <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                          <CheckCircle2 size={18} className="text-green-500 mt-1 flex-shrink-0" />
                          <span>Responsive Dynamic Product Catalog</span>
                        </li>
                        <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                          <CheckCircle2 size={18} className="text-green-500 mt-1 flex-shrink-0" />
                          <span>Scalable MERN Architecture</span>
                        </li>
                      </>
                    )}
                    {selectedProject.id === 2 && (
                      <>
                        <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                          <CheckCircle2 size={18} className="text-green-500 mt-1 flex-shrink-0" />
                          <span>Complex MongoDB Schema Design</span>
                        </li>
                        <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                          <CheckCircle2 size={18} className="text-green-500 mt-1 flex-shrink-0" />
                          <span>Team Leadership (Managed 4 Developers)</span>
                        </li>
                        <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                          <CheckCircle2 size={18} className="text-green-500 mt-1 flex-shrink-0" />
                          <span>RESTful API Implementation</span>
                        </li>
                        <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                          <CheckCircle2 size={18} className="text-green-500 mt-1 flex-shrink-0" />
                          <span>State Management for Cart & Checkout</span>
                        </li>
                      </>
                    )}
                    {(selectedProject.id !== 1 && selectedProject.id !== 2) && (
                      <>
                        <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                          <CheckCircle2 size={18} className="text-green-500 mt-1 flex-shrink-0" />
                          <span>Built with performance in mind</span>
                        </li>
                        <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                          <CheckCircle2 size={18} className="text-green-500 mt-1 flex-shrink-0" />
                          <span>Clean and maintainable code structure</span>
                        </li>
                        <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                          <CheckCircle2 size={18} className="text-green-500 mt-1 flex-shrink-0" />
                          <span>Responsive design for all devices</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs border border-slate-200 dark:border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-8">
                  {selectedProject.viewLink && (
                    <a 
                      href={selectedProject.viewLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-xl shadow-blue-600/20"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  <a 
                    href={selectedProject.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold transition-all border border-slate-200 dark:border-slate-700"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
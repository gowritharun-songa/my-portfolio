import { Mail, Github, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: "GitHub", icon: <Github size={20} />, url: "https://github.com/gowritharun-songa" },
    { name: "LinkedIn", icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/gowri-tharun/" },
    { name: "Email", icon: <Mail size={20} />, url: "mailto:gowritharun461@gmail.com" },
    { name: "Twitter", icon: <Twitter size={20} />, url: "https://x.com/GowriTharun" },
    { name: "Instagram", icon: <Instagram size={20} />, url: "https://www.instagram.com/chinnu_leo_/" }
  ];

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-slate-800 pb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">GT.</h3>
            <p className="text-slate-400 leading-relaxed max-w-xs">
              Full Stack Developer passionate about creating innovative web solutions and embedded systems. 
              Let&apos;s build something amazing together.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#certifications" className="hover:text-blue-400 transition-colors">Certifications</a></li>
              <li><a href="#contact-form" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Connect</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-800 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Gowri Tharun Songa. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
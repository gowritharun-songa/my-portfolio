import React from 'react';
import { Github, Linkedin, Mail, Twitter, Facebook, Instagram } from 'lucide-react';
import '../styles/Fotter.css';

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      name: "GitHub",
      icon: Github,
      url: "https://github.com/gowritharun-songa"
    },
    {
      id: 2,
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/gowri-tharun/"
    },
    {
      id: 3,
      name: "Email",
      icon: Mail,
      url: "mailto:gowritharun461@gmail.com"
    },
    {
      id: 4,
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/GowriTharun"
    },
    {
      id: 5,
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/chinnu.songa"
    },
    {
      id: 6,
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/chinnu_leo_/"
    }
  ];

  const quickLinks = [
    { name: "About", url: "#about" },
    { name: "Skills", url: "#skills" },
    { name: "Projects", url: "#projects" },
    { name: "Certifications", url: "#certifications" },
    { name: "Contact", url: "#contact" }
  ];

  return (
    <footer className="footer">
      <div className="footer-wrapper" id='contact'>
        {/* Main Content */}
        <div className="footer-grid">
          {/* About */}
          <div className="footer-about">
            <h3 className="footer-name">Songa Gowri Tharun</h3>
            <p className="footer-desc">
              Full Stack Developer passionate about creating innovative web
              solutions and embedded systems. Let’s build something amazing
              together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="footer-social">
            <h4>Connect With Me</h4>
            <div className="social-icons">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Gowri Tharun Songa. All rights reserved.
          </p>

          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

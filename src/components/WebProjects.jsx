import { ShoppingBag, ShoppingCart, Music, HandFist, Paperclip, ScissorsIcon, Scissors, Hand, Gem, GemIcon, FeatherIcon } from 'lucide-react';
import '../styles/WebProjects.css';
import { GiRock } from 'react-icons/gi';
import { FaMemory, FaPaperPlane } from 'react-icons/fa';
import { GoNumber } from 'react-icons/go';
import { BsGem, BsMemory } from 'react-icons/bs';
import { BiMemoryCard } from 'react-icons/bi';
import { MdMemory } from 'react-icons/md';
import { GrMemory } from 'react-icons/gr';
import { LiaMemorySolid } from 'react-icons/lia';

/* ===== SINGLE PROJECT CARD ===== */
const ProjectCard = ({
  icon: Icon,
  title,
  description,
  technologies,
  viewLink,
  githubLink,
  date
}) => {
  return (
    <div className="project-card">
      {/* Icon Header */}
      <div className="project-card-header">
        <Icon size={64} />
      </div>

      {/* Content */}
      <div className="project-card-body">
        <h3 className="project-title">{title}</h3>
        {date && <p className="project-date">{date}</p>}

        <p className="project-description">{description}</p>

        {/* Technologies */}
        <div className="project-tech">
          {technologies.map((tech, idx) => (
            <span className="project-tech-chip" key={idx}>
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="project-actions">
          {viewLink && viewLink !== "#" && (
            <button
              className="project-btn"
              onClick={() => window.open(viewLink, '_blank')}
            >
              Live Demo
            </button>
          )}

          <button
            className="project-btn"
            onClick={() => window.open(githubLink, '_blank')}
          >
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

/* ===== PROJECTS SECTION ===== */
const WebProjects = () => {
  const projects = [
    {
      id: 1,
      icon: ShoppingBag,
      title: "Have IT – Creator Marketplace Platform",
      date: "Oct 2025",
      description:
        "Built a marketplace platform connecting creators with customers, featuring JWT authentication, merchant dashboards, and dynamic product showcases.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      viewLink: "https://haveit-frontend.onrender.com",
      githubLink: "https://github.com/gowritharun-songa/HaveIT"
    },
    {
      id: 2,
      icon: ShoppingCart,
      title: "Shoe Fusion – E-commerce Website",
      date: "Feb – Mar 2025",
      description:
        "Led a team of four to build a full-stack MERN e-commerce platform. Designed MongoDB schemas, built RESTful APIs, and handled product and user data.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      // viewLink: "#",
      githubLink: "https://github.com/gowritharun-songa/Shoe-Fusion"
    },
    {
      id: 3,
      icon: Music,
      title: "Music Player – Java",
      date: "April 2025",
      description:
        "Developed a CLI-based music player using Java Sound API with playback controls and file handling.",
      technologies: ["Java", "Java Sound API"],
      viewLink: "#",
      githubLink: "https://github.com/gowritharun-songa/Music-Player"
    },
    {
      id: 4,
      icon: HandFist,
      title: "Rock Paper Scissors",
      date: "March 2025",
      description: 
        "Developed a simple Rock - Paper - Scissors game using the frontend tech stack",
      technologies: ["HTML", "CSS", "JavaScript"],
      viewLink: "https://gowritharun-songa.github.io/Rock-Paper-Scissors/",
      githubLink: "https://github.com/gowritharun-songa/Rock-Paper-Scissors"
    },
    {
      id: 5,
      icon: BsGem,
      title: "Jwellery Security",
      date: "November 2025",
      description: 
      "Detects motion using ultrasonic distance measurements Triggers a buzzer alarm when someone comes near the jewellery",
      technologies: ["C++", "Arduino"],
      viewLink: "#",
      githubLink: "https://github.com/gowritharun-songa/Jewellery-Security"
    },
    {
      id: 6,
      icon: FeatherIcon,
      title: "Memory Archive",
      date: "February 2026",
      description: 
      "Memory Archive is a full-stack application for storing and sharing personal memories",
      technologies: ["Next.js", "MongoDB", "Express", "Tailwind CSS"],
      viewLink: "https://memory-archive-ten.vercel.app",
      githubLink: "https://github.com/gowritharun-songa/memory-archive"
    }
  ];

  return (
    <section className="projects-section fade-up" id="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default WebProjects;

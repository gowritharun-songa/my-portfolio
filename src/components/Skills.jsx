import { Code, Globe, Cpu, Wrench } from 'lucide-react';
import '../styles/Skills.css'

const Skills = () => {
  const skills = [
    {
      icon: <Code size={24} />,
      title: "Programming Languages",
      items: ["C", "Python", "Java", "JavaScript", "Embedded C"]
    },
    {
      icon: <Globe size={24} />,
      title: "Web Technologies",
      items: ["HTML5", "CSS3", "React.js", "Node.js", "Express.js", "MongoDB"]
    },
    {
      icon: <Cpu size={24} />,
      title: "Embedded Systems",
      items: ["Arduino", "LPC2378", "STM32", "ESP8266", "Sensors"]
    },
    {
      icon: <Wrench size={24} />,
      title: "Tools & Platforms",
      items: ["Keil uVision", "ThingSpeak", "Blynk", "MongoDB Atlas", "Git"]
    }
  ];

  return (
    <section className="skills-section fade-up" id='skills'>
      <div className="skills-wrapper">
        <h1 className="skills-title">Skills & Technologies</h1>

        <div className="skills-grid">
          {skills.map((section, idx) => (
            <div className="skill-card" key={idx}>
              <div className="skill-card-header">
                <div className="skill-icon">{section.icon}</div>
                <h2>{section.title}</h2>
              </div>

              <div className="skill-items">
                {section.items.map((item, itemIdx) => (
                  <span className="skill-chip" key={itemIdx}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

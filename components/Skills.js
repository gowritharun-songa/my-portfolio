import { Code, Globe, Cpu, Wrench } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: <Code className="text-blue-600 dark:text-blue-400" size={28} />,
      title: "Programming",
      items: ["C", "Python", "Java", "JavaScript", "Embedded C"]
    },
    {
      icon: <Globe className="text-blue-600 dark:text-blue-400" size={28} />,
      title: "Web Tech",
      items: ["HTML5", "CSS3", "React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Next.js"]
    },
    {
      icon: <Cpu className="text-blue-600 dark:text-blue-400" size={28} />,
      title: "Embedded",
      items: ["Arduino", "LPC2378", "STM32", "ESP8266", "Sensors"]
    },
    {
      icon: <Wrench className="text-blue-600 dark:text-blue-400" size={28} />,
      title: "Tools",
      items: ["Git", "GitHub", "MongoDB Atlas", "Postman", "Vercel", "Keil uVision"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1.5 bg-blue-600/80 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((section, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-2xl bg-slate-50/50 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="flex flex-col items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{section.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {section.items.map((item, itemIdx) => (
                  <span 
                    key={itemIdx} 
                    className="px-3 py-1 rounded-lg text-xs font-bold tracking-wide bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 transition-colors"
                  >
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
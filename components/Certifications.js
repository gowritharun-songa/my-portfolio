import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "C for Everyone",
      issuer: "Coursera",
      des: "A beginner-friendly course introducing programming fundamentals using the C language."
    },
    {
      id: 2,
      title: "JavaScript Essentials",
      issuer: "Cisco Networking Academy",
      des: "An introductory course to JavaScript and core programming concepts."
    },
    {
      id: 3,
      title: "Data Structures and Algorithms",
      issuer: "ScholarHat",
      des: "A comprehensive course covering fundamental and advanced data structures and algorithms."
    },
    {
      id: 4,
      title: "Python for Beginners",
      issuer: "Simplilearn",
      des: "An entry-level course designed to teach the basics of Python programming."
    },
    {
      id: 5,
      title: "Java Programming",
      issuer: "NPTEL",
      des: "A detailed course on Java programming covering object-oriented concepts."
    },
    {
      id: 6,
      title: "Front-end Web Development",
      issuer: "MindLuster",
      des: "A course focused on HTML, CSS, and JavaScript to build responsive web applications."
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Certifications</h2>
          <div className="w-20 h-1.5 bg-blue-600/80 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              className="p-7 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex flex-col gap-5">
                <div className="p-3.5 w-fit rounded-xl bg-slate-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-slate-100 dark:border-slate-700">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">{cert.title}</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">{cert.issuer}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {cert.des}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
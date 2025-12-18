import '../styles/CertificationCard.css';

const CertificationCard = ({ title, issuer, des }) => {
  return (
    <div className="cert-card fade-up " id='certifications'>
      <h3 className="cert-card-title">{title}</h3>
      <p className="cert-card-issuer">
        Issued by: <span>{issuer}</span>
      </p>
      <p className="cert-card-desc">{des}</p>
    </div>
  );
};

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "C for Everyone",
      issuer: "Coursera",
      des: "A beginner-friendly course introducing programming fundamentals using the C language, covering syntax, data types, control flow, functions, arrays, and pointers."
    },
    {
      id: 2,
      title: "JavaScript Essentials",
      issuer: "Cisco Networking Academy",
      des: "An introductory course to JavaScript and core programming concepts, teaching how to design, develop, and improve JavaScript programs from scratch."
    },
    {
      id: 3,
      title: "Data Structures and Algorithms",
      issuer: "ScholarHat",
      des: "A comprehensive certification course covering fundamental and advanced data structures, algorithms, sorting, searching, and complexity analysis."
    },
    {
      id: 4,
      title: "Python for Beginners",
      issuer: "Simplilearn",
      des: "An entry-level course designed to teach the basics of Python programming for beginners."
    },
    {
      id: 5,
      title: "Java Programming",
      issuer: "NPTEL",
      des: "A detailed course on Java programming covering object-oriented concepts and industry-relevant applications."
    },
    {
      id: 6,
      title: "Front-end Web Development",
      issuer: "MindLuster",
      des: "A course focused on HTML, CSS, and JavaScript to build responsive and interactive web applications."
    }
  ];

  return (
    <section className="cert-section">
      <h2 className="cert-section-title">Certifications</h2>

      <div className="cert-grid">
        {certifications.map(cert => (
          <CertificationCard
            key={cert.id}
            title={cert.title}
            issuer={cert.issuer}
            des={cert.des}
          />
        ))}
      </div>
    </section>
  );
};

export default Certifications;

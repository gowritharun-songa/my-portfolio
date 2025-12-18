
import profile from '../assests/profile.png'
import '../styles/About.css'
// import '../styles/App.css'
const About = () => {

  const name = "Songa Gowri Tharun";

  return(
    <>
      <div className="about-container fade-up" id="about">
        <div className="head">
            <h3>About me</h3>
        </div>
        <div className="image">
            <img src={profile} />
        </div>
        <div className="description">
            <h4>
                Hello, I'm <span>{name}</span>
            </h4>
            <p>
            I'm is an aspiring full-stack web developer pursuing a B.Tech in Electronics and Communication Engineering at Ramachandra College of Engineering, set to graduate in 2026. With hands-on experience in MERN stack projects like a creator marketplace platform (Have IT) and an e-commerce site (Shoe Fusion), plus internships in full-stack development at StudyOwl Education and embedded systems at Blackbucks, he excels in technologies such as React, Node.js, Express.js, MongoDB, Java, and Python. His skills include problem-solving, team leadership, and adaptability, complemented by certifications in C, Python, JavaScript, Java, and data structures. Interests include creative character design, wedding photography, and food exploration.
            </p>
        </div>
      </div>
    </>
  );
}

export default About;
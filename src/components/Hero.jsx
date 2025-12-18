
import { LuLinkedin, LuGithub, LuMail } from "react-icons/lu";
import '../styles/Hero.css'

const Hero = () => {
  return(
    <>
      <div className="hero-container fade-up">
        <div className="name">
          <h2>
            Songa Gowri Tharun
          </h2>
        </div>
        <div className="roles">
          <h3>
            Web Developer
          </h3>
         | 
         <h3>
            Problem solver
         </h3>
        </div>
        <div className="description">
          <div className="main-descrption">
            <p>
            A passionate software developer who loves solving complex problems with simple, creative solutions. Skilled in MERN and Java, I enjoy transforming ideas into clean, scalable, and impactful applications.
            </p>
          </div>
          <div className="social-accounts">
            <div className="links">
            
              <a> <LuLinkedin /></a>
              <a> <LuGithub /></a>
              <a> <LuMail /> </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
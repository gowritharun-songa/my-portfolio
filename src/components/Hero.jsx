
import { LuLinkedin, LuGithub, LuMail } from "react-icons/lu";
import '../styles/Hero.css'
import {SiLeetcode} from "react-icons/si";
import {TbBrandLeetcode} from "react-icons/tb";

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
            
              <a href="https://www.linkedin.com/in/gowri-tharun/" target='_blank'> <LuLinkedin /></a>
              <a href="https://github.com/gowritharun-songa" target='_blank'> <LuGithub /></a>
              <a href="mailto:gowritharun461@gmail.com" target='_blank'> <LuMail /> </a>
              <a href="https://leetcode.com/u/afHxrJEyGX/" target="_blank"><SiLeetcode/></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
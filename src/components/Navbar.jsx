
import '../styles/Navbar.css'

const Navbar = () => {
  return(
    <>
      <div className="nav-bar-container">
        <div className="name">
          <h2 className="name-section">
            Gowri Tharun
          </h2>
        </div>
        <div className="nav-links">
          <div className="links">
            <ul>
              <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#contact">Contact</a></li>

            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
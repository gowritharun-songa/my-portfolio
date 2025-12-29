
import './App.css';   
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/CertificationsCard';
import Projects from './components/WebProjects';
import Footer from './components/Fotter';

const App = () => {
  return (
    <div className="main-container">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Footer />
    </div>
  );
};

export default App;
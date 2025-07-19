import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(0);

  const skills = [
    'Web Developer',
    'React Developer',
    'Content Writer', 
    'Prompt engineer',
  ];
  const codeSnippets = [
    '&lt;div&gt;Hello World&lt;/div&gt;',
    'const [state, setState] = useState()',
    'function App() { return (...) }',
    'npm install react',
    'git commit -m "feat: new feature"',
    'display: flex; justify-content: center;'
  ];

  const binaryStrings = [
    '1010101010\n0101010101\n1010101010\n0101010101',
    '1100110011\n0011001100\n1100110011\n0011001100',
    '1111000011\n0000111100\n1111000011\n0000111100',
    '1001100110\n0110011001\n1001100110\n0110011001',
    '1010011001\n0101100110\n1010011001\n0101100110',
    '1100101010\n0011010101\n1100101010\n0011010101'
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Cycling through skills
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  const handleDownloadCV = () => {
    // Open CV in new tab
    window.open('https://drive.google.com/file/d/1qjCzGeVu0CscP6RPlOLmp2nrnGEVDfeB/view?usp=sharing', '_blank');
  };

  const handleContact = () => {
    // Smooth scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-background">
        {/* Floating Code Elements */}
        <div className="floating-code">
          <div className="code-element code-1">
            <div dangerouslySetInnerHTML={{ __html: codeSnippets[0] }} />
          </div>
          <div className="code-element code-2">
            <div dangerouslySetInnerHTML={{ __html: codeSnippets[1] }} />
          </div>
          <div className="code-element code-3">
            <div dangerouslySetInnerHTML={{ __html: codeSnippets[2] }} />
          </div>
          <div className="code-element code-4">
            <div dangerouslySetInnerHTML={{ __html: codeSnippets[3] }} />
          </div>
          <div className="code-element code-5">
            <div dangerouslySetInnerHTML={{ __html: codeSnippets[4] }} />
          </div>
          <div className="code-element code-6">
            <div dangerouslySetInnerHTML={{ __html: codeSnippets[5] }} />
          </div>
        </div>

        {/* Tech Icons */}
        <div className="tech-icons">
          <div className="tech-icon tech-1">
            <span>⚛️</span>
          </div>
          <div className="tech-icon tech-2">
            <span>🔧</span>
          </div>
          <div className="tech-icon tech-3">
            <span>💻</span>
          </div>
          <div className="tech-icon tech-4">
            <span>🚀</span>
          </div>
        </div>

        {/* Geometric Shapes */}
        <div className="geometric-shapes">
          <div className="geo-shape geo-1"></div>
          <div className="geo-shape geo-2"></div>
          <div className="geo-shape geo-3"></div>
          <div className="geo-shape geo-4"></div>
        </div>

        {/* Binary Rain */}
        <div className="binary-rain">
          <div className="binary-column binary-1">
            <div dangerouslySetInnerHTML={{ __html: binaryStrings[0] }} />
          </div>
          <div className="binary-column binary-2">
            <div dangerouslySetInnerHTML={{ __html: binaryStrings[1] }} />
          </div>
          <div className="binary-column binary-3">
            <div dangerouslySetInnerHTML={{ __html: binaryStrings[2] }} />
          </div>
          <div className="binary-column binary-4">
            <div dangerouslySetInnerHTML={{ __html: binaryStrings[3] }} />
          </div>
          <div className="binary-column binary-5">
            <div dangerouslySetInnerHTML={{ __html: binaryStrings[4] }} />
          </div>
          <div className="binary-column binary-6">
            <div dangerouslySetInnerHTML={{ __html: binaryStrings[5] }} />
          </div>
        </div>
        
        {/* Mouse Follower */}
        <div 
          className="mouse-follower"
          style={{
            left: mousePosition.x - 100,
            top: mousePosition.y - 100
          }}
        ></div>
      </div>

      <div className="hero-container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="hero-text">
            <div className="greeting">
              <span className="wave">👋</span>
              <span>Hello, I'm</span>
            </div>
            
            <h1 className="hero-title">
              <span className="name-highlight">Satya Dhanabal</span>
            </h1>
            
            <div className="hero-subtitle">
              <span className="typing-text">
                {skills[currentSkill]}
              </span>
              <span className="cursor">|</span>
            </div>
            
            <p className="hero-description">
              I'm an aspiring Software Engineer with a B.E. in Electronics and Communication Engineering from K. Ramakrishnan College Of Engineering (CGPA: 8.5). Currently undergoing hands-on full stack development training at Vdart, I'm passionate about building responsive web applications using React.js, JavaScript, and modern web technologies. With experience in content writing and a strong foundation in programming, I love solving real-world problems through innovative digital solutions. I'm a quick learner, team player, and always eager to take on new challenges in the ever-evolving world of technology.
            </p>

            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={handleDownloadCV}>
                <span>Download CV</span>
                <div className="btn-ripple"></div>
              </button>
              <button className="btn btn-secondary" onClick={handleContact}>
                <span>Get In Touch</span>
                <div className="btn-ripple"></div>
              </button>
            </div>

            <div className="social-links">
              <a href="https://github.com/SatyaDhanabal" className="social-link" aria-label="GitHub">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/satya-dhanabal" className="social-link" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
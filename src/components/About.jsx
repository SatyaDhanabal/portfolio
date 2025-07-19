import React, { useState, useEffect } from 'react';
import '../styles/About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { category: 'Programming Languages', items: ['Java', 'C', 'JavaScript'], icon: '💻' },
    { category: 'Frontend', items: ['React.js', 'HTML', 'CSS'], icon: '🎨' },
    { category: 'Backend', items: ['Node.js'], icon: '⚙️' },
    { category: 'Database', items: ['MySQL', 'SQL'], icon: '🗄️' },
    { category: 'Tools & Platforms', items: ['GitHub', 'VS Code', 'MS Office'], icon: '🛠️' },
    { category: 'AI Tools', items: ['ChatGPT', 'Gemini', 'Claude AI', 'Copilot', 'Notion AI', 'Perplexity AI', 'Midjourney', 'DALL·E'], icon: '🤖' }
  ];

  const techStackItems = [
    'React', 'JavaScript', 'Node.js', 'Java', 'MySQL', 'HTML', 'CSS', 'GitHub', 'VS Code', 'ChatGPT'
  ];

  const generateTechItems = () => {
    return techStackItems.map((tech, index) => (
      <div
        key={index}
        className="tech-item"
        style={{
          animationDelay: `${Math.random() * 10}s`,
          animationDuration: `${15 + Math.random() * 10}s`
        }}
      >
        {tech}
      </div>
    ));
  };

  const generateParticles = () => {
    return Array.from({ length: 6 }, (_, index) => (
      <div
        key={index}
        className="particle"
        style={{
          animationDelay: `${Math.random() * 25}s`,
          animationDuration: `${20 + Math.random() * 10}s`
        }}
      />
    ));
  };

  return (
    <section className={`about ${isVisible ? 'animate-in' : ''}`}>
      {/* Animated Tech Stack Background */}
      <div className="tech-stack-bg">
        {generateTechItems()}
        <div className="tech-particles">
          {generateParticles()}
        </div>
      </div>

      <div className="about-container">
        <div className="skills-section">
          <h4 className="section-title">Technical Skills</h4>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`skill-card ${activeSkill === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveSkill(index)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div className="skill-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <h5>{skill.category}</h5>
                </div>
                <div className="skill-items">
                  {skill.items.map((item, idx) => (
                    <span key={idx} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
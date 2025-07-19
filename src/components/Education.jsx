import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Code, 
  Lightbulb, 
  Zap, 
  BookOpen, 
  Building,
  Trophy,
  Brain,
  Cpu,
  Rocket,
  Calendar,
  MapPin
} from 'lucide-react';
import '../styles/Education.css';

const Education = () => {
  const [activeSection, setActiveSection] = useState(null);

  const educationData = [
    {
      id: 'degree',
      title: 'B.E. Electronics and Communication Engineering',
      institution: 'K. Ramakrishnan College Of Engineering',
      duration: '2021-2025',
      achievement: 'CGPA: 8.5',
      icon: <GraduationCap className="icon" />,
      color: 'emerald'
    },
    {
      id: 'higher',
      title: 'Higher Secondary Education',
      institution: 'St. James Matriculation Higher Secondary School',
      duration: '2019-2021',
      achievement: 'XII: 86% | X: 82%',
      icon: <BookOpen className="icon" />,
      color: 'blue'
    }
  ];

  const experienceData = [
    {
      id: 'vdart',
      company: 'Vdart Trichy',
      position: 'Full Stack Developer Trainee',
      duration: 'Current',
      description: 'Currently undergoing hands-on training in full stack development by working on real-time web projects using technologies such as HTML, CSS, JavaScript, React.js, and Node.js.',
      icon: <Code className="icon" />,
      color: 'rose',
      status: 'ongoing'
    },
    {
      id: 'smartinternz',
      company: 'SMARTINTERNZ',
      position: 'Salesforce Administrator',
      duration: '2024',
      description: 'Customized reports and dashboards for business insights; managed user access and profiles. Improved team productivity by streamlining record-level permissions.',
      icon: <Zap className="icon" />,
      color: 'amber',
      status: 'completed'
    },
    {
      id: 'pacific',
      company: 'PACIFIC CREATION',
      position: 'Content Writer',
      duration: '3 Months',
      description: 'Created 10+ learning resources and articles on C programming for beginner-level learners. Simplified complex programming topics to improve student understanding and engagement.',
      icon: <Lightbulb className="icon" />,
      color: 'indigo',
      status: 'completed'
    }
  ];

  const certificationData = [
    {
      id: 'ai-india',
      name: 'AI for India 2.0',
      provider: 'GUVI',
      icon: <Brain className="icon" />,
      color: 'emerald'
    },
    {
      id: 'gen-ai',
      name: 'Career Essentials in Generative AI',
      provider: 'Microsoft and LinkedIn',
      icon: <Cpu className="icon" />,
      color: 'violet'
    },
    {
      id: 'c-prog',
      name: 'C Programming for Beginners',
      provider: 'T4TEQ',
      icon: <Code className="icon" />,
      color: 'rose'
    },
    {
      id: 'ai-master',
      name: 'Generative AI Mastermind',
      provider: 'Outskill',
      icon: <Rocket className="icon" />,
      color: 'amber'
    }
  ];

  return (
    <div className="education-minimal">
      {/* Education Section */}
      <div className="education-section">
        <div className="container">
          <div className="section-header">
            <div className="section-icon">
              <GraduationCap className="header-icon" />
            </div>
            <h2 className="section-title">Education</h2>
          </div>
          
          <div className="timeline">
            {educationData.map((item, index) => (
              <div key={item.id} className="timeline-item">
                <div className={`timeline-dot ${item.color}`}>
                  {item.icon}
                </div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3 className="timeline-title">{item.title}</h3>
                    <span className="timeline-duration">
                      <Calendar className="duration-icon" />
                      {item.duration}
                    </span>
                  </div>
                  <p className="timeline-institution">
                    <Building className="institution-icon" />
                    {item.institution}
                  </p>
                  <div className="timeline-achievement">
                    <Trophy className="achievement-icon" />
                    <span>{item.achievement}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="experience-section">
        <div className="container">
          <div className="section-header">
            <div className="section-icon">
              <Briefcase className="header-icon" />
            </div>
            <h2 className="section-title">Experience</h2>
          </div>
          
          <div className="timeline">
            {experienceData.map((item, index) => (
              <div key={item.id} className="timeline-item">
                <div className={`timeline-dot ${item.color}`}>
                  {item.icon}
                </div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div className="company-info">
                      <h3 className="timeline-title">{item.company}</h3>
                      <p className="timeline-position">{item.position}</p>
                    </div>
                    <span className={`status-badge ${item.status}`}>
                      {item.duration}
                    </span>
                  </div>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="certifications-section">
        <div className="container">
          <div className="section-header">
            <div className="section-icon">
              <Award className="header-icon" />
            </div>
            <h2 className="section-title">Certifications</h2>
          </div>
          
          <div className="certifications-list">
            {certificationData.map((item, index) => (
              <div key={item.id} className="cert-item">
                <div className={`cert-icon ${item.color}`}>
                  {item.icon}
                </div>
                <div className="cert-content">
                  <h3 className="cert-name">{item.name}</h3>
                  <p className="cert-provider">{item.provider}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Education;
import React, { useState } from 'react';
import '../styles/Projects.css';


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Enhanced project data with detailed information
  const projects = [
    {
      id: 1,
      title: "Service website",
      description: "-  Built a responsive website for Sri Raam Electronics showcasing inverter and battery services, with booking and payment features, emphasizing clean UI/UX for better customer engagement.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=250&fit=crop",
      liveLink: "https://your-project-demo.com",
      githubLink: "https://github.com/yourusername/ecommerce-platform",
      features: [
        "User authentication and authorization",
        "Shopping cart and checkout system",
        "Payment gateway integration",
        "Admin dashboard for product management",
        "Order tracking and history",
        "Responsive design for all devices",
        "Search and filtering functionality",
        "Email notifications"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "JWT", "Tailwind CSS"],
      duration: "3-4 months",
      role: "Full-stack Developer",
      status: "Completed",
      challenges: "Implementing secure payment processing and optimizing database queries for large product catalogs were the main challenges. Solved by integrating Stripe's secure payment system and implementing efficient indexing strategies."
    },
    {
      id: 2,
      title: "Call analyser Feedback",
      description: "A responsive weather application that provides real-time weather data and forecasts.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      liveLink: "https://your-weather-app.com",
      githubLink: "https://github.com/yourusername/weather-dashboard",
      features: [
        "Real-time weather data",
        "5-day weather forecast",
        "Location-based weather",
        "Weather maps and visualizations",
        "Favorite locations",
        "Weather alerts and notifications",
        "Historical weather data",
        "Mobile-responsive design"
      ],
      technologies: ["React", "OpenWeatherMap API", "Chart.js", "Geolocation API", "CSS3", "JavaScript"],
      duration: "2 months",
      role: "Frontend Developer",
      status: "Completed",
      challenges: "Handling different weather API responses and creating smooth animations for weather transitions. Implemented robust error handling and used CSS animations for better user experience."
    },
    {
      id: 3,
      title: "Podcast Website using AI Tools ",
      description: " Built a responsive podcast website using React.js with AI and smart episode suggestions. Designed clean UI with tabs like Overview, Episodes, and More Like This to enhance user experience..",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop",
      liveLink: "https://your-task-app.com",
      githubLink: "https://github.com/yourusername/task-management",
      features: [
        "Real-time task updates",
        "Team collaboration tools",
        "Project boards and kanban view",
        "Task assignment and tracking",
        "File attachments and comments",
        "Deadline reminders",
        "Progress tracking and analytics",
        "Multi-user permissions"
      ],
      technologies: ["React", "Socket.io", "Node.js", "PostgreSQL", "Express", "JWT", "Material-UI"],
      duration: "4 months",
      role: "Full-stack Developer",
      status: "Completed",
      challenges: "Implementing real-time synchronization across multiple users and managing complex state updates. Used Socket.io for real-time communication and implemented efficient state management with Redux."
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
      liveLink: "https://your-portfolio.com",
      githubLink: "https://github.com/yourusername/portfolio",
      features: [
        "Responsive design",
        "Smooth scroll animations",
        "Interactive project showcases",
        "Contact form with validation",
        "SEO optimized",
        "Fast loading performance",
        "Dark/Light theme toggle",
        "Blog section integration"
      ],
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Netlify", "EmailJS", "React Router"],
      duration: "1.5 months",
      role: "Frontend Developer",
      status: "Completed",
      challenges: "Creating smooth animations while maintaining good performance and ensuring cross-browser compatibility. Implemented lazy loading and optimized images to improve load times."
    },
    {
      id: 5,
      title: "AI Chatbot Platform",
      description: " Developed a frontend chatbot interface using React.js, integrating OpenAI for real-time responses. Implemented user and admin login features with focus on secure, responsive UI design",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      liveLink: "https://your-social-app.com",
      githubLink: "https://github.com/SatyaDhanabal/voice-new.git",
      features: [
        "Real-time messaging",
        "Post creation and sharing",
        "Like and comment system",
        "User profiles and following",
        "Image and video uploads",
        "Story feature",
        "Notifications system",
        "Privacy settings"
      ],
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Cloudinary", "JWT", "Redux"],
      duration: "5 months",
      role: "Full-stack Developer",
      status: "In Progress",
      challenges: "Handling real-time messaging at scale and implementing efficient media upload/storage. Used Socket.io for messaging and Cloudinary for media management with optimized compression."
    }
  ];

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const ExternalLinkIcon = () => (
    <svg className="project-icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 3V5H17.59L7.76 14.83L9.17 16.24L19 6.41V10H21V3M19 19H5V5H12V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V12H19V19Z"/>
    </svg>
  );

  const GitHubIcon = () => (
    <svg className="project-icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z"/>
    </svg>
  );

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2 className="projects-title">
          Featured Projects
        </h2>
        <div className="title-underline"></div>
      </div>
      
      <div className="projects-scroll-container">
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => handleCardClick(project)}
            >
              <div className="card-overlay"></div>
              
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
              />
              
              <h3 className="project-title">
                {project.title}
              </h3>
              
              <p className="project-description">
                {project.description}
              </p>
              
              
              </div>
          
          ))}
        </div>
      </div>

    </div>
  );
};

export default Projects;
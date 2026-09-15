
import assetSphereImg from '../images/assetSphere.png';
import vocinteraImg from '../images/landingPage_vocintera.png';
import agriSetuImg from '../images/agriSetu.png';
import routewizImg from '../images/welcome_page.png';
import mailImg from '../images/dashboard.png';
import studyplannerImg from '../images/StudyPlanner-LandingPage.png';
import { NavLink } from 'react-router';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowLeft } from 'react-icons/fi';

const allProjects = [
    {
        id: '1',
        title: "AssetSphere",
        projectImg: assetSphereImg,
        description: "A multi-tenant inventory management platform spanning 4+ core modules for organizations to track, book, and manage physical assets. Features RBAC across 3 user roles (org-admin, org-member, member), asset booking workflows, image storage, email notifications, and real-time analytics via scalable RESTful APIs.",
        gitUrl: "https://github.com/CodeXGautam/AssetSphere",
        liveUrl: "https://assetsphere.vercel.app",
        tech: ["Next.js", "React.js", "Node.js", "MongoDB", "JWT", "Tailwind CSS", "Cloudinary"]
    },
    {
        id: '2',
        title: "AgriSetu",
        projectImg: agriSetuImg,
        description: "A full-stack agricultural platform offering crop recommendations, disease detection across 4 crop types and 10+ disease categories, multilingual market insights, an AI chatbot with 24/7 text and voice support across 12+ languages, and a digital marketplace for agri-products.",
        gitUrl: "https://github.com/CodeXGautam/Agrisetu",
        liveUrl: "https://agrisetu-1.onrender.com/",
        tech: ["React", "Node.js", "Fast API", "MongoDB", "Express", "Tailwind CSS", "LangChain", "Mistral LLM", "Cloudinary", "Web Speech Api"]
    },
    {
        id: '3',
        title: "Vocintera",
        projectImg: vocinteraImg,
        description: "An AI-powered interview platform leveraging Google Gemini AI to conduct interactive voice interviews. Provides a seamless experience for candidates with real-time AI feedback and interview session management for interviewers.",
        gitUrl: "https://github.com/CodeXGautam/Vocintera",
        liveUrl: "https://vocintera.onrender.com/",
        tech: ["React", "Node.js", "Express", "Google GEN AI", "OpenRouter AI", "Web Speech Api", "MongoDB", "Tailwind CSS"]
    },
    {
        id: '4',
        title: "Mail Tracker Pro",
        projectImg: mailImg,
        description: "A Firefox extension that tracks emails in real time, providing detailed analytics on a comprehensive user dashboard. Has tracked over 13,000+ emails to date with live open/click rates, timestamps, and device analytics.",
        gitUrl: "https://github.com/CodeXGautam/mail-tracker",
        liveUrl: "https://addons.mozilla.org/addon/mail-tracker-pro/",
        tech: ["Firefox Extension", "JavaScript", "Dashboard", "Real-time Analytics"]
    },
    {
        id: '5',
        title: "RouteWizard",
        projectImg: routewizImg,
        description: "An intelligent ML-powered route optimization platform that finds the most efficient paths for delivery and travel. Uses advanced algorithms to minimize time and distance across complex multi-stop routes.",
        gitUrl: "https://github.com/CodeXGautam/routewiz",
        liveUrl: "https://routewiz.onrender.com/",
        tech: ["React", "Node.js", "Django", "MongoDB", "Express", "Nginx"]
    },
    {
        id: '6',
        title: "Study Planner AI",
        projectImg: studyplannerImg,
        description: "An AI-powered study planner that helps students break down tasks into actionable study sessions, optimize schedules with Google Calendar integration, and generate summaries from notes (PDFs/images).",
        gitUrl: "https://github.com/CodeXGautam/StudyPlanner-AI",
        liveUrl: "https://studyplanner-ai.onrender.com/",
        tech: ["React", "Node.js", "Express", "Google Calendar", "OpenRouter AI", "Mistral LLM", "MongoDB", "Tailwind CSS", "JWT Auth", "Cloudinary"]
    },
];

const AllProjects = () => {
    return (
        <div className="projects-page">
            {/* Navigation Header */}
            <motion.div
                className="projects-nav"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="page-width page-nav-inner">
                    <NavLink to="/" className="flex items-center space-x-3 group w-fit">
                        <div className="back-icon">
                            <FiArrowLeft className="w-4 h-4 text-white" />
                        </div>
                        <span className="back-label">
                            Back to Home
                        </span>
                    </NavLink>
                </div>
            </motion.div>

            {/* Main Content */}
            <main className="page-width projects-main">
                {/* Page Title */}
                <motion.div
                    className="page-intro"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="page-title">
                        A few things I’ve built
                    </h1>
                    <span className="heading-mark heading-mark-centered" />
                    <p className="page-subtitle">
                        A collection of projects showcasing full-stack engineering, AI integration, and creative problem-solving.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className="pinboard-grid all-projects-grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {allProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.08 * index }}
                            whileHover={{ y: -8 }}
                            className="project-card-wrap"
                        >
                            <article className="project-card">
                                    <div className="project-image-wrap">
                                        <img
                                            src={project.projectImg}
                                            alt={project.title}
                                            className="project-image"
                                        />
                                        <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
                                    </div>
                                    <div className="project-card-content">
                                    <div className="project-title-row"><h3>{project.title}</h3><span className="project-arrow"><FiExternalLink /></span></div>
                                    <p className="project-description">
                                        {project.description}
                                    </p>

                                    {/* Tech tags */}
                                    <div className="project-tags">
                                        {project.tech.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action buttons */}
                                    <div className="project-actions">
                                        <a
                                            href={project.gitUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link project-link-muted"
                                        >
                                            <FiGithub className="w-4 h-4" />
                                            GitHub
                                        </a>
                                        {project.liveUrl !== "#" ? (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link project-link-accent"
                                            >
                                                <FiExternalLink className="w-4 h-4" />
                                                Live Demo
                                            </a>
                                        ) : (
                                            <div className="project-link project-link-muted">
                                                Coming Soon
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </article>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Back to Home */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <NavLink
                        to="/"
                        className="outline-button"
                    >
                        <FiArrowLeft className="w-5 h-5" />
                        <span>Back to Portfolio</span>
                    </NavLink>
                </motion.div>
            </main>

            <div className="page-bottom-space"></div>
        </div>
    );
};

export default AllProjects;
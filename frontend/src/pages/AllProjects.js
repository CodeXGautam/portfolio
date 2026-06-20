
import assetSphereImg from '../images/assetSphere.png';
import vocinteraImg from '../images/landingPage_vocintera.png';
import agriSetuImg from '../images/agriSetu.png';
import routewizImg from '../images/welcome_page.png';
import mailImg from '../images/dashboard.png';
import chatbotImg from '../images/chatbot.png';
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
    {
        id: '7',
        title: "ChatBot",
        projectImg: chatbotImg,
        description: "A sleek AI chatbot web app built with React.js and Tailwind CSS. Leverages the Gemini API to handle user queries intelligently — users enter their questions and get fast, accurate AI-powered responses.",
        gitUrl: "https://github.com/CodeXGautam/Chatbot",
        liveUrl: "https://codexgautam.github.io/Chatbot/",
        tech: ["React", "Tailwind CSS", "Google Gemini", "REST Api"]
    },
];

const AllProjects = () => {
    return (
        <div className="min-h-screen relative transition-all duration-500">
            {/* Navigation Header */}
            <motion.div
                className="z-[1000] sticky top-0 bg-[#F8F5F2]/90 dark:bg-dark-bg-primary/90 backdrop-blur-md border-b border-amber-200 dark:border-dark-border-accent/30 transition-all duration-500"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <NavLink to="/" className="flex items-center space-x-3 group w-fit">
                        <div className="w-9 h-9 bg-gradient-to-r from-amber-500 to-yellow-500 dark:from-dark-warm-primary dark:to-dark-warm-secondary rounded-full flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-md shadow-amber-200 dark:shadow-dark-warm">
                            <FiArrowLeft className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-amber-800 dark:text-dark-warm-light font-bold text-lg group-hover:text-amber-600 dark:group-hover:text-dark-warm-primary transition-all duration-300">
                            Back to Home
                        </span>
                    </NavLink>
                </div>
            </motion.div>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Page Title */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-700 dark:text-dark-warm-light font-display mb-4 transition-all duration-500">
                        My Projects Portfolio
                    </h1>
                    <div className="flex bg-gradient-to-r from-amber-500 to-yellow-500 dark:from-dark-warm-primary dark:to-dark-warm-secondary w-32 sm:w-44 rounded-2xl h-1.5 -rotate-2 mx-auto mb-6 shadow-md shadow-amber-200 dark:shadow-dark-warm"></div>
                    <p className="text-lg text-[#7C5E3C] dark:text-dark-text-secondary max-w-2xl mx-auto leading-relaxed">
                        A collection of projects showcasing full-stack engineering, AI integration, and creative problem-solving.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
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
                            className="group"
                        >
                            <div className="bg-[#FAF7F2] dark:bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg dark:shadow-dark-lg p-5 border-2 border-amber-100 dark:border-dark-border-accent/20 hover:border-amber-400 dark:hover:border-dark-warm-primary transition-all duration-300 relative overflow-hidden flex flex-col min-h-[520px]">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-100 to-yellow-50 dark:from-dark-warm-primary/10 dark:to-transparent rounded-bl-3xl opacity-70 group-hover:opacity-100 transition-all duration-400"></div>

                                <div className="relative z-10 flex flex-col flex-1">
                                    <h3 className="text-xl font-bold text-amber-800 dark:text-dark-warm-light mb-3 font-display">{project.title}</h3>
                                    <div className="w-full h-44 rounded-xl overflow-hidden mb-4 shadow-sm border border-amber-100 dark:border-dark-border-primary/30">
                                        <img
                                            src={project.projectImg}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 dark:opacity-90"
                                        />
                                    </div>
                                    <p className="text-[#7C5E3C] dark:text-dark-text-secondary mb-4 text-sm leading-relaxed flex-1">
                                        {project.description}
                                    </p>

                                    {/* Tech tags */}
                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {project.tech.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 dark:bg-dark-warm-primary/20 text-amber-700 dark:text-dark-warm-light border border-amber-200 dark:border-dark-warm-primary/30"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action buttons */}
                                    <div className="flex gap-3 mt-auto">
                                        <a
                                            href={project.gitUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex justify-center items-center py-2.5 rounded-xl bg-amber-50 dark:bg-white/5 text-amber-800 dark:text-dark-warm-light font-semibold text-sm hover:bg-amber-100 dark:hover:bg-white/10 border border-amber-200 dark:border-dark-border-accent/30 transition-all duration-300 hover:-translate-y-0.5"
                                        >
                                            <FiGithub className="w-4 h-4" />
                                            GitHub
                                        </a>
                                        {project.liveUrl !== "#" ? (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex justify-center items-center py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 dark:from-dark-warm-primary dark:to-dark-warm-secondary hover:from-amber-600 hover:to-yellow-600 text-white font-semibold text-sm shadow-md shadow-amber-200 dark:shadow-dark-warm transition-all duration-300 hover:-translate-y-0.5"
                                            >
                                                <FiExternalLink className="w-4 h-4" />
                                                Live Demo
                                            </a>
                                        ) : (
                                            <div className="flex-1 flex justify-center items-center py-2.5 rounded-xl bg-amber-50 dark:bg-white/5 text-amber-400 font-semibold text-sm cursor-not-allowed border border-amber-100 dark:border-dark-border-primary/20">
                                                Coming Soon
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
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
                        className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 dark:from-dark-warm-primary dark:to-dark-warm-secondary hover:from-amber-600 hover:to-yellow-600 text-white font-semibold shadow-lg shadow-amber-200 dark:shadow-dark-warm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-lg"
                    >
                        <FiArrowLeft className="w-5 h-5" />
                        <span>Back to Portfolio</span>
                    </NavLink>
                </motion.div>
            </div>

            <div className="h-20"></div>
        </div>
    );
};

export default AllProjects;
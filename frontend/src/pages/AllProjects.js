import vocinteraImg from '../images/landingPage_vocintera.png';
import agriSetuImg from '../images/agriSetu.png';
import routewizImg from '../images/welcome_page.png';
import mailImg from '../images/dashboard.png';
import chatbotImg from '../images/chatbot.png';
import { NavLink } from 'react-router';
import { motion } from 'framer-motion';

// Extended projects array with more projects
const allProjects = [
    {
        id: '1',
        title: "AgriSetu",
        projectImg: agriSetuImg,
        description: "AgriSetu is a comprehensive agricultural ecosystem designed to empower Indian farmers with cutting-edge AI solutions",
        gitUrl: "https://github.com/CodeXGautam/Agrisetu",
        liveUrl: "https://agrisetu-1.onrender.com/",
        tech: ["React", "Node.js", "Fast API", "MongoDb", "Express","Tailwind CSS", "LangChain",
                "Mistral LLM", "Cloudinary", "Web Speech Api",
                "React WebCam"]
    },
    {
        id: '2',
        title: "Vocintera",
        projectImg: vocinteraImg,
        description: "A voice enabled AI powered mock interview platform that helps users practice interviews with real-time feedback and analysis.",
        gitUrl: "https://github.com/CodeXGautam/Vocintera",
        liveUrl: "https://vocintera.onrender.com/",
        tech: ["React", "Node.js","Express", "Google GEN AI", "OpenRouter AI", "Web Speech Api", "MongoDB"
            ,"Tailwind CSS"]
    },
    {
        id: '3',
        title: "RouteWizard",
        projectImg: routewizImg,
        description: "An intelligent machine learning powered route optimization platform that finds the most efficient paths for delivery and travel.",
        gitUrl: "https://github.com/CodeXGautam/routewiz",
        liveUrl: "https://routewiz.onrender.com/",
        tech: ["React", "Node.js", "Django", "MongoDb", "Express","Nginx"]
    },
    {
        id: '4',
        title: "ChatBot",
        projectImg: chatbotImg, 
        description: "This web app is built with React.js and styled using Tailwind CSS. It leverages the GEMINI API to handle user queries—users can simply enter their questions, and the app fetches responses through the API.",
        gitUrl: "https://github.com/CodeXGautam/Chatbot",
        liveUrl: "https://codexgautam.github.io/Chatbot/",
        tech: ["React","TailWind CSS", "Google Gemini", "Rest Api"]
    },
    {
        id: '5',
        title: "Mail Tracker Pro",
        projectImg: mailImg,
        description: "A Firefox extension that tracks emails in real time and provides detailed analytics on a comprehensive user dashboard.",
        gitUrl: "https://github.com/CodeXGautam/mail-tracker",
        liveUrl: "https://addons.mozilla.org/addon/mail-tracker-pro/",
        tech: ["Firefox Extension", "JavaScript", "Dashboard", "Real-time Analytics"]
    },
    // {
    //     id: '5',
    //     title: "Task Management System",
    //     projectImg: routewizImg, // Using placeholder image
    //     description: "A collaborative task management application with real-time updates, team collaboration, and project tracking.",
    //     gitUrl: "https://github.com/CodeXGautam/taskmanager",
    //     liveUrl: "#",
    //     tech: ["React", "Socket.io", "Node.js", "PostgreSQL", "JWT"]
    // },
    // {
    //     id: '6',
    //     title: "Weather Analytics Dashboard",
    //     projectImg: mailImg, // Using placeholder image
    //     description: "A comprehensive weather analytics platform with historical data, forecasting, and interactive visualizations.",
    //     gitUrl: "https://github.com/CodeXGautam/weather-dashboard",
    //     liveUrl: "#",
    //     tech: ["React", "D3.js", "Weather API", "Charts", "Responsive Design"]
    // }
];

const AllProjects = () => {
    return (
        <div className="min-h-screen relative transition-all duration-500">
            {/* Enhanced decorative background elements with dark mode support */}
            <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-dark-warm-primary/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-dark-warm-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Enhanced Navigation Header */}
            <motion.div
                className="z-[1000] sticky top-0 bg-white/80 dark:bg-white/5 backdrop-blur-sm border-b-2 border-amber-200 dark:border-dark-border-accent/30 transition-all duration-500"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <NavLink 
                            to="/" 
                            className="flex items-center space-x-3 group"
                        >
                            <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-yellow-400 dark:from-dark-warm-primary dark:to-dark-warm-secondary rounded-full flex items-center justify-center group-hover:from-amber-500 group-hover:to-yellow-500 dark:group-hover:from-dark-warm-secondary dark:group-hover:to-dark-warm-tertiary transition-all duration-500 dark:shadow-dark-warm">
                                <span className="text-white dark:text-dark-text-primary font-bold text-lg">←</span>
                            </div>
                            <span className="text-amber-800 dark:text-dark-warm-light font-body font-bold text-xl group-hover:text-amber-900 dark:group-hover:text-dark-warm-primary transition-all duration-500">
                                Back to Home
                            </span>
                        </NavLink>
                    </div>
                </div>
            </motion.div>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Enhanced decorative background elements with dark mode support */}
                <div className="absolute top-20 left-10 w-20 h-20 bg-amber-200 dark:bg-dark-warm-primary/20 rounded-full opacity-20 dark:opacity-15 animate-pulse blur-sm"></div>
                <div className="absolute bottom-20 right-10 w-16 h-16 bg-yellow-300 dark:bg-dark-warm-secondary/20 rounded-full opacity-30 dark:opacity-20 animate-bounce blur-sm"></div>
                <div className="absolute top-1/2 left-5 w-12 h-12 bg-amber-400 dark:bg-dark-warm-light/20 rounded-full opacity-25 dark:opacity-15 animate-ping blur-sm"></div>
                <div className="absolute top-1/3 right-20 w-14 h-14 bg-amber-300 dark:bg-dark-warm-primary/15 rounded-full opacity-20 dark:opacity-10 animate-pulse blur-sm"></div>

                {/* Page Title */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-700 dark:text-dark-warm-light font-display mb-4 transition-all duration-500 dark:drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                        My Projects Portfolio
                    </h1>
                    <div className="flex bg-amber-600 dark:bg-dark-warm-primary w-32 sm:w-40 md:w-48 rounded-2xl h-2 -rotate-3 justify-center items-center mx-auto mb-6 transition-all duration-500 dark:shadow-dark-warm"></div>
                    <p className="text-lg text-amber-600 dark:text-dark-warm-primary font-body max-w-2xl mx-auto leading-relaxed transition-all duration-500">
                        Explore my collection of projects showcasing various technologies, creative solutions, and innovative approaches to modern web development.
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
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group h-full"
                        >
                            <div className="bg-white dark:bg-white/5 rounded-2xl shadow-xl dark:shadow-dark-lg p-6 border-2 border-amber-100 dark:border-dark-border-accent/30 hover:border-amber-300 dark:hover:border-dark-warm-primary transition-all duration-500 relative overflow-hidden flex flex-col h-full min-h-[520px] backdrop-blur-sm">
                                {/* Enhanced decorative corner element */}
                                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-200 to-yellow-300 dark:from-dark-warm-primary/30 dark:to-dark-warm-secondary/30 rounded-bl-full opacity-60 dark:opacity-40 group-hover:opacity-80 dark:group-hover:opacity-60 transition-all duration-500"></div>
                                
                                <div className="relative z-10 flex flex-col flex-1">
                                    <h3 className="text-2xl font-bold text-amber-800 dark:text-dark-warm-light mb-3 font-display transition-all duration-500 dark:drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">{project.title}</h3>
                                    <div className="w-full h-48 rounded-xl overflow-hidden mb-4 shadow-lg dark:shadow-dark-md border dark:border-dark-border-primary/20">
                                        <img
                                            src={project.projectImg}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 dark:opacity-90"
                                        />
                                    </div>
                                    <p className="text-gray-700 dark:text-dark-text-secondary mb-4 font-body leading-relaxed flex-1 text-sm transition-all duration-500">
                                        {project.description}
                                    </p>
                                    
                                    {/* Enhanced tech stack tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-amber-100 dark:bg-dark-warm-primary/20 text-amber-700 dark:text-dark-warm-light rounded-full text-xs font-semibold border border-amber-200 dark:border-dark-warm-primary/30 transition-all duration-500 dark:shadow-dark-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    {/* Enhanced action buttons */}
                                    <div className="flex gap-3 mt-auto">
                                        <a
                                            href={project.gitUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex justify-center items-center p-3 rounded-xl shadow-md dark:shadow-dark-md bg-gradient-to-r from-amber-400 to-yellow-400 dark:from-dark-warm-primary dark:to-dark-warm-secondary text-white dark:text-dark-text-primary font-semibold hover:from-amber-500 hover:to-yellow-500 dark:hover:from-dark-warm-secondary dark:hover:to-dark-warm-tertiary transition-all duration-500 transform hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-dark-warm"
                                        >
                                            GitHub
                                        </a>
                                        {project.liveUrl !== "#" ? (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex justify-center items-center p-3 rounded-xl shadow-md dark:shadow-dark-md bg-gradient-to-r from-amber-500 to-yellow-500 dark:from-dark-warm-secondary dark:to-dark-warm-tertiary text-white dark:text-dark-text-primary font-semibold hover:from-amber-600 hover:to-yellow-600 dark:hover:from-dark-warm-tertiary dark:hover:to-dark-warm-primary transition-all duration-500 transform hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-dark-warm"
                                            >
                                                Demo 🚀
                                            </a>
                                        ) : (
                                            <div className="flex-1 flex justify-center items-center p-3 rounded-xl shadow-md dark:shadow-dark-md bg-gradient-to-r from-gray-400 to-gray-500 dark:from-dark-border-primary dark:to-dark-border-secondary text-white dark:text-dark-text-muted font-semibold cursor-not-allowed transition-all duration-500">
                                                Coming Soon
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Back to Home Section */}
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <NavLink
                        to="/"
                        className="inline-flex items-center space-x-3 px-8 py-4 rounded-xl shadow-lg dark:shadow-dark-lg bg-gradient-to-r from-amber-400 to-yellow-400 dark:from-dark-warm-primary dark:to-dark-warm-secondary text-white dark:text-dark-text-primary font-semibold hover:from-amber-500 hover:to-yellow-500 dark:hover:from-dark-warm-secondary dark:hover:to-dark-warm-tertiary transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-dark-warm border-2 border-amber-300 dark:border-dark-warm-primary/50 font-display text-lg backdrop-blur-sm"
                    >
                        <span>←</span>
                        <span>Back to Portfolio</span>
                    </NavLink>
                </motion.div>
            </div>

            {/* Footer spacing */}
            <div className="h-20"></div>
        </div>
    );
};

export default AllProjects;
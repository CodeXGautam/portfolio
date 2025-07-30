import vocinteraImg from '../images/landingPage.png';
import routewizImg from '../images/welcome_page.png';
import mailImg from '../images/dashboard.png';
import { NavLink } from 'react-router';
import { motion } from 'framer-motion';

// Extended projects array with more projects
const allProjects = [
    {
        id: '1',
        title: "Vocintera",
        projectImg: vocinteraImg,
        description: "A voice enabled AI powered mock interview platform that helps users practice interviews with real-time feedback and analysis.",
        gitUrl: "https://github.com/CodeXGautam/Vocintera",
        liveUrl: "https://vocintera.onrender.com/",
        tech: ["React", "Node.js","Express", "Google GEN AI", "OpenRouter AI", "Web Speech Api", "MongoDB"
            ,"Tailwind CSS"]
    },
    {
        id: '2',
        title: "RouteWizard",
        projectImg: routewizImg,
        description: "An intelligent machine learning powered route optimization platform that finds the most efficient paths for delivery and travel.",
        gitUrl: "https://github.com/CodeXGautam/routewiz",
        liveUrl: "https://routewiz.onrender.com/",
        tech: ["React", "Node.js", "Django", "MongoDb", "Express","Nginx"]
    },
    {
        id: '3',
        title: "Mail Tracker Pro",
        projectImg: mailImg,
        description: "A Firefox extension that tracks emails in real time and provides detailed analytics on a comprehensive user dashboard.",
        gitUrl: "https://github.com/CodeXGautam/mail-tracker",
        liveUrl: "https://addons.mozilla.org/addon/mail-tracker-pro/",
        tech: ["Firefox Extension", "JavaScript", "Dashboard", "Real-time Analytics"]
    },
    {
        id: '4',
        title: "ChatBot",
        projectImg: vocinteraImg, // Using placeholder image
        description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
        gitUrl: "https://github.com/CodeXGautam/Chatbot",
        liveUrl: "https://codexgautam.github.io/Chatbot/",
        tech: ["React","TailWind CSS", "Google Gemini", "Rest Api"]
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
        <div className="min-h-screen bg-[#F8F5F2] relative">
            {/* Background pattern matching the main site */}
            <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23d4d0c9" fill-opacity="0.3"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`
            }}></div>

            {/* Navigation Header */}
            <motion.div 
                className="z-[1000] sticky top-0 bg-white/80 backdrop-blur-sm border-b-2 border-amber-200"
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
                            <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full flex items-center justify-center group-hover:from-amber-500 group-hover:to-yellow-500 transition-all duration-200">
                                <span className="text-white font-bold text-lg">←</span>
                            </div>
                            <span className="text-amber-800 font-display font-bold text-xl group-hover:text-amber-900 transition-colors">
                                Back to Home
                            </span>
                        </NavLink>
                        
                        <div className="text-amber-700 font-display font-bold text-2xl">
                            All Projects
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Decorative background elements */}
                <div className="absolute top-20 left-10 w-20 h-20 bg-amber-200 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-16 h-16 bg-yellow-300 rounded-full opacity-30 animate-bounce"></div>
                <div className="absolute top-1/2 left-5 w-12 h-12 bg-amber-400 rounded-full opacity-25 animate-ping"></div>
                <div className="absolute top-1/3 right-20 w-14 h-14 bg-amber-300 rounded-full opacity-20 animate-pulse"></div>

                {/* Page Title */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-700 font-display mb-4">
                        My Projects Portfolio
                    </h1>
                    <div className="flex bg-amber-600 w-32 sm:w-40 md:w-48 rounded-2xl h-2 -rotate-3 justify-center items-center mx-auto mb-6"></div>
                    <p className="text-lg text-amber-600 font-body max-w-2xl mx-auto leading-relaxed">
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
                            <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-amber-100 hover:border-amber-300 transition-all duration-300 relative overflow-hidden flex flex-col h-full min-h-[520px]">
                                {/* Decorative corner element */}
                                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-200 to-yellow-300 rounded-bl-full opacity-60 group-hover:opacity-80 transition-opacity"></div>
                                
                                <div className="relative z-10 flex flex-col flex-1">
                                    <h3 className="text-2xl font-bold text-amber-800 mb-3 font-display">{project.title}</h3>
                                    <div className="w-full h-48 rounded-xl overflow-hidden mb-4 shadow-lg">
                                        <img 
                                            src={project.projectImg} 
                                            alt={project.title} 
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                                        />
                                    </div>
                                    <p className="text-gray-700 mb-4 font-body leading-relaxed flex-1 text-sm">
                                        {project.description}
                                    </p>
                                    
                                    {/* Tech stack tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech, techIndex) => (
                                            <span 
                                                key={techIndex} 
                                                className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold border border-amber-200"
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
                                            className="flex-1 flex justify-center items-center p-3 rounded-xl shadow-md bg-gradient-to-r from-amber-400 to-yellow-400 text-white font-semibold hover:from-amber-500 hover:to-yellow-500 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
                                        >
                                            GitHub
                                        </a>
                                        {project.liveUrl !== "#" ? (
                                            <a 
                                                href={project.liveUrl} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex-1 flex justify-center items-center p-3 rounded-xl shadow-md bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold hover:from-amber-600 hover:to-yellow-600 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
                                            >
                                                Demo 🚀
                                            </a>
                                        ) : (
                                            <div className="flex-1 flex justify-center items-center p-3 rounded-xl shadow-md bg-gradient-to-r from-gray-400 to-gray-500 text-white font-semibold cursor-not-allowed">
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
                        className="inline-flex items-center space-x-3 px-8 py-4 rounded-xl shadow-lg bg-gradient-to-r from-amber-400 to-yellow-400 text-white font-semibold hover:from-amber-500 hover:to-yellow-500 transition-all duration-200 transform hover:-translate-y-2 hover:shadow-xl border-2 border-amber-300 font-display text-lg"
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
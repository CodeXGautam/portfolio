import vocinteraImg from '../images/landingPage.png';
import routewizImg from '../images/welcome_page.png';
import mailImg from '../images/dashboard.png';
import { NavLink } from 'react-router';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "Vocintera",
        projectImg: vocinteraImg,
        description: "A voice enabled AI powered mock interview platform",
        gitUrl: "https://github.com/CodeXGautam/Vocintera",
        liveUrl: "https://vocintera.onrender.com/",
        tech: ["React", "Node.js", "AI", "Voice"]
    },
    {
        title: "RouteWizard",
        projectImg: routewizImg,
        description: "An intelligent ml powered route optimization platform",
        gitUrl: "https://github.com/CodeXGautam/routewiz",
        liveUrl: "https://routewiz.onrender.com/",
        tech: ["ML", "Python", "React", "Optimization"]
    },
    {
        title: "Mail Tracker Pro",
        projectImg: mailImg,
        description: "A firefox extension which tracks emails in real time and updates on a user dashboard",
        gitUrl: "https://github.com/CodeXGautam/mail-tracker",
        liveUrl: "https://addons.mozilla.org/addon/mail-tracker-pro/",
        tech: ["Firefox", "JavaScript", "Dashboard", "Real-time"]
    },
]

const Projects = () => {
    return (
        <div className="flex flex-col items-center gap-20 mt-20 justify-center min-h-screen mx-auto w-[85%] max-w-[1180px] min-w-[270px] relative" id="projects">
            {/* Decorative background elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-amber-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-16 h-16 bg-yellow-300 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute top-1/2 left-5 w-12 h-12 bg-amber-400 rounded-full opacity-25 animate-ping"></div>

            <motion.h1 
                className="flex flex-col justify-center items-center text-2xl text-amber-700 font-bold font-display sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Projects
                <div className="flex bg-amber-600 w-[70%] rounded-2xl h-2 -rotate-3 justify-center items-center mt-2"></div>
            </motion.h1>

            <motion.div 
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                {
                    projects.map((project, index) => {
                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group h-full"
                            >
                                <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-amber-100 hover:border-amber-300 transition-all duration-300 relative overflow-hidden flex flex-col h-full min-h-[480px]">
                                    {/* Decorative corner element */}
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-200 to-yellow-300 rounded-bl-full opacity-60 group-hover:opacity-80 transition-opacity"></div>
                                    
                                    <div className="relative z-10 flex flex-col flex-1">
                                        <h3 className="text-2xl font-bold text-amber-800 mb-3 font-display">{project.title}</h3>
                                        <div className="w-full h-48 rounded-xl overflow-hidden mb-4 shadow-lg">
                                            <img src={project.projectImg} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <p className="text-gray-700 mb-4 font-body leading-relaxed flex-1">{project.description}</p>
                                        {/* Tech stack tags */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tech.map((tech, techIndex) => (
                                                <span key={techIndex} className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold border border-amber-200">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex gap-3 mt-auto">
                                            <NavLink to={project.gitUrl} target='_blank' 
                                                className='flex-1 flex justify-center items-center p-3 rounded-xl shadow-md bg-gradient-to-r from-amber-400 to-yellow-400 text-white font-semibold hover:from-amber-500 hover:to-yellow-500 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg'>
                                                GitHub
                                            </NavLink>
                                            <NavLink to={project.liveUrl} target='_blank' 
                                                className='flex-1 flex justify-center items-center p-3 rounded-xl shadow-md bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold hover:from-amber-600 hover:to-yellow-600 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg'>
                                                Demo 🚀
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
            >
                <NavLink to="/projects_page"
                    className='flex justify-center items-center p-4 rounded-xl shadow-lg bg-gradient-to-r from-amber-400 to-yellow-400 text-white font-semibold hover:from-amber-500 hover:to-yellow-500 transition-all duration-200 transform hover:-translate-y-2 hover:shadow-xl border-2 border-amber-300'>
                    View More Projects →
                </NavLink>
            </motion.div>
        </div>
    )
}

export default Projects;
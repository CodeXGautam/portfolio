import vocinteraImg from '../images/landingPage_vocintera.png';
import agriSetuImg from '../images/agriSetu.png';
import routewizImg from '../images/welcome_page.png';
import studyplannerImg from '../images/StudyPlanner-LandingPage.png';
import { NavLink } from 'react-router';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "AgriSetu",
        projectImg: agriSetuImg,
        description: "AgriSetu is a comprehensive agricultural ecosystem designed to empower Indian farmers with cutting-edge AI solutions",
        gitUrl: "https://github.com/CodeXGautam/Agrisetu",
        liveUrl: "https://agrisetu-1.onrender.com/",
        tech: ["React", "Node.js", "Fast API", "MongoDb", "Express", "Tailwind CSS", "LangChain",
            "Mistral LLM", "Cloudinary", "Web Speech Api",
            "React WebCam"]
    },
    {
        title: "Vocintera",
        projectImg: vocinteraImg,
        description: "VocIntera is an AI-powered interview platform that leverages Google Gemini AI to conduct interactive interviews. It provides a seamless experience for candidates to engage in AI-driven interviews and for interviewers to manage interview sessions",
        gitUrl: "https://github.com/CodeXGautam/Vocintera",
        liveUrl: "https://vocintera.onrender.com/",
        tech: ["React", "Node.js", "Express", "Google GEN AI", "OpenRouter AI", "Web Speech Api", "MongoDB"
            , "Tailwind CSS"]
    },
    {
        title: "Study Planner AI",
        projectImg: studyplannerImg,
        description: "An AI-powered study planner that helps students break down tasks into actionable study sessions, optimize schedules with Google Calendar, and generate summaries from notes (PDFs/images).",
        gitUrl: "https://github.com/CodeXGautam/StudyPlanner-AI",
        liveUrl: "https://studyplanner-ai.onrender.com/",
        tech: ["React", "Node.js", "Express", "Google Calendar", "OpenRouter AI", "Mistral LLM", "MongoDB"
            , "Tailwind CSS", "JWT Auth", "Cloudinary"]
    }
]

const Projects = () => {
    return (
        <div className="flex flex-col items-center gap-20 mt-20 justify-center min-h-screen mx-auto w-[85%] max-w-[1180px] min-w-[270px] relative transition-all duration-500" id="projects">
            {/* Enhanced Decorative background elements with dark mode support */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-amber-200 dark:bg-dark-warm-primary/20 rounded-full opacity-20 dark:opacity-15 animate-pulse blur-sm"></div>
            <div className="absolute bottom-20 right-10 w-16 h-16 bg-yellow-300 dark:bg-dark-warm-secondary/20 rounded-full opacity-30 dark:opacity-20 animate-bounce blur-sm"></div>
            <div className="absolute top-1/2 left-5 w-12 h-12 bg-amber-400 dark:bg-dark-warm-light/20 rounded-full opacity-25 dark:opacity-15 animate-ping blur-sm"></div>

            {/* Additional dark mode exclusive background elements */}
            <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-dark-warm-primary/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-dark-warm-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <motion.h1
                className="flex flex-col justify-center items-center text-2xl text-amber-700 dark:text-dark-warm-light font-bold font-display sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl relative z-10 transition-all duration-500 dark:drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Projects
                <div className="flex bg-amber-600 dark:bg-dark-warm-primary w-[70%] rounded-2xl h-2 -rotate-3 justify-center items-center mt-2 transition-all duration-500 dark:shadow-dark-warm"></div>
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
                                <div className="bg-white dark:bg-white/5 rounded-2xl shadow-xl dark:shadow-dark-lg p-6 border-2 border-amber-100 dark:border-dark-border-accent/30 hover:border-amber-300 dark:hover:border-dark-warm-primary transition-all duration-500 relative overflow-hidden flex flex-col h-full min-h-[480px] backdrop-blur-sm">
                                    {/* Enhanced decorative corner element */}
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-200 to-yellow-300 dark:from-dark-warm-primary/30 dark:to-dark-warm-secondary/30 rounded-bl-full opacity-60 dark:opacity-40 group-hover:opacity-80 dark:group-hover:opacity-60 transition-all duration-500"></div>

                                    <div className="relative z-10 flex flex-col flex-1">
                                        <h3 className="text-2xl font-bold text-amber-800 dark:text-dark-warm-light mb-3 font-display transition-all duration-500 dark:drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">{project.title}</h3>
                                        <div className="w-full h-48 rounded-xl overflow-hidden mb-4 shadow-lg dark:shadow-dark-md border dark:border-dark-border-primary/20">
                                            <img src={project.projectImg} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 dark:opacity-90" />
                                        </div>
                                        <p className="text-gray-700 dark:text-dark-text-secondary mb-4 font-body leading-relaxed flex-1 transition-all duration-500">{project.description}</p>
                                        {/* Enhanced tech stack tags */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tech.map((tech, techIndex) => (
                                                <span key={techIndex} className="px-3 py-1 bg-amber-100 dark:bg-dark-warm-primary/20 text-amber-700 dark:text-dark-warm-light rounded-full text-xs font-semibold border border-amber-200 dark:border-dark-warm-primary/30 transition-all duration-500 dark:shadow-dark-sm">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex gap-3 mt-auto">
                                            <NavLink to={project.gitUrl} target='_blank'
                                                className='flex-1 flex justify-center items-center p-3 rounded-xl shadow-md dark:shadow-dark-md bg-gradient-to-r from-amber-400 to-yellow-400 dark:from-dark-warm-primary dark:to-dark-warm-secondary text-white dark:text-dark-text-primary font-semibold hover:from-amber-500 hover:to-yellow-500 dark:hover:from-dark-warm-secondary dark:hover:to-dark-warm-tertiary transition-all duration-500 transform hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-dark-warm'>
                                                GitHub
                                            </NavLink>
                                            <NavLink to={project.liveUrl} target='_blank'
                                                className='flex-1 flex justify-center items-center p-3 rounded-xl shadow-md dark:shadow-dark-md bg-gradient-to-r from-amber-500 to-yellow-500 dark:from-dark-warm-secondary dark:to-dark-warm-tertiary text-white dark:text-dark-text-primary font-semibold hover:from-amber-600 hover:to-yellow-600 dark:hover:from-dark-warm-tertiary dark:hover:to-dark-warm-primary transition-all duration-500 transform hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-dark-warm'>
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
                    className='flex justify-center items-center p-4 rounded-xl shadow-lg dark:shadow-dark-lg bg-gradient-to-r from-amber-400 to-yellow-400 dark:from-dark-warm-primary dark:to-dark-warm-secondary text-white dark:text-dark-text-primary font-semibold hover:from-amber-500 hover:to-yellow-500 dark:hover:from-dark-warm-secondary dark:hover:to-dark-warm-tertiary transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-dark-warm border-2 border-amber-300 dark:border-dark-warm-primary/50 backdrop-blur-sm'>
                    View More Projects →
                </NavLink>
            </motion.div>
        </div>
    )
}

export default Projects;

import assetSphereImg from '../images/assetSphere.png';
import vocinteraImg from '../images/landingPage_vocintera.png';
import agriSetuImg from '../images/agriSetu.png';
import { NavLink } from 'react-router';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';

const projects = [
    {
        title: "AssetSphere",
        projectImg: assetSphereImg,
        description: "A multi-tenant inventory management platform for organizations to track, book, and manage physical assets through a request-and-approval lifecycle with RBAC across 3 user roles, real-time analytics and email notifications.",
        gitUrl: "https://github.com/CodeXGautam/AssetSphere",
        liveUrl: "https://assetsphere.vercel.app",
        tech: ["Next.js", "React.js", "Node.js", "MongoDB", "JWT", "Tailwind CSS", "Cloudinary"]
    },
    {
        title: "AgriSetu",
        projectImg: agriSetuImg,
        description: "A full-stack AI-powered agricultural ecosystem empowering Indian farmers — crop recommendations, disease detection across 10+ categories, multilingual AI chatbot with 12+ language support, and a digital marketplace.",
        gitUrl: "https://github.com/CodeXGautam/Agrisetu",
        liveUrl: "https://agrisetu-1.onrender.com/",
        tech: ["React", "Node.js", "Fast API", "MongoDB", "LangChain", "Mistral LLM", "Tailwind CSS"]
    },
    {
        title: "Vocintera",
        projectImg: vocinteraImg,
        description: "An AI-powered interview platform leveraging Google Gemini AI to conduct interactive voice interviews. Seamless experience for candidates with real-time AI feedback and interview session management.",
        gitUrl: "https://github.com/CodeXGautam/Vocintera",
        liveUrl: "https://vocintera.onrender.com/",
        tech: ["React", "Node.js", "Express", "Google GEN AI", "OpenRouter AI", "Web Speech Api", "MongoDB"]
    }
]

const Projects = () => {
    return (
        <div className="flex flex-col items-center gap-20 mt-20 justify-center min-h-screen mx-auto w-[90%] max-w-[1200px] min-w-[270px] relative transition-all duration-500" id="projects">
            <motion.h1
                className="flex flex-col justify-center items-center text-2xl text-amber-700 dark:text-dark-warm-light font-bold font-display sm:text-3xl md:text-4xl lg:text-5xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Featured Projects
                <div className="flex bg-amber-600 dark:bg-dark-warm-primary w-[70%] rounded-2xl h-2 -rotate-3 mt-2 justify-center items-center transition-all duration-500 dark:shadow-dark-warm"></div>
            </motion.h1>

            <motion.div
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full'
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
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                className="group"
                            >
                                <div className="bg-[#FAF7F2] dark:bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg dark:shadow-dark-lg p-5 border-2 border-amber-100 dark:border-dark-border-accent/20 hover:border-amber-400 dark:hover:border-dark-warm-primary transition-all duration-400 relative overflow-hidden flex flex-col min-h-[480px]">
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-100 to-yellow-50 dark:from-dark-warm-primary/10 dark:to-transparent rounded-bl-3xl opacity-70 group-hover:opacity-100 transition-all duration-400"></div>

                                    <div className="relative z-10 flex flex-col flex-1">
                                        <h3 className="text-xl font-bold text-amber-800 dark:text-dark-warm-light mb-3 font-display transition-all duration-400">{project.title}</h3>
                                        <div className="w-full h-44 rounded-xl overflow-hidden mb-4 shadow-md border border-amber-100 dark:border-dark-border-primary/30">
                                            <img src={project.projectImg} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 dark:opacity-90" />
                                        </div>
                                        <p className="text-[#7C5E3C] dark:text-dark-text-secondary mb-4 text-sm leading-relaxed flex-1">{project.description}</p>
                                        <div className="flex flex-wrap gap-1.5 mb-5">
                                            {project.tech.map((tech, techIndex) => (
                                                <span key={techIndex} className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 dark:bg-dark-warm-primary/20 text-amber-700 dark:text-dark-warm-light border border-amber-200 dark:border-dark-warm-primary/30">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex gap-3 mt-auto">
                                            <NavLink to={project.gitUrl} target='_blank'
                                                className='flex-1 flex justify-center items-center py-2.5 rounded-xl bg-amber-50 dark:bg-white/5 text-amber-800 dark:text-dark-warm-light font-semibold text-sm hover:bg-amber-100 dark:hover:bg-white/10 border border-amber-200 dark:border-dark-border-accent/30 transition-all duration-300 hover:-translate-y-0.5'>
                                            <FiGithub className="w-4 h-4" />
                                                GitHub
                                            </NavLink>
                                            <NavLink to={project.liveUrl} target='_blank'
                                                className='flex-1 flex justify-center items-center py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 dark:from-dark-warm-primary dark:to-dark-warm-secondary hover:from-amber-600 hover:to-yellow-600 text-white font-semibold text-sm shadow-md shadow-amber-200 dark:shadow-dark-warm transition-all duration-300 hover:-translate-y-0.5'>
                                                <FiExternalLink className="w-4 h-4" />
                                                Live Demo
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
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
            >
                <NavLink to="/projects_page"
                    className='inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 dark:from-dark-warm-primary dark:to-dark-warm-secondary hover:from-amber-600 hover:to-yellow-600 text-white font-semibold shadow-lg shadow-amber-200 dark:shadow-dark-warm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-amber-400/30'>
                    View All Projects <FiArrowRight className="w-5 h-5" />
                </NavLink>
            </motion.div>
        </div>
    )
}

export default Projects;
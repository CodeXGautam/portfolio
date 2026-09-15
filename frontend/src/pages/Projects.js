
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
        <section className="portfolio-section projects-section" id="projects">
            <motion.h1
                className="section-heading"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <span className="eyebrow">Selected work</span>
                Featured projects
                <span className="heading-mark" />
            </motion.h1>

            <motion.div
                className="pinboard-grid"
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
                                className="project-card-wrap"
                            >
                                <article className="project-card">
                                    <div className="project-image-wrap">
                                        <img src={project.projectImg} alt={project.title} className="project-image" />
                                        <span className="project-index">0{index + 1}</span>
                                    </div>
                                    <div className="project-card-content">
                                        <div className="project-title-row">
                                            <h3>{project.title}</h3>
                                            <span className="project-arrow"><FiArrowRight /></span>
                                        </div>
                                        <p className="project-description">{project.description}</p>
                                        <div className="project-tags">
                                            {project.tech.map((tech, techIndex) => (
                                                <span key={techIndex}>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="project-actions">
                                            <NavLink to={project.gitUrl} target='_blank'
                                                className='project-link project-link-muted'>
                                            <FiGithub className="w-4 h-4" />
                                                GitHub
                                            </NavLink>
                                            <NavLink to={project.liveUrl} target='_blank'
                                                className='project-link project-link-accent'>
                                                <FiExternalLink className="w-4 h-4" />
                                                Live Demo
                                            </NavLink>
                                        </div>
                                    </div>
                                </article>
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
                    className='outline-button'>
                    View All Projects <FiArrowRight className="w-5 h-5" />
                </NavLink>
            </motion.div>
        </section>
    )
}

export default Projects;
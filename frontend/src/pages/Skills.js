import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiCloud, FiTool, FiLayers } from 'react-icons/fi';

const skillGroups = [
    { title: 'Languages', note: 'Programming languages', icon: FiCode, skills: ['C++', 'Go', 'JavaScript', 'TypeScript', 'Python', 'HTML'] },
    { title: 'Frameworks & Libraries', note: 'Product development', icon: FiLayers, skills: ['React.js', 'Next.js', 'Gin', 'Node.js', 'Express.js', 'Django', 'Redux', 'Tailwind CSS', 'LangChain'] },
    { title: 'Databases & Messaging', note: 'Reliable systems', icon: FiDatabase, skills: ['MongoDB', 'PostgreSQL', 'Redis', 'NATS JetStream', 'Google Cloud Pub/Sub'] },
    { title: 'Cloud & DevOps', note: 'Ship with confidence', icon: FiCloud, skills: ['GCP', 'Docker', 'Kubernetes', 'GitHub Actions', 'Nginx', 'Render'] },
    { title: 'Tools & Practices', note: 'Team delivery', icon: FiTool, skills: ['Git', 'GitHub', 'Postman', 'Testify', 'Twirp', 'Jira', 'REST APIs', 'JWT'] },
];

const Skills = () => (
    <section className="site-section skills-section" id="skills">
        <motion.div className="section-heading-block" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <span className="eyebrow">The toolkit</span>
            <h1>Skills & technologies</h1>
            <span className="heading-mark" />
        </motion.div>
        <div className="skills-grid">
            {skillGroups.map((group, groupIndex) => {
                const Icon = group.icon;
                return (
                    <motion.article className={`skill-card skill-card-${groupIndex + 1}`} key={group.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: groupIndex * 0.08 }} viewport={{ once: true }} whileHover={{ y: -6 }}>
                        <div className="skill-card-heading"><span className="skill-icon"><Icon /></span><div><h2>{group.title}</h2><p>{group.note}</p></div></div>
                        <div className="skill-chips">{group.skills.map((skill, skillIndex) => <motion.span key={skill} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: groupIndex * 0.08 + skillIndex * 0.04 }}>{skill}</motion.span>)}</div>
                    </motion.article>
                );
            })}
        </div>
    </section>
);

export default Skills;

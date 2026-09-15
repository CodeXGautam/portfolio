import { motion } from 'framer-motion';

const About = () => (
    <section className="site-section about-section about-profile" id="about">
        <motion.div className="section-heading-block" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <span className="eyebrow">A little context</span>
            <h1>About me</h1>
            <span className="heading-mark" />
        </motion.div>

        <div className="about-lead about-lead-clean">
            <motion.article className="about-summary about-summary-clean" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
                <span className="detail-label">Profile</span>
                <p>Software engineer with 1+ year of internship experience across backend, full-stack, and cloud-native systems. Proficient in Go, JavaScript/TypeScript, React.js, Node.js, microservices, event-driven architectures, and Kubernetes.</p>
                <a className="resume-button" href="https://drive.google.com/file/d/168VfMwq0ycz2UrMPEILichbD733K8B6p/view?usp=sharing" target="_blank" rel="noopener noreferrer">View resume <span>↗</span></a>
            </motion.article>

            <motion.div className="about-details about-details-clean" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }}>
                <article className="about-detail-card about-detail-wide">
                    <span className="detail-label">Education</span>
                    <h2>Indian Institute of Technology Roorkee</h2>
                    <p>Bachelor of Technology in Civil Engineering · Aug 2023 – Present</p>
                    <strong>CGPA: 7.87 / 10</strong>
                    <small>Relevant coursework: Data Science</small>
                </article>
                <article className="about-detail-card">
                    <span className="detail-label">Certification</span>
                    <h2>Google Cloud Fundamentals</h2>
                    <p>Core Infrastructure</p>
                    <small>Google Cloud Training via Coursera</small>
                </article>
                <article className="about-detail-card">
                    <span className="detail-label">Leadership</span>
                    <h2>Institute Alumni Relations Cell</h2>
                    <p>Joint Secretary, Web Development · May 2025 – May 2026</p>
                    <small>Led the alumni portal’s end-to-end development and maintenance.</small>
                </article>
            </motion.div>
        </div>
    </section>
);

export default About;

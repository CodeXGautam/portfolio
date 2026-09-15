import { motion } from 'framer-motion';
import { FiArrowDownRight, FiArrowUpRight, FiPlay } from 'react-icons/fi';
import Atmosphere from '../components/Atmosphere';

const Home = () => {
    const scrollToSection = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <main className="hero-stage">
            <Atmosphere />
            <div className="hero-grain" />
            <nav className="hero-nav">
                <a className="wordmark" href="#top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    HS<span>.</span>
                </a>
                <div className="hero-nav-meta"><span className="status-dot" /> Available for select opportunities</div>
                <button type="button" className="nav-command" onClick={() => scrollToSection('contact')}>
                    Let’s talk <FiArrowUpRight />
                </button>
            </nav>

            <div className="hero-content" id="top">
                <motion.div className="hero-kicker" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                    <span>Portfolio / 2026</span><span className="kicker-line" /><span>Based in India</span>
                </motion.div>
                <motion.h1 className="hero-title" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.12 }}>
                    Building digital<br /><em>systems with soul.</em>
                </motion.h1>
                <motion.div className="hero-bottom" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35 }}>
                    <p className="hero-summary">Himanshu Sharma is a software engineer shaping thoughtful products across full-stack systems, AI, and cloud infrastructure.</p>
                    <div className="hero-actions">
                        <button type="button" className="hero-primary" onClick={() => scrollToSection('projects')}><FiPlay /> Explore work</button>
                        <button type="button" className="hero-secondary" onClick={() => scrollToSection('about')}>How I work <FiArrowDownRight /></button>
                    </div>
                </motion.div>
            </div>

            <div className="hero-device" aria-hidden="true">
                <div className="device-glow" />
                <div className="device-screen"><div className="screen-header"><span /> <span /> <span /></div><div className="screen-layout"><div className="screen-sidebar" /><div className="screen-panels"><div /><div /><div /></div></div></div>
                <div className="device-base"><div className="device-notch" /></div>
            </div>

            <div className="hero-footer"><span>Scroll to discover</span><span className="scroll-line" /><span>01 — 05</span></div>
        </main>
    );
};

export default Home;

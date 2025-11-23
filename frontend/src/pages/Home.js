
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Home = () => {

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }

    // Typewriter animation for 'building experiences.'
    const fullText = 'Not just writing code — building experiences.';
    const [displayed, setDisplayed] = useState('');
    useEffect(() => {
        let i = 0;
        let direction = 1; // 1 for typing, -1 for deleting
        const typeInterval = 40;
        const pauseAfterTyped = 1200;
        const pauseAfterDeleted = 500;
        let timeout;
        function typeLoop() {
            if (direction === 1) {
                setDisplayed(fullText.slice(0, i + 1));
                i++;
                if (i === fullText.length) {
                    direction = -1;
                    timeout = setTimeout(typeLoop, pauseAfterTyped);
                    return;
                }
            } else {
                setDisplayed(fullText.slice(0, i - 1));
                i--;
                if (i === 0) {
                    direction = 1;
                    timeout = setTimeout(typeLoop, pauseAfterDeleted);
                    return;
                }
            }
            timeout = setTimeout(typeLoop, typeInterval);
        }
        typeLoop();
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden transition-all duration-500">
            {/* Desktop Version */}
            <div className="hidden sm:block relative min-h-screen">
                {/* Background Image with Enhanced Overlay */}
                <div className="absolute inset-0">
                    <img
                        src="https://i.pinimg.com/736x/ca/a1/35/caa135a7de7ad340f167a11b3bfd3b03.jpg"
                        alt="home"
                        className="w-full h-full object-cover dark:opacity-30 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FAF7F2]/20 via-[#F6E7C1]/30 to-[#B48A4A]/40 dark:from-dark-bg-primary/80 dark:via-dark-bg-secondary/70 dark:to-dark-bg-tertiary/60"></div>
                    
                    {/* Enhanced dark mode pattern overlay */}
                    <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-dark-warm-primary/10 via-transparent to-dark-warm-secondary/10"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.1)_0%,transparent_50%)] dark:block hidden"></div>
                        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(217,119,6,0.08)_0%,transparent_50%)] dark:block hidden"></div>
                    </div>
                </div>

                {/* Enhanced Floating Particles with Dark Mode Support */}
                <motion.div
                    className="absolute top-20 left-20 w-4 h-4 bg-[#F6E7C1] dark:bg-dark-warm-light rounded-full opacity-60 dark:opacity-40 dark:shadow-dark-warm"
                    animate={{ y: [0, -20, 0], opacity: [0.6, 0.3, 0.6] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-40 right-32 w-6 h-6 bg-[#B48A4A] dark:bg-dark-warm-primary rounded-full opacity-40 dark:opacity-30 dark:shadow-dark-warm"
                    animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-32 left-1/3 w-3 h-3 bg-[#7C5E3C] dark:bg-dark-warm-secondary rounded-full opacity-50 dark:opacity-35 dark:shadow-dark-warm"
                    animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Additional dark mode exclusive particles */}
                <motion.div
                    className="absolute top-1/3 left-1/4 w-2 h-2 bg-dark-warm-light rounded-full opacity-0 dark:opacity-25 shadow-dark-warm"
                    animate={{
                        y: [0, -15, 0],
                        x: [0, 8, 0],
                        opacity: [0.25, 0.1, 0.25]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-5 h-5 bg-dark-warm-primary rounded-full opacity-0 dark:opacity-20 shadow-dark-warm"
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.05, 0.2]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Main Content */}
                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
                    {/* Enhanced Name with Dark Mode Styling */}
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#7C5E3C] dark:text-dark-warm-light font-body text-center mb-8 drop-shadow-lg dark:drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] transition-all duration-500 dark:animate-glow"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Himanshu Sharma
                    </motion.h1>

                    {/* Enhanced Typewriter Text */}
                    <motion.div
                        className="text-lg md:text-xl lg:text-2xl font-semibold font-body text-center mb-12 min-h-[3rem] text-[#B48A4A] dark:text-dark-warm-primary drop-shadow-lg dark:drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] transition-all duration-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        {displayed}
                        <span className="animate-pulse text-[#7C5E3C] dark:text-dark-warm-light">|</span>
                    </motion.div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-6 flex-wrap">
                        {[
                            { text: 'About', id: 'about' },
                            { text: 'Projects', id: 'projects' },
                            { text: 'Contact', id: 'contact' }
                        ].map((button, index) => (
                            <motion.div
                                key={button.text}
                                className="group relative"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div
                                    className="px-8 py-4 bg-gradient-to-r from-[#F6E7C1] to-[#B48A4A] dark:from-dark-surface-secondary dark:to-dark-surface-primary text-[#7C5E3C] dark:text-dark-text-primary font-semibold rounded-2xl shadow-lg dark:shadow-dark-md border-2 border-[#E9E4DA] dark:border-dark-border-accent/30 cursor-pointer transition-all duration-500 group-hover:from-[#B48A4A] group-hover:to-[#7C5E3C] dark:group-hover:from-dark-warm-primary dark:group-hover:to-dark-warm-secondary group-hover:text-[#FAF7F2] dark:group-hover:text-dark-text-primary group-hover:shadow-xl dark:group-hover:shadow-dark-warm backdrop-blur-sm"
                                    onClick={() => scrollToSection(button.id)}
                                >
                                    {button.text}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#F6E7C1] to-[#B48A4A] dark:from-dark-warm-primary dark:to-dark-warm-secondary rounded-2xl blur-lg opacity-0 group-hover:opacity-30 dark:group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
                            </motion.div>
                        ))}
                        <motion.div
                            className="group relative"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a
                                href="https://drive.google.com/file/d/1Bam8h5yRqJqwC_xB1UjU8yU5l8l1xjKJ/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-gradient-to-r from-[#7C5E3C] to-[#B48A4A] dark:from-dark-warm-primary dark:to-dark-warm-secondary text-[#FAF7F2] dark:text-dark-text-primary font-semibold rounded-2xl shadow-lg dark:shadow-dark-warm border-2 border-[#E9E4DA] dark:border-dark-border-accent/50 cursor-pointer transition-all duration-500 group-hover:from-[#B48A4A] group-hover:to-[#7C5E3C] dark:group-hover:from-dark-warm-secondary dark:group-hover:to-dark-warm-tertiary group-hover:shadow-xl dark:group-hover:shadow-dark-warm inline-block backdrop-blur-sm"
                            >
                                Resume 📄
                            </a>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#7C5E3C] to-[#B48A4A] dark:from-dark-warm-primary dark:to-dark-warm-secondary rounded-2xl blur-lg opacity-0 group-hover:opacity-30 dark:group-hover:opacity-25 transition-opacity duration-500 -z-10"></div>
                        </motion.div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="w-6 h-10 border-2 border-[#B48A4A] dark:border-dark-warm-primary rounded-full flex justify-center backdrop-blur-sm dark:bg-dark-surface-primary/20">
                            <motion.div
                                className="w-1 h-3 bg-[#B48A4A] dark:bg-dark-warm-primary rounded-full mt-2 dark:shadow-dark-warm"
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Enhanced Mobile Version */}
            <div className="sm:hidden relative min-h-screen">
                {/* Enhanced Background Image with Overlay */}
                <div className="absolute inset-0">
                    <img
                        src="https://i.pinimg.com/736x/fb/98/2c/fb982c76a43009ee76f5d24b3e6f05e6.jpg"
                        alt="home"
                        className="w-full h-full object-cover dark:opacity-30 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FAF7F2]/30 via-[#F6E7C1]/40 to-[#B48A4A]/50 dark:from-dark-bg-primary/85 dark:via-dark-bg-secondary/75 dark:to-dark-bg-tertiary/65"></div>
                    
                    {/* Mobile dark mode pattern overlay */}
                    <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-dark-warm-primary/8 via-transparent to-dark-warm-secondary/8"></div>
                    </div>
                </div>

                {/* Enhanced Floating Elements for Mobile */}
                <motion.div
                    className="absolute top-16 right-8 w-3 h-3 bg-[#F6E7C1] dark:bg-dark-warm-light rounded-full opacity-60 dark:opacity-35 dark:shadow-dark-warm"
                    animate={{ y: [0, -15, 0], opacity: [0.6, 0.2, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-40 left-6 w-4 h-4 bg-[#B48A4A] dark:bg-dark-warm-primary rounded-full opacity-40 dark:opacity-25 dark:shadow-dark-warm"
                    animate={{ y: [0, 10, 0], x: [0, 8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Main Content */}
                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
                    {/* Enhanced Mobile Name */}
                    <motion.h1
                        className="text-3xl font-bold text-[#7C5E3C] dark:text-dark-warm-light font-body text-center mb-6 drop-shadow-lg dark:drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] transition-all duration-500"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Himanshu Sharma
                    </motion.h1>

                    {/* Enhanced Mobile Typewriter Text */}
                    <motion.div
                        className="text-base font-semibold font-body text-center mb-8 min-h-[2.5rem] text-[#B48A4A] dark:text-dark-warm-primary leading-relaxed drop-shadow-lg dark:drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] transition-all duration-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        {displayed}
                        <span className="animate-pulse text-[#7C5E3C] dark:text-dark-warm-light">|</span>
                    </motion.div>

                    {/* Navigation Buttons */}
                    <div className="flex flex-col gap-4">
                        {[
                            { text: 'About', id: 'about' },
                            { text: 'Projects', id: 'projects' },
                            { text: 'Contact', id: 'contact' }
                        ].map((button, index) => (
                            <motion.div
                                key={button.text}
                                className="group relative"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div
                                    className="px-6 py-3 bg-gradient-to-r from-[#F6E7C1] to-[#B48A4A] dark:from-dark-surface-secondary dark:to-dark-surface-primary text-[#7C5E3C] dark:text-dark-text-primary font-semibold rounded-xl shadow-lg dark:shadow-dark-md border-2 border-[#E9E4DA] dark:border-dark-border-accent/30 cursor-pointer transition-all duration-500 group-hover:from-[#B48A4A] group-hover:to-[#7C5E3C] dark:group-hover:from-dark-warm-primary dark:group-hover:to-dark-warm-secondary group-hover:text-[#FAF7F2] dark:group-hover:text-dark-text-primary group-hover:shadow-xl dark:group-hover:shadow-dark-warm text-center backdrop-blur-sm"
                                    onClick={() => scrollToSection(button.id)}
                                >
                                    {button.text}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#F6E7C1] to-[#B48A4A] dark:from-dark-warm-primary dark:to-dark-warm-secondary rounded-xl blur-lg opacity-0 group-hover:opacity-30 dark:group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
                            </motion.div>
                        ))}
                        <motion.div
                            className="group relative"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.1 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <a
                                href="https://drive.google.com/file/d/1g2B2lsVNOIjYAMKHdTel7Db3rENB-6m5/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-gradient-to-r from-[#7C5E3C] to-[#B48A4A] dark:from-dark-warm-primary dark:to-dark-warm-secondary text-[#FAF7F2] dark:text-dark-text-primary font-semibold rounded-xl shadow-lg dark:shadow-dark-warm border-2 border-[#E9E4DA] dark:border-dark-border-accent/50 cursor-pointer transition-all duration-500 group-hover:from-[#B48A4A] group-hover:to-[#7C5E3C] dark:group-hover:from-dark-warm-secondary dark:group-hover:to-dark-warm-tertiary group-hover:shadow-xl dark:group-hover:shadow-dark-warm text-center inline-block backdrop-blur-sm"
                            >
                                Resume 📄
                            </a>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#7C5E3C] to-[#B48A4A] dark:from-dark-warm-primary dark:to-dark-warm-secondary rounded-xl blur-lg opacity-0 group-hover:opacity-30 dark:group-hover:opacity-25 transition-opacity duration-500 -z-10"></div>
                        </motion.div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="w-5 h-8 border-2 border-[#B48A4A] dark:border-dark-warm-primary rounded-full flex justify-center backdrop-blur-sm dark:bg-dark-surface-primary/20">
                            <motion.div
                                className="w-1 h-2 bg-[#B48A4A] dark:bg-dark-warm-primary rounded-full mt-2 dark:shadow-dark-warm"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Home;

import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <div className="flex flex-col items-center gap-20 mt-20 justify-center min-h-screen mx-auto w-[65%] max-w-[750px]
         min-w-[270px] relative transition-all duration-500" id="about">
            
            {/* Enhanced background elements for dark mode */}
            <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 bg-dark-warm-primary/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-dark-warm-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-dark-warm-light/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <motion.h1
                className="flex flex-col justify-center items-center text-2xl text-amber-700 dark:text-dark-warm-light font-bold font-display
                sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl transition-all duration-500 relative z-10 dark:drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Experiences
                <div className="flex bg-amber-600 dark:bg-dark-warm-primary w-[70%] rounded-2xl h-2 -rotate-3 justify-center items-center transition-all duration-500 dark:shadow-dark-warm"></div>
            </motion.h1>
            
            {/* Enhanced Timeline Section */}
            <motion.div
                className="relative flex flex-col items-center w-full mt-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                {/* Enhanced Vertical line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-300 dark:bg-dark-warm-primary rounded transition-all duration-500 dark:shadow-dark-warm"></div>

                {/* Enhanced Internship 1 (Current) */}
                <motion.div
                    className="flex w-full mb-16 justify-start items-center relative flex-col sm:flex-row"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    {/* Enhanced Timeline label (date) */}
                    <div className="w-full sm:w-1/2 flex justify-end pr-2 sm:pr-8 mb-2 sm:mb-0">
                        <span className="bg-amber-200 dark:bg-dark-warm-primary/30 text-amber-800 dark:text-dark-warm-light px-3 py-1 rounded-full text-xs font-semibold shadow-md dark:shadow-dark-sm whitespace-nowrap transition-all duration-500 border dark:border-dark-warm-primary/20">
                            July 2025 - Present
                        </span>
                    </div>
                    {/* Enhanced Dot and line */}
                    <div className="z-10 flex flex-col items-center">
                        <motion.div
                            className="w-8 h-8 bg-amber-500 dark:bg-dark-warm-primary rounded-full flex items-center justify-center shadow-lg dark:shadow-dark-warm border-4 border-amber-200 dark:border-dark-warm-secondary transition-all duration-500"
                            whileHover={{ scale: 1.1 }}
                            animate={{
                                boxShadow: [
                                    "0 0 0 0 rgba(245, 158, 11, 0.4)",
                                    "0 0 0 10px rgba(245, 158, 11, 0)",
                                    "0 0 0 0 rgba(245, 158, 11, 0)"
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <span className="text-white dark:text-dark-text-primary font-bold transition-colors duration-500">1</span>
                        </motion.div>
                        <div className="h-16 w-1 bg-amber-300 dark:bg-dark-warm-primary hidden sm:block transition-all duration-500"></div>
                    </div>
                    {/* Enhanced Card */}
                    <div className="w-full sm:w-1/2 pl-0 sm:pl-8 mt-4 sm:mt-0">
                        <motion.div
                            className="bg-white dark:bg-white/5 flex flex-col gap-2 rounded-xl shadow-lg dark:shadow-dark-lg p-6 max-w-md border-l-4 border-amber-500 dark:border-dark-warm-primary mx-auto sm:mx-0 backdrop-blur-sm transition-all duration-500"
                            whileHover={{ y: -5, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-xl font-bold text-amber-800 dark:text-dark-warm-light transition-all duration-500">SDE Intern at FlairX </h3>
                            <p className="text-sm text-amber-700 dark:text-dark-warm-primary font-semibold transition-all duration-500">Role: Full Stack Developer</p>
                            <p className="text-gray-700 dark:text-dark-text-secondary transition-all duration-500">Currently working on backend APIs and database optimization.
                                Learning new technologies and contributing to ongoing projects.</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Enhanced Internship 2 (Past) */}
                <motion.div
                    className="flex w-full mb-8 justify-end items-center relative flex-col sm:flex-row-reverse"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    {/* Enhanced Timeline label (date) */}
                    <div className="w-full sm:w-1/2 flex justify-start pl-2 sm:pl-8 mb-2 sm:mb-0">
                        <span className="bg-amber-200 dark:bg-dark-warm-secondary/30 text-amber-800 dark:text-dark-warm-light px-3 py-1 rounded-full text-xs font-semibold shadow-md dark:shadow-dark-sm whitespace-nowrap transition-all duration-500 border dark:border-dark-warm-secondary/20">
                            Dec 2024 - Feb 2025
                        </span>
                    </div>
                    {/* Enhanced Dot and line */}
                    <div className="z-10 flex flex-col items-center">
                        <motion.div
                            className="w-8 h-8 bg-amber-500 dark:bg-dark-warm-secondary rounded-full flex items-center justify-center shadow-lg dark:shadow-dark-warm border-4 border-amber-200 dark:border-dark-warm-primary transition-all duration-500"
                            whileHover={{ scale: 1.1 }}
                            animate={{
                                boxShadow: [
                                    "0 0 0 0 rgba(217, 119, 6, 0.4)",
                                    "0 0 0 10px rgba(217, 119, 6, 0)",
                                    "0 0 0 0 rgba(217, 119, 6, 0)"
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        >
                            <span className="text-white dark:text-dark-text-primary font-bold transition-colors duration-500">2</span>
                        </motion.div>
                    </div>
                    {/* Enhanced Card */}
                    <div className="w-full sm:w-1/2 pr-0 sm:pr-8 mt-4 sm:mt-0 flex justify-end">
                        <motion.div
                            className="bg-white dark:bg-white/5 flex flex-col gap-2 rounded-xl shadow-lg dark:shadow-dark-lg p-6 max-w-md border-r-4 border-amber-500 dark:border-dark-warm-secondary mx-auto sm:mx-0 backdrop-blur-sm transition-all duration-500"
                            whileHover={{ y: -5, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-xl font-bold text-amber-800 dark:text-dark-warm-light transition-all duration-500">Internship : GoBiggie</h3>
                            <p className="text-sm text-amber-700 dark:text-dark-warm-secondary font-semibold transition-all duration-500">Role: Full Stack Developer</p>
                            <p className="text-gray-700 dark:text-dark-text-secondary transition-all duration-500">Worked on building user interfaces and improving user experience for the main product.
                                Contributed to several key features and collaborated with a cross-functional team.</p>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
            {/* Timeline Section End */}

        </div>
    )
}

export default Experience;
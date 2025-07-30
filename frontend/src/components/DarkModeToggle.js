import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

const DarkModeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className="fixed top-6 right-6 z-[9999] p-4 rounded-2xl bg-gradient-to-br from-[#F6E7C1] via-[#E9E4DA] to-[#B48A4A] dark:from-dark-surface-secondary dark:via-dark-surface-primary dark:to-dark-bg-tertiary shadow-lg hover:shadow-xl dark:shadow-dark-warm hover:dark:shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all duration-500 border-2 border-[#E9E4DA]/50 dark:border-dark-border-accent/30 backdrop-blur-sm group overflow-hidden"
            whileHover={{ scale: 1.05, rotate: isDarkMode ? -5 : 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 200,
                damping: 15
            }}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {/* Animated background glow */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#F6E7C1] to-[#B48A4A] dark:from-dark-warm-primary dark:to-dark-warm-secondary opacity-0 group-hover:opacity-20 rounded-2xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.3, 0]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            
            {/* Icon container with enhanced animations */}
            <motion.div
                initial={false}
                animate={{
                    rotate: isDarkMode ? 360 : 0,
                    scale: isDarkMode ? 1.1 : 1
                }}
                transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 150,
                    damping: 12
                }}
                className="w-7 h-7 flex items-center justify-center relative z-10"
            >
                {isDarkMode ? (
                    // Enhanced Sun icon for light mode
                    <motion.svg
                        className="w-7 h-7 text-dark-warm-light drop-shadow-lg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                        
                        {/* Animated rays */}
                        <motion.g
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            style={{ transformOrigin: "12px 12px" }}
                        >
                            <circle cx="12" cy="12" r="1" fill="currentColor" opacity="0.6" />
                        </motion.g>
                    </motion.svg>
                ) : (
                    // Enhanced Moon icon for dark mode
                    <motion.svg
                        className="w-7 h-7 text-[#7C5E3C] drop-shadow-lg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                        
                        {/* Animated stars */}
                        <motion.circle
                            cx="19"
                            cy="5"
                            r="0.5"
                            fill="currentColor"
                            opacity="0.8"
                            animate={{
                                opacity: [0.3, 1, 0.3],
                                scale: [0.8, 1.2, 0.8]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: 0
                            }}
                        />
                        <motion.circle
                            cx="21"
                            cy="8"
                            r="0.3"
                            fill="currentColor"
                            opacity="0.6"
                            animate={{
                                opacity: [0.2, 0.8, 0.2],
                                scale: [0.6, 1, 0.6]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: 1
                            }}
                        />
                    </motion.svg>
                )}
            </motion.div>
            
            {/* Tooltip */}
            <motion.div
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-dark-surface-primary dark:bg-white text-white dark:text-gray-800 px-3 py-1 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg"
                initial={{ y: 10, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
            >
                {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-dark-surface-primary dark:bg-white rotate-45"></div>
            </motion.div>
        </motion.button>
    );
};

export default DarkModeToggle;
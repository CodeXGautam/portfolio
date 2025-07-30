
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="flex flex-col items-center gap-20 mt-20 justify-center min-h-screen mx-auto w-[65%] max-w-[750px]
         min-w-[270px] transition-all duration-500 relative" id="about">
            
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
                About Me
                <div className="flex bg-amber-600 dark:bg-dark-warm-primary w-[70%] rounded-2xl h-2 -rotate-3 justify-center items-center transition-all duration-500 dark:shadow-dark-warm"></div>
            </motion.h1>
            
            <motion.div
                className="text-sm sm:text-md md:text-lg lg:text-xl font-body dark:text-dark-text-secondary transition-all duration-500 relative z-10 leading-relaxed dark:drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                Hi! I'm Himanshu Sharma, a full-stack developer passionate about building scalable, user-focused web apps.
                I work primarily with the MERN stack and enjoy exploring AI integration using tools like LangChain.<br />
                I'm always learning and experimenting with new technologies to build better solutions.
            </motion.div>

            <motion.div
                className="bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-100 dark:from-white/5 dark:via-white/3 dark:to-white/5 flex flex-col gap-8 justify-around p-8 rounded-3xl w-full shadow-2xl shadow-black/10 dark:shadow-dark-xl border-2 border-amber-200 dark:border-dark-border-accent/30 relative overflow-hidden transition-all duration-500 backdrop-blur-sm"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <motion.h1
                    className="flex flex-col justify-center items-center text-xl text-amber-700 dark:text-dark-warm-light font-semibold font-display sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl mb-2 relative z-10 transition-all duration-500 dark:drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Skills & Technologies
                    <div className="flex bg-gradient-to-r from-amber-500 to-yellow-500 dark:from-dark-warm-primary dark:to-dark-warm-secondary w-[60%] rounded-2xl h-1.5 -rotate-2 justify-center items-center mt-2 shadow-lg dark:shadow-dark-warm transition-all duration-500"></div>
                </motion.h1>
                
                {/* Enhanced decorative background elements with dark mode support */}
                <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-amber-300 to-yellow-400 dark:from-dark-warm-primary/20 dark:to-dark-warm-secondary/20 rounded-full opacity-30 dark:opacity-15 animate-pulse blur-sm"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 dark:from-dark-warm-secondary/20 dark:to-dark-warm-tertiary/20 rounded-full opacity-40 dark:opacity-20 animate-bounce blur-sm"></div>
                <div className="absolute top-1/2 left-2 w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-300 dark:from-dark-warm-light/15 dark:to-dark-warm-primary/15 rounded-full opacity-35 dark:opacity-15 animate-ping blur-sm"></div>
                <div className="absolute top-1/4 right-8 w-6 h-6 bg-gradient-to-br from-yellow-300 to-amber-400 dark:from-dark-warm-primary/15 dark:to-dark-warm-secondary/15 rounded-full opacity-25 dark:opacity-10 animate-pulse blur-sm"></div>
                <div className="absolute bottom-1/4 left-8 w-10 h-10 bg-gradient-to-br from-amber-200 to-yellow-300 dark:from-dark-warm-light/10 dark:to-dark-warm-primary/10 rounded-full opacity-20 dark:opacity-8 animate-bounce blur-sm"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full z-10">
                    {/* Enhanced Frontend Card */}
                    <motion.div
                        className="group relative bg-[#FAF7F2]/95 dark:bg-white/5 backdrop-blur-lg rounded-3xl p-8 border-2 border-[#E9E4DA] dark:border-dark-border-accent/30 hover:border-[#B48A4A] dark:hover:border-dark-warm-primary transition-all duration-500 hover:shadow-2xl dark:hover:shadow-dark-warm hover:-translate-y-4 overflow-hidden"
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.01 }}
                    >
                        <div className="absolute top-4 right-4 w-14 h-14 bg-[#F6E7C1] dark:bg-dark-warm-primary/20 rounded-full opacity-20 dark:opacity-15 group-hover:opacity-40 dark:group-hover:opacity-25 transition-all duration-500 blur-sm"></div>
                        <div className="relative z-10 flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 bg-[#F6E7C1] dark:bg-dark-warm-primary rounded-2xl flex items-center justify-center shadow-lg dark:shadow-dark-md transition-all duration-500">
                                <svg className="w-5 h-5 text-[#B48A4A] dark:text-dark-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#B48A4A] dark:text-dark-warm-light transition-all duration-500">Frontend</h3>
                                <p className="text-xs text-[#7C5E3C] dark:text-dark-text-muted font-medium transition-all duration-500">UI & Experience</p>
                            </div>
                        </div>
                        <div className="relative z-10 space-y-4">
                            {[
                                { name: "React.js", level: 90 },
                                { name: "Next.js", level: 75 },
                                { name: "Tailwind CSS", level: 85 },
                                { name: "JavaScript", level: 88 },
                                { name: "HTML/CSS", level: 92 }
                            ].map((skill, index) => (
                                <div key={skill.name} className="group/item">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="font-semibold text-[#7C5E3C] dark:text-dark-text-secondary group-hover/item:text-[#B48A4A] dark:group-hover/item:text-dark-warm-light transition-all duration-500">{skill.name}</span>
                                        <span className="text-xs font-bold text-[#B48A4A] dark:text-dark-warm-primary transition-all duration-500">{skill.level}%</span>
                                    </div>
                                    <div className="relative h-2 bg-[#E9E4DA] dark:bg-dark-border-primary rounded-full overflow-hidden transition-all duration-500">
                                        <motion.div
                                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#F6E7C1] to-[#B48A4A] dark:from-dark-warm-primary dark:to-dark-warm-secondary rounded-full transition-all duration-500 dark:shadow-dark-warm"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Enhanced Backend Card */}
                    <motion.div
                        className="group relative bg-[#FAF7F2]/95 dark:bg-white/5 backdrop-blur-lg rounded-3xl p-8 border-2 border-[#E9E4DA] dark:border-dark-border-accent/30 hover:border-[#B48A4A] dark:hover:border-dark-warm-primary transition-all duration-500 hover:shadow-2xl dark:hover:shadow-dark-warm hover:-translate-y-4 overflow-hidden"
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.01 }}
                    >
                        <div className="absolute top-4 right-4 w-14 h-14 bg-[#F6E7C1] dark:bg-dark-warm-primary/20 rounded-full opacity-20 dark:opacity-15 group-hover:opacity-40 dark:group-hover:opacity-25 transition-all duration-500 blur-sm"></div>
                        <div className="relative z-10 flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 bg-[#F6E7C1] dark:bg-dark-warm-primary rounded-2xl flex items-center justify-center shadow-lg dark:shadow-dark-md transition-all duration-500">
                                <svg className="w-5 h-5 text-[#B48A4A] dark:text-dark-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#B48A4A] dark:text-dark-warm-light transition-all duration-500">Backend</h3>
                                <p className="text-xs text-[#7C5E3C] dark:text-dark-text-muted font-medium transition-all duration-500">Server & APIs</p>
                            </div>
                        </div>
                        <div className="relative z-10 space-y-4">
                            {[
                                { name: "Node.js", level: 85 },
                                { name: "Express", level: 80 },
                                { name: "Django", level: 70 },
                                { name: "REST APIs", level: 88 }
                            ].map((skill, index) => (
                                <div key={skill.name} className="group/item">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="font-semibold text-[#7C5E3C] dark:text-dark-text-secondary group-hover/item:text-[#B48A4A] dark:group-hover/item:text-dark-warm-light transition-all duration-500">{skill.name}</span>
                                        <span className="text-xs font-bold text-[#B48A4A] dark:text-dark-warm-primary transition-all duration-500">{skill.level}%</span>
                                    </div>
                                    <div className="relative h-2 bg-[#E9E4DA] dark:bg-dark-border-primary rounded-full overflow-hidden transition-all duration-500">
                                        <motion.div
                                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#F6E7C1] to-[#B48A4A] dark:from-dark-warm-primary dark:to-dark-warm-secondary rounded-full transition-all duration-500 dark:shadow-dark-warm"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Enhanced Database & Auth Card */}
                    <motion.div
                        className="group relative bg-[#FAF7F2]/95 dark:bg-white/5 backdrop-blur-lg rounded-3xl p-8 border-2 border-[#E9E4DA] dark:border-dark-border-accent/30 hover:border-[#B48A4A] dark:hover:border-dark-warm-primary transition-all duration-500 hover:shadow-2xl dark:hover:shadow-dark-warm hover:-translate-y-4 overflow-hidden"
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.01 }}
                    >
                        <div className="absolute top-4 right-4 w-14 h-14 bg-[#F6E7C1] dark:bg-dark-warm-primary/20 rounded-full opacity-20 dark:opacity-15 group-hover:opacity-40 dark:group-hover:opacity-25 transition-all duration-500 blur-sm"></div>
                        <div className="relative z-10 flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 bg-[#F6E7C1] dark:bg-dark-warm-primary rounded-2xl flex items-center justify-center shadow-lg dark:shadow-dark-md transition-all duration-500">
                                <svg className="w-5 h-5 text-[#B48A4A] dark:text-dark-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#B48A4A] dark:text-dark-warm-light transition-all duration-500">Database & Auth</h3>
                                <p className="text-xs text-[#7C5E3C] dark:text-dark-text-muted font-medium transition-all duration-500">Data & Security</p>
                            </div>
                        </div>
                        <div className="relative z-10 space-y-4">
                            {[
                                { name: "MongoDB", level: 82 },
                                { name: "Mongoose", level: 75 },
                                { name: "JWT", level: 80 },
                                { name: "OAuth", level: 70 }
                            ].map((skill, index) => (
                                <div key={skill.name} className="group/item">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="font-semibold text-[#7C5E3C] dark:text-dark-text-secondary group-hover/item:text-[#B48A4A] dark:group-hover/item:text-dark-warm-light transition-all duration-500">{skill.name}</span>
                                        <span className="text-xs font-bold text-[#B48A4A] dark:text-dark-warm-primary transition-all duration-500">{skill.level}%</span>
                                    </div>
                                    <div className="relative h-2 bg-[#E9E4DA] dark:bg-dark-border-primary rounded-full overflow-hidden transition-all duration-500">
                                        <motion.div
                                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#F6E7C1] to-[#B48A4A] dark:from-dark-warm-primary dark:to-dark-warm-secondary rounded-full transition-all duration-500 dark:shadow-dark-warm"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Enhanced DevOps/Tools Card */}
                    <motion.div
                        className="group relative bg-[#FAF7F2]/95 dark:bg-white/5 backdrop-blur-lg rounded-3xl p-8 border-2 border-[#E9E4DA] dark:border-dark-border-accent/30 hover:border-[#B48A4A] dark:hover:border-dark-warm-primary transition-all duration-500 hover:shadow-2xl dark:hover:shadow-dark-warm hover:-translate-y-4 overflow-hidden"
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.01 }}
                    >
                        <div className="absolute top-4 right-4 w-14 h-14 bg-[#F6E7C1] dark:bg-dark-warm-primary/20 rounded-full opacity-20 dark:opacity-15 group-hover:opacity-40 dark:group-hover:opacity-25 transition-all duration-500 blur-sm"></div>
                        <div className="relative z-10 flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 bg-[#F6E7C1] dark:bg-dark-warm-primary rounded-2xl flex items-center justify-center shadow-lg dark:shadow-dark-md transition-all duration-500">
                                <svg className="w-5 h-5 text-[#B48A4A] dark:text-dark-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#B48A4A] dark:text-dark-warm-light transition-all duration-500">DevOps/Tools</h3>
                                <p className="text-xs text-[#7C5E3C] dark:text-dark-text-muted font-medium transition-all duration-500">Development & Deployment</p>
                            </div>
                        </div>
                        <div className="relative z-10 space-y-4">
                            {[
                                { name: "Nginx", level: 75 },
                                { name: "Git", level: 90 },
                                { name: "GitHub", level: 88 }
                            ].map((skill, index) => (
                                <div key={skill.name} className="group/item">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="font-semibold text-[#7C5E3C] dark:text-dark-text-secondary group-hover/item:text-[#B48A4A] dark:group-hover/item:text-dark-warm-light transition-all duration-500">{skill.name}</span>
                                        <span className="text-xs font-bold text-[#B48A4A] dark:text-dark-warm-primary transition-all duration-500">{skill.level}%</span>
                                    </div>
                                    <div className="relative h-2 bg-[#E9E4DA] dark:bg-dark-border-primary rounded-full overflow-hidden transition-all duration-500">
                                        <motion.div
                                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#F6E7C1] to-[#B48A4A] dark:from-dark-warm-primary dark:to-dark-warm-secondary rounded-full transition-all duration-500 dark:shadow-dark-warm"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Enhanced Data Science Card */}
                    <motion.div
                        className="group relative bg-[#FAF7F2]/95 dark:bg-white/5 backdrop-blur-lg rounded-3xl p-8 border-2 border-[#E9E4DA] dark:border-dark-border-accent/30 hover:border-[#B48A4A] dark:hover:border-dark-warm-primary transition-all duration-500 hover:shadow-2xl dark:hover:shadow-dark-warm hover:-translate-y-4 overflow-hidden md:col-span-2 lg:col-span-1"
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.01 }}
                    >
                        <div className="absolute top-4 right-4 w-14 h-14 bg-[#F6E7C1] dark:bg-dark-warm-primary/20 rounded-full opacity-20 dark:opacity-15 group-hover:opacity-40 dark:group-hover:opacity-25 transition-all duration-500 blur-sm"></div>
                        <div className="relative z-10 flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 bg-[#F6E7C1] dark:bg-dark-warm-primary rounded-2xl flex items-center justify-center shadow-lg dark:shadow-dark-md transition-all duration-500">
                                <svg className="w-5 h-5 text-[#B48A4A] dark:text-dark-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#B48A4A] dark:text-dark-warm-light transition-all duration-500">Data Science</h3>
                                <p className="text-xs text-[#7C5E3C] dark:text-dark-text-muted font-medium transition-all duration-500">Analytics & ML</p>
                            </div>
                        </div>
                        <div className="relative z-10 space-y-4">
                            {[
                                { name: "Python", level: 85 },
                                { name: "NumPy", level: 80 },
                                { name: "Pandas", level: 78 },
                                { name: "Scikit-learn", level: 70 }
                            ].map((skill, index) => (
                                <div key={skill.name} className="group/item">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="font-semibold text-[#7C5E3C] dark:text-dark-text-secondary group-hover/item:text-[#B48A4A] dark:group-hover/item:text-dark-warm-light transition-all duration-500">{skill.name}</span>
                                        <span className="text-xs font-bold text-[#B48A4A] dark:text-dark-warm-primary transition-all duration-500">{skill.level}%</span>
                                    </div>
                                    <div className="relative h-2 bg-[#E9E4DA] dark:bg-dark-border-primary rounded-full overflow-hidden transition-all duration-500">
                                        <motion.div
                                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#F6E7C1] to-[#B48A4A] dark:from-dark-warm-primary dark:to-dark-warm-secondary rounded-full transition-all duration-500 dark:shadow-dark-warm"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>

        </div>
    )
}

export default About;

import { motion } from 'framer-motion';

const experiences = [
    {
        id: 1,
        title: "Software Engineer Intern at Monk CI",
        role: "Software Engineering Intern · Remote",
        date: "Jan 2026 – Present",
        description: "Developed and shipped features end-to-end across 5+ backend services including billing, notification, and core services using Go and microservice architectures. Resolved 100+ bugs through Kubernetes rollouts, CI/CD pipelines, PostgreSQL, Redis, and async messaging in an Agile team.",
        isPrimary: true,
    },
    {
        id: 2,
        title: "Software Engineer Intern at FlairX",
        role: "Full Stack Developer · Remote",
        date: "July 2025 – October 2025",
        description: "Automated interview scheduling by integrating Calendly with an end-to-end workflow using React, Node.js, and TypeScript, cutting scheduling time by 30+ minutes per cycle. Delivered production features and resolved hundreds of tickets in an Agile environment using Jira and Postman.",
        isPrimary: true,
    },
    {
        id: 3,
        title: "Full Stack Developer Intern at goBiggie",
        role: "Full Stack Developer · Remote",
        date: "Dec 2024 – Feb 2025",
        description: "Designed and developed a fully responsive corporate website, deployed to production for client use. Integrated REST APIs, enhanced UI/UX using Tailwind CSS, and optimized for mobile-first experiences.",
        isPrimary: false,
    },
];

const Experience = () => {
    return (
        <div className="flex flex-col items-center gap-20 mt-20 justify-center min-h-screen mx-auto w-[90%] max-w-[900px]
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

            {/* Timeline */}
            <div className="relative w-full mt-4">
                {/* Centre vertical line */}
                <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-amber-300 dark:bg-dark-warm-primary rounded transition-all duration-500 dark:shadow-dark-warm"></div>

                {experiences.map((exp, index) => {
                    const isLeft = index % 2 === 0; // 0 → right card, 1 → left card, 2 → right card
                    return (
                        <motion.div
                            key={exp.id}
                            className={`flex w-full mb-16 items-center relative
                                flex-col
                                sm:flex-row ${isLeft ? '' : 'sm:flex-row-reverse'}
                            `}
                            initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.15 * index }}
                            viewport={{ once: true }}
                        >
                            {/* Date label */}
                            <div className={`w-full sm:w-1/2 flex mb-3 sm:mb-0
                                ${isLeft ? 'sm:justify-end sm:pr-8' : 'sm:justify-start sm:pl-8'}
                                justify-center
                            `}>
                                <span className="bg-amber-200 dark:bg-dark-warm-primary/30 text-amber-800 dark:text-dark-warm-light px-4 py-1.5 rounded-full text-xs font-bold shadow-md dark:shadow-dark-sm whitespace-nowrap transition-all duration-500 border border-amber-300 dark:border-dark-warm-primary/30">
                                    {exp.date}
                                </span>
                            </div>

                            {/* Dot */}
                            <div className="z-10 flex-shrink-0">
                                <motion.div
                                    className="w-9 h-9 bg-amber-500 dark:bg-dark-warm-primary rounded-full flex items-center justify-center shadow-lg dark:shadow-dark-warm border-4 border-amber-200 dark:border-dark-warm-secondary transition-all duration-500"
                                    whileHover={{ scale: 1.15 }}
                                    animate={{
                                        boxShadow: [
                                            "0 0 0 0 rgba(245, 158, 11, 0.4)",
                                            "0 0 0 10px rgba(245, 158, 11, 0)",
                                            "0 0 0 0 rgba(245, 158, 11, 0)"
                                        ]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
                                >
                                    <span className="text-white font-bold text-sm">{exp.id}</span>
                                </motion.div>
                            </div>

                            {/* Card */}
                            <div className={`w-full sm:w-1/2 mt-4 sm:mt-0
                                ${isLeft ? 'sm:pl-8' : 'sm:pr-8'}
                            `}>
                                <motion.div
                                    className={`bg-white dark:bg-white/5 flex flex-col gap-2 rounded-xl shadow-lg dark:shadow-dark-lg p-6 w-full
                                        ${isLeft
                                            ? 'border-l-4 border-amber-500 dark:border-dark-warm-primary sm:ml-0'
                                            : 'border-r-4 border-amber-500 dark:border-dark-warm-primary sm:mr-0'
                                        }
                                        backdrop-blur-sm transition-all duration-500`}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3 className="text-xl font-bold text-amber-800 dark:text-dark-warm-light transition-all duration-500">{exp.title}</h3>
                                    <p className="text-sm text-amber-700 dark:text-dark-warm-primary font-semibold transition-all duration-500">Role: {exp.role}</p>
                                    <p className="text-gray-700 dark:text-dark-text-secondary transition-all duration-500 leading-relaxed">{exp.description}</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

        </div>
    )
}

export default Experience;
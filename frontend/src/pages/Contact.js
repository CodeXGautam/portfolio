

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        if(formData.name === '' || formData.email === '' || formData.message === ''){
            toast.error('All fields are required.');
            return;
        }
        toast.loading('Sending message...');

        try {
            const response = await fetch('http://localhost:4000/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            toast.dismiss(); // Dismiss the loading toast

            if (response.ok) {
                toast.success('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                toast.error(`Failed to send message: ${data.message || response.statusText}`);
            }
        } catch (error) {
            toast.dismiss(); // Dismiss the loading toast
            toast.error('Error sending message. Please try again later.');
            console.error('Error:', error);
        }
    };

    return(
            <div className="flex flex-col items-center gap-20 mt-20 justify-center min-h-screen
             mx-auto w-[65%] max-w-[750px] min-w-[270px] relative overflow-hidden transition-all duration-500" id="contact">
            
            {/* Enhanced background elements for dark mode */}
            <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 bg-dark-warm-primary/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-dark-warm-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-dark-warm-light/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <motion.h1
                className="flex flex-col justify-center items-center text-2xl text-amber-700 dark:text-dark-warm-light font-bold font-display sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl drop-shadow-lg dark:drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] transition-all duration-500 relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Get In Touch !
                <div className="flex bg-amber-600 dark:bg-dark-warm-primary w-[70%] rounded-2xl h-2 -rotate-3 justify-center items-center transition-all duration-500 dark:shadow-dark-warm"></div>
            </motion.h1>

            {/* Enhanced Creative Contact Form */}
            <motion.form
                className="w-full max-w-lg bg-[#FAF7F2]/95 dark:bg-white/5 rounded-3xl shadow-2xl dark:shadow-dark-xl p-10 flex flex-col gap-8 border-2 border-[#E9E4DA] dark:border-dark-border-accent/30 relative backdrop-blur-md transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                onSubmit={submitHandler}
            >
                {/* Enhanced Envelope Icon */}
                <div className="flex justify-center mb-2">
                    <motion.div
                        className="bg-[#F6E7C1] dark:bg-dark-warm-primary p-4 rounded-full shadow-lg dark:shadow-dark-warm border-2 border-[#E9E4DA] dark:border-dark-border-accent/30 transition-all duration-500"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8 text-[#B48A4A] dark:text-dark-text-primary transition-colors duration-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' /></svg>
                    </motion.div>
                </div>
                {/* Enhanced Form Fields */}
                <div className="relative">
                    <input type="text" id="name" name="name" value={formData.name}
                        onChange={handleChange}
                        className="peer w-full border-b-2 border-[#E9E4DA] dark:border-dark-border-primary bg-transparent py-3 px-2 text-[#7C5E3C] dark:text-dark-text-primary font-body focus:outline-none focus:border-[#B48A4A] dark:focus:border-dark-warm-primary transition-all duration-500 placeholder-transparent rounded-t-xl"
                        placeholder="Your Name" />
                    <label htmlFor="name" className="absolute left-2 top-3 text-[#B48A4A] dark:text-dark-warm-primary font-semibold text-sm transition-all duration-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#7C5E3C] dark:peer-focus:text-dark-warm-light bg-[#FAF7F2] dark:bg-white/5 px-1 pointer-events-none">
                        Name
                    </label>
                </div>
                <div className="relative">
                    <input type="email" id="email" name="email" value={formData.email}
                        onChange={handleChange}
                        className="peer w-full border-b-2 border-[#E9E4DA] dark:border-dark-border-primary bg-transparent py-3 px-2 text-[#7C5E3C] dark:text-dark-text-primary font-body focus:outline-none focus:border-[#B48A4A] dark:focus:border-dark-warm-primary transition-all duration-500 placeholder-transparent rounded-t-xl"
                        placeholder="Your Email" />
                    <label htmlFor="email" className="absolute left-2 top-3 text-[#B48A4A] dark:text-dark-warm-primary font-semibold text-sm transition-all duration-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#7C5E3C] dark:peer-focus:text-dark-warm-light bg-[#FAF7F2] dark:bg-white/5 px-1 pointer-events-none">
                        Email
                    </label>
                </div>
                <div className="relative">
                    <textarea id="message" name="message" rows="4" value={formData.message}
                        onChange={handleChange}
                        className="peer w-full border-b-2 border-[#E9E4DA] dark:border-dark-border-primary bg-transparent py-3 px-2 text-[#7C5E3C] dark:text-dark-text-primary font-body focus:outline-none focus:border-[#B48A4A] dark:focus:border-dark-warm-primary transition-all duration-500 resize-none placeholder-transparent rounded-t-xl"
                        placeholder="Your Message"></textarea>
                    <label htmlFor="message" className="absolute left-2 top-3 text-[#B48A4A] dark:text-dark-warm-primary font-semibold text-sm transition-all duration-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#7C5E3C] dark:peer-focus:text-dark-warm-light bg-[#FAF7F2] dark:bg-white/5 px-1 pointer-events-none">
                        Message
                    </label>
                </div>
                <motion.button
                    type="submit"
                    className="mt-4 bg-gradient-to-r from-[#F6E7C1] via-[#F3E3B6] to-[#E9E4DA] dark:from-dark-warm-primary dark:via-dark-warm-secondary dark:to-dark-warm-tertiary hover:from-[#F3E3B6] hover:to-[#F6E7C1] dark:hover:from-dark-warm-secondary dark:hover:to-dark-warm-primary text-[#7C5E3C] dark:text-dark-text-primary font-bold py-3 px-8 rounded-full shadow-xl dark:shadow-dark-warm transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 text-lg font-display tracking-wide border-2 border-[#E9E4DA] dark:border-dark-border-accent/30"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Send Message ✨
                </motion.button>
                {/* Enhanced decorative bottom border */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-2 bg-[#E9E4DA] dark:bg-dark-warm-primary/30 rounded-full blur-sm opacity-60 dark:opacity-40 transition-all duration-500"></div>
            </motion.form>
            {/* Creative Contact Form End */}
            <Toaster />
        </div>
    )
}

export default Contact;
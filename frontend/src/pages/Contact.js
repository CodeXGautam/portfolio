

const Contact = () =>{
    return(
            <div className="flex flex-col items-center gap-20 mt-20 justify-center min-h-screen mx-auto w-[65%] max-w-[750px]
         min-w-[270px]" id="about">
            <h1 className="flex flex-col justify-center items-center text-2xl text-amber-700 font-bold font-display
            sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl">
                Get In Touch !
                <div className="flex bg-amber-600 w-[70%] rounded-2xl h-2 -rotate-3 justify-center items-center"></div>
            </h1>
        
            {/* Creative Contact Form Start */}
            <form className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 flex flex-col gap-6 border-2 border-amber-100 relative animate-fade-in"
                // TODO: Add your form submission logic here
                onSubmit={e => { e.preventDefault(); /* handle form submission here */ }}>
                <div className="relative">
                    <input type="text" id="name" name="name" required
                        className="peer w-full border-b-2 border-amber-300 bg-transparent py-3 px-2 text-amber-900 font-body focus:outline-none focus:border-amber-500 transition-all placeholder-transparent"
                        placeholder="Your Name" />
                    <label htmlFor="name" className="absolute left-2 top-3 text-amber-500 font-semibold text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-amber-700 bg-white px-1 pointer-events-none">
                        Name
                    </label>
                </div>
                <div className="relative">
                    <input type="email" id="email" name="email" required
                        className="peer w-full border-b-2 border-amber-300 bg-transparent py-3 px-2 text-amber-900 font-body focus:outline-none focus:border-amber-500 transition-all placeholder-transparent"
                        placeholder="Your Email" />
                    <label htmlFor="email" className="absolute left-2 top-3 text-amber-500 font-semibold text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-amber-700 bg-white px-1 pointer-events-none">
                        Email
                    </label>
                </div>
                <div className="relative">
                    <textarea id="message" name="message" required rows="4"
                        className="peer w-full border-b-2 border-amber-300 bg-transparent py-3 px-2 text-amber-900 font-body focus:outline-none focus:border-amber-500 transition-all resize-none placeholder-transparent"
                        placeholder="Your Message"></textarea>
                    <label htmlFor="message" className="absolute left-2 top-3 text-amber-500 font-semibold text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-amber-700 bg-white px-1 pointer-events-none">
                        Message
                    </label>
                </div>
                <button type="submit"
                    className="mt-4 bg-amber-400 hover:bg-amber-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-200 transform hover:-translate-y-1 hover:scale-105 text-lg font-display tracking-wide animate-bounce-slow">
                    Send Message 🚀
                </button>
            </form>
            {/* Creative Contact Form End */}
        </div>
    )
}

export default Contact;
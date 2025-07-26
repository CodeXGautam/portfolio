

const Contact = () =>{
    return(
            <div className="flex flex-col items-center gap-20 mt-20 justify-center min-h-screen mx-auto w-[65%] max-w-[750px] min-w-[270px] relative overflow-hidden" id="about">
            <h1 className="flex flex-col justify-center items-center text-2xl text-amber-700 font-bold font-display sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl drop-shadow-lg">
                Get In Touch !
                <div className="flex bg-amber-600 w-[70%] rounded-2xl h-2 -rotate-3 justify-center items-center"></div>
            </h1>

            {/* Creative Contact Form Start */}
            <form className="w-full max-w-lg bg-[#FAF7F2]/95 rounded-3xl shadow-2xl p-10 flex flex-col gap-8 border-2 border-[#E9E4DA] relative animate-fade-in backdrop-blur-md"
                // TODO: Add your form submission logic here
                onSubmit={e => { e.preventDefault(); /* handle form submission here */ }}>
                {/* Envelope Icon */}
                <div className="flex justify-center mb-2">
                    <div className="bg-[#F6E7C1] p-4 rounded-full shadow-lg border-2 border-[#E9E4DA] animate-bounce-slow">
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8 text-[#B48A4A]' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' /></svg>
                    </div>
                </div>
                <div className="relative">
                    <input type="text" id="name" name="name" required
                        className="peer w-full border-b-2 border-[#E9E4DA] bg-transparent py-3 px-2 text-[#7C5E3C] font-body focus:outline-none focus:border-[#B48A4A] transition-all placeholder-transparent rounded-t-xl"
                        placeholder="Your Name" />
                    <label htmlFor="name" className="absolute left-2 top-3 text-[#B48A4A] font-semibold text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#7C5E3C] bg-[#FAF7F2] px-1 pointer-events-none">
                        Name
                    </label>
                </div>
                <div className="relative">
                    <input type="email" id="email" name="email" required
                        className="peer w-full border-b-2 border-[#E9E4DA] bg-transparent py-3 px-2 text-[#7C5E3C] font-body focus:outline-none focus:border-[#B48A4A] transition-all placeholder-transparent rounded-t-xl"
                        placeholder="Your Email" />
                    <label htmlFor="email" className="absolute left-2 top-3 text-[#B48A4A] font-semibold text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#7C5E3C] bg-[#FAF7F2] px-1 pointer-events-none">
                        Email
                    </label>
                </div>
                <div className="relative">
                    <textarea id="message" name="message" required rows="4"
                        className="peer w-full border-b-2 border-[#E9E4DA] bg-transparent py-3 px-2 text-[#7C5E3C] font-body focus:outline-none focus:border-[#B48A4A] transition-all resize-none placeholder-transparent rounded-t-xl"
                        placeholder="Your Message"></textarea>
                    <label htmlFor="message" className="absolute left-2 top-3 text-[#B48A4A] font-semibold text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#7C5E3C] bg-[#FAF7F2] px-1 pointer-events-none">
                        Message
                    </label>
                </div>
                <button type="submit"
                    className="mt-4 bg-gradient-to-r from-[#F6E7C1] via-[#F3E3B6] to-[#E9E4DA] hover:from-[#F3E3B6] hover:to-[#F6E7C1] text-[#7C5E3C] font-bold py-3 px-8 rounded-full shadow-xl transition-all duration-200 transform hover:-translate-y-1 hover:scale-105 text-lg font-display tracking-wide border-2 border-[#E9E4DA] animate-bounce-slow">
                    Send Message 🚀
                </button>
                {/* Decorative bottom border */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-2 bg-[#E9E4DA] rounded-full blur-sm opacity-60"></div>
            </form>
            {/* Creative Contact Form End */}
        </div>
    )
}

export default Contact;
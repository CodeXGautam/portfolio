
const Home = () => {

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div>

            <div className="flex-col gap-5 bg-slate-950 justify-center items-center w-[100%]
        transition-all duration-300 hidden sm:flex md:flex lg:flex xl:flex 2xl:flex">
                <img src="https://i.pinimg.com/736x/ca/a1/35/caa135a7de7ad340f167a11b3bfd3b03.jpg"
                    alt="home" className="opacity-100 w-[100%] max-h-screen" />
                <div className="absolute flex flex-col items-center gap-10 w-[70%] min-w-[150px] max-w-[980px]">
                    <h1 className="flex font-bold text-2xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl
                 text-amber-800 font-body">
                        Himanshu Sharma
                    </h1>
                    <div className="text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-semibold font-body">
                        Not just writing code — building experiences.
                    </div>

                    <div className="flex gap-5">

                        <div className='flex justify-center items-center p-3 rounded-tl-xl rounded-br-xl font-semibold 
                     bg-amber-800 text-slate-200 hover:scale-[1.1] hover:text-white text-xs sm:text-md md:text-lg lg:text-xl
                      hover:bg-amber-700 transition-all duration-300' onClick={scrollToSection('about')}>
                            About
                        </div>
                        <div className='flex justify-center items-center p-3 rounded-tl-xl rounded-br-xl font-semibold
                     bg-amber-800 text-slate-200 hover:scale-[1.1] hover:text-white text-xs sm:text-md md:text-lg lg:text-xl
                      hover:bg-amber-700 transition-all duration-300' onClick={scrollToSection('projects')}>
                            Projects
                        </div>
                        <div className='flex justify-center items-center p-3 rounded-tl-xl rounded-br-xl font-semibold
                     bg-amber-800 text-slate-200 hover:scale-[1.1] hover:text-white text-xs sm:text-md md:text-lg lg:text-xl
                     hover:bg-amber-700 transition-all duration-300' onClick={scrollToSection('contact')}>
                            Contact
                        </div>
                    </div>
                </div>
            </div>

             <div className="flex flex-col gap-5 bg-slate-950 justify-center items-center w-[100%]
        transition-all duration-300 sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
                <img src="https://i.pinimg.com/736x/fb/98/2c/fb982c76a43009ee76f5d24b3e6f05e6.jpg"
                    alt="home" className="opacity-100 w-[100%] min-h-screen" />
                <div className="absolute flex flex-col items-center gap-10 w-[90%] min-w-[150px] max-w-[980px]">
                    <h1 className="flex font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl
                 text-amber-800 font-body">
                        Himanshu Sharma
                    </h1>
                    <div className="text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-semibold font-body">
                        Not just writing code — building experiences.
                    </div>

                    <div className="flex gap-5">

                        <div className='flex justify-center items-center p-3 rounded-tl-xl rounded-br-xl font-semibold 
                     bg-amber-800 text-slate-200 hover:scale-[1.1] hover:text-white text-base sm:text-md md:text-lg lg:text-xl
                      hover:bg-amber-700 transition-all duration-300' onClick={scrollToSection('about')}>
                            About
                        </div>
                        <div className='flex justify-center items-center p-3 rounded-tl-xl rounded-br-xl font-semibold
                     bg-amber-800 text-slate-200 hover:scale-[1.1] hover:text-white text-base sm:text-md md:text-lg lg:text-xl
                      hover:bg-amber-700 transition-all duration-300' onClick={scrollToSection('projects')}>
                            Projects
                        </div>
                        <div className='flex justify-center items-center p-3 rounded-tl-xl rounded-br-xl font-semibold
                     bg-amber-800 text-slate-200 hover:scale-[1.1] hover:text-white text-base sm:text-md md:text-lg lg:text-xl
                     hover:bg-amber-700 transition-all duration-300' onClick={scrollToSection('contact')}>
                            Contact
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;
import { useNavigate } from "react-router";

const Home = () => {

    const navigate = useNavigate();
    return (
        <div className="flex flex-col gap-5 bg-slate-950 relative justify-center items-center w-[100%]
        transition-all duration-300">
            <img src="https://i.pinimg.com/736x/ca/a1/35/caa135a7de7ad340f167a11b3bfd3b03.jpg"
                alt="home" className="opacity-100 w-[100%] max-h-screen" />
            <div className="absolute flex flex-col items-center gap-10 w-[70%] min-w-[150px] max-w-[980px]">
                <h1 className="flex font-bold text-2xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl
                 text-amber-800">
                    Himanshu Sharma
                </h1>
                <div className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-semibold">
                    Not just writing code — building experiences.
                </div>

                <div className="flex gap-5 flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">

                    <div className='flex justify-center items-center p-3 rounded-tl-xl rounded-br-xl font-semibold 
                     bg-amber-800 text-slate-200 hover:scale-[1.1] hover:text-white
                      hover:bg-amber-700 transition-all duration-300' onClick={() => navigate('#about')}>
                        About
                    </div>
                    <div className='flex justify-center items-center p-3 rounded-tl-xl rounded-br-xl font-semibold
                     bg-amber-800 text-slate-200 hover:scale-[1.1] hover:text-white
                      hover:bg-amber-700 transition-all duration-300'>
                        Projects
                    </div>
                    <div className='flex justify-center items-center p-3 rounded-tl-xl rounded-br-xl font-semibold
                     bg-amber-800 text-slate-200 hover:scale-[1.1] hover:text-white
                     hover:bg-amber-700 transition-all duration-300'>
                        Contact
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
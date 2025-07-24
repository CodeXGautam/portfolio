
const About = () => {
    return (
        <div className="flex flex-col items-center gap-20 mt-20 justify-center min-h-screen mx-auto w-[65%] max-w-[750px]
         min-w-[270px]" id="about">
            <h1 className="flex flex-col justify-center items-center text-2xl text-amber-700 font-bold font-display
            sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl">
                About Me
                <div className="flex bg-amber-600 w-[70%] rounded-2xl h-2 -rotate-3 justify-center items-center"></div>
            </h1>
            <div className="text-sm sm:text-md md:text-lg lg:text-xl font-body">
                Hi! I'm Himanshu Sharma, a full-stack developer passionate about building scalable, user-focused web apps.
                I work primarily with the MERN stack and enjoy exploring AI integration using tools like LangChain.<br />
                I'm always learning and experimenting with new technologies to build better solutions.
            </div>

            <div className="bg-yellow-200 flex flex-col gap-5 justify-around p-5 -rotate-6 w-[100%]">
                <h1 className="flex flex-col justify-center items-center text-xl text-amber-700 font-semibold font-display
            sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl">
                    Skills
                </h1>
                <div className="flex flex-wrap gap-5 justify-center">
                    <div className="flex flex-col gap-3 bg-yellow-100 shadow-md rounded-xl p-4 w-[28%] min-w-[125px]">
                        <h1 className="flex gap-2 items-center font-semibold text-sm sm:text-md md:text-lg lg:text-lg">
                            <span className="rounded-full w-3 h-3 bg-amber-900"></span> Frontend
                        </h1>
                        <div className="text-sm sm:text-md md:text-lg lg:text-lg">
                            <span className="text-blue-400 font-bold"> › </span>
                            React.js
                        </div>
                        <div className="text-sm sm:text-md md:text-lg lg:text-lg">
                            <span className="text-blue-400 font-bold"> › </span>
                            Next.js
                        </div>
                        <div className="text-sm sm:text-md md:text-lg lg:text-lg">
                            <span className="text-blue-400 font-bold"> › </span>
                            Tailwind CSS
                        </div>
                        <div className="text-sm sm:text-md md:text-lg lg:text-lg">
                            <span className="text-blue-400 font-bold"> › </span>
                            JavaScript
                        </div>
                        <div className="text-sm sm:text-md md:text-lg lg:text-lg">
                            <span className="text-blue-400 font-bold"> › </span>
                            HTML
                        </div>
                        <div className="text-sm sm:text-md md:text-lg lg:text-lg">
                            <span className="text-blue-400 font-bold"> › </span>
                            CSS
                        </div>

                    </div>

                    <div className="flex flex-col gap-3 bg-yellow-100 shadow-md rounded-xl p-4 w-[28%] min-w-[125px]">
                        <h1 className="flex gap-2 items-center font-semibold text-sm sm:text-md md:text-lg lg:text-lg">
                            <span className="rounded-full w-3 h-3 bg-amber-900"></span> Backend
                        </h1>
                        <div className="text-sm sm:text-md md:text-lg lg:text-lg">
                            <span className="text-blue-400 font-bold"> › </span>
                            Node.js
                        </div>
                        <div className="text-sm sm:text-md md:text-lg lg:text-lg">
                            <span className="text-blue-400 font-bold"> › </span>
                            Express
                        </div>
                        <div className="text-sm sm:text-md md:text-lg lg:text-lg">
                            <span className="text-blue-400 font-bold"> › </span>
                            Django
                        </div>
                        <div className="text-sm sm:text-md md:text-lg lg:text-lg">
                            <span className="text-blue-400 font-bold"> › </span>
                            Rest APIs
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 bg-yellow-100 shadow-md rounded-xl p-4 w-[28%] min-w-[125px]">
                        <h1 className="flex gap-2 items-center font-semibold text-sm sm:text-md md:text-lg lg:text-lg">
                            <span className="rounded-full w-3 h-3 bg-amber-900"></span> Database & Auth
                        </h1>
                        <div className="text-sm sm:text-md md:text-lg lg:text-lg">
                            <span className="text-blue-400 font-bold"> › </span>
                            MongoDb
                        </div>
                        <div className="text-sm sm:text-md md:text-lg lg:text-lg">
                            <span className="text-blue-400 font-bold"> › </span>
                            Mongoose
                        </div>
                        <div className="text-sm sm:text-md md:text-lg lg:text-lg">
                            <span className="text-blue-400 font-bold"> › </span>
                            JWT
                        </div>
                        <div className="text-sm sm:text-md md:text-lg lg:text-lg">
                            <span className="text-blue-400 font-bold"> › </span>
                            OAuth
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 bg-yellow-100 shadow-md rounded-xl p-4 w-[28%] min-w-[125px]">
                        <h1 className="flex gap-2 items-center font-semibold text-sm sm:text-md md:text-lg lg:text-lg">
                            <span className="rounded-full w-3 h-3 bg-amber-900"></span> DevOps/Tools
                        </h1>
                        <div className="text-sm sm:text-md md:text-lg lg:text-lg">
                            <span className="text-blue-400 font-bold"> › </span>
                            Nginx
                        </div>
                        <div className="text-sm sm:text-md md:text-lg lg:text-lg">
                            <span className="text-blue-400 font-bold"> › </span>
                            Git
                        </div>
                        <div className="text-sm sm:text-md md:text-lg lg:text-lg">
                            <span className="text-blue-400 font-bold"> › </span>
                            GitHub
                        </div>
                    </div>


                    <div className="flex flex-col gap-3 bg-yellow-100 shadow-md rounded-xl p-4 w-[28%] min-w-[125px]">
                        <h1 className="flex gap-2 items-center font-semibold text-sm sm:text-md md:text-lg lg:text-lg">
                            <span className="rounded-full w-3 h-3 bg-amber-900"></span> Data Science
                        </h1>
                        <div className="text-sm sm:text-md md:text-lg lg:text-lg">
                            <span className="text-blue-400 font-bold"> › </span>
                            Python
                        </div>
                        <div className="text-sm sm:text-md md:text-lg lg:text-lg">
                            <span className="text-blue-400 font-bold"> › </span>
                            Numpy
                        </div>
                        <div className="text-sm sm:text-md md:text-lg lg:text-lg">
                            <span className="text-blue-400 font-bold"> › </span>
                            Pandas
                        </div>
                        <div className="text-sm sm:text-md md:text-lg lg:text-lg">
                            <span className="text-blue-400 font-bold"> › </span>
                            SK Learn
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default About;
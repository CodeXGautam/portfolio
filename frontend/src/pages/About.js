
const About = () => {
    return (
        <div className="flex flex-col items-center gap-10 justify-center min-h-screen mx-auto w-[65%] max-w-[750px]
         min-w-[270px]" id="about">
            <h1 className="flex flex-col justify-center items-center text-2xl text-amber-700 font-bold font-display
            sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl">
                About Me
            <div className="flex bg-amber-600 w-[70%] rounded-2xl h-2 -rotate-3 justify-center items-center"></div>
            </h1>
            <div className="text-sm sm:text-md md:text-lg lg:text-xl font-body">
                Hi! I'm Himanshu Sharma, a full-stack developer passionate about building scalable, user-focused web apps. 
                I work primarily with the MERN stack and enjoy exploring AI integration using tools like LangChain.<br/>
                I'm always learning and experimenting with new technologies to build better solutions.
            </div>
        </div>
    )
}

export default About;
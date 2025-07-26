
const Experience = () => {
    return (
        <div className="flex flex-col items-center gap-20 mt-20 justify-center min-h-screen mx-auto w-[65%] max-w-[750px]
         min-w-[270px]" id="about">
            <h1 className="flex flex-col justify-center items-center text-2xl text-amber-700 font-bold font-display
            sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl">
                Experiences
                <div className="flex bg-amber-600 w-[70%] rounded-2xl h-2 -rotate-3 justify-center items-center"></div>
            </h1>
            {/* Timeline Section Start */}
            <div className="relative flex flex-col items-center w-full mt-10">
                {/* Vertical line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-300 rounded"></div>

                {/* Internship 1 (Past) */}
                <div className="flex w-full mb-16 justify-start items-center relative flex-col sm:flex-row">
                    {/* Timeline label (date) */}
                    <div className="w-full sm:w-1/2 flex justify-end pr-2 sm:pr-8 mb-2 sm:mb-0">
                        <span className="bg-amber-200 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold shadow-md whitespace-nowrap">
                            July 2025 - Present
                        </span>
                    </div>
                    {/* Dot and line */}
                    <div className="z-10 flex flex-col items-center">
                        <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center shadow-lg border-4 border-amber-200">
                            <span className="text-white font-bold">1</span>
                        </div>
                        <div className="h-16 w-1 bg-amber-300 hidden sm:block"></div>
                    </div>
                    {/* Card */}
                    <div className="w-full sm:w-1/2 pl-0 sm:pl-8 mt-4 sm:mt-0">
                        <div className="bg-white flex flex-col gap-2 rounded-xl shadow-lg p-6 max-w-md border-l-4 border-amber-500 mx-auto sm:mx-0">
                            <h3 className="text-xl font-bold text-amber-800">SDE Intern at FlairX </h3>
                            <p className="text-sm text-amber-700 font-semibold">Role: Full Stack Developer</p>
                            <p className="text-gray-700">  Currently working on backend APIs and database optimization.
                                Learning new technologies and contributing to ongoing projects.</p>
                        </div>
                    </div>
                </div>

                {/* Internship 2 (Current) */}
                <div className="flex w-full mb-8 justify-end items-center relative flex-col sm:flex-row-reverse">
                    {/* Timeline label (date) */}
                    <div className="w-full sm:w-1/2 flex justify-start pl-2 sm:pl-8 mb-2 sm:mb-0">
                        <span className="bg-amber-200 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold shadow-md whitespace-nowrap">
                            Jan 2024 - Mar 2024
                        </span>
                    </div>
                    {/* Dot and line */}
                    <div className="z-10 flex flex-col items-center">
                        <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center shadow-lg border-4 border-amber-200">
                            <span className="text-white font-bold">2</span>
                        </div>
                    </div>
                    {/* Card */}
                    <div className="w-full sm:w-1/2 pr-0 sm:pr-8 mt-4 sm:mt-0 flex justify-end">
                        <div className="bg-white flex flex-col gap-2 rounded-xl shadow-lg p-6 max-w-md border-r-4 border-amber-500 mx-auto sm:mx-0">
                            <h3 className="text-xl font-bold text-amber-800">Internship : GoBiggie</h3>
                            <p className="text-sm text-amber-700 font-semibold">Role: Full Stack Developer</p>
                            <p className="text-gray-700">Worked on building user interfaces and improving user experience for the main product.
                                Contributed to several key features and collaborated with a cross-functional team.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Timeline Section End */}

        </div>
    )
}

export default Experience;
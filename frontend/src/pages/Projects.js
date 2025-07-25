import vocinteraImg from '../images/landingPage.png';
import routewizImg from '../images/welcome_page.png';
import mailImg from '../images/dashboard.png';
import ProjectCard from '../components/ProjectCard';
import { NavLink } from 'react-router';

const projects = [
    {
        title: "Vocintera",
        projectImg: vocinteraImg,
        description: "A voice enabled AI powered mock interview platform",
        gitUrl: "https://github.com/CodeXGautam/Vocintera",
        liveUrl: "https://vocintera.onrender.com/",
    },
    {
        title: "RouteWizard",
        projectImg: routewizImg,
        description: "An intelligent ml powered route optimization platform",
        gitUrl: "https://github.com/CodeXGautam/routewiz",
        liveUrl: "https://routewiz.onrender.com/",
    },
    {
        title: "Mail Tracker Pro",
        projectImg: mailImg,
        description: "A firefox extension which tracks emails in real time and updates on a user dashboard",
        gitUrl: "https://github.com/CodeXGautam/mail-tracker",
        liveUrl: "https://addons.mozilla.org/addon/mail-tracker-pro/",
    },
]

const Projects = () => {
    return (
        <div className="flex flex-col items-center gap-20 mt-20 justify-center min-h-screen mx-auto w-[85%] max-w-[1180px]
         min-w-[270px]" id="about">
            <h1 className="flex flex-col justify-center items-center text-2xl text-amber-700 font-bold font-display
            sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl">
                Projects
                <div className="flex bg-amber-600 w-[70%] rounded-2xl h-2 -rotate-3 justify-center items-center"></div>
            </h1>

            <div className='flex gap-4 bg-bgColor rounded-xl p-10 w-[100%] overflow-x-scroll no-scrollbar'>
                {
                    projects.map((project) => {
                        return (
                            <ProjectCard title={project.title} description={project.description}
                                projectImg={project.projectImg} gitUrl={project.gitUrl} liveUrl={project.liveUrl} />
                        )
                    })
                }
            </div>

            <NavLink to="/projects_page"
                className='flex justify-center items-center p-3 rounded-md shadow-lg bg-yellow-300 shadow-black
            hover:-translate-y-2 transition-all duration-150 hover:bg-yellow-400 font-semibold'>
                More →
            </NavLink>
        </div>
    )
}

export default Projects;
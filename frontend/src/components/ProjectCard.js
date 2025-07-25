import { NavLink } from 'react-router';

const ProjectCard = (props) => {
    const title = props.title;
    const projectImg = props.projectImg;
    const description = props.description;
    const gitUrl = props.gitUrl;
    const liveUrl = props.liveUrl;

    return (
        <div className="flex flex-col gap-4 items-center justify-around bg-amber-100 p-5 w-[50%] max-w-[500px] min-w-[280px]
        rounded-xl shadow-md shadow-black">
            <h2 className='text-2xl font-bold font-body text-amber-900'>{title}</h2>
            <img src={projectImg} alt="project" className='w-[100%] object-cover' />
            <div className='font-body flex justify-center items-center'>{description}</div>
            <div className="flex justify-between items-center w-[100%]">
                <NavLink to={gitUrl} className='flex justify-center items-center p-3 rounded-md shadow-lg bg-yellow-300 
            hover:-translate-y-2 transition-all duration-150 hover:bg-yellow-400 font-semibold'>
                    GitHub
                </NavLink>
                <NavLink to={liveUrl} className='flex justify-center items-center p-3 rounded-md shadow-lg bg-yellow-300 
            hover:-translate-y-2 transition-all duration-150 hover:bg-yellow-400 font-semibold'>
                    Demo 🚀
                </NavLink>
            </div>
        </div>
    )
}

export default ProjectCard;
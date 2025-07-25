import {NavLink} from 'react-router';

const ProjectCard = (props) =>{
    const title = props.title;
    const projectImg = props.projectImg;
    const description = props.description;
    const gitUrl = props.gitUrl;
    const liveUrl = props.liveUrl;

    return(
        <div className="flex flex-col gap-4 items-center justify-around bg-amber-100 p-5 w-[40%] max-w-[450px] min-w-[270px]">
            <h2 className='text-2xl font-bold font-body'>{title}</h2>
            <img src={projectImg}  alt="project" className='w-[100%] object-cover'/>
            <div className='font-body flex justify-center items-center'>{description}</div>
            <button className='bg-yellow-200 hover:bg-yellow-300 p-5 rounded-full cursor-pointer'>Know More</button>
            <div className="flex justify-between items-center w-[100%]">
                <NavLink to={gitUrl} className='flex justify-center items-center p-4 bg-yellow-200'>GitHub</NavLink>
                <NavLink to={liveUrl} className='flex justify-center items-center p-4 bg-yellow-200'>Live Demo</NavLink>
            </div>
        </div>
    )
}

export default ProjectCard;
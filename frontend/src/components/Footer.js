import {NavLink} from "react-router";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";


const Footer = () =>{
    return(
        <div className="flex justify-center items-center gap-8 bg-bgColor p-5 mt-20">
            <NavLink to='https://github.com/CodeXGautam'
            target="blank">
                <FaGithub className="text-3xl cursor-pointer hover:text-slate-100
                transition-all duration-200"/>
            </NavLink>

            <NavLink to='https://www.linkedin.com/in/himanshu-sharma-72b93b283/' 
            target="blank">
                <FaLinkedin className="text-3xl cursor-pointer hover:text-slate-100
                transition-all duration-200"/>
            </NavLink>

             <NavLink to='mailto:himanshug1310@gmail.com' 
            target="blank">
                <BiLogoGmail className="text-3xl cursor-pointer hover:text-slate-100
                transition-all duration-200"/>
            </NavLink>
        </div>
    )
}

export default Footer;
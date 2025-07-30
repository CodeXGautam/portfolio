import {NavLink} from "react-router";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";


const Footer = () =>{
    return(
        <div className="flex justify-center items-center gap-8 bg-bgColor dark:bg-dark-surface-primary p-5 mt-20 border-t-2 border-amber-200 dark:border-dark-border-accent/30 transition-all duration-500 relative overflow-hidden">
            {/* Enhanced background elements for dark mode */}
            <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-1/4 w-16 h-16 bg-dark-warm-primary/10 rounded-full blur-2xl"></div>
                <div className="absolute top-0 right-1/4 w-20 h-20 bg-dark-warm-secondary/10 rounded-full blur-2xl"></div>
            </div>

            <NavLink to='https://github.com/CodeXGautam'
            target="blank"
            className="group relative z-10">
                <FaGithub className="text-3xl cursor-pointer text-[#7C5E3C] dark:text-dark-text-secondary hover:text-slate-100 dark:hover:text-dark-warm-light
                transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-lg dark:group-hover:drop-shadow-[0_4px_8px_rgba(245,158,11,0.3)]"/>
            </NavLink>

            <NavLink to='https://www.linkedin.com/in/himanshu-sharma-72b93b283/'
            target="blank"
            className="group relative z-10">
                <FaLinkedin className="text-3xl cursor-pointer text-[#7C5E3C] dark:text-dark-text-secondary hover:text-slate-100 dark:hover:text-dark-warm-light
                transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-lg dark:group-hover:drop-shadow-[0_4px_8px_rgba(245,158,11,0.3)]"/>
            </NavLink>

             <NavLink to='mailto:himanshug1310@gmail.com'
            target="blank"
            className="group relative z-10">
                <BiLogoGmail className="text-3xl cursor-pointer text-[#7C5E3C] dark:text-dark-text-secondary hover:text-slate-100 dark:hover:text-dark-warm-light
                transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-lg dark:group-hover:drop-shadow-[0_4px_8px_rgba(245,158,11,0.3)]"/>
            </NavLink>
        </div>
    )
}

export default Footer;
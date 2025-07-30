import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AllProjects from "./pages/AllProjects";
import DarkModeToggle from "./components/DarkModeToggle";
import { ThemeProvider } from "./contexts/ThemeContext";
import {Routes , Route} from 'react-router-dom';
import { motion } from 'framer-motion';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-all duration-500">
        <DarkModeToggle />
        <Routes>
          {/* Home route with all sections */}
          <Route path="/" element={
            <div className="flex flex-col justify-between min-h-screen overflow-hidden">
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} data-aos="fade-up">
                <Home/>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }} data-aos="fade-up">
                <About/>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }} data-aos="fade-up">
                <Projects/>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} viewport={{ once: true }} data-aos="fade-up">
                <Experience/>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} viewport={{ once: true }} data-aos="fade-up">
                <Contact/>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} viewport={{ once: true }} data-aos="fade-up">
                <Footer/>
              </motion.div>
            </div>
          } />
          
          {/* Dedicated projects page */}
          <Route path="/projects_page" element={<AllProjects />} />
          
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;

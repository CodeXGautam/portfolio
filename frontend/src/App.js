import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import Projects from "./pages/Projects";
import {Routes , Route} from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen overflow-hidden">
          <Home/>
          <About/>
          <Projects/>
          <Experience/>
          <Contact/>
          <Footer/>

          <Routes>
            <Route path='/project_page' element={ProjectPage}/>
          </Routes>
    </div>
  );
}

export default App;

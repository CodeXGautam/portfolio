import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen overflow-hidden">
          <Home/>
          <About/>
          <Projects/>
          <Footer/>
    </div>
  );
}

export default App;

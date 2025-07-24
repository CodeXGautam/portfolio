import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen overflow-hidden">
          <Home/>
          <About/>
          <Footer/>
    </div>
  );
}

export default App;

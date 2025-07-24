import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen overflow-hidden
      bg-slate-900">
          <Home/>
          <Footer/>
    </div>
  );
}

export default App;

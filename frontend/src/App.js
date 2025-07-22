import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen overflow-hidden
      bg-slate-900">
          <div>
            <h1 className="text-3xl font-bold underline">
              Himanshu Sharma
              </h1>
          </div>
          <Footer/>
    </div>
  );
}

export default App;

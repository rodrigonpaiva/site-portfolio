import Contact from "./components/Contact";
import Work from "./components/Work";
import Skills from "./components/Skills";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;

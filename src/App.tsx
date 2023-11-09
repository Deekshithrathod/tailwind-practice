import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <div className="px-4 lg:max-w-5xl lg:mx-auto">
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <Team />
        <Testimonials />
      </div>
      <Footer />
    </>
  );
}

export default App;

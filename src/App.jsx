import HeroSection from "./components/Hero";
import About from "./components/About";
import Layout from "./Layout";
import Skils from "./components/Skils";
import Projects from "./components/Projects";

function App() {
  return (
    <Layout>
      <HeroSection />
      <About />
      <Skils />
      <Projects />
    </Layout>
  );
}

export default App;

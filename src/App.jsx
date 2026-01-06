import Hero from "./components/Hero";
import Content from "./components/Content";
import Creations from "./components/Creations";
import Footer from "./components/Footer";
import './App.css';
import contetImg from './images/desktop/image-interactive.jpg';

const App = () => {
  return (
    <div>
      <Hero />
      <Content
        image={contetImg}
        header={"the leader in interactive vr"}
        content={"Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winnig creations have transformed businesses through digital experiences that bind to their brand."}
      />

      <Creations />

      <Footer />
    </div>
  )
}

export default App

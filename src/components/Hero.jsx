import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="
        relative h-screen 
        bg-cover bg-center
        md:bg-[url('../images/desktop/image-hero.jpg')]
        bg-[url('../images/mobile/image-hero.jpg')]
      "
      
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Navbar */}
      <header className="relative z-10">
        <Navbar />
      </header>

      {/* Hero content */}
      <div className="relative  h-full flex items-center mb-6 px-6 md:px-16 lg:px-32">
        <motion.div 
          initial={{ opacity:0, y:50 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-2 border-white p-6 md:p-8 max-w-162.5">
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-light uppercase tracking-wide leading-tight">
            Immersive experiences that deliver
          </h1>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

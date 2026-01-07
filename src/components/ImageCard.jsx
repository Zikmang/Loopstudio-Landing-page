import { motion } from "framer-motion"

const ImageCard = ({ title, desktopImg, mobileImg }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="
        relative h-80
        bg-cover bg-center
        cursor-pointer group overflow-hidden
        bg-(image:--mobile-img)
        md:bg-(image:--desktop-img)
      "
      style={{ 
          '--desktop-img': `url(${desktopImg})`,
          '--mobile-img': `url(${mobileImg})`
        }}
    >
      {/* Gradient overlay */}
      <div
        className="
          absolute inset-0
          bg-linear-to-t from-black/70 via-black/20 to-transparent
          transition-opacity duration-300
          group-hover:opacity-20
        "
      ></div>

      {/* Title */}
      <h2
        className="
          absolute bottom-6 left-6
          max-w-37.5
          text-white text-2xl font-light leading-tight uppercase tracking-wide
        "
      >
        {title}
      </h2>
    </motion.div>
  )
}

export default ImageCard

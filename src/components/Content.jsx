import { motion } from "framer-motion"

const Content = ({ image, header, content }) => {
  return (
      <section className="py-24 px-6 md:px-16 lg:px-32">
        <motion.div
          initial={{opacity: 0, y: 80}}
          whileInView={{ opacity: 1, y: 0}} 
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto grid md:grid-cols-2 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50}}
            whileInView={{ opacity: 1, x: 0}}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <img
              src={image}
              alt="Interactive VR"
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Content Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{duration: 0.8, delay: 0.4 }}
            className="
              bg-white
              p-8 md:p-12 lg:p-16
              md:absolute
              md:right-10
              md:top-8/12
              md:-translate-y-1/2
              md:w-[55%]
              shadow-lg
            "
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light uppercase tracking-wide">
              {header}
            </h2>

            <p className="mt-6 text-gray-600 text-sm md:text-base leading-relaxed">
              {content}
            </p>
          </motion.div>

        </motion.div>
      </section>
  )
}

export default Content

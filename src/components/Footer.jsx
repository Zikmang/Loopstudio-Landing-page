import logo from '../images/logo.svg';
import faceBook from '../images/icon-facebook.svg';
import pinterest from '../images/icon-pinterest.svg';
import instagram from '../images/icon-instagram.svg';
import twitter from '../images/icon-twitter.svg';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">

          {/* Left section */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <img src={logo} alt="Loopstudios logo" className="w-36" />

            <ul className="flex flex-col md:flex-row gap-4 text-sm uppercase tracking-wide">
              {['About', 'Careers', 'Events', 'Products', 'Support'].map(item => (
                <li
                  key={item}
                  className="cursor-pointer hover:underline underline-offset-4"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right section */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <ul className="flex gap-4">
              {[faceBook, twitter, pinterest, instagram].map((icon, index) => (
                <li key={index} className="cursor-pointer">
                  <img
                    src={icon}
                    alt=""
                    className="hover:opacity-70 transition"
                  />
                </li>
              ))}
            </ul>

            <p className="text-sm text-gray-400">
              © 2021 Loopstudios. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </motion.footer>
  )
}

export default Footer

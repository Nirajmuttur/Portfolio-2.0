import { motion } from "framer-motion";
export default function About() {
  return (
    <div className="text-[#11181C] dark:text-white flex flex-col md:flex-row justify-center m-16">
      <motion.div
        initial={{ x:-300 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p className="mr-48 text-xl font-semibold">About</p>
      </motion.div>
      <motion.div 
      initial={{y: 300 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5 }}
      className="w-full mt-4 md:mt-0 md:w-1/2 text-[#495057] dark:text-[#889096] text-xl">
        <p>
          I am Niraj Muttur Senior Cloud Engineer @LTIMindtree. Enthusiastic
          about full-stack web development and driven to acquire new
          technologies. Seeking to contribute my skills and determination to a
          dynamic organization that fosters growth and innovation.
        </p>
      </motion.div>
    </div>
  );
}

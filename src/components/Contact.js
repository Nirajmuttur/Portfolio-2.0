import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
export default function Contact() {
  const handleLinkOpen=(link)=>{
    window.open(link)
  }
  return (
    <div className="text-[#11181C] dark:text-white flex flex-col md:flex-row justify-center m-16">
      <motion.div
      initial={{ x:-300 }}
      whileInView={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100,duration:0.8 }}
      >
        <p className="mr-48 text-xl font-semibold">Contact</p>
      </motion.div>
      <motion.div 
      initial={{ x: 300 }}
      whileInView={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100, duration: 0.8 }}
      className="w-full mt-4 md:mt-0 md:w-1/2 dark:text-[#889096] text-[#495057] text-xl">
        <p>
          <span className="text-[#11181C] dark:text-white font-semibold">
            Email:
          </span>{" "}
          nirajmuttur2@outlook.com
        </p>
        <div className=" flex items-center">
          <p className="dark:text-white text-[#11181C] font-semibold">
            Other Links:
          </p>
          <div className="text-5xl text-[#171717] dark:text-[#889096] m-2">
            <motion.button whileHover={{ scale: 1.5 }} title="github" href="https://github.com/nirajmuttur" onClick={()=>handleLinkOpen("https://github.com/nirajmuttur")}>
              <AiFillGithub className=" p-2 rounded-xl overflow-hidden" />
            </motion.button>
            <motion.button whileHover={{ scale: 1.5 }} title="linkedin" href="https://www.linkedin.com/in/niraj-muttur-7b43b7176" onClick={()=>handleLinkOpen("https://www.linkedin.com/in/niraj-muttur-7b43b7176")}>
              <FaLinkedinIn className=" p-2 rounded-xl overflow-hidden" />
            </motion.button>
            <motion.button whileHover={{ scale: 1.5 }} title="instagram" href="https://www.instagram.com/niraj_muttur/" onClick={()=>handleLinkOpen("https://www.instagram.com/niraj_muttur/")}>
              <AiFillInstagram className=" p-2 rounded-xl overflow-hidden" />
            </motion.button>
          </div>
        </div>
        <motion.button whileHover={{ scale: 1.09 }} className="dark:text-white text-[#495057] mt-4 p-2 rounded-xl border-2 border-[#889096]" href="/Niraj_Resume.pdf" onClick={()=>handleLinkOpen("/Niraj_Resume.pdf")}>
          Download CV
        </motion.button>
      </motion.div>
    </div>
  );
}

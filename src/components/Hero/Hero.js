import { GoDotFill } from "react-icons/go";
import { IconContext } from "react-icons";
import { PiBriefcase } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
import Information from "./Information";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <div className="text-[#11181C] dark:text-white flex flex-col justify-center items-center">
      <motion.img
        initial={{ y:"300vw" }}
        animate={{y:0}}
        transition={{ type: "spring", stiffness: 100 }}
        src="/myself.jpg"
        alt="myself"
        width={200}
        height={200}
        className="rounded-full m-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="m-1"
      >
        <h3 className="font-semibold text-4xl">Niraj Muttur</h3>
      </motion.div>
      <div className="flex items-center m-8 p-3 rounded-full border border-[#11181C] dark:border-white">
        <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="mx-2">
          <IconContext.Provider value={{ size: "1.5em", color: "green" }}>
            <GoDotFill />
          </IconContext.Provider>
        </motion.div>
        <motion.p
         initial={{ x: 300 }}
         animate={{ x: 0 }}
         transition={{ type: "spring", stiffness: 100 }}
         className="font-medium text-xl text-center mx-2">
          Avaliable For Work
        </motion.p>
      </div>
      <div className="flex flex-col md:flex-row">
        <Information
          icon={<PiBriefcase />}
          text="Software Developer"
          mail={false}
        />
        <Information
          icon={<IoLocationOutline />}
          text="Bengaluru"
          mail={false}
        />
        <Information
          icon={<CiClock2 />}
          mail={false}
          text={new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        />
        <Information icon={<IoMailOutline />} text="Email" mail={true} />
      </div>
    </div>
  );
}

import { Card } from "../Reusable/Card";
import { motion } from "framer-motion";
import { CustomCursor } from "../CustomCursor";

export default function Projects() {
  return (
    <div className="text-[#11181C] dark:text-white flex flex-col md:flex-row justify-center m-16 cursor-none">
      <motion.div
        initial={{ x: -300 }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100, duration: 0.8 }}
      >
        <p className="mr-44 text-xl font-semibold">Projects</p>
      </motion.div>
      <div className="w-full md:w-1/2 text-[#11181C] dark:text-white text-xl grid grid-rows-2 md:grid-cols-2 gap-4 mt-4 md:mt-0">
        <CustomCursor>
          <Card
            imgPath="/project 1.jpg"
            title="Shadow TV"
            description="It is flutter application."
            link="https://github.com/Nirajmuttur/ShadowTv"
          />
        </CustomCursor>

        <CustomCursor>
          <Card
            imgPath="/project 2.png"
            title="Market Place For Admin"
            description="E-Commerce Dashboard for admin"
            link="https://github.com/Nirajmuttur/Market-Place-For-Admin"
          />
        </CustomCursor>
        <CustomCursor>
          {" "}
          <Card
            imgPath="/project 3.png"
            title="Market Place For User"
            description="E-Commerce Website for User"
            link="https://github.com/Nirajmuttur/Market-Place-For-User"
          />
        </CustomCursor>

        <CustomCursor>
          {" "}
          <Card
            imgPath="/project 4.png"
            title="CMRIT Forum"
            description="A NextJS based forum webapp."
            link="https://forum2.vercel.app/"
          />
        </CustomCursor>
      </div>
    </div>
  );
}

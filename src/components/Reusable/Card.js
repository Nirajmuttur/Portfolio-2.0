import { motion } from "framer-motion";
export function Card(props) {
  
  return (
    <motion.div
    onClick={() => window.open(props.link)}
    initial={{ x:300 }}
      whileInView={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100,duration:0.8 }}
      whileHover={{ scale: 1.05 }}
     className="flex flex-col justify-start border-2 dark:border-0 rounded-lg">
      <img
        src={props.imgPath}
        alt="project1"
        className="object-cover h-60 w-full"
      />
      <div className="bg-[#FFFFFF] dark:bg-[#171717] p-2 ">
        <p className="text-xl font-semibold">{props.title}</p>
        <p className="text-[#495057] dark:text-[#889096]">
          {props.description}
        </p>
      </div>
    </motion.div>
  );
}

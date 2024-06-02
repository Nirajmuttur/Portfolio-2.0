import { motion } from "framer-motion";
export function SkillCard({ icon, title }) {
  return (
    <motion.div
    initial={{ x:300 }}
      whileInView={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100,duration:0.8 }}
      whileHover={{ scale: 1.2, backgroundColor:'black',color: 'white',shadow: '10 '}}
      className="dark:bg-[#171717] bg-[#FFFFFF] dark:text-[#889096] dark:border-0 border-2 flex justify-center text-7xl p-2 rounded-xl"
      title={title}
    >
      {icon}
    </motion.div>
  );
}

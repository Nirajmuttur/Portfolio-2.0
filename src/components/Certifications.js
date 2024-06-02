import { Card } from "./Reusable/Card";
import { motion } from "framer-motion";
export default function Certifications() {
  return (
    <div className="text-[#11181C] dark:text-white flex flex-col md:flex-row justify-center m-16">
      <motion.div
      initial={{ x:-300 }}
      whileInView={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100,duration:0.8 }}
      >
        <p className="mr-36 text-xl font-semibold">Certifications</p>
      </motion.div>
      <div className="w-full md:w-1/2 mt-4 md:mt-0 text-[#11181C] dark:text-white text-xl grid grid-rows-1 md:grid-cols-2 gap-4">
        <Card
          imgPath="/certificates/CKAD.png"
          title="Certified Kubernetes Applications Developer"
          link="https://nirajmuttur.vercel.app/https://www.credly.com/users/niraj-muttur/badges"
        />
        <Card
          imgPath="/certificates/React.png"
          title="Frontend Web Development with React"
          link="https://nirajmuttur.vercel.app/https://www.credly.com/users/niraj-muttur/badges"
        />
      </div>
    </div>
  );
}

import { ExperienceCard } from "./ExperienceCard";
import { motion } from "framer-motion";
export default function Experience() {
  const data = {
    lti: [
      "Developed advanced ReactJS applications for frontend.",
      "Orchestrated seamless data communication through extensive utilization of REST APIs.",
      "Utilized Spring Boot for building robust backend systems.",
      "Deployed applications on Microsoft Azure for scalability.",
      "Contributed to high-quality, performance-driven solutions.",
    ],
    runShaw: [
      "Built responsive landing pages using ReactJS and NodeJS.",
      "Developed robust backend systems with REST APIs and MySQL.",
      "Collaborated with the team to deliver innovative solutions, resolve technical challenges, and optimize performance.",
    ],
  };

  return (
    <div className="text-[#11181C] dark:text-white flex flex-col md:flex-row justify-center m-16">
      <motion.div
      initial={{ x:-300 }}
      whileInView={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100,duration:0.8 }}
      >
        <p className="mr-40 text-xl font-semibold">Experience</p>
      </motion.div>
      <div className="w-full md:w-1/2 mt-4 md:mt-0 text-[#495057] dark:text-white text-xl grid grid-row-1 gap-4">
        <ExperienceCard
          title="Senior Cloud Engineer"
          company="LTIMindtree, Bengaluru"
          date="July 2022 - Present"
          data={data.lti}
        />
        <ExperienceCard
          title="Full-Stack Developer Intern"
          company="RunShaw Technologies Pvt Ltd"
          date="August 2021 - October 2021"
          data={data.runShaw}
        />
      </div>
    </div>
  );
}

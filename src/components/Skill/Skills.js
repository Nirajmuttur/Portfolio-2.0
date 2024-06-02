import { SkillCard } from "./SkillCard";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiJava,
} from "react-icons/di";
import {
  SiMysql,
  SiKubernetes,
  SiAzuredevops,
  SiSpringboot,
} from "react-icons/si";
import { motion } from "framer-motion";
export default function Skills() {
  return (
    <div className="text-[#11181C] dark:text-white flex flex-col md:flex-row justify-center m-16">
      <motion.div
      initial={{ x:-300 }}
      whileInView={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100,duration:0.8 }}
      >
        <p className="mr-56 text-xl font-semibold">Skills</p>
      </motion.div>
      <div className="w-full md:w-1/2 mt-4 md:mt-0 text-[#171717] dark:text-white text-xl grid grid-cols-1 gap-1 md:grid-cols-4 md:gap-4">
        <SkillCard icon={<DiJava />} title="Java" />
        <SkillCard icon={<DiJavascript1 />} title="Javascript" />
        <SkillCard icon={<DiReact />} title="ReactJS" />
        <SkillCard icon={<DiNodejs />} title="NodeJS" />
        <SkillCard icon={<SiSpringboot />} title="SpringBoot" />
        <SkillCard icon={<SiKubernetes />} title="Kubernetes" />
        <SkillCard icon={<SiAzuredevops />} title="Azuredevops" />
        <SkillCard icon={<SiMysql />} title="Mysql" />
      </div>
    </div>
  );
}

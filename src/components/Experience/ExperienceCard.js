import { motion } from "framer-motion";
export function ExperienceCard({ title, company, date, data }) {
  return (
    <motion.div
      initial={{ x: 300 }}
      whileInView={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100, duration: 0.8 }}
      whileHover={{ scale: 1.01 }}
      className="bg-[#FFFFFF] dark:bg-[#171717] p-4 rounded-lg border-2 dark:border-0 text-[#495057] dark:text-[#889096]"
    >
      <h6 className="text-[#11181C] dark:text-white font-semibold text-lg">
        {title}
      </h6>
      <p className="text-lg">{company}</p>
      <p className="text-lg">{date}</p>

      <div className="mt-5 ml-5 leading-relaxed">
        {data.map((item, index) => (
          <ol className="list-disc" key={item}>
            <motion.li
              initial={{ x: 300 }}
              whileInView={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100, duration: 1 }}
              className="mb-2"
            >
              {item}
            </motion.li>
          </ol>
        ))}
      </div>
    </motion.div>
  );
}

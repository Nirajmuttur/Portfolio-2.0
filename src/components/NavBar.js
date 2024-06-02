import { CiDark } from "react-icons/ci";
import { IconContext } from "react-icons";
import { MdOutlineLightMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../features/darkModeSlice";
import { motion } from "framer-motion";
export default function NavBar() {
  const darkMode = useSelector((state) => state.darkMode.isEnabled);
  const dispatch = useDispatch();
  const handleSwitch = () => {
    dispatch(toggleDarkMode());
  };
  return (
    <div className="flex flex-row-reverse p-6 mx-5 md:mx-16 ">
      <div
        className={
          "flex bg-white dark:bg-[#171717] rounded-full p-2 w-24 border-2 dark:border-0 " +
          (darkMode ? " justify-end" : "justify-start")
        }
        onClick={handleSwitch}
      >
        <motion.div
          layout
          transition={spring}
          className="bg-white dark:bg-[#0F0F0F] border-2 dark:border-0 rounded-full"
        >
          <IconContext.Provider
            value={{ size: "2em", color: darkMode ? "white" : "black" }}
          >
            {darkMode ? <MdOutlineLightMode /> : <CiDark />}
          </IconContext.Provider>
        </motion.div>
      </div>
    </div>
  );
}
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

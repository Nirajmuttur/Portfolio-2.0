import { IconContext } from "react-icons";
import { useSelector } from "react-redux";
export default function Information(props) {
  const darkModeEnabled = useSelector((state) => state.darkMode.isEnabled);
  return (
    <div
      className="flex items-center mx-4 my-2"
      onClick={
        props.mail ? () => window.open("mailto:nirajmuttur2@outlook.com") : null
      }
    >
      <div>
        <IconContext.Provider
          value={{
            size: "1.8em",
            color: darkModeEnabled ? "#889096" : "#495057",
          }}
        >
          {props.icon}
        </IconContext.Provider>
      </div>
      <p className="font-medium text-[#495057] dark:text-[#889096] text-xl text-center mx-2">
        {props.text}
      </p>
    </div>
  );
}

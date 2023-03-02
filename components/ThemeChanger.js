import { useTheme } from "next-themes";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme("dark");

  return (
    <>
      <button
        className="text-black inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-orange-500 rounded  mt-4 md:mt-0"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        {theme === "light" ? <BsFillSunFill /> : <BsMoonFill />}
      </button>
    </>
  );
};

export default ThemeChanger;

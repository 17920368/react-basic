import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const MainContext = () => {
  const { theme } = useContext(ThemeContext);

  return <main className={theme}>{/* <input type="text">SSS</input> */}</main>;
};

export default MainContext;

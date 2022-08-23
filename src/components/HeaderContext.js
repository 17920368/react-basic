import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const HeaderContext = () => {
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <header className={theme}>
      <label htmlFor="light-context">Light</label>
      <input
        type="radio"
        name="theme"
        id="light-context"
        onClick={handleTheme}
        value="light"
      />
      <label htmlFor="dark-context">Dark</label>
      <input
        type="radio"
        name="theme"
        id="dark-context"
        onClick={handleTheme}
        value="dark"
      />
    </header>
  );
};

export default HeaderContext;

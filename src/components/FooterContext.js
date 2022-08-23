import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const FooterContext = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={theme}>
      <h4>Hola</h4>
    </footer>
  );
};

export default FooterContext;

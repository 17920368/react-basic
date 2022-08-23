import { ThemeProvider } from "../context/ThemeContext";
import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";

const MyPageContext = () => {
  return (
    <div className="my-page">
      <ThemeProvider>
        <HeaderContext />
        <MainContext />
        <FooterContext />
      </ThemeProvider>
    </div>
  );
};

export default MyPageContext;

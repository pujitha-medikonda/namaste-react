import { useContext } from "react";
import userContext from "./userContext";
import themeContext from "./useTheme";
const Footer = function () {
  const { user, setUser } = useContext(userContext);
  const { theme, setTheme } = useContext(themeContext);
  console.log(theme);
  return (
    <div className="text-center mt-5">
      <h1>
        Its Footer Copyrights@{user.email}{" "}
        <button
          onClick={() => {
            setUser({ name: "pavam", email: "pujitha.engg416@gmail.com" });
          }}
        >
          Change Context
        </button>
        <button
          onClick={() => {
            setTheme("none");
          }}
        >
          Change Theme
        </button>{" "}
      </h1>
    </div>
  );
};

export default Footer;

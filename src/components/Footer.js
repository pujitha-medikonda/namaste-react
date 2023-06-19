import { useContext } from "react";
import userContext from "./userContext";
const Footer = function () {
  const { user, setUser } = useContext(userContext);
  console.log(user);
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
        </button>{" "}
      </h1>
    </div>
  );
};

export default Footer;

import Links from "./HeaderLinks";
import useOnline from "../utilities/useOnline";
const Header = () => {
  return (
    <div className="flex justify-between border-black border-solid border-2">
      <img
        className="w-28 mt-1 ml-1"
        src="https://dynamic.brandcrowd.com/asset/logo/7f982a19-779d-4dd3-b533-7a9f66474000/logo-search-grid-1x?logoTemplateVersion=1&v=637810055012670000"
      />
      {Links}
    </div>
  );
};

export default Header;

import { Link } from "react-router-dom";

const Links = (
  <div className="nav-items">
    <ul className="flex py-10 px-10">
      <li className="px-2">
        <Link to="/">Home</Link>
      </li>
      <li className="px-2">
        <Link to="/about">About Us</Link>
      </li>
      <li className="px-2">
        <Link to="/contact">Contact Us</Link>
      </li>
      <li className="px-2">
        <Link to="/Instamart">Instamart</Link>
      </li>
    </ul>
  </div>
);

export default Links;

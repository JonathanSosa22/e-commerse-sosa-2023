import { Link } from "react-router-dom";
import login from "../assets/icons/user-solid.svg";
import product from "../assets/icons/shop-solid.svg";
import purchases from "../assets/icons/cart-shopping-solid.svg";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav_text">
        <Link className="text-link" as={Link} to="/">
          <h2>E-Commerce</h2>
        </Link>
      </div>
      <div>
        <Link as={Link} to="/login">
          <img src={login} alt="" />
        </Link>
        <Link as={Link} to="/purchases">
          <img src={product} alt="" />
        </Link>
        <Link as={Link} to="#">
          <img src={purchases} alt="" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

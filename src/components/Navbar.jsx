import { Link } from "react-router-dom";
import navImg from "../assets/images/more/15.jpg";
import navLogo from "../../src/assets/images/more/logo1.png";
const Navbar = () => {
  return (
    <div
      className="flex gap-4 justify-center items-center py-4"
      style={{
        backgroundImage: `url(${navImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Link>
        <img src={navLogo} alt="" className="w-14" />
      </Link>
      <p className="text-4xl font-bold text-base-200">Espresso Emporium</p>
    </div>
  );
};

export default Navbar;

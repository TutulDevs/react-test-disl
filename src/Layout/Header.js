import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-4 flex flex-col sm:flex-row justify-between items-center">
      {/* Name or Logo */}
      <h1 className="text-2xl font-semibold mb-2 sm:mb-0 transition duration-300 ease-in-out text-green-600 transform hover:-skew-y-1">
        <Link to="/">Kamrul Hasan Tutul</Link>
      </h1>

      {/* detailed info */}
      <div className="text-center ">
        <p className="sm:text-right">Nadda, Dhaka</p>
        <a className="text-sm hover:text-green-600" href="tel:+8801516121679">
          +880 1516 121679
        </a>
      </div>
    </header>
  );
};

export default Header;

import catimg from "../assets/cat.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex items-center justify-between px-20 py-2 w-full text-center">
      <Link to="/">
        <div className="flex items-center justify-center gap-2 text-2xl font-bold">
          <img src={catimg} alt="Cat" width={70} height={70} />
          <h1>Cat</h1>
        </div>
      </Link>
      <nav>
        <ul className="flex gap-4 text-lg ">
          <Link to="/overview">
            <li className="px-5 py-2 cursor-pointer font-semibold">Overview</li>
          </Link>
          <Link to="/whycats">
            <li className="px-5 py-2 cursor-pointer font-semibold">
              Why Cats?
            </li>
          </Link>
          <Link to="/diet">
            <li className="px-5 py-2 cursor-pointer font-semibold">Diet</li>
          </Link>
          <Link to="/adopt">
            <li className="px-5 py-2 bg-gray-200 border-2 border-blue-400 cursor-pointer flex items-center justify-center text-blue-500 font-semibold rounded-md text-center hover:bg-blue-700 hover:text-white transition-all">
              Adopt Meow
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

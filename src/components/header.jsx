import { Link } from "react-router-dom";
import { useScrollPosition } from "./hooks/useScrollPosition";

function Header() {
  const scrollPosition = useScrollPosition();
  const position = scrollPosition > 0 ? "sticky bg-slate-800" : "relative";
  const position2 = scrollPosition > 0 ? "" : "text-black";
  const attachment = `flex w-full top-0 text-white transition-all duration-200 z-10 h-20 px-10 ${position}`;
  const attachment2 = `text-4xl font-sans font-bold sm:ml-20 ml-11 pb-1 transition-all ${position2}`;

  return (
    <div className={attachment}>
      <div className="flex w-full">
        <div className="items-center flex hover:cursor-pointer ">
          <Link to="/">
            <h1 className={attachment2}>SoloByShey</h1>
          </Link>
        </div>
        <div className="grid grid-cols-3 font-bold text-gray-500 sm:ml-10 sm:w-40 sm:gap-28"></div>
        <div className=" sm:flex hidden ml-[35rem] text-md ">
          <div className="flex items-center">
            <Link to="/Login">
              <button className="w-40 border-2 font-bold border-orange-400 hover:bg-orange-400 hover:text-white transition-all text-orange-400 rounded-lg py-2">
                Login or sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

import { Link } from "react-router-dom";
import { useScrollPosition } from "./hooks/useScrollPosition";
import headerimg from "./images/header.webp";
import spinimg from "./images/spinimg.webp";

function Header() {
  const scrollPosition = useScrollPosition();
  const position = scrollPosition > 0 ? "sticky bg-slate-800" : "relative";
  const position2 = scrollPosition > 0 ? "" : "text-black";
  const positiontext = scrollPosition > 0 ? " " : "invisible";
  const positionspin = scrollPosition > 0 ? "border-2 border-white" : "";
  const attachment = `flex w-full top-0 text-white transition-all  duration-200 z-10 h-20 px-10 ${position}`;
  const attachment2 = `text-4xl font-sans font-bold sm:ml-3 ml-11 mt-3 pb-1 transition-all ${position2}`;
  const attachmenttext = `grid grid-cols-3 font-bold text-white duration-700 sm:ml-12 sm:w-40 sm:gap-28 transition-all ${positiontext}`;
  const attachmentspin = `h-8 w-8 ml-4 animate-spin-slow rounded-full transition-all ${positionspin}`;

  return (
    <div className={attachment}>
      <div className="flex w-full">
        <div className="items-center flex hover:cursor-pointer">
          <Link to="/" className="flex">
            <img
              src={headerimg}
              className="h-[4rem] w-[4rem] object-cover rounded-full"
            />
            <h1 className={attachment2}>SolobyShey</h1>
          </Link>
        </div>
        <div className={attachmenttext}>
          <button>
            <Link to="Artprocess">Videos</Link>
          </button>
          <button className="w-20">About us</button>
        </div>
        <div className=" sm:flex hidden ml-[35rem] text-md ">
          <div className="flex items-center">
            <Link to="/Login">
              <button className="w-40 border-2 font-bold border-orange-400 hover:bg-orange-400 hover:text-white transition-all text-orange-400 rounded-lg py-2">
                Contact us
              </button>
            </Link>
            <img src={spinimg} alt="" className={attachmentspin} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

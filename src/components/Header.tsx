import { useState } from "react";
import { Link } from "react-router-dom";
import X from "../assets/images/x.svg";
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";
import Telegram from "../assets/images/telegram.svg";
import HamburgerMenu from "../assets/images/hamburger-menu-icon.svg";

//https://stackoverflow.com/questions/61196420/react-navigation-that-will-smooth-scroll-to-section-of-the-page

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>
        <nav className="hidden md:flex flex-row fixed top-0 left-0 z-50 justify-around bg-stone-200 h-30 w-screen border-b-5 border-stone-400 items-center opacity-30 hover:opacity-90 transition-all duration-700 shadow-lg">
          <div className="text-3xl font-boldonse">
            <Link to="/">
              Archa
              <span className="text-sky-600 text-3xl">Design</span>
            </Link>
          </div>
          <ul className="flex flex-row gap-9 items-center">
            <li className="border-3 rounded-lg border-gray-50 hover:border-stone-500 hover:font-bold px-6 py-4 hover:bg-gray-300 transition-colors duration-600 transition-border text-ml font-underdog hover:scale-[1.05]">
              <Link to="educational">Educational Programs</Link>
            </li>
            <li className="border-3 rounded-lg border-gray-50 hover:border-stone-500 hover:font-bold px-6 py-4 hover:bg-gray-300 transition-colors duration-600 transition-border text-xl font-lalezar hover:scale-[1.05]">
              <Link
                to="/about"
                onClick={(e) => {
                  let about = document.getElementById("about");
                  e.preventDefault();
                  about && about.scrollIntoView({ behavior: "smooth" });
                }}
              >
                درباره ی ما
              </Link>
            </li>
            <li className="border-3 rounded-lg border-gray-50 hover:border-stone-500 hover:font-bold px-6 py-4 hover:bg-gray-300 transition-colors duration-600 transition-border text-xl font-lalezar hover:scale-[1.05]">
              <Link
                to="/architects"
                onClick={(e) => {
                  let architects = document.getElementById("architects");
                  e.preventDefault();
                  architects &&
                    architects.scrollIntoView({ behavior: "smooth" });
                }}
              >
                تیم معماران
              </Link>
            </li>
            <li className="border-3 rounded-lg border-gray-50 hover:border-stone-500 hover:font-bold px-6 py-4 hover:bg-gray-300 transition-colors duration-600 transition-border text-xl font-lalezar hover:scale-[1.05]">
              <Link to="/projects">پروژه های ما</Link>
            </li>
          </ul>

          <ul className="flex flex-row gap-15 place-items-center">
            <li className="hover:font-bold flex gap-7">
              <Link to="#">
                <img className="size-10" src={X} />
              </Link>
              <Link className="size-10" to="#">
                <img src={instagram} />
              </Link>
              <Link to="#">
                <img className="size-10" src={facebook} />
              </Link>
              <Link to="#">
                <img className="size-11" src={Telegram} />
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden flex relative">
          <div className="text-md font-boldonse">
            <Link to="/">
              Archa
              <span className="text-sky-600 text-md">Design</span>
            </Link>
          </div>
          <button>
            <img
              className="w-6 h-9 absolute top-0 right-4"
              src={HamburgerMenu}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

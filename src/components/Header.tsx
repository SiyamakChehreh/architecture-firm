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

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

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
        <nav className="py-3">
          <div className="md:hidden flex justify-around items-start">
            <div className="text-md font-boldonse">
              <Link to="/">
                Archa
                <span className="text-sky-600 text-md">Design</span>
              </Link>
            </div>
            <div className="flex gap-4">
              <Link to="#">
                <img className="size-6" src={X} />
              </Link>
              <Link className="size-6" to="#">
                <img src={instagram} />
              </Link>
              <Link to="#">
                <img className="size-6" src={facebook} />
              </Link>
              <Link to="#">
                <img className="size-7" src={Telegram} />
              </Link>
            </div>
            <button className="">
              <img
                className="size-6 right-4"
                src={HamburgerMenu}
                onClick={handleClick}
              />
            </button>
          </div>
          {isOpen && (
            <div className="md:hidden px-4 pb-4 bg-white shadow-md">
              <Link
                to="/about"
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={(e) => {
                  let about = document.getElementById("about");
                  e.preventDefault();
                  about && about.scrollIntoView({ behavior: "smooth" });
                }}
              >
                درباره ی ما
              </Link>
              <Link
                to="/architects"
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={(e) => {
                  let architects = document.getElementById("architects");
                  e.preventDefault();
                  architects &&
                    architects.scrollIntoView({ behavior: "smooth" });
                }}
              >
                تیم معماران
              </Link>
              <Link
                to="/projects"
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={(e) => {
                  let project = document.getElementById("projects");
                  e.preventDefault();
                  project && project.scrollIntoView({ behavior: "smooth" });
                }}
              >
                پروژه های ما
              </Link>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}

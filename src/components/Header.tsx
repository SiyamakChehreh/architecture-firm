import { Link } from "react-router-dom";
import X from "../assets/images/x.svg";
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";

//https://stackoverflow.com/questions/61196420/react-navigation-that-will-smooth-scroll-to-section-of-the-page

export default function Header() {
  return (
    <div>
      <div className="">
        <nav className="flex flex-row relative justify-around bg-stone-200 h-30 w-screen border-b-5 border-stone-400">
          <ul className="flex flex-row gap-5 place-items-center">
            <li className="text-2xl font-boldonse">
              <Link to="/">
                Architecture
                <span className="text-sky-600 text-2xl">Company</span>
              </Link>
            </li>
            <li className="border-3 rounded-lg border-gray-50 hover:border-stone-500 hover:font-bold px-6 py-4 hover:bg-gray-300 transition-colors duration-600 transition-border text-xl font-underdog hover:scale-[1.05]">
              <Link
                to="/about"
                onClick={(e) => {
                  let about = document.getElementById("about");
                  e.preventDefault();
                  about && about.scrollIntoView({ behavior: "smooth" });
                }}
              >
                About Us
              </Link>
            </li>
            <li className="border-3 rounded-lg border-gray-50 hover:border-stone-500 hover:font-bold px-6 py-4 hover:bg-gray-300 transition-colors duration-600 transition-border text-xl font-underdog hover:scale-[1.05]">
              <Link to="/architects">Architectures</Link>
            </li>
            <li className="border-3 rounded-lg border-gray-50 hover:border-stone-500 hover:font-bold px-6 py-4 hover:bg-gray-300 transition-colors duration-600 transition-border text-xl font-underdog hover:scale-[1.05]">
              <Link to="/projects">Our Projects</Link>
            </li>
          </ul>

          <ul className="flex flex-row gap-10 place-items-center">
            <li className="border-3 rounded-lg border-gray-50 hover:border-stone-500 hover:font-bold px-6 py-4 hover:bg-gray-300 transition-colors duration-600 transition-border text-ml font-underdog hover:scale-[1.05]">
              <Link to="educational">Educational Programs</Link>
            </li>
            <li className="hover:font-bold flex gap-4">
              <Link to="#">
                <img src={X} />
              </Link>
              <Link to="#">
                <img src={instagram} />
              </Link>
              <Link to="#">
                <img src={facebook} />
              </Link>
            </li>
            <li className="border-3 rounded-full hover:font-bold mr-4 px-6 py-2 bg-sky-600 text-white hover:bg-sky-400 text-xl font-underdog hover:scale-[1.05]">
              <Link to="/">Sign in</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

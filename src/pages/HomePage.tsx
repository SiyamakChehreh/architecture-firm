import building from "../assets/images/building.jpg";
import { useState } from "react";

function HomePage() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  const content =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quod provident sapiente placeat quae. Dolore autem sapiente, aut, quas recusandae similique harum obcaecati aspernatur quo doloremque, quidem ratione magnam vitae.Tenetur quod provident sapiente placeat quae. Dolore autem sapiente, aut, quas recusandae similique harum obcaecati aspernatur quo doloremque, quidem ratione magnam vitae";

  const showContent = isExpanded ? content : `${content.substring(0, 150)}...`;

  return (
    <div>
      <section>
        <div className="flex flex-row relative">
          <img
            className="h-screen w-screen object-fill opacity-70 border-b-4 border-stone-500"
            src={building}
            alt="building"
          />
          <div className="absolute right-10 top-10 w-160 transition-colors duration-700">
            <div className="mt-40 ml-15 absolute flex flex-col items-end">
              <h1 className="text-5xl font-boldonse text-right">Pay Less </h1>
              <h1 className="text-5xl font-boldonse text-right mt-3">
                Gain More!
              </h1>
              <p className="text-xl/9 my-4 font-underdog text-right mr-5">
                {showContent}
              </p>
              <button
                onClick={toggleContent}
                className="border outline-4 outline-offset-2 outline-sky-600 rounded-4xl bg-sky-700 text-white hover:bg-sky-500 hover:font-bold mt-4 py-3 px-5"
              >
                {isExpanded ? "show less" : "show more"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

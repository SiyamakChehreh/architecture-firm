import mountain from "../assets/mountain.jpg";

export default function AboutPage() {
  return (
    <section id="about">
      <div id="container">
        <div className="flex flex-row justify-around items-center h-screen bg-gray-200 perspective-normal">
          <div className="h-130 w-110 border-7 border-stone-400 rounded-xl bg-amber-50 flex flex-col place-items-center opacity-45 hover:opacity-100 transform-3d hover:rotate-y-3 transition-all duration-700 hover:scale-[1.04]">
            <img
              className="w-80 mx-15 -mt-15 border-7 rounded-lg border-double border-stone-500"
              src={mountain}
            />
            <h1 className="text-3xl font-boldonse font-bold my-12">
              Interior Design
            </h1>
            <p className="text-xl/8 font-underdog text-justify mx-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, laudantium earum. Magnam laboriosam totam, cumque,
              quis laborum non nulla, unde maxime pariatur quas officiis eaque
              aut fuga qui aliquid ratione.
            </p>
          </div>
          <div className="h-130 w-110 border-7 border-stone-400 rounded-xl bg-amber-50 flex flex-col place-items-center opacity-45 hover:opacity-100 transform-3d transition duration-700 hover:scale-[1.04]">
            <img
              className="w-80 mx-15 -mt-15 border-7 border-double rounded-lg border-stone-500"
              src={mountain}
            />
            <h1 className="text-3xl font-boldonse font-bold my-12">
              Facade Design
            </h1>
            <p className="text-xl/8 font-underdog text-justify mx-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, laudantium earum. Magnam laboriosam totam, cumque,
              quis laborum non nulla, unde maxime pariatur quas officiis eaque
              aut fuga qui aliquid ratione.
            </p>
          </div>
          <div className="h-130 w-110 border-7 border-stone-400 rounded-xl bg-amber-50 flex flex-col place-items-center opacity-45 hover:opacity-100 transform-3d hover:-rotate-y-3 transition duration-700 hover:scale-[1.04]">
            <img
              className="w-80 mx-15 -mt-15 border-7 border-double rounded-lg border-stone-500"
              src={mountain}
            />
            <h1 className="text-3xl font-boldonse font-bold my-12">
              Consultant
            </h1>
            <p className="text-xl/8 font-underdog text-justify mx-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, laudantium earum. Magnam laboriosam totam, cumque,
              quis laborum non nulla, unde maxime pariatur quas officiis eaque
              aut fuga qui aliquid ratione.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

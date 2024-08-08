import React from "react";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThxKA7HvO10GTQBbTTroY57QxgaI-W6kfyUw&s",
    },
    {
      id: 2,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVTq87hemTiKZqzEqt2ODvO-pNBxP9mzqEgQ&s",
    },
    {
      id: 3,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLJhflmD8W_EuXCDW2Z1dMHukxDJzokmxxaA&s",
    },
    {
      id: 4,
      src: "https://images.ctfassets.net/vfkpgemp7ek3/2760652741/d33c6c8de919d8b49ef8dd7392424053/highest-rated-apps.jpg",
    },
    {
      id: 5,
      src: "https://blog.happyfox.com/wp-content/uploads/2019/05/in-app-chat-blog-cover-image.png",
    },
    {
      id: 6,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzPjyhubKEwZLSzaO_DyMKH7QAfQUdibeqfw&s",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map((p) => (
            <div key={p.id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={p.src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

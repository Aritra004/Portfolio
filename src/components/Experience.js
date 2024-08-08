import React from "react";

const Experience = () => {
  const tech = [
    {
      id: 1,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s",
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShuEmJAUIYjZy4iVym0-uf4dDG82UsrMmBFg&s",
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s",
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: "https://www.drupal.org/files/project-images/screenshot_361.png",
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: "https://miro.medium.com/v2/resize:fit:800/0*Z9gFgZ9I_GxIyzmE.png",
      title: "Node js",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: "https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png",
      title: "Mongo DB",
      style: "shadow-green-300",
    },
    {
      id: 8,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s",
      title: "Github",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div
      name="experience"
      className="mt-40 bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">
            This are the technologies i have worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {tech.map((t) => (
            <div
              key={t.id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${t.style}`}
            >
              <img src={t.src} alt={t.title} className="w-11 mx-auto" />
              <p className="mt-4">{t.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

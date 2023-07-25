import Fade from "react-reveal/Fade";
import Title from "./Title";
import IconReactJs from "../assets/images/icon/reactjs.png";
import IconCSharp from "../assets/images/icon/c_sharp.png";
import IconNodeJs from "../assets/images/icon/nodejs.png";
import IconTailwind from "../assets/images/icon/tailwind.png";
import IconFigma from "../assets/images/icon/figma.png";
import IconSSMS from "../assets/images/icon/ssms.png";
import IconMongoDB from "../assets/images/icon/mongodb.png";
import IconGitHub from "../assets/images/icon/github.png";
import IconMySql from "../assets/images/icon/mysql.png";
import IconFlutter from "../assets/images/icon/flutter.png";
import IconBootstrap from "../assets/images/icon/bootstrap4.png";
import IconVs from "../assets/images/icon/vs.png";
import IconNpm from "../assets/images/icon/npm.png";
import IconJs from "../assets/images/icon/js.png";
import IconAndroid from "../assets/images/icon/android.png";
import IconPostman from "../assets/images/icon/postman.png";

export default function TechStack() {
  const data = [
    {
      id: 1,
      icon: IconReactJs,
      alt: "Icon React Js",
      name: "React Js",
    },
    {
      id: 2,
      icon: IconCSharp,
      alt: "Icon C#",
      name: "C#",
    },
    {
      id: 3,
      icon: IconNodeJs,
      alt: "Icon Node Js",
      name: "Node Js",
    },
    {
      id: 4,
      icon: IconTailwind,
      alt: "Icon Tailwind CSS",
      name: "Tailwind CSS",
    },
    {
      id: 5,
      icon: IconGitHub,
      alt: "Icon Github",
      name: "Github",
    },
    {
      id: 6,
      icon: IconFigma,
      alt: "Icon Figma",
      name: "Figma",
    },
    {
      id: 7,
      icon: IconSSMS,
      alt: "Icon SSMS",
      name: "SSMS",
    },
    {
      id: 8,
      icon: IconMongoDB,
      alt: "Icon MongoDB",
      name: "MongoDB",
    },
    {
      id: 9,
      icon: IconBootstrap,
      alt: "Icon Bootstrap",
      name: "Bootstrap",
    },
    {
      id: 10,
      icon: IconFlutter,
      alt: "Icon Flutter",
      name: "Flutter",
    },
    {
      id: 11,
      icon: IconJs,
      alt: "Icon Js",
      name: "Javascript",
    },
    {
      id: 12,
      icon: IconMySql,
      alt: "Icon My Sql",
      name: "My SQL",
    },
    {
      id: 13,
      icon: IconNpm,
      alt: "Icon NPM",
      name: "NPM",
    },
    {
      id: 14,
      icon: IconVs,
      alt: "Icon Visual Studio",
      name: "Visual Studio",
    },
    {
      id: 15,
      icon: IconPostman,
      alt: "Icon Postman",
      name: "Postman",
    },
    {
      id: 16,
      icon: IconAndroid,
      alt: "Icon Android",
      name: "Android",
    },
  ];
  return (
    <Fade bottom>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Title title="My Tech Stack" />
          <div className="mx-auto mt-5 rounded-3xl grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-8">
            {data.map((item, index) => {
              return (
                <Fade bottom delay={200 * index}>
                  <div key={`data-${index}`}>
                    <img
                      className="max-h-32 w-full object-contain sm:col-start-auto lg:col-span-1"
                      src={item.icon}
                      alt={item.alt}
                    />
                    <p className="text-sm text-center font-medium leading-8 text-gray-600">
                      {item.name}
                    </p>
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}

import Fade from "react-reveal/Fade";
import Title from "./Title";
export default function Project(props) {
  const projects = props.data;
  // const projects = [
  //   {
  //     id: 1,
  //     name: "Earthen Bottle",
  //     href: "#",
  //     description: "$48",
  //     imageSrc:
  //       "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
  //     imageAlt:
  //       "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  //   },
  //   {
  //     id: 2,
  //     name: "Nomad Tumbler",
  //     href: "#",
  //     description: "$35",
  //     imageSrc:
  //       "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
  //     imageAlt:
  //       "Olive drab green insulated bottle with flared screw lid and flat top.",
  //   },
  //   {
  //     id: 3,
  //     name: "Focus Paper Refill",
  //     href: "#",
  //     description: "$89",
  //     imageSrc:
  //       "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
  //     imageAlt:
  //       "Person using a pen to cross a task off a projectivity paper card.",
  //   },
  //   {
  //     id: 4,
  //     name: "Machined Mechanical Pencil",
  //     href: "#",
  //     description: "$35",
  //     imageSrc:
  //       "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
  //     imageAlt:
  //       "Hand holding black machined steel mechanical pencil with brass tip and top.",
  //   },
  // ];
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <Title title="My Latest Project" />
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {projects.map((project, index) => (
            <Fade bottom delay={500 * index}>
              <a
                key={project.id}
                href={project.href}
                className={`group col-span-1`}
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-80 transition transform ease-in-out hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm font-small text-gray-700">
                  {project.description}
                </p>
              </a>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}

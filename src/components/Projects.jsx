import library from "../assets/images/projects/landing page-01.jpg";
import { Card, CardBody, CardFooter, CardHeader, CardImage } from "./Card";
import jokiRank from "../assets/images/projects/joki-rank-ml.png";
import { FaBootstrap } from "react-icons/fa";
import livewire from "../assets/images/livewire.png";
import { FaPhp } from "react-icons/fa6";
import Image from "./Image";
import logoLaravel from "../assets/images/1969px-Laravel.svg.png";
import { Tooltip } from "@chakra-ui/react";
import { Item, ListItems } from "./ListItems";
const Projects = () => {
  const TechJokiRank = () => {
    return (
      <>
        <Item>
          <Tooltip label="Laravel" aria-label="Laravel" placement="top">
            <span>
              <img
                src={logoLaravel}
                className="w-12 saturate-0 transition duration-300 ease-in-out hover:saturate-100"
                alt=""
              />
            </span>
          </Tooltip>
        </Item>
        <Item>
          <Tooltip label="Php" aria-label="Php" placement="top">
            <span>
              <FaPhp className="transition duration-300 ease-in-out hover:text-indigo-900" />
            </span>
          </Tooltip>
        </Item>
        <Item>
          <FaBootstrap />
        </Item>
        <Item>
          <img src={livewire} className="w-12 saturate-0" alt="" />
        </Item>
      </>
    );
  };
  return (
    <>
      <section id="projects" className="my-24 w-full px-20 py-20">
        <h1 className="text-end text-4xl font-extrabold uppercase text-white ">
          Projects
        </h1>
        <div className="mt-10 grid w-full grid-cols-2 place-content-center justify-items-center gap-5 ">
          <Card>
            <CardImage>
              <Image src={jokiRank} />
            </CardImage>
            <CardHeader>
              <h3 className="text-2xl font-bold text-white">Joki Rank</h3>
              <button className="rounded bg-zinc-800 p-2 text-lg font-bold text-white">
                View
              </button>
            </CardHeader>
            <CardBody>
              <p className="text-lg font-light text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, dignissimos exercitationem a voluptates minima voluptas
                itaque nesciunt hic repellendus blanditiis? lorem59
              </p>
            </CardBody>
            <CardFooter>
              <ListItems>
                <TechJokiRank />
              </ListItems>
            </CardFooter>
          </Card>
          <div className="h-80">
            <img
              src={library}
              className="h-full w-full rounded-xl object-cover"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

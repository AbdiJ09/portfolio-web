import { BiLogoTailwindCss } from "react-icons/bi";
import livewire from "../../../assets/images/livewire.png";
import { FaPhp } from "react-icons/fa6";
import logoLaravel from "../../../assets/images/1969px-Laravel.svg.png";
import { Tooltip } from "@chakra-ui/react";
import { Item } from "../../ListItems";
const TechLibrary = () => {
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
            <FaPhp className="saturate-0 transition duration-300 ease-in-out hover:text-indigo-900 hover:saturate-100" />
          </span>
        </Tooltip>
      </Item>
      <Item>
        <Tooltip label="Tailwind" aria-label="Tailwind" placement="top">
          <span>
            <BiLogoTailwindCss className="transition duration-300 ease-in-out hover:text-sky-500" />
          </span>
        </Tooltip>
      </Item>
      <Item>
        <Tooltip label="Livewire" aria-label="Livewire" placement="top">
          <img
            src={livewire}
            className="w-12 saturate-0 transition duration-300 ease-in-out hover:saturate-100"
            alt=""
          />
        </Tooltip>
      </Item>
    </>
  );
};
export default TechLibrary;

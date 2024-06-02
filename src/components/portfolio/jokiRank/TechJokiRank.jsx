import { FaPhp } from "react-icons/fa6";
import logoLaravel from "../../../assets/images/1969px-Laravel.svg.png";
import { Tooltip } from "@chakra-ui/react";
import { Item } from "../../ListItems";
import logoBoostrap from "../../../assets/images/Bootstrap_logo.svg.png";

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
            <FaPhp className="saturate-0 transition duration-300 ease-in-out hover:text-indigo-900 hover:saturate-100" />
          </span>
        </Tooltip>
      </Item>
      <Item>
        <Tooltip label="Bootstrap" aria-label="Bootstrap" placement="top">
          <img
            src={logoBoostrap}
            className="w-12 saturate-0 transition duration-300 ease-in-out hover:saturate-100"
            alt=""
          />
        </Tooltip>
      </Item>
    </>
  );
};
export default TechJokiRank;

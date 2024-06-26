import portalSekolah from "../../../assets/images/projects/portal-sekolah.png";
import TechPortalSekolah from "./TechPortalSekolah";
import { Card, CardBody, CardFooter, CardHeader, CardImage } from "../../Card";
import Image from "../../Image";
import { ListItems } from "../../ListItems";
const PortalSekolah = () => {
  return (
    <>
      <Card>
        <CardImage>
          <Image src={portalSekolah} />
        </CardImage>
        <CardHeader>
          <h3 className="text-xl font-bold text-white lg:text-2xl">
            Portal Sekolah
          </h3>
          <a
            href="https://tamansiswa-jkt.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="rounded bg-zinc-800 p-2 text-lg font-bold text-white">
              View
            </button>
          </a>
        </CardHeader>
        <CardBody>
          <p className="text-md font-light text-white lg:text-lg">
            Portal Sekolah ini dikembangkan menggunakan Php, Laravel, Tailwind,
            dan Ekosistem dari Laravel.
          </p>
        </CardBody>
        <CardFooter>
          <ListItems>
            <TechPortalSekolah />
          </ListItems>
        </CardFooter>
      </Card>
    </>
  );
};
export default PortalSekolah;

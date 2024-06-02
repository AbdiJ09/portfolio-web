import library from "../../../assets/images/projects/landing page-01.jpg";
import { Card, CardBody, CardFooter, CardHeader, CardImage } from "../../Card";
import Image from "../../Image";
import { ListItems } from "../../ListItems";
import TechLibrary from "./TechLibrary";
const Library = () => {
  return (
    <Card>
      <CardImage>
        <Image src={library} />
      </CardImage>
      <CardHeader>
        <h3 className="text-2xl font-bold text-white">Perpuustakan Sekolah</h3>
        <a
          href="https://tamansiswa-jkt.org/perpustakaan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="rounded bg-zinc-800 p-2 text-lg font-bold text-white">
            View
          </button>
        </a>
      </CardHeader>
      <CardBody>
        <p className="text-lg font-light text-white">
          Aplikasi Perpustakaan Sekolah ini dikembangkan menggunakan PHP,
          Laravel, Tailwind, Livewire, dan beserta Ekosistem dari Laravel
        </p>
      </CardBody>
      <CardFooter>
        <ListItems>
          <TechLibrary />
        </ListItems>
      </CardFooter>
    </Card>
  );
};
export default Library;

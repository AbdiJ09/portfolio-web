import digitalisasiPamong from "../../../assets/images/projects/digitalisasi-guru.png";
import { Card, CardBody, CardFooter, CardHeader, CardImage } from "../../Card";
import Image from "../../Image";
import { ListItems } from "../../ListItems";
import TechPamong from "./TechPamong";
const DigitalisasiPamong = () => {
  return (
    <Card>
      <CardImage>
        <Image src={digitalisasiPamong} />
      </CardImage>
      <CardHeader>
        <h3 className="text-xl font-bold text-white lg:text-2xl">
          Digitalisasi Pamong / Guru
        </h3>
        <a
          href="https://tamansiswa-jkt.org/perpustakaan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            disabled
            className="rounded bg-zinc-800 p-2 text-lg font-bold text-white"
          >
            Private
          </button>
        </a>
      </CardHeader>
      <CardBody>
        <p className="text-md font-light text-white lg:text-lg">
          Aplikasi Digitalisasi Pamong ini dikembangkan menggunakan PHP,
          Laravel, Tailwind, Livewire, dan beserta Ekosistem dari Laravel.
          Dikarenakan ini bersifat private, aplikasi ini hanya bisa diakses oleh
          tamansiswa-jkt.org
        </p>
      </CardBody>
      <CardFooter>
        <ListItems>
          <TechPamong />
        </ListItems>
      </CardFooter>
    </Card>
  );
};
export default DigitalisasiPamong;

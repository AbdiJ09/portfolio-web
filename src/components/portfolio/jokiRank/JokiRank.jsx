import jokiRank from "../../../assets/images/projects/joki-rank-ml.png";
import { Card, CardBody, CardFooter, CardHeader, CardImage } from "../../Card";
import Image from "../../Image";
import { ListItems } from "../../ListItems";
import TechJokiRank from "./TechJokiRank";
const JokiRank = () => {
  return (
    <Card>
      <CardImage>
        <Image src={jokiRank} />
      </CardImage>
      <CardHeader>
        <h3 className="text-xl font-bold text-white lg:text-2xl">
          Joki Rank ML
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
            Tahap Pembuatan
          </button>
        </a>
      </CardHeader>
      <CardBody>
        <p className="text-md font-light text-white lg:text-lg">
          Aplikasi Joki Rank ML ini dikembangkan menggunakan PHP, Laravel,
          Boostrap, dan beserta Ekosistem dari Laravel
        </p>
      </CardBody>
      <CardFooter>
        <ListItems>
          <TechJokiRank />
        </ListItems>
      </CardFooter>
    </Card>
  );
};
export default JokiRank;

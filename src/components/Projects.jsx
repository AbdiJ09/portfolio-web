import PortalSekolah from "../components/portfolio/portalSekolah/PortalSekolah";
import DigitalisasiPamong from "./portfolio/digitalisasiPamong/DigitalisasiPamong";
import JokiRank from "./portfolio/jokiRank/JokiRank";
import Library from "./portfolio/library/Library";
const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className="my-24 w-full px-5 py-20 lg:px-20">
        <h1 className="text-end text-4xl font-extrabold uppercase text-white ">
          Portfolio
        </h1>
        <div className="mt-10 grid w-full grid-cols-1 place-content-center justify-items-center gap-10 lg:grid-cols-2 ">
          <PortalSekolah />
          <Library />
          <DigitalisasiPamong />
          <JokiRank />
        </div>
      </section>
    </>
  );
};

export default Portfolio;

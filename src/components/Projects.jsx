import Library from "./portfolio/library/Library";
import PortalSekolah from "./portfolio/portalSekolah/PortalSekolah";
const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className="my-24 w-full px-20 py-20">
        <h1 className="text-end text-4xl font-extrabold uppercase text-white ">
          Portfolio
        </h1>
        <div className="mt-10 grid w-full grid-cols-2 place-content-center justify-items-center gap-5 ">
          <Library />
          <PortalSekolah />
        </div>
      </section>
    </>
  );
};

export default Portfolio;

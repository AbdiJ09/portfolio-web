import logoHtml from "../assets/images/html.png";
import logoCss from "../assets/images/css-3.png";
import logoJs from "../assets/images/js.png";
import logoReact from "../assets/images/react.png";
import logoTailwind from "../assets/images/Tailwind_CSS_Logo.svg.png";
import logoBoostrap from "../assets/images/Bootstrap_logo.svg.png";
import logoTypeScript from "../assets/images/Typescript_logo_2020.svg.png";
import php from "../assets/images/PHP-logo.svg.png";
import laravel from "../assets/images/1969px-Laravel.svg.png";
import nodeJs from "../assets/images/2560px-Node.js_logo.svg.png";
import mysql from "../assets/images/Mysql_logo.png";
import expressJs from "../assets/images/express_468adcd425.png";
const Skils = () => {
  const skills = [
    logoHtml,
    logoCss,
    logoJs,
    logoReact,
    logoTailwind,
    logoBoostrap,
    logoTypeScript,
  ];
  const skils2 = [php, laravel, nodeJs, mysql, expressJs];

  return (
    <>
      <section className="my-24 w-full">
        <h1 className="mb-10 text-center text-4xl font-extrabold uppercase text-white">
          Skils
        </h1>
        <div className="mx-auto my-5 flex w-2/4 select-none overflow-hidden rounded-xl  p-5">
          <div className="flex w-full flex-shrink-0 animate-scroll-infinite items-center justify-around whitespace-nowrap">
            {skills.map((skill) => (
              <div key={skill} className="">
                <img src={skill} className="w-12" alt="logo" />
              </div>
            ))}
          </div>
          <div className="flex w-full flex-shrink-0 animate-scroll-infinite items-center justify-around whitespace-nowrap">
            {skills.map((skill) => (
              <div key={skill} className="">
                <img src={skill} className="w-12" alt="logo" />
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto my-5 flex w-2/4 select-none overflow-hidden rounded-xl  p-5 ">
          <div
            className="flex w-full flex-shrink-0 animate-scroll-infinite items-center justify-around whitespace-nowrap"
            style={{ animationDirection: "reverse" }}
          >
            {skils2.map((skill) => (
              <div key={skill} className="">
                <img src={skill} className="w-12" alt="logo" />
              </div>
            ))}
          </div>
          <div
            className="flex w-full flex-shrink-0 animate-scroll-infinite items-center justify-around whitespace-nowrap"
            style={{ animationDirection: "reverse" }}
          >
            {skils2.map((skill) => (
              <div key={skill} className="">
                <img src={skill} className="w-12" alt="logo" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skils;

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

const SkillCarousel = ({ skills, reverse = false }) => (
  <div className="mx-auto my-5 flex w-full select-none overflow-hidden rounded-xl py-5 lg:w-2/4 lg:p-5">
    <div
      className={`flex w-full flex-shrink-0 animate-scroll-infinite items-center justify-around whitespace-nowrap ${reverse ? "reverse" : ""}`}
      style={reverse ? { animationDirection: "reverse" } : {}}
    >
      {skills.map((skill) => (
        <div key={skill} className="group">
          <img
            src={skill}
            className="w-12 saturate-0 transition duration-300 ease-in-out group-hover:saturate-100"
            alt="logo"
          />
        </div>
      ))}
    </div>
    <div
      className={`flex w-full flex-shrink-0 animate-scroll-infinite items-center justify-around whitespace-nowrap ${reverse ? "reverse" : ""}`}
      style={reverse ? { animationDirection: "reverse" } : {}}
    >
      {skills.map((skill) => (
        <div key={skill} className="group">
          <img
            src={skill}
            className="w-12 saturate-0 transition duration-300 ease-in-out group-hover:saturate-100"
            alt="logo"
          />
        </div>
      ))}
    </div>
  </div>
);

const Skils = () => {
  const frontEndSkills = [
    logoHtml,
    logoCss,
    logoJs,
    logoReact,
    logoTailwind,
    logoBoostrap,
    logoTypeScript,
  ];

  const backEndSkills = [php, laravel, nodeJs, mysql, expressJs];

  return (
    <section className="my-24 w-full">
      <h1 className="mb-10 text-center text-4xl font-extrabold uppercase text-white">
        Skils
      </h1>
      <SkillCarousel skills={frontEndSkills} />
      <SkillCarousel skills={backEndSkills} reverse />
    </section>
  );
};

export default Skils;

import { useEffect } from "react";
import AJ from "../assets/images/Aj-removebg-preview.png";
import { motion, stagger, useAnimate } from "framer-motion";
const HeroSection = () => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      ".title",
      {
        y: 0,
        opacity: 1,
      },
      {
        duration: 0.5,
        delay: stagger(0.25, { startDelay: 0.5, each: 0.25 }),
      },
    );
  });
  const variants = {
    hidden: {
      opacity: 0,
      y: 75,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  const heroTitle = ["FULL", "STACK", "DEVELOPER"];
  return (
    <>
      <section className="mt-3 flex min-h-screen w-full items-center justify-center gap-10 overflow-hidden px-4">
        <div
          className="
          w-full
        "
        >
          <motion.h5
            initial="hidden"
            variants={variants}
            animate="visible"
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.25 }}
            id="myName"
            className="text-6xl tracking-wide text-white"
          >
            Hallo, Saya AJ
          </motion.h5>
          <div ref={scope} className="flex flex-wrap gap-x-3">
            {heroTitle.map((title, index) => (
              <motion.h1
                key={index}
                initial="hidden"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 75,
                  },
                }}
                className="title relative text-[8rem] font-extrabold uppercase leading-[8rem] tracking-wide text-white"
              >
                {title}
              </motion.h1>
            ))}
          </div>

          <motion.p
            initial="hidden"
            variants={variants}
            animate="visible"
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.25 }}
            className="mt-3 font-sans text-xl capitalize text-white"
          >
            Saya adalah Junior Fullstack Developer berusia 18 tahun dengan
            pengalaman lebih dari 2 tahun di industri ini. Saya sangat suka
            berkolaborasi, inovatif, dan kreatif dalam menyelesaikan setiap
            proyek.
          </motion.p>
        </div>
        <motion.div
          initial="hidden"
          variants={{
            hidden: {
              opacity: 0,
              y: 75,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          animate="visible"
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.25 }}
          className="
          img-aj
          bg-img relative h-96 w-full rotate-6 overflow-hidden rounded-3xl p-3

        "
        >
          <img
            src={AJ}
            className="w-full bg-cover bg-no-repeat brightness-0"
            alt=""
          />
        </motion.div>
      </section>
    </>
  );
};
export default HeroSection;

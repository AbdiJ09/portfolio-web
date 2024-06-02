import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AJ2 from "../assets/images/aj3-removebg-preview.png";
import Section from "./Section";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <section id="about" className="my-32 w-full text-white">
        <motion.h1
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 me-5 text-end text-6xl font-bold"
        >
          ABOUT
        </motion.h1>
        <div className="flex items-start gap-10">
          <motion.picture
            className="bg-img"
            ref={ref}
            initial="hidden"
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
              },
            }}
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
          >
            <img
              src={AJ2}
              className="spect-video h-[40rem] w-[50rem] object-cover brightness-0"
              alt=""
            />
          </motion.picture>
          <div className="w-4/5 space-y-20 text-left">
            <Section>
              <H1>Personal</H1>
              <Paragraph>
                Saya adalah seorang Full Stack Web Developer dengan pengalaman
                lebih dari 2 tahun dalam pengembangan aplikasi web end-to-end.
                Dengan latar belakang pendidikan di bidang Ilmu Komputer, saya
                memiliki keterampilan dalam pengembangan frontend dan backend.
                Saya terampil dalam menggunakan berbagai teknologi seperti{" "}
                <span className="font-bold">
                  HTML, CSS, JavaScript untuk frontend, serta php,nodejs
                  laravel, dan mySQL untuk backend.
                </span>{" "}
              </Paragraph>
            </Section>
            <Section>
              <H1>ALWAYS BE INNOVATIVE</H1>
              <Paragraph>
                SEBAGAI FULL STACK DEVELOPER, MENDAPATKAN MANTRA &apos;SELALU
                INOVATIF&apos; SANGAT PENTING. Pola Pikir Ini Tidak Hanya
                Mendorong Perbaikan Berkelanjutan Tetapi Juga Memberdayakan Kita
                untuk Menjelajahi Teknologi Baru, Mendorong Batasan, dan
                Memberikan Solusi Tercanggih Di Seluruh Domain Frontend dan
                Backend
              </Paragraph>
            </Section>
            <Section>
              <div className="flex  gap-10">
                <div className="">
                  <H1>Sosial Media</H1>
                  <ul className="mt-2 flex flex-wrap items-center gap-5">
                    <li className="flex items-center gap-1">
                      <FaGithub className=" text-3xl" />
                      <a
                        href="https://github.com/AbdiJ09"
                        target="_blank"
                        className="hover:underline"
                      >
                        @AbdiJ09
                      </a>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaLinkedin className="text-3xl" />
                      <a
                        href="https://www.linkedin.com/in/abdi-j-61b641262/"
                        target="_blank"
                        className="hover:underline"
                      >
                        @Abdi J
                      </a>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaInstagram className="text-3xl" />
                      <a
                        target="_blank"
                        href="https://www.instagram.com/abdij06/"
                        className="hover:underline"
                      >
                        @abdij06
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <H1>Live In</H1>
                  <Paragraph style="mt-2">Jakarta, Indonesia</Paragraph>
                </div>
              </div>
            </Section>
          </div>
        </div>
      </section>
    </>
  );

  function Paragraph({ children, style = "" }) {
    return (
      <p
        className={`text-left text-lg  font-light uppercase text-white ${style}`}
      >
        {children}
      </p>
    );
  }
  function H1({ children }) {
    return (
      <h1 className="w-fit text-center text-4xl font-bold uppercase">
        {children}
      </h1>
    );
  }
};

export default About;

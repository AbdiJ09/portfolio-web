import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Section = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();
  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView, animation]);
  return (
    <>
      <section ref={ref}>
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
          animate={animation}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
        >
          {children}
        </motion.div>
      </section>
    </>
  );
};

export default Section;

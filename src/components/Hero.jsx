import { HERO } from "../constants";
import JagadeeshImg from "../assets/jagadeesh.jpeg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center px-4">
      {/* Animated Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2"
      >
        <h2 className="my-4 p-2 text-3xl font-bold md:text-4xl lg:text-5xl">
          {HERO.name}
        </h2>
        <p className="p-2 text-lg tracking-tighter lg:text-xl">{HERO.greet}</p>
        <p className="mb-6 p-2 text-base lg:text-lg">{HERO.description}</p>
      </motion.div>

      {/* Animated Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 lg:p-8"
      >
        <div className="flex justify-center">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={JagadeeshImg}
            alt="Jagadeeshwar Reddy"
            className="rounded-3xl max-w-[300px] md:max-w-[400px] lg:max-w-[450px] h-auto"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

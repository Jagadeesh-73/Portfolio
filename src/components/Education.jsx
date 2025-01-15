import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section className="pt-20" id="education">
      {/* Section Title */}
      <motion.h2
      initial={{ opacity :0 ,y:-20}}
      whileInView={{ opacity :1 ,y:0}}
      transition={{ duration :1}}
      className="mb-8 text-center text-2xl lg:text-3xl font-bold text-white">
        Education
      </motion.h2>

      {/* Education Cards */}
      <div className="container mx-auto space-y-6 max-w-4xl">
        {EDUCATION.map((education, index) => (
          <motion.div
             initial={{ opacity :0 ,x:-20}}
             whileInView={{ opacity :1 ,y:0}}
             transition={{ duration :1, delay :index *0.5}}
             key={index}
            className="flex flex-col gap-4 p-4 border border-gray-600 rounded-lg bg-transparent"
          >
            {/* Degree (Prominent Heading) */}
            <h3 className="text-lg lg:text-xl font-bold text-white">
              {education.degree}
            </h3>

            {/* Institution */}
            <p className="text-sm text-gray-300 font-semibold">
              {education.institution}
            </p>

            {/* Duration */}
            <span className="text-sm text-gray-400">{education.duration}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;

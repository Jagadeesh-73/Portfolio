import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const WorkExperience = () => {
  return (
    <section className="pt-20" id="work">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-8 text-center text-2xl lg:text-3xl font-bold text-white"
      >
        Work Experience
      </motion.h2>

      {/* Work Experience Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="container mx-auto space-y-6 max-w-5xl px-4" // Adjust width and padding
      >
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: "easeInOut",
            }} // Updated motion effects
            key={index}
            className="flex flex-col gap-4 p-6 border border-gray-600 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg"
          >
            {/* Role (Prominent Heading) */}
            <h3 className="text-lg lg:text-xl font-bold text-white">
              {experience.role}
            </h3>

            {/* Client Name */}
            <p className="text-sm text-gray-300 font-semibold">
              {experience.client}
            </p>

            {/* Duration */}
            <span className="text-sm text-gray-400">{experience.duration}</span>

            {/* Description */}
            <p className="text-sm text-gray-300 leading-relaxed">
              {experience.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WorkExperience;

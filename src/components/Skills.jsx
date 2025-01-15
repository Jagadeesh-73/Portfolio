import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const Skills = () => {
  // Variants for the container
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between child animations
      },
    },
  };

  // Variants for each skill category
  const categoryVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Variants for each skill item
  const itemVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <section className="pt-20" id="skills">
      {/* Animated Section Title */}
      <motion.h2
        className="mb-8 text-center text-3xl lg:text-4xl font-bold"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Skills
      </motion.h2>

      {/* Animated Skill Categories */}
      <motion.div
        className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        {SKILLS.map((category, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-6"
            variants={categoryVariant}
          >
            {/* Category Title */}
            <h3 className="text-2xl font-semibold">{category.category}</h3>
            <motion.ul className="flex flex-col items-center gap-4">
              {category.items.map((skill, idx) => (
                <motion.li
                  key={idx}
                  className="flex flex-col items-center text-center"
                  variants={itemVariant}
                >
                  {/* Skill Icon */}
                  <div>{skill.icon}</div>
                  {/* Skill Name */}
                  <p className="mt-2 text-lg font-medium">{skill.name}</p>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;

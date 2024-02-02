import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center flex-col mx-auto px-5 max-w-[50rem] gap-8">
        <div className="text-center my-6 inline-block relative  text-indigo-500">
          <div className="w-full h-full dark:bg-indigo-900 bg-indigo-200 absolute -z-10 blur-xl"></div>
          <h2 className="text-xl lg:text-2xl xl:text-4xl">Our Mission</h2>
        </div>
        <div className="text-xl lg:text-2xl xl:text-4xl">
          CSC is dedicated to fostering a vibrant community of computer science
          enthusiasts. Our mission is to harness the power of technology for
          positive change by creating community-based applications that address
          real-world challenges. We strive to inspire innovation, collaboration,
          and lifelong learning among our members. Guided by our core values of
          innovation, inclusivity, and continuous learning, we aim to empower
          individuals to make a meaningful impact through technology. Join us as
          we code for a purpose, connect minds, and build a future where
          technology is utilized as a tool to develop communities all around the
          globe.
        </div>
      </div>
    </motion.div>
  );
}

export default About;

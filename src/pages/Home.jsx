import { motion } from "framer-motion";
import hero from "../img/hero.png";

function Home() {
  return (
    <motion.div
      className="text-4xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="h-screen mb-[-100px]">
        <div className="grid grid-cols-1 items-center justify-items-center mt-20 w-[80%] rounded-lg dark:bg-gray-800 bg-stone-100 mx-auto py-10">
          <div className="bg-green-600 rounded-full px-4 py-3 inline-block text-lg font-bold -rotate-2 shadow-md dark:shadow-cyan-300 shadow-cyan-800 hover:rotate-2 text-gray-100">
            Welcome to CSC
          </div>
          <h2 className="text-center my-12 text-3xl font-semibold">
            <span className="text-cyan-500">Computer Science</span>{" "}
            <span className="text-green-500">For Community.</span>
          </h2>
          <p className="text-center mb-10 text-2xl">
            A student led initative to promote the use of Computer Science in
            Communities
          </p>
          <button className="rounded-lg px-4 py-2 bg-green-600 hover:bg-green-700 text-gray-100 text-xl">
            About Us
          </button>
          <a
            href="#ahead"
            className="mt-12 p-2 rounded-full bg-indigo-600 text-gray-200 animate-bounce"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </a>
        </div>
      </section>
      <section id="ahead">
        <div className="relative">
          <div className="w-full h-full dark:bg-emerald-600 bg-emerald-100 absolute -z-10 blur-[140px]"></div>
          <img src={hero} className="w-[90%] mx-auto rounded-xl" />
        </div>
        <p className="text-center text-xl mx-5 my-7">
          At CSC, we focus on developing business and computer science skills
          vital to becoming a skilled tech entrepreneur who can create unique
          tech solutions swiftly and efficiently.
        </p>
      </section>
      <section className="mb-16">
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-center my-6 mt-36 inline-block relative  text-indigo-500">
            <div className="w-full h-full dark:bg-indigo-800 bg-indigo-200 absolute -z-10 blur-xl"></div>
            Events
          </h2>
          <div className="mx-4 flex flex-col gap-9 border-2 p-4 border-indigo-800 rounded-2xl">
            <h3 className="text-center text-2xl">Competition Coming Up!</h3>
            <p className="text-xl text-center">
              Interested in gaining competitive programming or hackathon
              experience?
            </p>
            <p className="text-xl text-center -mt-4">
              CSC is hosting its first competition starting February 3rd. Sign
              up by January 31st for a chance to win prizes and have a fun time!
            </p>
            <button className="rounded-lg px-4 py-2 bg-green-600 hover:bg-green-700 text-gray-100 text-xl w-[60%] mx-auto">
              Sign Up here!
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-center my-6 mt-36 inline-block relative  text-indigo-500">
            <div className="w-full h-full dark:bg-indigo-800 bg-indigo-200 absolute -z-10 blur-xl"></div>
            Chapters
          </h2>
          <div>
            <h3>Chapters</h3>
            <p>
              Take initiative and start a CSC chapter at your school today and
              explore the chapters already established!
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Home;

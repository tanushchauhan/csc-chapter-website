import { motion } from "framer-motion";
import hero from "../img/hero.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <motion.div
      className="text-4xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="h-screen mb-[-100px]">
        <div className="lg:grid lg:grid-cols-2 lg:gap-2 lg:mx-16">
          <div className="grid grid-cols-1 items-center justify-items-center mt-20 w-[80%] rounded-lg dark:bg-gray-800 bg-slate-100 mx-auto py-10  lg:px-10">
            <div className="bg-green-600 rounded-full text-center px-4 py-3 inline-block text-lg lg:text-2xl xl:text-3xl font-bold -rotate-2 shadow-md dark:shadow-cyan-300 shadow-cyan-800 hover:rotate-2 text-gray-100">
              Welcome to CSC LTHS
            </div>
            <h2 className="text-center my-12 text-3xl md:text-2xl lg:text-4xl font-semibold">
              <span className="text-cyan-500">Computer Science</span>{" "}
              <span className="text-green-500">For Community.</span>
            </h2>
            <p className="text-center lg:text-2xl xl:text-3xl mb-10 text-2xl">
              A student led initative to promote the use of Computer Science in
              Communities
            </p>
            <Link
              to="about"
              className="rounded-lg lg:text-2xl xl:text-3xl px-4 py-2 bg-green-600 hover:bg-green-700 text-gray-100 text-xl"
            >
              About Us
            </Link>
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
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="w-full h-full dark:bg-emerald-600 bg-emerald-100 absolute -z-10 blur-[140px]"></div>
            <img src={hero} className="w-[90%] mx-auto rounded-xl sm:w-[60%]" />
          </div>
        </div>
      </section>
      <section id="ahead" className="mt-24 md:w-[70%] xl:w-[50%] mx-auto">
        <div className="relative lg:hidden">
          <div className="w-full h-full dark:bg-emerald-600 bg-emerald-100 absolute -z-10 blur-[140px]"></div>
          <img src={hero} className="w-[90%] mx-auto rounded-xl" />
        </div>
        <p className="text-center text-xl lg:text-2xl xl:text-4xl mx-5 mb-7 mt-28">
          At CSC, we focus on developing business and computer science skills
          vital to becoming a skilled tech entrepreneur who can create unique
          tech solutions swiftly and efficiently.
        </p>
      </section>
      <section className="mb-36">
        <div className="flex items-center justify-center flex-col">
          <div className="text-center my-6 mt-36 inline-block relative text-indigo-500">
            <div className="w-full h-full dark:bg-indigo-900 bg-indigo-200 absolute -z-10 blur-xl"></div>
            <h2 className="lg:text-2xl xl:text-4xl">Events</h2>
          </div>
          <div className="mx-4 flex flex-col gap-9 border-4 p-4 border-indigo-800 rounded-2xl max-w-[50rem]">
            <h3 className="text-center text-2xl text-slate-900 font-bold dark:text-slate-200">
              Competition Coming Up!
            </h3>
            <p className="text-xl text-center">
              Interested in gaining competitive programming or hackathon
              experience?
            </p>
            <p className="text-xl text-center -mt-4">
              CSC is hosting its first competition starting February 3rd. Sign
              up by January 31st for a chance to win prizes and have a fun time!
            </p>
            <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLSer9ed1fja2V31PMVCqHc-0pSG33PSz8XsCunfaGshvyeHXwA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-4 py-2 bg-green-600 hover:bg-green-700 text-gray-100 text-xl w-[60%] mx-auto max-w-44 text-center"
            >
              Sign Up here!
            </Link>
          </div>
        </div>
      </section>
      <section>
        {/* <div className="flex items-center justify-center flex-col mx-5">
          <h2 className="text-center my-6 inline-block relative  text-indigo-500">
            <div className="w-full h-full dark:bg-indigo-900 bg-indigo-200 absolute -z-10 blur-xl"></div>
            Chapters
          </h2>
          <div>
            <p className="text-center text-2xl">
              Take initiative and start a CSC chapter at your school today and
              explore the chapters already established!
            </p>
          </div>
        </div> */}
        <div className="flex items-center justify-center flex-col mx-auto px-5 max-w-[50rem]">
          <h2 className="text-center my-6 inline-block relative  text-indigo-500 lg:text-2xl xl:text-4xl">
            <div className="w-full h-full dark:bg-indigo-900 bg-indigo-200 absolute -z-10 blur-xl"></div>
            Contact Us
          </h2>
          <div>
            <p className="text-center text-2xl lg:text-2xl xl:text-4xl">
              Have question? Click below and fill out a quick form.
            </p>
          </div>
          <button className="rounded-lg px-4 py-2 bg-green-600 hover:bg-green-700 text-gray-100 text-xl w-[60%] mx-auto mt-7 max-w-44">
            Contact Us
          </button>
        </div>
      </section>
    </motion.div>
  );
}

export default Home;

import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      className="text-4xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="h-screen">
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
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </section>
    </motion.div>
  );
}

export default Home;

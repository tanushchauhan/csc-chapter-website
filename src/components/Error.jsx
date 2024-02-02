import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="flex items-center justify-center h-screen dark:text-gray-200">
      <div className="w-[75%]">
        <h1 className="text-center font-bold lg:text-3xl md:text-2xl">
          Something went wrong 😢
        </h1>
        <p className="text-center lg:text-2xl mt-3 md:text-xl">
          The page you tried to visit does not exist!{" "}
          <Link
            to="/"
            className=" text-green-600 underline hover:text-green-700"
          >
            Click here
          </Link>{" "}
          to go to the home page.
        </p>
      </div>
    </div>
  );
}

export default Error;

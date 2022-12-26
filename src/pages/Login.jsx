import React from "react";

const Login = () => {
  return (
    <section className="min-h-screen container mx-auto overflow-hidden flex flex-col gap-y-8 lg:flex-row lg:items-center py-20 justify-center">
      {/* left */}
      <div className="flex-1 w-full flex items-center justify-center h-full flex-col lg:opacity-50 hover:opacity-100 transition duration-300">
        {/* title */}
        <h2 className="text-xl lg:text-3xl font-medium py-8 capitalize">
          I'm new here
        </h2>

        {/* form */}
        <form className="w-full flex flex-col items-center justify-center gap-y-8">
          <div className="w-full lg:w-2/3">
            <input
              type="text"
              placeholder="First Name*"
              className="w-full px-4 py-3 text-sm border placeholder-black border-gray-400 rounded-sm lg:text-sm focus:outline-none"
            />
          </div>

          <div className="w-full lg:w-2/3">
            <input
              type="text"
              placeholder="Last Name*"
              className="w-full px-4 py-3 text-sm border placeholder-black border-gray-400 rounded-sm lg:text-sm focus:outline-none"
            />
          </div>

          <div className="w-full lg:w-2/3">
            <input
              type="email"
              placeholder="Email*"
              className="w-full px-4 py-3 text-sm border placeholder-black  border-gray-400 rounded-sm lg:text-sm focus:outline-none focus:invalid:text-red-500"
            />
          </div>

          <div className="w-full lg:w-2/3">
            <input
              type="password"
              placeholder="Password*"
              className="w-full px-4 py-3 text-sm border placeholder-black border-gray-400 rounded-sm lg:text-sm focus:outline-none"
            />
          </div>

          <div className="w-full lg:w-2/3">
            <button className="w-full px-4 py-3 bg-primary text-white text-center uppercase rounded-sm lg:text-sm focus:outline-none cursor-pointer">
              Create an account
            </button>
          </div>
        </form>
      </div>

      {/* right */}
      <div className="flex-1 w-full flex items-center justify-center h-full flex-col lg:opacity-50 hover:opacity-100 transition duration-300">
        {/* title */}
        <h2 className="text-xl lg:text-3xl py-8 font-medium capitalize">
          Welcome back
        </h2>

        {/* form */}
        <form className="w-full flex flex-col items-center justify-center gap-y-8">
          <div className="w-full lg:w-2/3">
            <input
              type="email"
              placeholder="Enter Email*"
              className="w-full px-4 py-3 text-sm border placeholder-black  border-gray-400 rounded-sm lg:text-sm focus:outline-none focus:invalid:text-red-500"
            />
          </div>

          <div className="w-full lg:w-2/3">
            <input
              type="password"
              placeholder="Enter Password*"
              className="w-full px-4 py-3 text-sm border placeholder-black border-gray-400 rounded-sm lg:text-sm focus:outline-none"
            />
          </div>

          <div className="w-full lg:w-2/3">
            <button className="w-full px-4 py-3 bg-primary text-white text-center uppercase rounded-sm lg:text-sm focus:outline-none cursor-pointer">
              Log in
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;

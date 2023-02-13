import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="  w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 pt-28  text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">
            Fill it completely to have a slight chance to meet me
          </p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/02af5e74-62c2-4431-ab7a-1f1e961d9c9a"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Name here.."
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email here.."
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Message here..."
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-teal-500 to-green-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Speak Now Human
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

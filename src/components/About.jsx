import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me:
          </p>
          <p className="text-xl mt-20">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur sint numquam velit laborum doloribus obcaecati et
            assumenda neque eveniet, placeat veritatis nesciunt esse quo
            repellat deserunt commodi, sed id molestias porro unde iure sequi
            voluptate. Alias cumque blanditiis pariatur error? Eligendi dolorum
            quod ratione animi odio est rem commodi ullam!
          </p>
          <br />
          <p className="text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
            saepe delectus sapiente officiis dolorum porro veniam dolore aliquam
            cum nihil rerum placeat rem accusantium quaerat voluptates
            provident, eius excepturi? Aliquid et voluptate odit voluptates
            expedita, harum enim. Eum laudantium necessitatibus libero nulla
            explicabo mollitia, quis, nesciunt fuga pariatur quasi qui?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

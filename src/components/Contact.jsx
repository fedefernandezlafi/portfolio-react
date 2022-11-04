import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-centerp-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/9c7d844c-e39c-4262-8316-d1415b962502"
        className="flex flex-col max-w-[600px] w-full pt-24 mx-4"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#ed4622] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or email me at ffernandezlafi@gmail.com
          </p>
        </div>
        <input
          className="p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="my-4 p-2 bg-[#ccd6f6]"
          name="message"
          rows="10"
          placeholder="Message "
        ></textarea>
        <button className="text-white border-2 hover:bg-[#ed4622] hover:border-[#ed4622] px-4 py-3 mu-8 mx-auto flex items-center">
          Let's get in touch
        </button>
      </form>
    </div>
  );
};

export default Contact;

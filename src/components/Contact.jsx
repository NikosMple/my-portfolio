import React from 'react';

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-[#0a192f] to-[#020c1b] flex justify-center items-center p-8 text-gray-300">
      {/* Container */} 
      <form 
        method="POST"
        action="https://getform.io/f/brooeqpa"
        className="flex flex-col max-w-[600px] w-full bg-[#112240] shadow-lg rounded-lg p-6"
      >
        {/* Header */}
        <div className="text-center pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-500">
            Contact
          </p>
          <p className="mt-4 text-lg text-[#8892b0]">
            Submit the form below <span className="font-bold text-gray-300">OR</span> shoot me an email - <br />
            <a href="mailto:nbletsas98@gmail.com" className="text-yellow-500 hover:underline">
              nbletsas98@gmail.com
            </a>
          </p>
        </div>

        {/* Form Inputs */}
        <input
          className="bg-[#ccd6f6] text-gray-900 p-3 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="bg-[#ccd6f6] text-gray-900 p-3 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-[#ccd6f6] text-gray-900 p-3 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          name="message"
          rows="8"
          placeholder="Message"
          required
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="text-white font-bold bg-yellow-600 px-6 py-3 mt-4 mx-auto rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          Let&apos;s Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;

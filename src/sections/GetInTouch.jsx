import { IoMailOpenSharp } from "react-icons/io5";
import { FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaTelegramPlane } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex flex-col items-center py-20 px-6 overflow-hidden"
    >
      <div className="text-center z-10 mb-12">
        <h1 className="font-bold text-white text-3xl md:text-4xl">
          Get In <span className="text-[#38bdf8]">Touch</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto mt-3">
          Have a question, collaboration idea, or just want to connect? Drop me a
          message — I’m always happy to chat and explore new opportunities together!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full mx-auto">
        
        {/* Contact Info */}
        <div className="bg-[#1e293b] rounded-2xl border border-gray-700 p-8 text-white">
          <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">
            Contact Information
          </h2>

          <div className="flex items-center gap-4 mb-5">
            <div className="text-xl p-3 bg-[#38bdf8] text-black rounded-full">
              <IoMailOpenSharp />
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-300">heyydayanand@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-5">
            <div className="text-xl p-3 bg-[#38bdf8] text-black rounded-full">
              <FaPhoneAlt />
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-300">+91 9898765645</p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-5">
            <div className="text-xl p-3 bg-[#38bdf8] text-black rounded-full">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-gray-300">Rohini, NaharPur, Delhi 110085</p>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-semibold mb-3">Connect with me</h4>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-gray-700 rounded-full hover:bg-[#38bdf8] transition">
                <FaInstagram />
              </a>
              <a href="#" className="p-3 bg-gray-700 rounded-full hover:bg-[#38bdf8] transition">
                <FaTelegramPlane />
              </a>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="bg-[#1e293b] rounded-2xl border border-gray-700 p-8 text-white">
          <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">
            Send a Message
          </h2>

          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Name"
              className="bg-[#0f172a] border border-gray-600 rounded-xl p-3 text-white focus:outline-none focus:border-[#38bdf8]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-[#0f172a] border border-gray-600 rounded-xl p-3 text-white focus:outline-none focus:border-[#38bdf8]"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="bg-[#0f172a] border border-gray-600 rounded-xl p-3 text-white focus:outline-none focus:border-[#38bdf8]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#38bdf8] text-black font-semibold py-3 rounded-xl hover:bg-[#0ea5e9] transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;

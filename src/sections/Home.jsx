import Header from "../comonents/Header";

const Home = () => {
  return (
    <>
      <Header />
      <section
        id="home"
        className="w-full min-h-screen flex flex-col justify-center items-center text-center z-1 text-white relative overflow-hidden"
      >
        {/* Optional animated background (can add later) */}
        <div className="z-10 flex flex-col items-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3">
            Hi, I'm <span className="text-[#a5e1f5]">Dayanand</span> Vishwakarma
          </h1>
          <p className="w-[85%] sm:w-[60%] text-[15px] sm:text-base text-gray-300 leading-relaxed">
            I create stellar web experiences with modern technologies. Specializing in front-end development,
            I build interfaces that are both beautiful and functional.
          </p>
          <button className="mt-8 px-6 py-2 bg-transparent border-2 border-[#a5e1f5] rounded-full text-[#a5e1f5] hover:bg-[#a5e1f5] hover:text-[#0d0d1a] transition-all duration-300 font-medium">
            View My Work
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;

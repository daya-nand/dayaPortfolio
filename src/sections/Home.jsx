import Header from "../comonents/Header";

const Home = () => {


  return (
    <>
    <Header />
    <section id="home" className="w-full h-screen flex flex-col justify-center items-center text-center text-white">
      <h1 className="text-4xl mb-2 font-bold">Hi... I'm</h1>
      <h1 className="text-4xl mb-3 font-bold"><span className="text-[#a5e1f5]">Dayanand</span> Vishwakarma</h1>
      <p className="w-[70%] text-[14px]">I am a Front-End Developer fresher currently pursuing a Bachelor of Computer Applications (BCA) from IGNOU. I enjoy learning new technologies and continuously improving my skills in HTML, CSS, JavaScript, and React.</p>
      <button className="mt-5 px-6 py-1 border rounded-2xl border-[#a5e1f5] text-[#a5e1f5] hover:bg-[#a5e1f5] hover:text-white transition duration-300">view my work</button>
    </section>
    </>
  )
}

export default Home;
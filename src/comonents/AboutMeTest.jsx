import { FaCode } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section id='about' 
    className='w-full min-h-screen   text-white flex flex-col items-center py-20 px-6 relative overflow-hidden'>
    
    {/*title*/}
    <div  className='text-center mb-12 z-10'>
        <h1 className='text-3xl md:text-4xl font-bold mb-3'>
            About 
            <span className='text-[#38bdf8]'> Me</span>
        </h1>
    </div>

    <div className='flex mx-50'>
        <div className="flex flex-col justify-center gap-4">
            <h1 className="text-3xl">Passonaite Web developer and tech creator</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti repudiandae molestias culpa doloremque dolor excepturi modi ipsa, velit itaque nihil quam dolores nobis odit? Fugiat neque quia dignissimos officia reprehenderit!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum id quasi ullam esse, laboriosam dicta cum expedita aut similique repudiandae?</p>

            <div className="flex items-center gap-6">
                <button className="px-3 py-1.5 bg-amber-300 rounded-2xl text-white">Get in Touch</button>
                <button className="px-3 py-1.5 bg-tranaparent border-1 shadow-2xl rounded-2xl">Download CV</button>
            </div>
        </div>


        
        <div className="w-full">
            <div className='w-full rounded-xl bg-blue-200 p-5 flex items-start gap-4 text-start '>
                <div className="bg-amber-100 h-12 w-12 rounded-full flex items-center justify-center text-xl">{/* icon */}
                    {<FaCode />}
                </div>

                <div className="flex-1">
                    <h1 className="text-lg font-semibold text-gray-800">Web Development</h1>
                    <p className="text-sm text-gray-600 mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci unde temporibus accusantium consequuntur amet. A aspernatur voluptate ad non dicta?</p>
                </div>
            </div>
        </div>

        
    </div>
    

    </section>
  )
}

export default AboutMe
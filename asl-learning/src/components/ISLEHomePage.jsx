import { useNavigate } from "react-router-dom";


export default function IslePoster() {
    const navigate = useNavigate();

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center p-10 flex flex-col gap-20"
      style={{ backgroundImage: "url('/background_isle.png')" }} // ✅ don't include `/public/`
    >
      {/* ---------------- Top Section ---------------- */}
      <div className="grid grid-cols-2 gap-8 items-center">
        {/* Left - Title & Quote */}
        <div>
          <h1 className="text-[70px] ml-[70px] font-bold mb-4">
            ISLE - Interactive Sign Language Education
          </h1>
          <p className="italic text-[40px] ml-[70px] text-gray-700">
            “Blindness cuts us off from things, but deafness cuts us off from people.”
          </p>
          <p className="mt-2 text-[30px] ml-[70px] text-gray-800 font-semibold">– Helen Keller</p>
        </div>

        {/* Right - Image */}
        

        <div className="w-[700px] h-[700px] bg-gray-300 flex items-center justify-center shadow-lg 
        rounded-tl-none rounded-tr-none mr-[20px] rounded-br-none rounded-bl-none ml-auto">
          <span className="text-gray-600">Image Placeholder</span>
        </div>


      </div>

      {/* ---------------- Our Story Section ---------------- */}
      <div className="grid grid-cols-2 gap-8 items-center">
        {/* Left - Text */}
        <div>
          <h2 className="text-[65px] ml-[70px] font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700 text-[24px] ml-[70px] leading-relaxed">
                Every child deserves a voice, even when words cannot be spoken. ISLE was born from a simple dream-to make learning sign language easier, joyful, and accessible for every deaf and mute student.          
            </p>
            <p className="text-gray-700 text-[24px] ml-[70px] leading-relaxed">
                We saw children struggling in silence, parents searching for ways to connect, and teachers wishing for better tools. That silence inspired us to create ISLE, a space where learning becomes interactive, playful, and full of hope.          
            </p>
            <p className="text-gray-700 text-[24px] ml-[70px] leading-relaxed">
                ISLE is more than just an app-it is a bridge of love, learning, and understanding. Together, we are not only teaching signs, but also opening doors to confidence, communication, and a brighter future.          
            </p>
        </div>

        {/* Right - Image */}


        <div className="w-[700px] h-[700px] bg-gray-300 flex items-center justify-center shadow-lg 
        rounded-tl-none rounded-tr-[100px] mr-[20px] rounded-br-none rounded-bl-none ml-auto">
            <span className="text-gray-600">Image Placeholder</span>
        </div>
        

      </div>

      {/* ---------------- What We Do Section ---------------- */}
      <div className="grid grid-cols-2 gap-8 items-center">
        {/* Left - Image */}
        <div className="w-[700px] h-[700px] bg-gray-300 flex items-center justify-center shadow-lg 
                        rounded-tl-none rounded-tr-[100px] ml-[70px]  rounded-br-none rounded-bl-none mr-auto">
          <span className="text-gray-600">Image Placeholder</span>
        </div>

        {/* Right - Text */}
        <div>
          <h2 className="text-[65px] ml-[70px] font-semibold mb-4">What we do?</h2>
          <p className="text-gray-700 ml-[70px] text-[24px] leading-relaxed">
            At ISLE, we make learning sign language interactive and easy for deaf and mute students.
          </p>
          <p className="text-gray-700 ml-[70px] text-[24px] leading-relaxed">
            We bring education to life through images, videos, and fun quizzes.
          </p>
          <p className="text-gray-700 ml-[70px] text-[24px] leading-relaxed">
            Children can practice signs with live detection, parents and teachers can guide them with special content, and everyone learns in their own way.
          </p>
          <p className="text-gray-700 ml-[70px] text-[24px] leading-relaxed">
            We are building a world where communication has no barriers-where every child feels confident, connected, and understood.
          </p>
        </div>
      </div>

      {/* ---------------- Why Choose Us Section ---------------- */}
        <div className="flex justify-center">
    <div className="text-center">
        <h2 className="text-2xl text-[65px] font-semibold mb-20">Why choose us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[130px]">
        {/* Card 1 */}
        <div className="bg-[#B7E7E0] w-[300px] h-[420px] p-6 shadow-md flex flex-col items-center rounded-tr-[40px] rounded-bl-[40px]">
            <div className="w-[250px] h-[250px] bg-gray-300 mb-4 flex items-center justify-center rounded-tr-[40px]">
            <span className="text-gray-600">Image</span>
            </div>
            <h3 className="font-semibold text-[20px] text-center">INTERACTIVE & FUN LEARNING</h3>
            <p className="text-gray-600 text-sm mt-2 text-center">
            Live sign detection, quizzes, and engaging content.
            </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#B7E7E0] w-[300px] h-[420px] p-6 shadow-md flex flex-col items-center rounded-tr-[40px] rounded-bl-[40px]">
            <div className="w-[250px] h-[250px] bg-gray-300 mb-4 flex items-center justify-center rounded-tr-[40px]">
            <span className="text-gray-600">Image</span>
            </div>
            <h3 className="font-semibold text-[20px] text-center">SUPPORT FOR EVERYONE</h3>
            <p className="text-gray-600 text-sm mt-2 text-center">
            Separate learning paths for children, parents, and teachers.
            </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#B7E7E0] w-[300px] h-[420px] p-6 shadow-md flex flex-col items-center rounded-tr-[40px] rounded-bl-[40px]">
            <div className="w-[250px] h-[250px] bg-gray-300 mb-4 flex items-center justify-center rounded-tr-[40px]">
            <span className="text-gray-600">Image</span>
            </div>
            <h3 className="font-semibold text-[20px] text-center">BREAKING BARRIERS</h3>
            <p className="text-gray-600 text-sm mt-2 text-center">
            Building confidence and connection beyond words.
            </p>
        </div>
        </div>
    </div>
    </div>

      {/* ---------------- Start Journey Section ---------------- */}
      <div className="grid grid-cols-2 gap-8 items-center">
        {/* Left - Text */}
        <div>
          <h2 className="text-[65px] ml-[70px] font-semibold mb-4">Start Your Journey With Us</h2>
          <p className="text-gray-700 ml-[70px] text-[24px] leading-relaxed">
            Step into a world where silence turns into expression.
          </p>
          <p className="mt-3 text-gray-700 ml-[70px] text-[24px] leading-relaxed">
            With ISLE, every sign you learn brings you closer to confidence, connection, and a brighter future.
          </p>

          <div className="flex justify-center mt-6">
            <button
                onClick={() => navigate("/start")}
                className="px-6 py-2 bg-teal-300 rounded-full shadow-md font-semibold hover:bg-teal-400"
            >
                Getting started
            </button>
            </div>


        </div>

        {/* Right - Image */}
        <div className="w-[700px] h-[700px] bg-gray-300 flex items-center justify-center shadow-lg 
        rounded-tl-none rounded-tr-[100px] mr-[20px] rounded-br-none rounded-bl-none ml-auto">
            <span className="text-gray-600">Image Placeholder</span>
        </div>
      </div>

      {/* ---------------- Contact Us Section ---------------- */}
      <footer className=" text-gray-800 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1 - Logo / Title */}
            <div>
            <h2 className="text-3xl font-bold mb-4">ISLE</h2>
            <p className="text-gray-700">
                Interactive Sign Language Education platform empowering communication beyond words.
            </p>
            </div>

            {/* Column 2 - Contact */}
            <div>
            <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
            <p className="text-gray-700">📍 Devesh Iconic</p>
            <p className="text-gray-700">📞 +91 98765 43210</p>
            <p className="text-gray-700">📧 isle.team.contact@gmail.com</p>
            </div>

            {/* Column 3 - Quick Links */}
            <div>
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
            </div>

            {/* Column 4 - Social Media */}
            <div>
            <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
            <ul className="space-y-2">
                <li><a href="#" className="hover:text-teal-600">Facebook</a></li>
                <li><a href="#" className="hover:text-teal-600">Instagram</a></li>
                <li><a href="#" className="hover:text-teal-600">Twitter</a></li>
                <li><a href="#" className="hover:text-teal-600">LinkedIn</a></li>
            </ul>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className=" border-gray-300 mt-8 pt-6 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} ISLE. All rights reserved.
        </div>
        </footer>

    </div>
  );
}

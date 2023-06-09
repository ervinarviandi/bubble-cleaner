import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full  bg-white ">
      <div className=" h-min lg:max-w-6xl mx-auto px-7  ">
        <div className="flex flex-wrap">
          <div className="flex flex-col md:flex-row gap-20 md:gap-32">
            <div className="md:w-1/2">
              <div className=" mt-5  py-4">
                <img src="/logo.png" alt="brand-footer" width={90} height={90} className="bg-black p-2 rounded-md" />
              </div>
              <p className="font-poppins text-lg text-gray-600">Kami merupakan jasa perawatan premium sepatu pertama di Indonesia berbasis media sosial yang sampai saat sudah memiliki lebih dari 70 workshop di 20 kota di Indonesia.</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="bg-black text-white p-3 rounded-full hover:bg-cyan-500 cursor-pointer">
                  <BsWhatsapp />
                </div>
                <p className="font-poppins text-gray-600 text-lg">+628856787876</p>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <div className="bg-black text-white p-3 rounded-full hover:bg-cyan-500 cursor-pointer">
                  <MdEmail />
                </div>
                <p className="font-poppins text-gray-600 text-lg">CleanerBubble@gmail.com</p>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-black font-poppins md:mt-20 mt-7 font-bold text-2xl">Kantor Yogykarta:</h2>
              <p className="font-poppins text-lg text-gray-600 mt-4">Jl. Langenastran Kidul No.18, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55131</p>

              <h2 className="font-poppins text-black text-2xl mt-7 font-bold">Media Sosial</h2>

              <div className="mt-5 flex items-center gap-3">
                <div className="bg-black text-white p-3 rounded-full hover:bg-cyan-500 cursor-pointer">
                  <AiFillInstagram />
                </div>
                <div className="bg-black text-white p-3 rounded-full hover:bg-cyan-500 cursor-pointer">
                  <BsFacebook />
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-36 mb-4 mx-auto ">
            <p className="font-poppins text-gray-500 text-md text-center">
              © Copyright 2023 <span className=" font-bold text-cyan-500  border-cyan-500 cursor-pointer"> Cleaner Bubble</span>. All Right Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

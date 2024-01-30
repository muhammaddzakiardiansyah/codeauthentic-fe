import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const LearnPage = () => {

  useEffect(() => {
    document.title = "Codeauthentic • Learns"
  });

  return (
    <>
      {/* navbar */}
      <Navbar />
      {/* end navbar */}
      {/* header */}
      <div class="h-[89vh] bg-primary flex justify-center px-20 items-center">
        <div>
          <h2 class="text-4xl md:text-5xl lg:text-7xl font-extrabold text-center text-secondary">
            Learn
            <br />
            Code<span class="text-tree">authentic</span>
          </h2>
          <p class="text-secondary text-center text-sm lg:text-base mt-7 font-semibold">
            Mari belajar dan berkembang bersama kami.
          </p>
        </div>
      </div>
      {/* end header */}
      {/* learn */}
      <div class="h-auto pb-20">
        <h2 class="pt-16 font-bold text-secondary text-2xl lg:text-3xl text-center">
          Kelas dasar pemrogramman dengan HTML
        </h2>
        <div class="w-[80vw] mx-auto mt-10 lg:grid grid-cols-4 gap-3">
          <div class="bg-tree p-3 rounded-lg hover:scale-105 border border-slate-600 my-5 lg:my-0">
            <img src="img/programmer.png" alt="" class="h-52 w-full" />
            <div class="mt-3 bg-slate-200 p-3 rounded-lg">
              <h3 class="font-semibold text-secondary mb-3">
                Kartu Undangan Online
              </h3>
              <p class="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium ipsa.
              </p>
              <button class="bg-for px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#0A2B64] hover:scale-105 text-tree mt-4">
                Lihat Sempel
              </button>
            </div>
          </div>
          <div class="bg-tree p-3 rounded-lg hover:scale-105 border border-slate-600 my-5 lg:my-0">
            <img src="img/programmer.png" alt="" class="h-52 w-full" />
            <div class="mt-3 bg-slate-200 p-3 rounded-lg">
              <h3 class="font-semibold text-secondary mb-3">
                Kartu Undangan Online
              </h3>
              <p class="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium ipsa.
              </p>
              <button class="bg-for px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#0A2B64] hover:scale-105 text-tree mt-4">
                Lihat Sempel
              </button>
            </div>
          </div>
          <div class="bg-tree p-3 rounded-lg hover:scale-105 border border-slate-600 my-5 lg:my-0">
            <img src="img/programmer.png" alt="" class="h-52 w-full" />
            <div class="mt-3 bg-slate-200 p-3 rounded-lg">
              <h3 class="font-semibold text-secondary mb-3">
                Kartu Undangan Online
              </h3>
              <p class="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium ipsa.
              </p>
              <button class="bg-for px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#0A2B64] hover:scale-105 text-tree mt-4">
                Lihat Sempel
              </button>
            </div>
          </div>
          <div class="bg-tree p-3 rounded-lg hover:scale-105 border border-slate-600 my-5 lg:my-0">
            <img src="img/programmer.png" alt="" class="h-52 w-full" />
            <div class="mt-3 bg-slate-200 p-3 rounded-lg">
              <h3 class="font-semibold text-secondary mb-3">
                Kartu Undangan Online
              </h3>
              <p class="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium ipsa.
              </p>
              <button class="bg-for px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#0A2B64] hover:scale-105 text-tree mt-4">
                Lihat Sempel
              </button>
            </div>
          </div>
          <div class="bg-tree p-3 rounded-lg hover:scale-105 border border-slate-600 my-5 lg:my-0">
            <img src="img/programmer.png" alt="" class="h-52 w-full" />
            <div class="mt-3 bg-slate-200 p-3 rounded-lg">
              <h3 class="font-semibold text-secondary mb-3">
                Kartu Undangan Online
              </h3>
              <p class="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium ipsa.
              </p>
              <button class="bg-for px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#0A2B64] hover:scale-105 text-tree mt-4">
                Lihat Sempel
              </button>
            </div>
          </div>
        </div>
        <h2 class="pt-16 font-bold text-secondary text-2xl lg:text-3xl text-center">
          Kelas dasar pemrogramman web dengan CSS
        </h2>
        <div class="w-[80vw] mx-auto mt-10 lg:grid grid-cols-4 gap-3">
          <div class="bg-tree p-3 rounded-lg hover:scale-105 border border-slate-600 my-5 lg:my-0">
            <img src="img/programmer.png" alt="" class="h-52 w-full" />
            <div class="mt-3 bg-slate-200 p-3 rounded-lg">
              <h3 class="font-semibold text-secondary mb-3">
                Kartu Undangan Online
              </h3>
              <p class="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium ipsa.
              </p>
              <button class="bg-for px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#0A2B64] hover:scale-105 text-tree mt-4">
                Lihat Sempel
              </button>
            </div>
          </div>
          <div class="bg-tree p-3 rounded-lg hover:scale-105 border border-slate-600 my-5 lg:my-0">
            <img src="img/programmer.png" alt="" class="h-52 w-full" />
            <div class="mt-3 bg-slate-200 p-3 rounded-lg">
              <h3 class="font-semibold text-secondary mb-3">
                Kartu Undangan Online
              </h3>
              <p class="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium ipsa.
              </p>
              <button class="bg-for px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#0A2B64] hover:scale-105 text-tree mt-4">
                Lihat Sempel
              </button>
            </div>
          </div>
          <div class="bg-tree p-3 rounded-lg hover:scale-105 border border-slate-600 my-5 lg:my-0">
            <img src="img/programmer.png" alt="" class="h-52 w-full" />
            <div class="mt-3 bg-slate-200 p-3 rounded-lg">
              <h3 class="font-semibold text-secondary mb-3">
                Kartu Undangan Online
              </h3>
              <p class="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium ipsa.
              </p>
              <button class="bg-for px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#0A2B64] hover:scale-105 text-tree mt-4">
                Lihat Sempel
              </button>
            </div>
          </div>
          <div class="bg-tree p-3 rounded-lg hover:scale-105 border border-slate-600 my-5 lg:my-0">
            <img src="img/programmer.png" alt="" class="h-52 w-full" />
            <div class="mt-3 bg-slate-200 p-3 rounded-lg">
              <h3 class="font-semibold text-secondary mb-3">
                Kartu Undangan Online
              </h3>
              <p class="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium ipsa.
              </p>
              <button class="bg-for px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#0A2B64] hover:scale-105 text-tree mt-4">
                Lihat Sempel
              </button>
            </div>
          </div>
        </div>
        <h2 class="pt-16 font-bold text-secondary text-2xl lg:text-3xl text-center">
          Kelas dasar pemrogramman web dengan Javascript
        </h2>
        <div class="w-[80vw] mx-auto mt-10 lg:grid grid-cols-4 gap-3">
          <div class="bg-tree p-3 rounded-lg hover:scale-105 border border-slate-600 my-5 lg:my-0">
            <img src="img/programmer.png" alt="" class="h-52 w-full" />
            <div class="mt-3 bg-slate-200 p-3 rounded-lg">
              <h3 class="font-semibold text-secondary mb-3">
                Kartu Undangan Online
              </h3>
              <p class="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium ipsa.
              </p>
              <button class="bg-for px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#0A2B64] hover:scale-105 text-tree mt-4">
                Lihat Sempel
              </button>
            </div>
          </div>
          <div class="bg-tree p-3 rounded-lg hover:scale-105 border border-slate-600 my-5 lg:my-0">
            <img src="img/programmer.png" alt="" class="h-52 w-full" />
            <div class="mt-3 bg-slate-200 p-3 rounded-lg">
              <h3 class="font-semibold text-secondary mb-3">
                Kartu Undangan Online
              </h3>
              <p class="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium ipsa.
              </p>
              <button class="bg-for px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#0A2B64] hover:scale-105 text-tree mt-4">
                Lihat Sempel
              </button>
            </div>
          </div>
          <div class="bg-tree p-3 rounded-lg hover:scale-105 border border-slate-600 my-5 lg:my-0">
            <img src="img/programmer.png" alt="" class="h-52 w-full" />
            <div class="mt-3 bg-slate-200 p-3 rounded-lg">
              <h3 class="font-semibold text-secondary mb-3">
                Kartu Undangan Online
              </h3>
              <p class="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium ipsa.
              </p>
              <button class="bg-for px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#0A2B64] hover:scale-105 text-tree mt-4">
                Lihat Sempel
              </button>
            </div>
          </div>
          <div class="bg-tree p-3 rounded-lg hover:scale-105 border border-slate-600 my-5 lg:my-0">
            <img src="img/programmer.png" alt="" class="h-52 w-full" />
            <div class="mt-3 bg-slate-200 p-3 rounded-lg">
              <h3 class="font-semibold text-secondary mb-3">
                Kartu Undangan Online
              </h3>
              <p class="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium ipsa.
              </p>
              <button class="bg-for px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#0A2B64] hover:scale-105 text-tree mt-4">
                Lihat Sempel
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end learn */}
      {/* footer */}
      <div class="h-[60vh] flex justify-center items-center">
        <div>
          <h2 class="text-2xl lg:text-3xl text-secondary font-bold text-center">
            Merasa Bodoh..
          </h2>
          <p class="mt-3 italic text-sm lg:text-base text-secondary text-center">
            Teruslah merasa bodoh agar kamu tidak pernah berhenti untuk terus
            belajar.
          </p>
        </div>
      </div>
      <Footer />
      {/* end footer */}
    </>
  );
};

export default LearnPage;

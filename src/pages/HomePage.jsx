import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HomePage = () => {

  useEffect(() => {
    document.title = "Codeauthentic"
  });

  return (
    <>
      {/* navbar */}
      <Navbar />
      {/* end navbar */}
      {/* header */}
      <div className="h-auto lg:h-[89vh] bg-primary lg:flex lg:justify-around lg:items-center">
        <div>
          <h2 className="text-xl md:text-3xl lg:text-4xl text-center lg:text-left pt-6 font-extrabold leading-normal text-secondary">
            <span className="text-tree">Codeauthentic</span>
            <br />
            harapan kamu untuk
            <br />
            mewujudkan <span className="text-tree">usaha</span>
            <br />
            yang kamu inginkan
            <br />
            di bidang
            <span className="text-tree">teknologi digital.</span>
          </h2>
          <p className="text-secondary text-sm lg:text-base mt-4 font-semibold text-center lg:text-left">
            Kami siap sepenuhnya membantu anda dalam
            <br />
            belajar/membuat atau mengembangkan
            <br />
            usaha di bidang teknologi informasi.
          </p>
          <button className="bg-for block mx-auto lg:inline-block lg:mx-0 px-3 lg:px-5 py-2 rounded-lg mt-5 lg:mt-10 font-medium lg:font-semibold text-tree hover:bg-[#0A2B64] hover:scale-105 my-5 lg:my-0">
            Mulai Sekarang !
          </button>
        </div>
        <img
          src="img/programmer.png"
          alt="programmer"
          className="h-[200px] sm:h-[250px] md:h-[350px] md:mt-5 mx-auto lg:mx-0 lg:h-[390px] rounded-2xl"
        />
      </div>
      {/* end header */}
      {/* products */}
      <div className="h-auto lg:h-screen">
        <h2 className="pt-14 font-bold text-secondary text-xl md:text-2xl lg:text-3xl text-center">
          Apa yang kamu <span className="text-primary">butuhkan ?</span>
        </h2>
        <h4 className="mt-5 font-semibold text-base lg:text-xl text-center text-secondary">
          Kami menyediakan
        </h4>
        <div className="w-[80%] mx-auto lg:grid grid-cols-3 gap-5 mt-7">
          <div className="border border-slate-400 p-3 rounded-lg hover:scale-105 my-5 lg:my-0">
            <img
              src="img/undangan-online.jpg"
              alt="undangan online"
              className="h-52 w-full"
            />
            <div className="mt-3 bg-slate-200 rounded-lg p-3">
              <h3 className="font-semibold text-secondary mb-3">
                Undangan Online
              </h3>
              <p className="text-sm">
                Kami mampu membantu anda dengan membuatkan kartu undangan online yang murah, fleksibel dan tentunya murah.
              </p>
              <button className="bg-for px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#0A2B64] hover:scale-105 text-tree mt-4">
                Lihat Sempel
              </button>
            </div>
          </div>
          <div className="border border-slate-400 p-3 rounded-lg hover:scale-105 my-5 lg:my-0">
            <img
              src="img/kelas-pemrogramman.png"
              alt="kelas pemrogramman"
              className="h-52 w-full"
            />
            <div className="mt-3 bg-slate-200 rounded-lg p-3">
              <h3 className="font-semibold text-secondary mb-3">
                Kelas Pemrogramman
              </h3>
              <p className="text-sm">
                Kami juga menyediakan kelas pemrogramman untuk pemula yang ingin berkarir di bidang IT.
              </p>
              <button className="bg-for px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#0A2B64] hover:scale-105 text-tree mt-4">
                Lihat Sempel
              </button>
            </div>
          </div>
          <div className="border border-slate-400 p-3 rounded-lg hover:scale-105 my-5 lg:my-0">
            <img
              src="img/web-umkm.jpg"
              alt="web umkm"
              className="h-52 w-full"
            />
            <div className="mt-3 bg-slate-200 rounded-lg p-3">
              <h3 className="font-semibold text-secondary mb-3">
                Website UMKM
              </h3>
              <p className="text-sm">
                Kami menyediakan layanan pembuatan website untuk usaha anda dengan berbagai fitur sesuai keinginan anda.
              </p>
              <button className="bg-for px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#0A2B64] hover:scale-105 text-tree mt-4">
                Lihat Sempel
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end products */}
      {/* learn */}
      <div className="h-auto lg:h-screen bg-primary">
        <h2 className="pt-10 font-bold text-secondary text-xl md:text-2xl lg:text-3xl text-center">
          Ingin <span className="text-tree">belajar bersama</span> kami ?
        </h2>
        <h4 className="mt-5 font-semibold text-base lg:text-xl text-center text-secondary">
          Ikuti kelas kami
        </h4>
        <div className="w-[80vw] mx-auto mt-7 lg:grid grid-cols-4 gap-3">
          <div className="bg-tree p-3 rounded-lg hover:scale-105 my-5 lg:my-0">
            <img
              src="img/pngwing.com (1).png"
              alt="javascript"
              className="h-52 w-full"
            />
            <div className="mt-3 bg-slate-200 p-3 rounded-lg">
              <h3 className="font-semibold text-secondary mb-3">
                Dasar Javascript
              </h3>
              <p className="text-sm">
                Belajar mulai dari 0 dengan bahasa pemrogramman Javascript.
              </p>
              <button className="bg-for px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#0A2B64] hover:scale-105 text-tree mt-4">
                Learn now !
              </button>
            </div>
          </div>
          <div className="bg-tree p-3 rounded-lg hover:scale-105 my-5 lg:my-0">
            <img
              src="img/pngwing.com (2).png"
              alt=""
              className="h-52 w-full"
            />
            <div className="mt-3 bg-slate-200 p-3 rounded-lg">
              <h3 className="font-semibold text-secondary mb-3">
                CSS Dasar
              </h3>
              <p className="text-sm">
                Belajar dasar styleing menggunakan css.
              </p>
              <button className="bg-for px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#0A2B64] hover:scale-105 text-tree mt-4">
                Learn now !
              </button>
            </div>
          </div>
          <div className="bg-tree p-3 rounded-lg hover:scale-105 my-5 lg:my-0">
            <img
              src="img/pngwing.com (4).png"
              alt=""
              className="h-52 w-full"
            />
            <div className="mt-3 bg-slate-200 p-3 rounded-lg">
              <h3 className="font-semibold text-secondary mb-3">
                Bootstrap 5
              </h3>
              <p className="text-sm">
                Belajar framework css dengan bootstrap versi 5.
              </p>
              <button className="bg-for px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#0A2B64] hover:scale-105 text-tree mt-4">
                Learn now !
              </button>
            </div>
          </div>
          <div className="bg-tree p-3 rounded-lg hover:scale-105 my-5 lg:my-0">
            <img
              src="img/pngwing.com (5).png"
              alt=""
              className="h-52 w-full"
            />
            <div className="mt-3 bg-slate-200 p-3 rounded-lg">
              <h3 className="font-semibold text-secondary mb-3">
                Next js
              </h3>
              <p className="text-sm">
                Belajar framework react menggunakan next js.
              </p>
              <button className="bg-for px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#0A2B64] hover:scale-105 text-tree mt-4">
                Learn now !
              </button>
            </div>
          </div>
        </div>
        <button className="flex items-center gap-x-2 my-6 mx-auto font-semibold text-secondary bg-slate-50 px-4 py-2 rounded-lg hover:scale-105 hover:bg-slate-400">
          Lihat lain nya
          <img src="img/arrow-right-solid.svg" alt="" className="mt-1" />
        </button>
      </div>
      {/* end learn */}
      {/* promo */}
      <div className="h-auto lg:h-[50vh] lg:flex justify-center items-center gap-x-10">
        <div>
          <h2 className="font-bold text-secondary text-2xl lg:text-3xl leading-normal text-center lg:text-left">
            Ingin buat website
            <br />
            dengan fitur custom ?
          </h2>
          <p className="text-secondary mt-3 text-center lg:text-left">
            Gratis konsultasi, Konsultasikan sekarang !
          </p>
        </div>
        <button className="bg-for block mt-8 mx-auto lg:mx-0 px-6 py-3 rounded-lg font-semibold text-tree hover:bg-[#0A2B64] hover:scale-105 animate-bounce-slow">
          Konsultasi
        </button>
      </div>
      {/* end promo */}
      {/* about company */}
      <div className="h-auto bg-primary pb-16">
        <h2 className="pt-10 font-bold text-secondary text-xl md:text-2xl lg:text-3xl text-center">
          Kenapa harus memilih <span className="text-tree">jasa kami ?</span>
        </h2>
        <h4 className="mt-5 font-semibold text-base lg:text-xl text-center text-secondary">
          Karena kami
        </h4>
        <div className="lg:flex mt-10 px-5 lg:px-20 gap-x-10 justify-between items-center">
          <div className="order-last mb-5 lg:mb-0">
            <img
              src="img/undraw_Fast_re_lywu.png"
              alt="fast"
              className="h-[380px] rounded-3xl"
            />
          </div>
          <div className="order-first">
            <h1 className="font-bold text-3xl mb-5 text-secondary">
              <span className="text-tree">Cepat</span> dan
              <span className="text-tree">Mudah</span>
            </h1>
            <p className="font-semibold text-secondary">
              Kami selalu mengusahakan pengerjaan project clien kami dengan
              sesegera mungkin agar dapat selesai sebelum jatuh deadline.
            </p>
          </div>
        </div>
        <div className="lg:flex mt-10 px-5 lg:px-20 gap-x-10 justify-between items-center">
          <div className="order-first">
            <img
              src="img/undraw_environment_iaus.svg"
              alt="fast"
              className="h-[380px] rounded-3xl"
            />
          </div>
          <div className="order-last">
            <h1 className="font-bold text-3xl mb-5 text-secondary">
              Aman dan <span className="text-tree">Nyaman</span>
            </h1>
            <p className="font-semibold text-secondary">
              Kami selalu memberikan design yang nyaman dan ramah terhadap clien
              yang akan menggunakannya.
            </p>
          </div>
        </div>
        <div className="lg:flex mt-10 px-5 lg:px-20 gap-x-10 justify-between items-center">
          <div className="order-last">
            <img
              src="img/undraw_finance_re_gnv2.svg"
              alt="fast"
              className="h-[380px] rounded-3xl"
            />
          </div>
          <div className="order-first">
            <h1 className="font-bold text-3xl mb-5 text-secondary">
              <span className="text-tree">Sangat</span> Hemat
            </h1>
            <p className="font-semibold text-secondary">
              kami mencoba memberikan produk yang terbaik, namun dengan harga
              yang seminimal mungkin.
            </p>
          </div>
        </div>
        <div className="lg:flex mt-10 px-5 lg:px-20 gap-x-10 justify-between items-center">
          <div className="order-first">
            <img
              src="img/undraw_javascript_frameworks_-8-qpc.svg"
              alt="fast"
              className="h-[380px] rounded-3xl"
            />
          </div>
          <div className="order-last">
            <h1 className="font-bold text-3xl mb-5 text-secondary">
              Teknologi <span className="text-tree">Terbaru</span>
            </h1>
            <p className="font-semibold text-secondary">
              Produk yang kami sediakan sudah menggunakan teknologi yang terbaru
              dan sesuai dengan standar industri.
            </p>
          </div>
        </div>
        <div className="lg:flex mt-10 px-5 lg:px-20 gap-x-10 justify-between items-center">
          <div className="order-last">
            <img
              src="img/undraw_real_time_sync_re_nky7.svg"
              alt="fast"
              className="h-[380px] rounded-3xl"
            />
          </div>
          <div className="order-first">
            <h1 className="font-bold text-3xl mb-5 text-secondary">
              <span className="text-tree">Responsif</span> Design
            </h1>
            <p className="font-semibold text-secondary">
              Dengan 1 produk, clien kami dapat menikmatinya diberbagai device
              entah itu Komputer, Handphone atau tablet.
            </p>
          </div>
        </div>
      </div>
      {/* end about company */}
      {/* technology */}
      <div className="hidden lg:block h-screen relative">
        <span>
          <img
            src="img/pngwing.com.png"
            alt="javascript"
            className="h-16 absolute top-20 left-80 animate-bounce-slow"
          />
        </span>
        <span>
          <img
            src="img/pngwing.com (1).png"
            alt="javascript"
            className="h-16 absolute top-40 left-56 animate-bounce-slow"
          />
        </span>
        <span>
          <img
            src="img/pngwing.com (2).png"
            alt="javascript"
            className="h-16 absolute top-[13%] left-[34%] animate-bounce-slow"
          />
        </span>
        <span>
          <img
            src="img/pngwing.com (3).png"
            alt="javascript"
            className="h-16 absolute top-[53%] left-[17%] animate-bounce-slow"
          />
        </span>
        <span>
          <img
            src="img/pngwing.com (4).png"
            alt="javascript"
            className="h-16 absolute top-[25%] left-[70%] animate-bounce-slow"
          />
        </span>
        <span>
          <img
            src="img/pngwing.com (5).png"
            alt="javascript"
            className="h-16 absolute top-[45%] left-[75%] animate-bounce-slow"
          />
        </span>
        <span>
          <img
            src="img/pngwing.com (6).png"
            alt="javascript"
            className="h-16 absolute top-[15%] left-[80%] animate-bounce-slow"
          />
        </span>
        <span>
          <img
            src="img/pngwing.com (7).png"
            alt="javascript"
            className="h-16 absolute top-[80%] left-[23%] animate-bounce-slow"
          />
        </span>
        <span>
          <img
            src="img/pngwing.com (8).png"
            alt="javascript"
            className="h-16 absolute top-[20%] left-[48%] animate-bounce-slow"
          />
        </span>
        <span>
          <img
            src="img/pngwing.com (9).png"
            alt="javascript"
            className="h-16 absolute top-[38%] left-[26%] animate-bounce-slow"
          />
        </span>
        <span>
          <img
            src="img/pngwing.com (10).png"
            alt="javascript"
            className="h-16 absolute top-[72%] left-[37%] animate-bounce-slow"
          />
        </span>
        <span>
          <img
            src="img/pngwing.com (11).png"
            alt="javascript"
            className="h-16 absolute top-[65%] left-[60%] animate-bounce-slow"
          />
        </span>
        <span>
          <img
            src="img/pngwing.com (12).png"
            alt="javascript"
            className="h-16 absolute top-[16%] left-[59%] animate-bounce-slow"
          />
        </span>
        <span>
          <img
            src="img/pngwing.com (13).png"
            alt="javascript"
            className="h-16 absolute top-[78%] left-[55%] animate-bounce-slow"
          />
        </span>
        <span>
          <img
            src="img/pngwing.com (14).png"
            alt="javascript"
            className="h-16 absolute top-[78%] left-[77%] animate-bounce-slow"
          />
        </span>
        <h2 className="text-center pt-[20%] text-4xl text-secondary font-bold">
          <span className="text-primary">Beberapa</span> teknologi
          <br />
          yang kami <span className="text-primary">gunakan</span>
        </h2>
      </div>
      {/* end technology */}
      {/* contact company */}
      <div className="h-auto lg:h-screen bg-primary">
        <h2 className="pt-10 text-xl md:text-2xl lg:text-3xl text-secondary font-bold text-center">
          Ingin bertanya lebih lanjut{" "}
          <span className="text-tree">dengan kami ?</span>
        </h2>
        <div className="mt-5">
          <p className="text-base lg:text-lg font-semibold text-secondary my-5 text-center">
            Hubungi kami melalui WhatsApp
          </p>
          <button className="bg-for px-6 py-3 rounded-lg font-semibold text-tree hover:bg-[#0A2B64] hover:scale-105 block mx-auto">
            Hubungi Sekarang
          </button>
          <p className="text-base lg:text-xl font-bold text-center my-5">
            Atau
          </p>
          <div className="bg-slate-200 rounded-2xl lg:w-1/2 mx-5 lg:mx-auto p-5">
            <input
              type="text"
              className="block w-full px-5 py-2 rounded-lg mb-2"
              placeholder="Masukan Nama"
            />
            <input
              type="text"
              className="block w-full px-5 py-2 rounded-lg mb-2"
              placeholder="Masukan Email"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              className="w-full rounded-lg p-5"
              placeholder="Tulis pesan disini"
            ></textarea>
            <button className="bg-for px-7 py-2 mt-3 text-sm rounded-lg font-semibold text-tree hover:bg-[#0A2B64] hover:scale-105 block mx-auto">
              Kirim
            </button>
          </div>
        </div>
      </div>
      {/* end contact company */}
      {/* footer */}
      <div className="h-[60vh] flex justify-center items-center">
        <div>
          <h2 className="text-2xl lg:text-3xl text-secondary font-bold text-center">
            Tunggu apa lagi..
            <br />
            Mari bergabung bersama kami
          </h2>
          <p className="mt-3 italic text-sm lg:text-base text-secondary text-center">
            Mulai bangun usaha anda jauh lebih menarik lagi.
          </p>
        </div>
      </div>
      <Footer />
      {/* end footer */}
    </>
  );
};

export default HomePage;

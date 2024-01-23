const Footer = () => {
  return (
    <div className="h-auto lg:h-[60vh] bg-secondary px-5 lg:px-20">
      <div className="pt-20 lg:flex justify-between items-center">
        <ul className="flex-1">
          <h2 className="text-3xl font-semibold mb-5">
            Code<span className="text-primary">authentic</span>
          </h2>
          <li className="my-2 text-tree text-sm cursor-pointer">
            codeauthentic@gmail.com
          </li>
          <li className="my-2 text-tree text-sm cursor-pointer">
            facebook.com/codeauthentic
          </li>
          <li className="my-2 text-tree text-sm cursor-pointer">
            instagram.com/@code_authentic
          </li>
        </ul>
        <ul className="flex-1 mt-5 lg:mt-0">
          <h2 className="mb-7 text-xl font-semibold text-tree">Layanan</h2>
          <li className="my-2 text-tree text-sm cursor-pointer">
            Pembuatan Website
          </li>
          <li className="my-2 text-tree text-sm cursor-pointer">
            Pembuatan Undangan Online
          </li>
          <li className="my-2 text-tree text-sm cursor-pointer">
            Pembuatan Website UMKM
          </li>
        </ul>
        <ul className="flex-1 mt-5 lg:mt-0">
          <h2 className="mb-7 text-xl font-semibold text-tree">
            Kelas Pemrogramman
          </h2>
          <li className="my-2 text-tree text-sm cursor-pointer">Dasar HTML</li>
          <li className="my-2 text-tree text-sm cursor-pointer">
            HTML Lanjutan
          </li>
          <li className="my-2 text-tree text-sm cursor-pointer">CSS Dasar</li>
        </ul>
        <ul className="flex-1 mt-5 lg:mt-0">
          <h2 className="mb-7 text-xl font-semibold text-tree">Blog's</h2>
          <li className="my-2 text-tree text-sm cursor-pointer">
            Mengapa php dibilang akan mati?
          </li>
          <li className="my-2 text-tree text-sm cursor-pointer">
            TERBARU Next js 14 rilis
          </li>
          <li className="my-2 text-tree text-sm cursor-pointer">
            Mulai dari mana ketika ingin belajar pemrogramman?
          </li>
        </ul>
      </div>
      <hr className="mt-28" />
      <div className="flex items-center justify-between">
        <p className="text-tree text-xs mt-2 text-center lg:text-left">
          <span className="text-black">Code</span>
          <span className="text-primary">authentic</span> Developer
        </p>
        <p className="mt-2 text-tree text-xs text-center lg:text-left">
          Copyright <span className="text-black">Code</span>
          <span className="text-primary">authentic</span> 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
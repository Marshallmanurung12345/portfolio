export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black">

      {/* NAVBAR */}
      <nav className="w-full px-6 md:px-20 py-6 flex items-center justify-between text-sm">

        {/* LOGO */}
        <div className="font-semibold tracking-wide">
          LOGO
        </div>

        {/* MENU */}
        <div className="hidden md:flex gap-10 text-gray-500">
          <a href="#" className="hover:text-black transition">HOME</a>
          <a href="#" className="hover:text-black transition">ABOUT</a>
          <a href="#" className="hover:text-black transition">SERVICE</a>
          <a href="#" className="hover:text-black transition">PORTFOLIO</a>
          <a href="#" className="hover:text-black transition">CONTACT</a>
        </div>

        {/* LANGUAGE */}
        <div className="text-gray-400">
          <span className="mr-2">EN</span>
          <span className="text-red-500">ID</span>
        </div>

      </nav>

      {/* HERO */}
      <section className="min-h-[80vh] px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">

        {/* LEFT */}
        <div className="max-w-xl">

          <p className="text-xs tracking-widest text-gray-400 mb-4">
            — HELLO
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            I’m <span className="text-red-500">Marshall</span> Kamu
          </h1>

          <p className="mt-6 text-gray-500 leading-relaxed">
            Web Developer yang fokus pada desain minimalis, performa cepat,
            dan pengalaman pengguna yang modern.
          </p>

          <button className="mt-8 bg-red-500 text-white px-6 py-3 text-sm tracking-wide hover:bg-red-600 transition">
            DOWNLOAD CV
          </button>

        </div>

        {/* RIGHT */}
        <div className="mt-16 md:mt-0">
          <img
            src="/profile.png"
            alt="profile"
            className="w-[300px] md:w-[400px]"
          />
        </div>

      </section>

    </main>
  );
}
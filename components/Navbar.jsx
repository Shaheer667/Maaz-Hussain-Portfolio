export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0B0A09]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-5">
        <a href="#" className="text-base font-bold tracking-tight sm:text-xl">
          Maaz <span className="gradient-text">Hussain</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <a href="#work" className="transition hover:text-white">
            Work
          </a>
          <a href="#services" className="transition hover:text-white">
            Services
          </a>
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-[#F7F2E9] px-4 py-2 text-xs font-semibold text-[#0B0A09] transition hover:bg-[#F26A3D] hover:text-white sm:px-5 sm:text-sm"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}

const socialLinks = [
  {
    name: "Upwork",
    href: "https://www.upwork.com/freelancers/~019bcd3d050d06ecc9",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M18.56 13.68c-1.22 0-2.36-.52-3.39-1.37l.25-1.17.01-.05c.23-1.25.93-3.35 3.13-3.35 1.65 0 2.99 1.34 2.99 2.98 0 1.65-1.34 2.96-2.99 2.96Zm0-8.95c-2.81 0-4.99 1.82-5.87 4.82-1.34-2.02-2.35-4.44-2.94-6.49H6.72v7.88c0 1.5-1.22 2.72-2.72 2.72s-2.72-1.22-2.72-2.72V3.06H0v7.88c0 2.21 1.79 4 4 4s4-1.79 4-4V7.42c.58 1.21 1.3 2.46 2.16 3.59l-1.86 8.76h3.1l1.35-6.36c1.61 1.35 3.45 2.1 5.8 2.1 2.77 0 5.44-2.16 5.44-5.45 0-3-2.44-5.33-5.43-5.33Z" />
      </svg>
    ),
  },
  {
    name: "Behance",
    href: "https://www.behance.net/maazhussain07",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M9.28 10.86s2.14-.16 2.14-2.67c0-2.52-1.75-3.75-3.96-3.75H0v14.08h7.65s4.44.14 4.44-4.15c0 0 .2-3.51-2.81-3.51ZM3.11 6.94h3.72s1.47 0 1.47 1.47-1.47 1.47-1.47 1.47H3.11V6.94Zm3.91 9.08H3.11v-3.76h3.91s1.95 0 1.95 1.88c0 1.88-1.95 1.88-1.95 1.88ZM18.14 8.03c-5.38 0-5.37 5.37-5.37 5.37s-.37 5.34 5.37 5.34c0 0 4.78.27 4.78-3.72h-2.46s.08 1.51-2.24 1.51c0 0-2.46.16-2.46-2.43h7.24s.79-6.07-4.86-6.07Zm-2.41 4.19s.3-2.16 2.46-2.16 2.13 2.16 2.13 2.16h-4.59ZM15.05 5.3h5.77v1.72h-5.77V5.3Z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/+923192506120",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.48 0 .1 5.37.1 11.98c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62a11.95 11.95 0 0 0 5.9 1.5h.01c6.6 0 11.98-5.37 11.98-11.98a11.9 11.9 0 0 0-3.55-8.42ZM12.09 21.86h-.01a9.92 9.92 0 0 1-5.06-1.39l-.36-.21-3.67.96.98-3.57-.23-.37a9.89 9.89 0 0 1-1.52-5.3c0-5.46 4.44-9.9 9.9-9.9a9.83 9.83 0 0 1 7 2.9 9.82 9.82 0 0 1 2.9 7c-.01 5.46-4.46 9.88-9.93 9.88Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 text-center md:grid-cols-3">
        <div className="md:text-left">
          <h3 className="text-xl font-bold">
            Maaz <span className="gradient-text">Hussain</span>
          </h3>
          <p className="mt-1 text-sm text-white/50">Freelance Video Editor</p>
        </div>

        <p className="text-sm text-white/50">
          © 2026 Maaz Hussain. All rights reserved.
        </p>

        <div className="flex items-center justify-center gap-3 md:justify-end">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:-translate-y-1 hover:border-[#F26A3D]/60 hover:bg-[#F26A3D] hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
import { useState } from 'react';
import logo from '../assets/logo.jpg';

const ACTS = [
  { href: '#story', label: 'Our Story' },
  { href: '#mission', label: 'Mission & Vision' },
  { href: '#values', label: 'Core Values' },
  { href: '#what-we-do', label: 'What We Do' },
  { href: '#culture', label: 'Culture' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-[30px]">
      <div className="mx-auto flex max-w-page items-center justify-between px-6 py-4 md:px-8">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Ellephree Creations logo"
            className="h-9 w-9 rounded-full object-cover ring-2 ring-lavender ring-offset-2 ring-offset-cream"
          />

          <span className="font-display text-lg font-semibold tracking-tight text-forest">
            Ellephree
          </span>
        </a>

        <button
  type="button"
  onClick={() => setOpen(!open)}
  aria-label="Toggle menu"
  className="relative flex h-10 w-10 items-center justify-center md:hidden"
>
  <div className="space-y-1.5">
    <span
      className={`block h-0.5 w-6 bg-black transition ${
        open ? "translate-y-2 rotate-45" : ""
      }`}
    />
    <span
      className={`block h-0.5 w-6 bg-black transition ${
        open ? "opacity-0" : ""
      }`}
    />
    <span
      className={`block h-0.5 w-6 bg-black transition ${
        open ? "-translate-y-2 -rotate-45" : ""
      }`}
    />
  </div>
</button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {ACTS.map((act) => (
            <li key={act.href}>
              <a
                href={act.href}
                className="font-mono text-[0.7rem] uppercase tracking-widest text-ink/70 hover:text-plum transition"
              >
                {act.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

   {/* Mobile Menu */}
<div
  className={`absolute left-0 top-full z-50 w-full md:hidden overflow-hidden bg-white shadow-lg transition-all duration-300 ${
    open ? "max-h-125" : "max-h-0"
  }`}
>
  <ul className="flex flex-col gap-6 px-6 py-6">
    {ACTS.map((act) => (
      <li key={act.href}>
        <a
          href={act.href}
          onClick={() => setOpen(false)}
          className="block font-mono text-sm uppercase tracking-widest text-ink/70 hover:text-plum"
        >
          {act.label}
        </a>
      </li>
    ))}
  </ul>
</div>
    </header>
  );
}
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
    <header className="sticky top-0 z-50 border-bborder-ink/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-page items-center justify-between px-6 py-4 md:px-8">
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
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex flex-col gap-1.5 p-1.5 md:hidden"
        >
          <span className="block h-0.5 w-6 bg-forest" />
          <span className="block h-0.5 w-6 bg-forest" />
          <span className="block h-0.5 w-6 bg-forest" />
        </button>

        <ul
          className={`fixed inset-x-0 top-16 flex flex-row flex-wrap gap-x-6 gap-y-3 border-b border-ink/10 bg-cream px-6 py-5 transition-transform duration-300 ease-out
            md:static md:translate-y-0 md:border-none md:bg-transparent md:p-0
            ${open ? 'translate-y-0' : 'translate-y-[-150%] md:translate-y-0'}`}
        >
          {ACTS.map((act) => (
            <li key={act.href}>
              <a
                href={act.href}
                onClick={() => setOpen(false)}
                className="font-mono text-[0.7rem] uppercase tracking-widest text-ink/70 transition-colors hover:text-plum"
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

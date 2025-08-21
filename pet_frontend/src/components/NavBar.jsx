import React from "react";

/**
 * PUBLIC_INTERFACE
 * NavBar - top navigation menu for the pet website.
 */
export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 nav-blur">
      <nav className="container flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold">🐾</span>
          <span className="text-slate-900 font-semibold tracking-tight">Pet Gallery</span>
        </a>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li><a className="text-slate-700 hover:text-primary transition-colors" href="#home">Home</a></li>
          <li><a className="text-slate-700 hover:text-primary transition-colors" href="#gallery">Gallery</a></li>
          <li><a className="text-slate-700 hover:text-primary transition-colors" href="#contact">Contact</a></li>
        </ul>
        <a
          href="#contact"
          className="ml-4 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}

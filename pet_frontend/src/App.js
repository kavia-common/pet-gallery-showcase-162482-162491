import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

// PUBLIC_INTERFACE
function App() {
  /** App root - assembles navigation, hero, gallery, and contact sections. */
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main>
        <Hero />
        <Gallery />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} Pet Gallery. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-primary" href="#home">Home</a>
            <a className="hover:text-primary" href="#gallery">Gallery</a>
            <a className="hover:text-primary" href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

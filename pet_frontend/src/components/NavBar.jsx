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
        <a href="#contact" className="ml-4 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
          Get in touch
        </a>
      </nav>
    </header>
  );
}
```

Explanation: Create a hero section focusing on featured pets with CTAs.  
````write file="pet-gallery-showcase-162482-162491/pet_frontend/src/components/Hero.jsx"
import React from "react";

/**
 * PUBLIC_INTERFACE
 * Hero - central hero section with featured pets.
 */
export default function Hero() {
  return (
    <section id="home" className="hero-gradient">
      <div className="container mx-auto grid gap-10 py-16 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Find your new best friend
          </h1>
          <p className="mt-4 text-slate-600">
            Explore a curated collection of adorable pets. Discover heartwarming photos and get inspired to adopt or share your favorite furry friends.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#gallery" className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Browse Gallery
            </a>
            <a href="#contact" className="inline-flex items-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2">
              Contact Us
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1"><span className="text-accent">★</span> Hand-picked photos</span>
            <span className="inline-flex items-center gap-1"><span className="text-accent">★</span> Fully responsive</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <img className="col-span-2 h-56 w-full rounded-xl object-cover shadow card-hover" alt="Golden retriever in a field"
               src="https://images.unsplash.com/photo-1558788353-f76d92427f16?q=80&w=1600&auto=format&fit=crop" />
          <img className="h-56 w-full rounded-xl object-cover shadow card-hover" alt="Curious kitten"
               src="https://images.unsplash.com/photo-1595433707802-6b2626ef1c86?q=80&w=1600&auto=format&fit=crop" />
          <img className="h-40 w-full rounded-xl object-cover shadow md:h-48 card-hover" alt="Corgi smiling"
               src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1600&auto=format&fit=crop" />
          <img className="col-span-2 h-40 w-full rounded-xl object-cover shadow md:h-48 card-hover" alt="Cat relaxing"
               src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1600&auto=format&fit=crop" />
        </div>
      </div>
    </section>
  );
}
```

Explanation: Create a gallery section using high-quality sample pet images from Unsplash and Pexels.  
````write file="pet-gallery-showcase-162482-162491/pet_frontend/src/components/Gallery.jsx"
import React from "react";

/**
 * PUBLIC_INTERFACE
 * Gallery - grid-based photo gallery of pets.
 */
const images = [
  { src: "https://images.unsplash.com/photo-1558944351-c6ae6f2bc3e6?q=80&w=1600&auto=format&fit=crop", alt: "Puppy with blue eyes" },
  { src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1600&auto=format&fit=crop", alt: "Happy dog" },
  { src: "https://images.unsplash.com/photo-1558944351-482bb1d2a24f?q=80&w=1600&auto=format&fit=crop", alt: "Playful kitten" },
  { src: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1600&auto=format&fit=crop", alt: "Cat portrait" },
  { src: "https://images.unsplash.com/photo-1541592553160-82008b127ccb?q=80&w=1600&auto=format&fit=crop", alt: "Retriever in the snow" },
  { src: "https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&w=1600&auto=format&fit=crop", alt: "Cat looking up" },
  { src: "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1600&auto=format&fit=crop", alt: "Dog in nature" },
  { src: "https://images.unsplash.com/photo-1548191265-cc70d3d45ba1?q=80&w=1600&auto=format&fit=crop", alt: "Cat with green eyes" },
  { src: "https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=1600&auto=format&fit=crop", alt: "Puppy sleeping" },
  { src: "https://images.unsplash.com/photo-1559589689-577aabd1db4e?q=80&w=1600&auto=format&fit=crop", alt: "Husky dog" },
  { src: "https://images.unsplash.com/photo-1556227701-7d2c1d5bc3bf?q=80&w=1600&auto=format&fit=crop", alt: "Tabby cat" },
  { src: "https://images.unsplash.com/photo-1601758064135-76f1803f5a1f?q=80&w=1600&auto=format&fit=crop", alt: "Puppy in a field" }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16">
      <div className="container">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Pet Gallery</h2>
            <p className="mt-2 text-slate-600">A collection of adorable pets from around the world.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50">
            Share your pet
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((img, idx) => (
            <figure key={idx} className="group relative overflow-hidden rounded-xl bg-slate-100 shadow-sm card-hover">
              <img
                src={img.src}
                alt={img.alt}
                className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-48 md:h-56"
                loading="lazy"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-2 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
```

Explanation: Create a contact section with a minimal form and contact info.  
````write file="pet-gallery-showcase-162482-162491/pet_frontend/src/components/Contact.jsx"
import React from "react";

/**
 * PUBLIC_INTERFACE
 * Contact - contact section with simple form and info.
 */
export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50 py-16">
      <div className="container grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Get in touch</h2>
          <p className="mt-2 text-slate-600">
            Have a cute pet to share or interested in featuring your shelter? Send us a message.
          </p>
          <div className="mt-6 space-y-3 text-slate-700">
            <p><span className="font-semibold">Email:</span> hello@petgallery.example</p>
            <p><span className="font-semibold">Instagram:</span> @petgallery</p>
            <p><span className="font-semibold">Location:</span> Anywhere the pets are</p>
          </div>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); alert("Thanks! We will get back to you soon."); }}
          className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="grid gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Name</label>
              <input className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30" placeholder="Your name" required />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
              <input type="email" className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30" placeholder="you@example.com" required />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Message</label>
              <textarea rows="4" className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30" placeholder="Tell us about your pet..." required />
            </div>
            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
```

Explanation: Replace App.js to assemble NavBar, Hero, Gallery, and Contact with Tailwind classes, removing CRA default content.  
````edit file="pet-gallery-showcase-162482-162491/pet_frontend/src/App.js"
<<<<<<< SEARCH
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <header className="App-header">
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Current theme: <strong>{theme}</strong>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
=======
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
>>>>>>> REPLACE

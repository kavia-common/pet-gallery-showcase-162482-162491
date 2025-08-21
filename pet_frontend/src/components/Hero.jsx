import React from "react";

/**
 * PUBLIC_INTERFACE
 * Hero - central hero section with featured pets and CTAs.
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
            <a
              href="#gallery"
              className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Browse Gallery
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            >
              Contact Us
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1">
              <span className="text-accent">★</span> Hand-picked photos
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="text-accent">★</span> Fully responsive
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <img
            className="col-span-2 h-56 w-full rounded-xl object-cover shadow card-hover"
            alt="Golden retriever in a field"
            src="https://images.unsplash.com/photo-1558788353-f76d92427f16?q=80&w=1600&auto=format&fit=crop"
          />
          <img
            className="h-56 w-full rounded-xl object-cover shadow card-hover"
            alt="Curious kitten"
            src="https://images.unsplash.com/photo-1595433707802-6b2626ef1c86?q=80&w=1600&auto=format&fit=crop"
          />
          <img
            className="h-40 w-full rounded-xl object-cover shadow md:h-48 card-hover"
            alt="Corgi smiling"
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1600&auto=format&fit=crop"
          />
          <img
            className="col-span-2 h-40 w-full rounded-xl object-cover shadow md:h-48 card-hover"
            alt="Cat relaxing"
            src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1600&auto=format&fit=crop"
          />
        </div>
      </div>
    </section>
  );
}

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
          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
          >
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

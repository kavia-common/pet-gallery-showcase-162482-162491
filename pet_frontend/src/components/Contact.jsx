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

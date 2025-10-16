"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove("opacity-0", "translate-y-6");
            e.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.15 }
    );
    el.querySelectorAll<HTMLElement>("[data-reveal]").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

export default function AboutUs() {
  const revealRef = useReveal();

  return (
    <div className="relative bg-[#0B0B0F] text-white">
      {/* Global canvas accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[6%] top-[-12%] h-[34rem] w-[34rem] rounded-full bg-fuchsia-500/18 blur-[120px]" />
        <div className="absolute right-[-12%] top-[18%] h-[32rem] w-[32rem] rounded-full bg-cyan-400/18 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(255,255,255,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.04)_30%,transparent_70%)]" />
      </div>

      <div ref={revealRef} className="mx-auto max-w-[1200px] px-6 md:px-8">
        {/* HERO */}
        <section className="pt-24 md:pt-32">
          <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
            <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70 backdrop-blur-sm">
                <span className="inline-block size-1.5 animate-pulse rounded-full bg-emerald-400" />
                About Us
              </div>

              <h1 className="mt-4 text-[40px] leading-[1.08] font-semibold tracking-[-0.02em] md:text-[56px]">
                Crafting{" "}
                <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
                  standout digital experiences
                </span>{" "}
                with design and engineering.
              </h1>

              <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-white/70 md:text-base">
                Human-centered strategy, pixel-accurate interfaces, and reliable delivery—under one roof.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                {["Human‑centered", "Pixel‑perfect", "On‑time delivery"].map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-white/70 backdrop-blur-sm">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4">
                <a href="#values" className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-gray-900 transition active:scale-[0.98]">
                  Our values <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </a>
                <a href="#team" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80 backdrop-blur-sm transition hover:bg-white/10">
                  Meet the team
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { k: "Projects", v: "240+" },
                  { k: "Clients", v: "60+" },
                  { k: "Team", v: "35" },
                  { k: "Countries", v: "12" },
                ].map((s) => (
                  <div key={s.k} className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                    <div className="text-[22px] font-semibold">{s.v}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-wide text-white/60">{s.k}</div>
                    <div className="mx-auto mt-3 h-px w-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition group-hover:opacity-100" />
                  </div>
                ))}
              </div>
            </div>

            {/* Hero collage card */}
            <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700 delay-150">
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm">
                <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-inset ring-white/10" />
                <div className="grid aspect-[4/5] grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="relative overflow-hidden rounded-2xl">
                      <Image
                        src={`https://picsum.photos/seed/about-ui-${i}/900/1200`}
                        alt="About gallery"
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-cover transition duration-700 group-hover:scale-[1.045]"
                        unoptimized
                        priority={i < 3}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                    </div>
                  ))}
                </div>
                <div aria-hidden className="pointer-events-none absolute -inset-1 rounded-[26px] bg-gradient-to-tr from-fuchsia-500/25 to-cyan-400/15 opacity-0 blur-2xl transition duration-700 group-hover:opacity-100" />
              </div>
            </div>
          </div>
        </section>

        {/* LOGO STRIP (optional embellishment) */}
        <section className="pt-12">
          <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4">
              <div className="flex animate-[marquee_24s_linear_infinite] gap-10 opacity-80 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="shrink-0 text-xs uppercase tracking-widest text-white/50">
                    • Partner {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SPLIT STORY SECTION */}
        <section className="py-20 md:py-28">
          <div className="grid items-center gap-10 md:grid-cols-[0.95fr_1.05fr]">
            <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
                  <Image
                    src="https://picsum.photos/seed/split/1400/1000"
                    alt="Studio"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                </div>
                <div aria-hidden className="pointer-events-none absolute -inset-1 rounded-[26px] bg-gradient-to-tr from-fuchsia-500/20 to-cyan-400/12 opacity-0 blur-2xl transition duration-700 hover:opacity-100" />
              </div>
            </div>

            <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700 delay-100">
              <h2 className="text-[32px] font-semibold tracking-[-0.01em] md:text-[40px]">Who we are</h2>
              <p className="mt-3 max-w-[60ch] text-white/70">
                A multidisciplinary studio aligning strategy, design, and engineering to ship measurable outcomes.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { t: "Design systems", d: "Token-driven, scalable UI foundations." },
                  { t: "Product engineering", d: "Fast, reliable, type-safe codebases." },
                  { t: "Brand expression", d: "Distinctive visuals and motion." },
                  { t: "Growth & analytics", d: "Measure, iterate, improve." },
                ].map((c) => (
                  <div key={c.t} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition hover:-translate-y-1 hover:bg-white/[0.07]">
                    <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-fuchsia-500/15 blur-2xl opacity-0 transition group-hover:opacity-100" />
                    <div className="absolute -bottom-20 -right-20 h-44 w-44 rounded-full bg-cyan-400/15 blur-2xl opacity-0 transition group-hover:opacity-100" />
                    <div className="relative">
                      <div className="text-[15px] font-medium">{c.t}</div>
                      <div className="mt-1 text-sm text-white/70">{c.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section id="values" className="pb-8 pt-2 md:pt-0">
          <div data-reveal className="mx-auto max-w-[720px] text-center opacity-0 translate-y-6 transition-all duration-700">
            <h2 className="text-[32px] font-semibold tracking-[-0.01em] md:text-[40px]">Our values</h2>
            <p className="mt-3 text-white/70">Principles that shape our work and relationships.</p>
          </div>
          <div data-reveal className="mt-10 grid gap-4 opacity-0 translate-y-6 transition-all duration-700 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Integrity", d: "We keep promises and own outcomes.", e: "🛡️" },
              { t: "Craft", d: "Precision in systems and details.", e: "🎯" },
              { t: "Clarity", d: "Communicate early, simply, visually.", e: "💬" },
              { t: "Velocity", d: "Tight loops from idea to impact.", e: "⚡" },
            ].map((v) => (
              <div key={v.t} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]">
                <div className="absolute -left-24 -top-24 h-48 w-48 rounded-full bg-fuchsia-500/15 blur-3xl opacity-0 transition group-hover:opacity-100" />
                <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-cyan-400/15 blur-3xl opacity-0 transition group-hover:opacity-100" />
                <div className="relative">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-lg backdrop-blur">
                    {v.e}
                  </span>
                  <h3 className="mt-3 text-[17px] font-semibold">{v.t}</h3>
                  <p className="mt-1.5 text-sm text-white/70">{v.d}</p>
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TIMELINE */}
        <section className="py-20">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700">
              <h2 className="text-[28px] font-semibold md:text-[32px]">Our journey</h2>
              <p className="mt-3 max-w-[44ch] text-white/70">
                Highlights from our path—milestones, launches, and learnings.
              </p>
            </div>
            <div data-reveal className="relative opacity-0 translate-y-6 transition-all duration-700 delay-100">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-white/15 via-white/25 to-transparent" />
              <ul className="space-y-7">
                {[
                  { y: "2019", t: "Founded", d: "Started with a small, ambitious crew." },
                  { y: "2020", t: "System v1", d: "Unified tokens across products." },
                  { y: "2022", t: "Global clients", d: "Expanded across regions." },
                  { y: "2024", t: "Platform suite", d: "Launched reusable modules." },
                ].map((n, i, a) => (
                  <li key={n.y} className="relative pl-10">
                    <div className="absolute left-0 top-1.5">
                      <span className="relative block size-2 rounded-full bg-white">
                        <span className="absolute -inset-2 rounded-full bg-fuchsia-400/25 blur-md" />
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70">{n.y}</span>
                      <h3 className="text-[16px] font-medium">{n.t}</h3>
                    </div>
                    <p className="mt-1 text-[13px] text-white/70">{n.d}</p>
                    {i < a.length - 1 && (
                      <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section id="team" className="pb-24">
          <div data-reveal className="mx-auto max-w-[720px] text-center opacity-0 translate-y-6 transition-all duration-700">
            <h2 className="text-[32px] font-semibold tracking-[-0.01em] md:text-[40px]">Team</h2>
            <p className="mt-3 text-white/70">A tight‑knit group of strategists, designers, and engineers.</p>
          </div>
          <div data-reveal className="mt-10 grid gap-5 opacity-0 translate-y-6 transition-all duration-700 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "https://picsum.photos/seed/team1/1000/1000",
              "https://picsum.photos/seed/team2/1000/1000",
              "https://picsum.photos/seed/team3/1000/1000",
              "https://picsum.photos/seed/team4/1000/1000",
              "https://picsum.photos/seed/team5/1000/1000",
              "https://picsum.photos/seed/team6/1000/1000",
            ].map((src, idx) => (
              <div key={src} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">
                <div className="relative aspect-square">
                  <Image src={src} alt={`Team ${idx + 1}`} fill className="object-cover transition duration-700 group-hover:scale-[1.045]" sizes="(max-width: 1024px) 50vw, 33vw" unoptimized />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                </div>
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur">
                    <div className="h-4 w-24 animate-pulse rounded bg-white/20" />
                    <div className="mt-1 h-3 w-32 animate-pulse rounded bg-white/10" />
                  </div>
                </div>
                <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                <div aria-hidden className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur-xl transition duration-700 group-hover:opacity-100" style={{ background: "linear-gradient(135deg, rgba(217,70,239,0.22), rgba(34,211,238,0.16))" }} />
              </div>
            ))}
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="pb-24">
          <div data-reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 opacity-0 translate-y-6 transition-all duration-700 md:p-12">
            <div className="absolute -left-28 -top-28 h-56 w-56 rounded-full bg-fuchsia-500/15 blur-3xl" />
            <div className="absolute -right-28 -bottom-28 h-60 w-60 rounded-full bg-cyan-400/15 blur-3xl" />
            <div className="relative grid items-center gap-6 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h3 className="text-[24px] font-semibold md:text-[28px]">Ready to collaborate?</h3>
                <p className="mt-2 max-w-[60ch] text-white/70">Let’s turn ideas into products people love.</p>
              </div>
              <div className="flex items-center gap-3 md:justify-end">
                <a href="#" className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-gray-900 transition active:scale-[0.98]">
                  Get in touch <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80 backdrop-blur-sm transition hover:bg-white/10">
                  View work
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Keyframes */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
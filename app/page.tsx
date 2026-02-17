export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-8 md:px-12">
      <div className="pointer-events-none absolute -top-36 left-[-15%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,107,138,0.32),_rgba(255,107,138,0)_68%)]" />
      <div className="pointer-events-none absolute bottom-[-16rem] right-[-14%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(84,176,255,0.24),_rgba(84,176,255,0)_68%)]" />
      <div className="pointer-events-none absolute left-[42%] top-[12%] h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,225,131,0.25),_rgba(255,225,131,0)_70%)]" />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 md:gap-24">
        <header className="flex items-center justify-between rounded-full border border-line bg-white/60 px-4 py-3 shadow-[0_12px_35px_rgba(65,38,118,0.08)] backdrop-blur-sm md:px-6">
          <p className="font-display text-3xl leading-none tracking-wide">secreti</p>
          <button className="rounded-full border border-line bg-white/70 px-5 py-2 text-sm font-medium tracking-wide transition hover:border-foreground/30 hover:bg-white">
            Log In
          </button>
        </header>

        <section className="grid items-start gap-10 md:grid-cols-[1fr_0.9fr] md:gap-16">
          <div className="space-y-8">
            <p className="inline-block rounded-full border border-[#ff6b8a33] bg-[#fff0f4] px-4 py-2 text-xs tracking-[0.22em] text-[#9c4466] uppercase">
              anime and cinema pilgrimages
            </p>
            <h1 className="max-w-xl font-display text-6xl leading-[0.95] md:text-8xl">
              Find the story behind every street.
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-muted md:text-lg">
              Secreti helps you identify real-world anime and movie locations
              from a frame, then guides you there with a calm, curated map
              experience.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-[linear-gradient(120deg,#ff6b8a,#ff996b)] px-7 py-3 text-sm tracking-wide text-white shadow-[0_10px_24px_rgba(255,107,138,0.35)] transition hover:scale-[1.02]">
                Start Pilgrimage
              </button>
              <button className="rounded-full border border-[#69b6ff55] bg-[#f3f9ff] px-7 py-3 text-sm tracking-wide text-[#275079] transition hover:border-[#69b6ff]">
                See Demo
              </button>
            </div>
          </div>

          <div className="relative rounded-[2.2rem] border border-line bg-white/65 p-5 shadow-[0_20px_42px_rgba(65,38,118,0.11)] backdrop-blur-sm md:p-7">
            <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full border border-line bg-[linear-gradient(140deg,#ffe58f,#ffd0dd)]" />
            <p className="text-xs tracking-[0.18em] text-muted uppercase">
              map preview
            </p>
            <div className="mt-6 space-y-5">
              <div className="relative h-64 overflow-hidden rounded-3xl border border-line bg-[linear-gradient(140deg,#fff8cd_0%,#ffe0ec_45%,#daf3ff_100%)]">
                <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(to_right,rgba(50,30,95,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(50,30,95,0.12)_1px,transparent_1px)] [background-size:2.4rem_2.4rem]" />
                <div className="absolute left-[20%] top-[24%] h-3 w-3 rounded-full bg-[#ff5f87] shadow-[0_0_0_5px_rgba(255,95,135,0.24)]" />
                <div className="absolute left-[56%] top-[36%] h-3 w-3 rounded-full bg-[#4456c6] shadow-[0_0_0_5px_rgba(68,86,198,0.18)]" />
                <div className="absolute left-[72%] top-[63%] h-3 w-3 rounded-full bg-[#27a590] shadow-[0_0_0_5px_rgba(39,165,144,0.2)]" />
                <div className="absolute left-[25%] top-[30%] h-[2px] w-[34%] rotate-[20deg] bg-[#30245e]/35" />
                <div className="absolute left-[49%] top-[50%] h-[2px] w-[24%] rotate-[38deg] bg-[#30245e]/35" />
                <div className="absolute bottom-3 left-3 rounded-full border border-[#30245e2d] bg-white/80 px-3 py-1 text-[11px] text-[#4d3f73]">
                  Tokyo Pilgrimage Route
                </div>
              </div>

              <div className="rounded-2xl border border-[#6fa7ff55] bg-[#f8fbff] p-4">
                <p className="text-xs tracking-[0.16em] text-muted uppercase">
                  selected location
                </p>
                <p className="mt-2 font-display text-2xl">Suga Shrine Steps</p>
                <p className="mt-1 text-sm text-muted">
                  Featured in <span className="font-medium">Your Name</span> •
                  Shinjuku, Tokyo
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Open the place card, compare the frame, then start
                  step-by-step navigation to the exact pilgrimage spot.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <button className="rounded-full border border-[#6fa7ff66] bg-[#f2f8ff] py-3 text-sm text-[#305679] transition hover:border-[#6fa7ff]">
                  View Full Map
                </button>
                <button className="rounded-full border border-[#ff7da655] bg-[#fff4f8] py-3 text-sm text-[#823a55] transition hover:border-[#ff7da6]">
                  Save Spot
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          <article className="rounded-[2rem] border border-[#ffa1b944] bg-[linear-gradient(160deg,#fff4f8,#ffe6f0)] p-6 shadow-[0_8px_24px_rgba(255,107,138,0.12)]">
            <p className="text-xs tracking-[0.2em] text-muted uppercase">01</p>
            <h2 className="mt-4 font-display text-3xl">Upload a frame</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Drop a screenshot from an anime or film. Secreti keeps the flow
              conversational and lightweight.
            </p>
          </article>
          <article className="rounded-[2rem] border border-[#8ec6ff4d] bg-[linear-gradient(160deg,#eff8ff,#e4f2ff)] p-6 shadow-[0_8px_24px_rgba(84,176,255,0.14)]">
            <p className="text-xs tracking-[0.2em] text-muted uppercase">02</p>
            <h2 className="mt-4 font-display text-3xl">Get location matches</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              We identify potential pilgrimage spots and show confidence with
              scene context.
            </p>
          </article>
          <article className="rounded-[2rem] border border-[#96e0ca5c] bg-[linear-gradient(160deg,#effff8,#e0f8f0)] p-6 shadow-[0_8px_24px_rgba(39,165,144,0.12)]">
            <p className="text-xs tracking-[0.2em] text-muted uppercase">03</p>
            <h2 className="mt-4 font-display text-3xl">Navigate on map</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Save favorites, open routes, and visit locations with a curated
              boutique map feel.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}

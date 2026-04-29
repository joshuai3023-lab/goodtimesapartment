import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Wifi, Car, Snowflake, ShieldCheck, Tv, Zap, MapPin, Instagram, MessageCircle, Star, Sparkles, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";
import exterior from "@/assets/exterior.jpg";
import living1 from "@/assets/living-1.jpg";
import living2 from "@/assets/living-2.jpg";
import living3 from "@/assets/living-3.jpg";
import bedroom from "@/assets/bedroom.jpg";
import outdoor from "@/assets/outdoor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Goodtimes Apartment Abuja — Premium Shortlet Stays" },
      {
        name: "description",
        content:
          "Premium shortlet apartments in Abuja for business trips, weekend escapes, and staycations. Fully serviced, secure, and styled for goodtimes.",
      },
      { property: "og:title", content: "Goodtimes Apartment Abuja — Premium Shortlet Stays" },
      {
        property: "og:description",
        content: "Reserve your goodtimes — luxury Abuja shortlets built for work trips and weekend escapes.",
      },
      { property: "og:image", content: exterior },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

// Personalize this single object per lead — that's the entire workflow.
const LEAD = {
  firstName: "", // e.g. "Tola" — leave blank for the generic brand site
  lifestyle: "business + weekend escape", // tag shown in the hero badge
  igHandle: "goodtimesapartment",
  bookingUrl:
    "https://www.instagram.com/goodtimesapartment?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  phoneDisplay: "0805 436 2077",
  phoneTel: "tel:+2348054362077",
  whatsappUrl:
    "https://wa.me/2348054362077?text=Hi%20Goodtimes%20Apartment%2C%20I%27d%20like%20to%20reserve%20a%20stay.",
  location: "Abuja, Nigeria",
};

const gallery = [
  { src: exterior, alt: "Goodtimes Apartment exterior — secure compound in Abuja" },
  { src: living3, alt: "Spacious furnished living room with smart TV" },
  { src: living1, alt: "Modern lounge with cinematic TV setup" },
  { src: bedroom, alt: "Master bedroom with ambient mood lighting" },
  { src: living2, alt: "Designer living area with statement ceiling" },
  { src: outdoor, alt: "Private gazebo lounge area outdoors" },
];

const amenities = [
  { icon: Wifi, label: "High-Speed Wi-Fi", desc: "Stable fibre — perfect for Zoom calls and remote work." },
  { icon: Zap, label: "24/7 Power", desc: "Backup generator. You'll never lose a beat." },
  { icon: Snowflake, label: "Full A/C", desc: "Every room cooled to your taste." },
  { icon: ShieldCheck, label: "Secure Compound", desc: "Gated, monitored, and discreet." },
  { icon: Tv, label: "Smart TV + DSTV", desc: "Stream, cast, and unwind in cinema mode." },
  { icon: Car, label: "Private Parking", desc: "Safe space for your ride or your driver." },
];

function Index() {
  const [active, setActive] = useState(0);
  const greetingName = LEAD.firstName ? LEAD.firstName : "there";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-30 px-6 py-5 md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-md bg-white p-1.5 shadow-md">
              <img src={logo} alt="Goodtimes Shortlet Apartment" className="h-9 w-auto md:h-10" />
            </div>
          </div>
          <a href={LEAD.whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
              Reserve Now
            </Button>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
        <img
          src={exterior}
          alt="Goodtimes Apartment exterior in Abuja"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 md:px-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              Curated for {LEAD.lifestyle}
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
              Hey {greetingName} —<br />
              <span className="text-primary-foreground">your Abuja escape</span>
              <br />
              is ready.
            </h1>
            <p className="mt-6 max-w-xl text-base text-white/85 md:text-lg">
              Goodtimes Apartment is a premium shortlet built for people who move fast and rest well.
              Whether it's a work trip, a weekend escape, or a quiet staycation — check in, kick back,
              and let Abuja work for you.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={LEAD.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl">
                  Reserve on WhatsApp <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </a>
              <a href={LEAD.phoneTel}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-md"
                >
                  <Phone className="h-4 w-4" /> Call {LEAD.phoneDisplay}
                </Button>
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary-foreground" />
                {LEAD.location}
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
                <span className="ml-1">Loved by guests</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized pitch */}
      <section className="bg-secondary py-20 text-secondary-foreground md:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Built for you</p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Work hard in Abuja by day. <span className="text-primary">Live well</span> by night.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">
            You don't need another bland hotel room. You need a space that switches gears with you —
            stable Wi-Fi for the Monday call, a cinematic lounge for Friday night, a quiet bedroom
            that actually lets you sleep. That's exactly what Goodtimes is.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">The space</p>
              <h2 className="mt-2 text-3xl font-bold md:text-5xl">Walk through your stay</h2>
            </div>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl shadow-2xl" style={{ boxShadow: "var(--shadow-elegant)" }}>
            <img
              src={gallery[active].src}
              alt={gallery[active].alt}
              className="aspect-[16/10] w-full object-cover transition-all duration-500"
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 md:grid-cols-6">
            {gallery.map((g, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`overflow-hidden rounded-lg ring-2 transition-all ${
                  active === i ? "ring-primary" : "ring-transparent hover:ring-primary/50"
                }`}
              >
                <img src={g.src} alt={g.alt} className="aspect-square w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">What's included</p>
          <h2 className="mt-2 text-3xl font-bold md:text-5xl">Everything's already handled.</h2>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((a) => (
              <div
                key={a.label}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <a.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{a.label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Reserve */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <div
            className="overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-12"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  Prefer a quick call?
                </p>
                <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                  Call us to reserve.
                </h2>
                <a
                  href={LEAD.phoneTel}
                  className="mt-3 inline-flex items-center gap-2 text-2xl font-bold text-primary hover:underline md:text-3xl"
                >
                  <Phone className="h-6 w-6" /> {LEAD.phoneDisplay}
                </a>
                <p className="mt-2 text-sm text-muted-foreground">
                  Available daily · Abuja, Nigeria
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={LEAD.phoneTel}>
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Phone className="h-4 w-4" /> Call Now
                  </Button>
                </a>
                <a href={LEAD.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-secondary py-24 text-secondary-foreground md:py-32">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "var(--gradient-primary)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-12">
          <h2 className="text-3xl font-bold leading-tight md:text-6xl">
            {LEAD.firstName ? `${LEAD.firstName}, ` : ""}your dates are filling up fast.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/80 md:text-lg">
            Slide into our DMs, send a WhatsApp, or just call us — we'll lock in your
            reservation in minutes. No long forms. Just goodtimes.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={LEAD.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl">
                <MessageCircle className="h-4 w-4" /> Message on WhatsApp
              </Button>
            </a>
            <a href={LEAD.bookingUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                <Instagram className="h-4 w-4" /> DM @{LEAD.igHandle}
              </Button>
            </a>
            <a href={LEAD.phoneTel}>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                <Phone className="h-4 w-4" /> {LEAD.phoneDisplay}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-12">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Goodtimes Shortlet Apartment" className="h-8 w-auto" />
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Goodtimes Shortlet Apartment · {LEAD.location}
          </p>
          <a
            href={LEAD.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
          >
            <Instagram className="h-4 w-4" /> @{LEAD.igHandle}
          </a>
        </div>
      </footer>
    </div>
  );
}

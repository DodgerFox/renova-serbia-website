import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, ChevronDown, ChevronLeft, ChevronRight, Mail, Menu, MessageCircle, Phone, Ruler, Send, X } from "lucide-react";
import { sendLead } from "@/lib/lead";
import {
  crewConditions,
  contactCopy,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_E164,
  TELEGRAM_LABEL,
  TELEGRAM_URL,
  VIBER_URL,
  estimate,
  faqs,
  gallery,
  included,
  jobKinds,
  jobsCopy,
  openings,
  services,
  showcases,
  steps,
  ui,
  type JobKind,
  type Lang,
} from "@/data/site";

const navHref = ["#services", "#process", "#estimate", "#work", "#jobs", "#faq", "#request"];
const langs: Lang[] = ["ru", "en", "sr"];
const langTo = { ru: "/", en: "/en", sr: "/sr" } as const;

export function HomePage({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [contactMessage, setContactMessage] = useState<string | null>(null);
  const copy = ui[lang];
  const openContact = (message = "") => setContactMessage(message);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-full bg-ink font-display text-sm font-bold text-cream">
              R
            </span>
            <span className="font-display text-lg font-bold tracking-tight">RENOVA</span>
          </a>
          <nav className="hidden items-center gap-5 text-sm text-muted xl:flex">
            {copy.nav.map((label, i) => (
              <a key={navHref[i]} href={navHref[i]} className="transition-colors hover:text-ink">
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <LangSwitch lang={lang} />
            <button
              type="button"
              onClick={() => openContact()}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-ink px-3 text-sm font-semibold text-cream sm:px-4"
            >
              <Phone className="size-4" />
              <span className="hidden sm:inline">{contactCopy[lang].button}</span>
            </button>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full border border-line xl:hidden"
              aria-label={open ? copy.menuClose : copy.menuOpen}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {open ? (
          <nav className="border-t border-line px-5 py-3 xl:hidden">
            {copy.nav.map((label, i) => (
              <a
                key={navHref[i]}
                href={navHref[i]}
                className="block py-3 text-base"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        ) : null}
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-10 lg:grid-cols-12 lg:pt-16">
          <div className="lg:col-span-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-copper">{copy.cities}</p>
            <h1 className="mt-4 font-display text-5xl font-extrabold leading-none tracking-tight sm:text-6xl">
              {copy.h1}
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">{copy.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setQuoteOpen(true)}
                className="inline-flex h-12 items-center gap-2 rounded-full bg-copper px-5 font-semibold text-cream"
              >
                {copy.ctaEstimate}
                <ArrowUpRight className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => openContact()}
                className="inline-flex h-12 items-center rounded-full border border-ink px-5 font-semibold"
              >
                {copy.ctaVisit}
              </button>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-6">
              {copy.stats.map(([k, v]) => (
                <div key={k}>
                  <dt className="font-display text-lg font-bold leading-tight sm:text-2xl">{k}</dt>
                  <dd className="mt-1 text-sm leading-snug text-muted">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <WorkSlider lang={lang} />
        </section>

        <section id="services" className="border-y border-line bg-cream">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="max-w-md font-display text-4xl font-bold">{copy.servicesTitle}</h2>
              <p className="max-w-sm text-muted">{copy.servicesLead}</p>
            </div>
            <ul className="mt-10 divide-y divide-line border-y border-line">
              {services.map((item) => (
                <li key={item.n} className="grid gap-2 py-5 sm:grid-cols-12 sm:items-baseline">
                  <span className="font-display text-sm font-bold text-copper sm:col-span-1">{item.n}</span>
                  <h3 className="font-display text-xl font-bold sm:col-span-4">{item.title[lang]}</h3>
                  <p className="text-muted sm:col-span-4">{item.text[lang]}</p>
                  <p className="font-display text-lg font-bold tabular-nums sm:col-span-3 sm:text-right">
                    {item.low}–{item.high} {copy.per}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-4xl font-bold">{copy.processTitle}</h2>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.n} className="rounded-card border border-line bg-cream p-5">
                <span className="font-display text-sm font-bold text-copper">{step.n}</span>
                <h3 className="mt-3 font-display text-2xl font-bold">{step.title[lang]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text[lang]}</p>
              </li>
            ))}
          </ol>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {included.map((line) => (
              <li key={line.ru} className="flex items-start gap-3 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-copper" />
                {line[lang]}
              </li>
            ))}
          </ul>
        </section>

        <Estimate lang={lang} onOpenQuote={() => setQuoteOpen(true)} />

        <section id="work" className="bg-ink text-cream">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="font-display text-4xl font-bold">{copy.workTitle}</h2>
            <p className="mt-3 max-w-lg text-sand">{copy.workLead}</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((shot) => (
                <figure key={shot.src} className="overflow-hidden rounded-card bg-ink">
                  <img src={shot.src} alt={shot.title[lang]} className="aspect-video w-full object-cover" />
                  <figcaption className="px-1 py-4">
                    <p className="font-display text-lg font-bold">{shot.title[lang]}</p>
                    <p className="text-sm text-sand">{shot.caption[lang]}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <Jobs lang={lang} onContact={openContact} />

        <section id="faq" className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-4xl font-bold">{copy.faqTitle}</h2>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {faqs.map((item) => (
              <details key={item.q.ru} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold">
                  {item.q[lang]}
                  <span className="text-copper group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-2xl pt-3 text-muted">{item.a[lang]}</p>
              </details>
            ))}
          </div>
        </section>

        <Request lang={lang} />
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display font-bold">RENOVA</p>
            <p className="text-sm text-muted">{copy.footer}</p>
          </div>
          <Contacts />
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-paper/95 p-3 backdrop-blur sm:hidden">
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setQuoteOpen(true)}
            className="grid h-12 place-items-center rounded-full border border-ink text-sm font-semibold"
          >
            {copy.mobileEstimate}
          </button>
          <button
            type="button"
            onClick={() => openContact()}
            className="grid h-12 place-items-center rounded-full bg-copper text-sm font-semibold text-cream"
          >
            {copy.mobileRequest}
          </button>
        </div>
      </div>
      <div className="h-20 sm:hidden" />
      {contactMessage !== null ? (
        <ContactModal lang={lang} message={contactMessage} onClose={() => setContactMessage(null)} />
      ) : null}
      {quoteOpen ? <QuoteModal lang={lang} onClose={() => setQuoteOpen(false)} /> : null}
    </div>
  );
}

function Jobs({ lang, onContact }: { lang: Lang; onContact: (message: string) => void }) {
  const copy = jobsCopy[lang];
  return (
    <section id="jobs" className="border-y border-line bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="max-w-xl font-display text-4xl font-bold">{copy.title}</h2>
        <p className="mt-4 max-w-xl text-muted">{copy.lead}</p>
        <h3 className="mt-10 font-display text-2xl font-bold">{copy.conditions}</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {crewConditions.map((line) => (
            <li key={line.ru} className="flex items-start gap-3 text-sm">
              <Check className="mt-0.5 size-4 shrink-0 text-copper" />
              {line[lang]}
            </li>
          ))}
        </ul>
        <h3 className="mt-10 font-display text-2xl font-bold">{copy.openings}</h3>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {openings.map((role) => (
            <li key={role.title.ru} className="flex flex-col rounded-card border border-line bg-paper p-5">
              <h4 className="font-display text-xl font-bold">{role.title[lang]}</h4>
              <p className="mt-2 flex-1 text-sm text-muted">{role.text[lang]}</p>
              <button
                type="button"
                onClick={() => onContact(applyText(lang, role.title[lang]))}
                className="mt-5 inline-flex h-11 items-center justify-center rounded-full bg-ink px-4 text-sm font-semibold text-cream"
              >
                {copy.apply}
              </button>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">
          {copy.applyNote}{" "}
          <a href={TELEGRAM_URL} className="font-semibold text-ink" target="_blank" rel="noreferrer">
            {TELEGRAM_LABEL}
          </a>
        </p>
      </div>
    </section>
  );
}

function applyText(lang: Lang, role: string) {
  if (lang === "en") return `Hello! I want to join the RENOVA crew. Trade: ${role}.`;
  if (lang === "sr") return `Zdravo! Želim u ekipu RENOVA. Specijalnost: ${role}.`;
  return `Здравствуйте! Хочу в бригаду RENOVA. Специальность: ${role}.`;
}

function ContactModal({
  lang,
  message,
  onClose,
}: {
  lang: Lang;
  message: string;
  onClose: () => void;
}) {
  const copy = contactCopy[lang];
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const channels = [
    { label: copy.phone, detail: PHONE_DISPLAY, href: `tel:+${PHONE_E164}`, icon: Phone },
    {
      label: copy.whatsapp,
      detail: PHONE_DISPLAY,
      href: `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(message)}`,
      icon: MessageCircle,
      external: true,
    },
    { label: copy.telegram, detail: TELEGRAM_LABEL, href: TELEGRAM_URL, icon: Send, external: true, copy: true },
    {
      label: copy.viber,
      detail: PHONE_DISPLAY,
      href: `viber://chat?number=%2B${PHONE_E164}${message ? `&text=${encodeURIComponent(message)}` : ""}`,
      icon: Phone,
    },
    {
      label: copy.email,
      detail: EMAIL,
      href: `mailto:${EMAIL}?subject=${encodeURIComponent("RENOVA")}&body=${encodeURIComponent(message)}`,
      icon: Mail,
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/50 p-4 sm:items-center"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        className="w-full max-w-md rounded-card bg-paper p-5 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="contact-title" className="font-display text-2xl font-bold">
              {copy.title}
            </h2>
            <p className="mt-2 text-sm text-muted">{copy.lead}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={copy.close}
            className="grid size-11 shrink-0 place-items-center rounded-full border border-line"
          >
            <X className="size-5" />
          </button>
        </div>
        <ul className="mt-5 grid gap-2">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noreferrer" : undefined}
                  onClick={() => {
                    if (channel.copy && message) navigator.clipboard?.writeText(message).catch(() => undefined);
                    onClose();
                  }}
                  className="flex items-center gap-3 rounded-2xl border border-line bg-cream px-4 py-3 transition-colors hover:border-ink"
                >
                  <span className="grid size-10 place-items-center rounded-full bg-ink text-cream">
                    <Icon className="size-4" />
                  </span>
                  <span>
                    <span className="block font-semibold">{channel.label}</span>
                    <span className="block text-sm text-muted">{channel.detail}</span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function LangSwitch({ lang }: { lang: Lang }) {
  return (
    <div className="flex h-11 items-center rounded-full border border-line p-1 text-xs font-bold">
      {langs.map((code) => (
        <Link
          key={code}
          to={langTo[code]}
          className={`grid h-9 place-items-center rounded-full px-2.5 uppercase ${lang === code ? "bg-ink text-cream" : "text-muted"}`}
          aria-current={lang === code ? "page" : undefined}
        >
          {code}
        </Link>
      ))}
    </div>
  );
}

function Contacts() {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
      <a href={`tel:+${PHONE_E164}`} className="inline-flex items-center gap-1.5">
        <Phone className="size-4 text-copper" />
        {PHONE_DISPLAY}
      </a>
      <a href={TELEGRAM_URL} className="inline-flex items-center gap-1.5" target="_blank" rel="noreferrer">
        <Send className="size-4 text-copper" />
        {TELEGRAM_LABEL}
      </a>
      <a href={VIBER_URL} className="inline-flex items-center gap-1.5">
        <Phone className="size-4 text-copper" />
        Viber
      </a>
      <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-1.5">
        <Mail className="size-4 text-copper" />
        {EMAIL}
      </a>
    </div>
  );
}

function WorkSlider({ lang }: { lang: Lang }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef(0);
  const count = showcases.length;
  const slide = showcases[index];
  const labels = {
    ru: { prev: "Предыдущий вид работ", next: "Следующий вид работ" },
    en: { prev: "Previous type of work", next: "Next type of work" },
    sr: { prev: "Prethodna vrsta radova", next: "Sledeća vrsta radova" },
  }[lang];

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), 7000);
    return () => window.clearInterval(id);
  }, [paused, count]);

  const go = (next: number) => setIndex((next + count) % count);

  return (
    <div className="lg:col-span-6">
      <div
        className="relative"
        onTouchStart={(e) => {
          startX.current = e.changedTouches[0].clientX;
          setPaused(true);
        }}
        onTouchEnd={(e) => {
          const dx = e.changedTouches[0].clientX - startX.current;
          if (dx > 40) go(index - 1);
          if (dx < -40) go(index + 1);
        }}
      >
        <img src={slide.src} alt={slide.title[lang]} className="aspect-video w-full rounded-card object-cover" />
        <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-ink/90 p-4 text-cream sm:right-auto sm:max-w-xs">
          <p className="text-xs uppercase tracking-widest text-sand">{slide.kicker[lang]}</p>
          <p className="mt-1 font-display text-lg font-bold">{slide.title[lang]}</p>
        </div>
        <div className="absolute right-3 top-3 flex gap-2">
          <button
            type="button"
            aria-label={labels.prev}
            onClick={() => {
              setPaused(true);
              go(index - 1);
            }}
            className="inline-flex size-10 items-center justify-center rounded-full bg-cream/90 text-ink"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label={labels.next}
            onClick={() => {
              setPaused(true);
              go(index + 1);
            }}
            className="inline-flex size-10 items-center justify-center rounded-full bg-cream/90 text-ink"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {showcases.map((item, i) => (
          <button
            key={item.src}
            type="button"
            aria-pressed={i === index}
            onClick={() => {
              setPaused(true);
              setIndex(i);
            }}
            className={`h-10 shrink-0 rounded-full px-4 text-sm font-semibold ${
              i === index ? "bg-ink text-cream" : "border border-line bg-cream"
            }`}
          >
            {item.label[lang]}
          </button>
        ))}
      </div>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{slide.text[lang]}</p>
    </div>
  );
}

function Estimate({ lang, onOpenQuote }: { lang: Lang; onOpenQuote: () => void }) {
  const copy = ui[lang];
  const [kind, setKind] = useState<JobKind>("turnkey");
  const [area, setArea] = useState(55);
  const [openRate, setOpenRate] = useState<string | null>(null);
  const result = useMemo(() => estimate(kind, area), [kind, area]);
  const locale = lang === "en" ? "en-GB" : "ru-RU";

  return (
    <section id="estimate" className="border-y border-line bg-sand/60">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-4xl font-bold">{copy.ratesTitle}</h2>
        <p className="mt-3 max-w-xl text-muted">{copy.ratesLead}</p>
        <div className="mt-8 overflow-hidden rounded-card border border-line bg-cream">
          <div className="grid grid-cols-[1fr_5.5rem] gap-2 border-b border-line px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted sm:px-5">
            <span>{copy.colWork}</span>
            <span className="text-right">{copy.colOurs}</span>
          </div>
          {services.map((item) => {
            const open = openRate === item.n;
            return (
              <div key={item.n} className="border-b border-line last:border-b-0">
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenRate(open ? null : item.n)}
                  className={`grid w-full grid-cols-[1fr_5.5rem] items-center gap-2 px-4 py-3 text-left sm:px-5 ${
                    open ? "bg-paper" : ""
                  }`}
                >
                  <span className="flex items-center gap-2 font-semibold">
                    <ChevronDown className={`size-4 shrink-0 text-copper transition ${open ? "rotate-180" : ""}`} />
                    <span>{item.title[lang]}</span>
                  </span>
                  <span className="text-right font-display font-bold tabular-nums text-copper">
                    {item.low}–{item.high}
                  </span>
                </button>
                {open ? (
                  <p className="bg-paper px-4 pb-5 text-sm leading-relaxed text-muted sm:px-5">{item.detail[lang]}</p>
                ) : null}
              </div>
            );
          })}
        </div>
        <p className="mt-3 max-w-2xl text-sm text-muted">{copy.ratesFoot}</p>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-copper">{copy.estimateKicker}</p>
            <h2 className="mt-3 font-display text-4xl font-bold">{copy.estimateTitle}</h2>
            <p className="mt-4 max-w-md text-muted">{copy.estimateLead}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {jobKinds.map((job) => (
                <button
                  key={job.id}
                  type="button"
                  onClick={() => setKind(job.id)}
                  className={`h-11 rounded-full px-4 text-sm font-semibold ${
                    kind === job.id ? "bg-ink text-cream" : "border border-line bg-cream"
                  }`}
                >
                  {job.label[lang]}
                </button>
              ))}
            </div>
            <p className="mt-3 text-sm text-muted">{jobKinds.find((j) => j.id === kind)?.hint[lang]}</p>
            <button type="button" onClick={onOpenQuote} className="mt-4 text-sm font-semibold text-copper">
              {copy.quoteOpen}
            </button>
            <label className="mt-8 block text-sm font-semibold" htmlFor="area">
              {copy.area}: <span className="tabular-nums">{area}</span>
            </label>
            <input
              id="area"
              type="range"
              min={kind === "bath" ? 3 : 8}
              max={kind === "bath" ? 14 : kind === "kitchen" ? 24 : 140}
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="mt-3 w-full accent-copper"
            />
          </div>
          <div className="flex flex-col justify-between rounded-card bg-ink p-6 text-cream sm:p-8">
            <div>
              <p className="flex items-center gap-2 text-sm text-sand">
                <Ruler className="size-4" />
                {copy.labour}
              </p>
              <p className="mt-6 font-display text-5xl font-extrabold tabular-nums">
                {result.perLow}–{result.perHigh} {copy.per}
              </p>
              <p className="mt-4 text-sand">
                {copy.total}: {result.low.toLocaleString(locale)}–{result.high.toLocaleString(locale)} €
              </p>
            </div>
            <a
              href="#request"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-copper px-5 font-semibold text-cream"
            >
              {copy.book}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteModal({ lang, onClose }: { lang: Lang; onClose: () => void }) {
  const copy = ui[lang];
  const [picked, setPicked] = useState<Record<string, string>>({});
  const locale = lang === "en" ? "en-GB" : "ru-RU";

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  let low = 0;
  let high = 0;
  let count = 0;
  for (const item of services) {
    if (!(item.n in picked)) continue;
    const area = Number((picked[item.n] ?? "").replace(",", "."));
    if (!Number.isFinite(area) || area <= 0) continue;
    count += 1;
    low += item.low * area;
    high += item.high * area;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/50 p-3 sm:items-center" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-title"
        className="flex max-h-[92dvh] w-full max-w-lg flex-col rounded-card bg-paper shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 p-5 pb-3">
          <div>
            <h2 id="quote-title" className="font-display text-2xl font-bold">
              {copy.quoteTitle}
            </h2>
            <p className="mt-2 text-sm text-muted">{copy.quoteLead}</p>
          </div>
          <button type="button" onClick={onClose} aria-label={copy.close} className="grid size-10 shrink-0 place-items-center rounded-full border border-line">
            <X className="size-4" />
          </button>
        </div>
        <ul className="min-h-0 flex-1 overflow-y-auto px-5">
          {services.map((item) => {
            const on = item.n in picked;
            return (
              <li key={item.n} className="grid grid-cols-[1.25rem_1fr_5.25rem] items-center gap-3 border-t border-line py-3">
                <input
                  type="checkbox"
                  className="size-5 accent-copper"
                  checked={on}
                  aria-label={item.title[lang]}
                  onChange={(event) => {
                    setPicked((prev) => {
                      const next = { ...prev };
                      if (event.target.checked) next[item.n] = prev[item.n] ?? "";
                      else delete next[item.n];
                      return next;
                    });
                  }}
                />
                <span>
                  <span className="font-semibold">{item.title[lang]}</span>
                  <span className="mt-0.5 block text-sm text-muted">
                    {item.low}–{item.high} {copy.per}
                  </span>
                </span>
                <input
                  inputMode="decimal"
                  disabled={!on}
                  value={picked[item.n] ?? ""}
                  placeholder="0"
                  aria-label={`${item.title[lang]}, ${copy.quoteMetres}`}
                  onChange={(event) => {
                    const next = event.target.value.replace(/[^\d.,]/g, "").slice(0, 6);
                    setPicked((prev) => ({ ...prev, [item.n]: next }));
                  }}
                  className="h-11 rounded-xl border border-line bg-cream px-2 text-right font-medium tabular-nums disabled:opacity-40"
                />
              </li>
            );
          })}
        </ul>
        <div className="border-t border-line p-5">
          <p className="font-display text-3xl font-extrabold tabular-nums">
            {count > 0 ? `${Math.round(low).toLocaleString(locale)}–${Math.round(high).toLocaleString(locale)} €` : "—"}
          </p>
          {count === 0 ? <p className="mt-1 text-sm text-muted">{copy.quoteEmpty}</p> : null}
          <a
            href="#request"
            onClick={onClose}
            className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-full bg-copper font-semibold text-cream"
          >
            {copy.book}
          </a>
        </div>
      </div>
    </div>
  );
}

function Request({ lang }: { lang: Lang }) {
  const copy = ui[lang];
  const [channel, setChannel] = useState<Channel>("phone");
  const [dial, setDial] = useState("381");
  const [national, setNational] = useState("");
  const [contact, setContact] = useState("");
  const [comment, setComment] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [invalid, setInvalid] = useState(false);
  const phone = channel !== "telegram";

  function pick(next: Channel) {
    setChannel(next);
    setContact("");
    setNational("");
    setInvalid(false);
    setState("idle");
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    const value = channel === "telegram" ? contact : fullPhone(dial, national);
    if (!validContact(channel, value, dial, national)) {
      setInvalid(true);
      return;
    }
    setInvalid(false);
    setState("sending");
    try {
      const result = await sendLead({ data: { channel, contact: value, comment } });
      setState(result.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  }

  const channels: { id: Channel; label: string }[] = [
    { id: "phone", label: copy.chPhone },
    { id: "telegram", label: copy.chTelegram },
    { id: "viber", label: copy.chViber },
    { id: "whatsapp", label: copy.chWhatsapp },
  ];

  return (
    <section id="request" className="border-t border-line bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-bold">{copy.requestTitle}</h2>
          <p className="mt-4 text-muted">{copy.requestLead}</p>
          <div className="mt-6">
            <Contacts />
          </div>
        </div>
        <form onSubmit={submit} className="grid gap-3">
          <div className="grid gap-2">
            <span className="text-sm font-semibold">{copy.contact}</span>
            <div className="flex flex-wrap gap-2">
              {channels.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={channel === item.id}
                  onClick={() => pick(item.id)}
                  className={`h-10 rounded-full px-4 text-sm font-semibold ${
                    channel === item.id ? "bg-ink text-cream" : "border border-line bg-paper"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              {phone ? (
                <select
                  aria-label={lang === "en" ? "Country code" : lang === "sr" ? "Pozivni broj" : "Код страны"}
                  value={dial}
                  onChange={(e) => {
                    setDial(e.target.value);
                    setNational("");
                    setInvalid(false);
                    setState("idle");
                  }}
                  className="h-12 w-[9.25rem] shrink-0 rounded-2xl border border-line bg-paper px-2 font-medium"
                >
                  {DIALS.map((item) => (
                    <option key={item.iso} value={item.dial}>
                      {item.name[lang]} +{item.dial}
                    </option>
                  ))}
                </select>
              ) : null}
              <input
                required
                inputMode={phone ? "tel" : "text"}
                autoComplete={phone ? "tel" : "off"}
                autoCapitalize="off"
                spellCheck={false}
                value={phone ? groupDigits(national, dialMeta(dial).groups) : contact}
                placeholder={phone ? dialMeta(dial).groups.map((n) => "0".repeat(n)).join(" ") : copy.phTelegram}
                onChange={(e) => {
                  if (phone) {
                    const parsed = parsePhone(e.target.value, dial);
                    setDial(parsed.dial);
                    setNational(parsed.national);
                  } else {
                    setContact(formatTelegram(e.target.value));
                  }
                  setInvalid(false);
                  setState("idle");
                }}
                className="h-12 min-w-0 flex-1 rounded-2xl border border-line bg-paper px-4 font-medium"
              />
            </div>
            {invalid ? <p className="text-sm text-copper">{copy.badContact}</p> : null}
          </div>
          <label className="grid gap-1 text-sm font-semibold">
            {copy.note}
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={3}
              maxLength={1000}
              className="rounded-2xl border border-line bg-paper px-4 py-3 font-medium"
              placeholder={copy.notePh}
            />
          </label>
          <button
            type="submit"
            disabled={state === "sending"}
            className="h-12 rounded-full bg-ink font-semibold text-cream disabled:opacity-60"
          >
            {copy.send}
          </button>
          {state === "sent" ? <p className="text-sm text-muted">{copy.sent}</p> : null}
          {state === "error" ? <p className="text-sm text-copper">{copy.sendError}</p> : null}
        </form>
      </div>
    </section>
  );
}

type Channel = "phone" | "telegram" | "viber" | "whatsapp";

const DIALS: { iso: string; dial: string; min: number; max: number; groups: number[]; name: Record<Lang, string> }[] = [
  { iso: "RS", dial: "381", min: 8, max: 9, groups: [2, 3, 4], name: { ru: "Сербия", en: "Serbia", sr: "Srbija" } },
  { iso: "ME", dial: "382", min: 8, max: 8, groups: [2, 3, 3], name: { ru: "Черногория", en: "Montenegro", sr: "Crna Gora" } },
  { iso: "BA", dial: "387", min: 8, max: 8, groups: [2, 3, 3], name: { ru: "Босния", en: "Bosnia", sr: "Bosna" } },
  { iso: "HR", dial: "385", min: 8, max: 9, groups: [2, 3, 4], name: { ru: "Хорватия", en: "Croatia", sr: "Hrvatska" } },
  { iso: "SI", dial: "386", min: 8, max: 8, groups: [2, 3, 3], name: { ru: "Словения", en: "Slovenia", sr: "Slovenija" } },
  { iso: "MK", dial: "389", min: 8, max: 8, groups: [2, 3, 3], name: { ru: "Македония", en: "N. Macedonia", sr: "Makedonija" } },
  { iso: "HU", dial: "36", min: 8, max: 9, groups: [2, 3, 4], name: { ru: "Венгрия", en: "Hungary", sr: "Mađarska" } },
  { iso: "RO", dial: "40", min: 9, max: 9, groups: [3, 3, 3], name: { ru: "Румыния", en: "Romania", sr: "Rumunija" } },
  { iso: "BG", dial: "359", min: 8, max: 9, groups: [2, 3, 4], name: { ru: "Болгария", en: "Bulgaria", sr: "Bugarska" } },
  { iso: "UA", dial: "380", min: 9, max: 9, groups: [2, 3, 4], name: { ru: "Украина", en: "Ukraine", sr: "Ukrajina" } },
  { iso: "RU", dial: "7", min: 10, max: 10, groups: [3, 3, 2, 2], name: { ru: "Россия", en: "Russia", sr: "Rusija" } },
  { iso: "GE", dial: "995", min: 9, max: 9, groups: [3, 2, 2, 2], name: { ru: "Грузия", en: "Georgia", sr: "Gruzija" } },
  { iso: "DE", dial: "49", min: 10, max: 11, groups: [3, 3, 4], name: { ru: "Германия", en: "Germany", sr: "Nemačka" } },
  { iso: "AT", dial: "43", min: 9, max: 11, groups: [3, 3, 4], name: { ru: "Австрия", en: "Austria", sr: "Austrija" } },
  { iso: "IT", dial: "39", min: 9, max: 10, groups: [3, 3, 4], name: { ru: "Италия", en: "Italy", sr: "Italija" } },
  { iso: "GR", dial: "30", min: 10, max: 10, groups: [3, 3, 4], name: { ru: "Греция", en: "Greece", sr: "Grčka" } },
  { iso: "TR", dial: "90", min: 10, max: 10, groups: [3, 3, 4], name: { ru: "Турция", en: "Turkey", sr: "Turska" } },
];

function dialMeta(dial: string) {
  return DIALS.find((item) => item.dial === dial) ?? DIALS[0];
}

function groupDigits(digits: string, groups: number[]) {
  const parts: string[] = [];
  let index = 0;
  for (const size of groups) {
    if (index >= digits.length) break;
    parts.push(digits.slice(index, index + size));
    index += size;
  }
  if (index < digits.length) parts.push(digits.slice(index));
  return parts.join(" ");
}

function parsePhone(raw: string, dial: string) {
  const international = raw.trim().startsWith("+") || raw.trim().startsWith("00");
  let digits = raw.replace(/\D/g, "");
  if (digits.startsWith("00")) digits = digits.slice(2);
  if (international) {
    const found = [...DIALS].sort((a, b) => b.dial.length - a.dial.length).find((item) => digits.startsWith(item.dial));
    if (found) {
      return { dial: found.dial, national: digits.slice(found.dial.length).replace(/^0/, "").slice(0, found.max) };
    }
  }
  if (digits.startsWith("0")) digits = digits.slice(1);
  const meta = dialMeta(dial);
  return { dial, national: digits.slice(0, meta.max) };
}

function fullPhone(dial: string, national: string) {
  const spaced = groupDigits(national, dialMeta(dial).groups);
  return spaced ? `+${dial} ${spaced}` : "";
}

function formatTelegram(value: string) {
  const body = value
    .replace(/https?:\/\/t\.me\//i, "")
    .replace(/[^a-zA-Z0-9_]/g, "")
    .slice(0, 32);
  return body ? `@${body}` : "";
}

function validContact(channel: Channel, contact: string, dial: string, national: string) {
  if (channel === "telegram") return /^@[a-zA-Z][a-zA-Z0-9_]{4,31}$/.test(contact);
  const meta = dialMeta(dial);
  const digits = contact.replace(/\D/g, "");
  return national.length >= meta.min && national.length <= meta.max && digits.length >= 8 && digits.length <= 15;
}


import { useEffect, useMemo, useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Mail, Menu, Phone, Ruler, Send, X } from "lucide-react";
import {
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
  services,
  steps,
  ui,
  type JobKind,
  type Lang,
} from "@/data/site";

const navHref = ["#services", "#process", "#estimate", "#work", "#faq", "#request"];
const langs: Lang[] = ["ru", "en", "sr"];

export function HomePage() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("ru");
  const copy = ui[lang];

  useEffect(() => {
    const saved = localStorage.getItem("renova-lang");
    if (saved === "en" || saved === "sr" || saved === "ru") setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "sr" ? "sr" : lang;
    document.title = copy.meta;
    localStorage.setItem("renova-lang", lang);
  }, [lang, copy.meta]);

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
            <LangSwitch lang={lang} onChange={setLang} />
            <a
              href={`tel:+${PHONE_E164}`}
              className="hidden h-11 items-center gap-2 rounded-full bg-ink px-4 text-sm font-semibold text-cream lg:inline-flex"
            >
              <Phone className="size-4" />
              {PHONE_DISPLAY}
            </a>
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
              <a
                href="#estimate"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-copper px-5 font-semibold text-cream"
              >
                {copy.ctaEstimate}
                <ArrowUpRight className="size-4" />
              </a>
              <a
                href="#request"
                className="inline-flex h-12 items-center rounded-full border border-ink px-5 font-semibold"
              >
                {copy.ctaVisit}
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-6">
              {copy.stats.map(([k, v]) => (
                <div key={k}>
                  <dt className="font-display text-2xl font-bold">{k}</dt>
                  <dd className="mt-1 text-sm leading-snug text-muted">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative lg:col-span-6">
            <img
              src="/photos/hero-clean.jpg"
              alt={copy.heroAlt}
              className="aspect-video w-full rounded-card object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-ink/90 p-4 text-cream sm:right-auto sm:max-w-xs">
              <p className="text-xs uppercase tracking-widest text-sand">{copy.onSite}</p>
              <p className="mt-1 font-display text-lg font-bold">{copy.onSiteTitle}</p>
            </div>
          </div>
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

        <Estimate lang={lang} />

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
          <a href="#estimate" className="grid h-12 place-items-center rounded-full border border-ink text-sm font-semibold">
            {copy.mobileEstimate}
          </a>
          <a href="#request" className="grid h-12 place-items-center rounded-full bg-copper text-sm font-semibold text-cream">
            {copy.mobileRequest}
          </a>
        </div>
      </div>
      <div className="h-20 sm:hidden" />
    </div>
  );
}

function LangSwitch({ lang, onChange }: { lang: Lang; onChange: (lang: Lang) => void }) {
  return (
    <div className="flex h-11 items-center rounded-full border border-line p-1 text-xs font-bold">
      {langs.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => onChange(code)}
          className={`h-9 rounded-full px-2.5 uppercase ${lang === code ? "bg-ink text-cream" : "text-muted"}`}
          aria-pressed={lang === code}
        >
          {code}
        </button>
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

function Estimate({ lang }: { lang: Lang }) {
  const copy = ui[lang];
  const [kind, setKind] = useState<JobKind>("turnkey");
  const [area, setArea] = useState(55);
  const result = useMemo(() => estimate(kind, area), [kind, area]);
  const locale = lang === "en" ? "en-GB" : "ru-RU";

  return (
    <section id="estimate" className="border-y border-line bg-sand/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2">
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
    </section>
  );
}

function Request({ lang }: { lang: Lang }) {
  const copy = ui[lang];
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState<string>(copy.cityOptions[0]);
  const [task, setTask] = useState<string>(copy.taskOptions[0]);
  const [note, setNote] = useState("");

  useEffect(() => {
    setCity(copy.cityOptions[0]);
    setTask(copy.taskOptions[0]);
  }, [copy.cityOptions, copy.taskOptions]);

  function submit(e: FormEvent) {
    e.preventDefault();
    const text = [
      copy.requestTag,
      `${copy.name}: ${name}`,
      `${copy.phone}: ${phone}`,
      `${copy.city}: ${city}`,
      `${copy.task}: ${task}`,
      note ? `${copy.note}: ${note}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    setSent(true);
    window.open(`https://wa.me/${PHONE_E164}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

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
          <Field label={copy.name} value={name} onChange={setName} required />
          <Field label={copy.phone} value={phone} onChange={setPhone} required type="tel" />
          <label className="grid gap-1 text-sm font-semibold">
            {copy.city}
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="h-12 rounded-2xl border border-line bg-paper px-4 font-medium"
            >
              {copy.cityOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-1 text-sm font-semibold">
            {copy.task}
            <select
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="h-12 rounded-2xl border border-line bg-paper px-4 font-medium"
            >
              {copy.taskOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-1 text-sm font-semibold">
            {copy.note}
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              className="rounded-2xl border border-line bg-paper px-4 py-3 font-medium"
              placeholder={copy.notePh}
            />
          </label>
          <button type="submit" className="h-12 rounded-full bg-ink font-semibold text-cream">
            {copy.send}
          </button>
          {sent ? <p className="text-sm text-muted">{copy.sent}</p> : null}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-1 text-sm font-semibold">
      {label}
      <input
        required={required}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 rounded-2xl border border-line bg-paper px-4 font-medium"
      />
    </label>
  );
}

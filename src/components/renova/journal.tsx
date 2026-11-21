import type { ReactNode } from "react";
import {
  articles,
  articlesIn,
  articlesPath,
  articlePath,
  categories,
  categoryPath,
  getArticle,
  getCategory,
  homePath,
  journalCopy,
  type CategoryId,
} from "@/data/articles";
import type { Lang } from "@/data/site";

const langs: Lang[] = ["ru", "en", "sr"];

export function JournalIndex({ lang }: { lang: Lang }) {
  const copy = journalCopy[lang];
  return (
    <Shell lang={lang} tail="">
      <h1 className="font-display text-4xl font-extrabold sm:text-5xl">{copy.title}</h1>
      <p className="mt-4 max-w-xl text-lg text-muted">{copy.lead}</p>
      <CategoryNav lang={lang} />
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {articles.map((item) => (
          <li key={item.slug}>
            <ArticleCard lang={lang} slug={item.slug} />
          </li>
        ))}
      </ul>
    </Shell>
  );
}

export function JournalCategory({ lang, id }: { lang: Lang; id: string }) {
  const copy = journalCopy[lang];
  const category = getCategory(id);
  if (!category) return null;
  const list = articlesIn(category.id);
  return (
    <Shell lang={lang} tail={`/category/${category.id}`}>
      <p className="text-sm font-semibold uppercase tracking-widest text-copper">{copy.title}</p>
      <h1 className="mt-3 font-display text-4xl font-extrabold">{category.title[lang]}</h1>
      <p className="mt-4 max-w-xl text-lg text-muted">{category.text[lang]}</p>
      <CategoryNav lang={lang} current={category.id} />
      {list.length === 0 ? <p className="mt-8 text-muted">{copy.empty}</p> : null}
      <ul className="mt-8 grid gap-4">
        {list.map((item) => (
          <li key={item.slug}>
            <ArticleCard lang={lang} slug={item.slug} />
          </li>
        ))}
      </ul>
    </Shell>
  );
}

export function JournalArticle({ lang, slug }: { lang: Lang; slug: string }) {
  const copy = journalCopy[lang];
  const article = getArticle(slug);
  if (!article) return null;
  const category = categories.find((item) => item.id === article.category)!;
  const related = articlesIn(article.category).filter((item) => item.slug !== slug);
  return (
    <Shell lang={lang} tail={`/${article.slug}`}>
      <nav className="text-sm text-muted">
        <a href={homePath(lang)} className="hover:text-ink">
          {copy.home}
        </a>
        <span className="px-2">/</span>
        <a href={articlesPath(lang)} className="hover:text-ink">
          {copy.title}
        </a>
        <span className="px-2">/</span>
        <a href={categoryPath(lang, category.id)} className="hover:text-ink">
          {category.title[lang]}
        </a>
      </nav>
      <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">{article.title[lang]}</h1>
      <p className="mt-4 text-sm text-muted">
        {copy.updated} {article.updated} · RENOVA
      </p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{article.lead[lang]}</p>
      <div className="mt-8 max-w-2xl">
        {article.body[lang].map((block, index) => {
          if (block.type === "h2") {
            return (
              <h2 key={index} className="mt-8 font-display text-2xl font-bold">
                {block.text}
              </h2>
            );
          }
          if (block.type === "ul") {
            return (
              <ul key={index} className="mt-3 list-disc space-y-2 pl-5 text-muted">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          }
          return (
            <p key={index} className="mt-3 leading-relaxed text-muted">
              {block.text}
            </p>
          );
        })}
      </div>
      {article.faq?.length ? (
        <div className="mt-10 max-w-2xl divide-y divide-line border-y border-line">
          {article.faq.map((item) => (
            <details key={item.q[lang]} className="group py-4">
              <summary className="cursor-pointer list-none font-display text-lg font-bold">{item.q[lang]}</summary>
              <p className="pt-3 leading-relaxed text-muted">{item.a[lang]}</p>
            </details>
          ))}
        </div>
      ) : null}
      {related.length ? (
        <div className="mt-12">
          <h2 className="font-display text-2xl font-bold">{copy.more}</h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {related.map((item) => (
              <li key={item.slug}>
                <ArticleCard lang={lang} slug={item.slug} />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <p className="mt-10">
        <a href={`${homePath(lang)}#estimate`} className="inline-flex h-12 items-center rounded-full bg-copper px-5 font-semibold text-cream">
          {lang === "en" ? "Open the quote" : lang === "sr" ? "Otvori predračun" : "Открыть смету"}
        </a>
      </p>
    </Shell>
  );
}

function ArticleCard({ lang, slug }: { lang: Lang; slug: string }) {
  const copy = journalCopy[lang];
  const article = getArticle(slug)!;
  const category = categories.find((item) => item.id === article.category)!;
  return (
    <a href={articlePath(lang, slug)} className="block h-full rounded-card border border-line bg-cream p-5">
      <p className="text-sm font-semibold text-copper">{category.title[lang]}</p>
      <h2 className="mt-2 font-display text-2xl font-bold leading-tight">{article.title[lang]}</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">{article.description[lang]}</p>
      <p className="mt-4 text-sm font-semibold">{copy.read}</p>
    </a>
  );
}

function CategoryNav({ lang, current }: { lang: Lang; current?: CategoryId }) {
  const copy = journalCopy[lang];
  const item = (href: string, label: string, on: boolean) => (
    <a
      href={href}
      className={`inline-flex h-10 shrink-0 items-center rounded-full px-4 text-sm font-semibold ${on ? "bg-ink text-cream" : "border border-line bg-cream"}`}
      aria-current={on ? "page" : undefined}
    >
      {label}
    </a>
  );
  return (
    <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
      {item(articlesPath(lang), copy.all, !current)}
      {categories.map((category) => item(categoryPath(lang, category.id), category.title[lang], current === category.id))}
    </div>
  );
}

function Shell({ lang, tail, children }: { lang: Lang; tail: string; children: ReactNode }) {
  const copy = journalCopy[lang];
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="border-b border-line/80">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5">
          <a href={homePath(lang)} className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-full bg-ink font-display text-sm font-bold text-cream">R</span>
            <span className="font-display text-lg font-bold tracking-tight">RENOVA</span>
          </a>
          <nav className="flex items-center gap-4 text-sm">
            <a href={articlesPath(lang)} className="font-semibold">
              {copy.nav}
            </a>
            <span className="flex gap-2 text-muted">
              {langs.map((code) => (
                <a key={code} href={`${articlesPath(code)}${tail}`} className={code === lang ? "font-semibold text-ink" : ""}>
                  {code.toUpperCase()}
                </a>
              ))}
            </span>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-5 py-12">{children}</main>
    </div>
  );
}

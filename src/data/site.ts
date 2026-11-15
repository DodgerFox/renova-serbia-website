export type Lang = "ru" | "en" | "sr";

export const PHONE_E164 = "381637550611";
export const PHONE_DISPLAY = "+381 63 755 06 11";
export const TELEGRAM_URL = "https://t.me/alekseichernovv";
export const TELEGRAM_LABEL = "@alekseichernovv";
export const VIBER_URL = "viber://chat?number=%2B381637550611";
export const EMAIL = "alekseichernovofficial@gmail.com";

type L = Record<Lang, string>;

const t = (ru: string, en: string, sr: string): L => ({ ru, en, sr });

export const services: { n: string; low: number; high: number; title: L; text: L }[] = [
  { n: "01", low: 8, high: 16, title: t("Демонтаж и перепланировка", "Demolition and layout", "Rušenje i pregradnja"), text: t("Снос перегородок, вывоз мусора, подготовка под новую планировку.", "Taking down partitions, waste removal, ready for a new layout.", "Rušenje pregrada, odvoz šuta, priprema za novu raspodelu.") },
  { n: "02", low: 25, high: 45, title: t("Электрика", "Electrical", "Elektrika"), text: t("Новая разводка, щиток, точки света и розетки по схеме.", "New wiring, board, lights and sockets to plan.", "Nova instalacija, tabla, rasveta i utičnice po šemi.") },
  { n: "03", low: 30, high: 55, title: t("Сантехника", "Plumbing", "Vodovod"), text: t("Перенос стояков, скрытая разводка, подключение сантехники.", "Moving risers, concealed pipes, fitting sanitaryware.", "Pomeranje vertikala, skrivena instalacija, priključak sanitarija.") },
  { n: "04", low: 9, high: 15, title: t("Штукатурка", "Plaster", "Malterisanje"), text: t("Выравнивание стен по маякам, углы и откосы.", "Walls on guides, corners and window reveals.", "Ravnanje zidova po vodilicama, uglovi i špaletne.") },
  { n: "05", low: 12, high: 20, title: t("Стяжка пола", "Floor screed", "Košuljica"), text: t("Стяжка под плитку, ламинат и тёплый пол.", "Screed for tile, laminate and underfloor heating.", "Košuljica za pločice, laminat i podno grejanje.") },
  { n: "06", low: 20, high: 36, title: t("Гипсокартон", "Drywall", "Gips-karton"), text: t("Перегородки, ниши, короба и потолочные конструкции.", "Partitions, niches, boxing and ceiling builds.", "Pregrade, niše, kutije i plafonske konstrukcije.") },
  { n: "07", low: 8, high: 14, title: t("Шпаклёвка и покраска", "Skim and paint", "Gletovanje i krečenje"), text: t("Чистовая подготовка и покраска жилых комнат.", "Finish prep and paint for living rooms.", "Fino gletovanje i krečenje stambenih soba.") },
  { n: "08", low: 22, high: 42, title: t("Плитка и ламинат", "Tile and laminate", "Pločice i laminat"), text: t("Крупный формат, затирка, подрезка, укладка пола.", "Large format, grout, cuts and floor laying.", "Veliki format, fugovanje, sečenje, postavljanje poda.") },
  { n: "09", low: 25, high: 45, title: t("Двери и окна", "Doors and windows", "Vrata i prozori"), text: t("Установка межкомнатных дверей и подоконников. Цена за м² проёма.", "Fitting interior doors and sills. Price per m² of opening.", "Ugradnja sobnih vrata i klupica. Cena po m² otvora.") },
  { n: "10", low: 14, high: 26, title: t("Потолки", "Ceilings", "Plafoni"), text: t("Натяжные и гипсокартонные потолки со светом.", "Stretch and drywall ceilings with lighting.", "Zategnuti i gipsani plafoni sa rasvetom.") },
];

export type MarketRow = {
  n: string;
  low: number | null;
  high: number | null;
  verdict: L;
  note: L;
};

/** Belgrade labour bands, autumn 2026. null = the market does not quote this per m². */
export const markets: MarketRow[] = [
  {
    n: "01",
    low: 10,
    high: 18,
    verdict: t("Внутри рынка", "Inside the market", "U okviru tržišta"),
    note: t(
      "Сбивка штукатурки около 12 €, старая плитка 15, перегородка 18. Ваши 8–16 попадают в эту вилку.",
      "Knocking plaster is about €12, old tile €15, a partition €18. Your €8–16 sits inside that.",
      "Obijanje maltera je oko 12 €, stara keramika 15, pregrada 18. Vaših 8–16 je u tom rasponu.",
    ),
  },
  {
    n: "02",
    low: 13,
    high: 47,
    verdict: t("Верх полки", "Top of the range", "Gornji deo"),
    note: t(
      "Ваши 25–45 — только работа. Опубликованный стандарт с кабелем 13–24 €/м² пола, повышенный 30–47. Для простой замены это дорого, для полной перекладки со щитом — верх.",
      "Your €25–45 is labour only. Published jobs with cable run €13–24/m² of floor for a standard install, €30–47 for a higher spec. A basic swap is pricey; a full rewire with a new board is the top of the shelf.",
      "Vaših 25–45 je samo rad. Objavljeni standard sa kablom je 13–24 €/m² poda, viši nivo 30–47. Obična zamena je skupa; puna prepravka sa tablom je vrh.",
    ),
  },
  {
    n: "03",
    low: null,
    high: null,
    verdict: t("Не за квадрат", "Not priced per m²", "Ne po kvadratu"),
    note: t(
      "Рынок почти не ставит водопровод за м² квартиры: час 13–21 €, новая разводка санузла 340–1 000 € за комнату. 30–55 €/м² читайте как площадь мокрых зон, не всей квартиры.",
      "The market rarely prices plumbing per m² of the flat: €13–21 an hour, a new bathroom run €340–1,000 for the room. Read €30–55/m² as the wet area, not the whole apartment.",
      "Tržište skoro ne računa vodovod po m² stana: sat 13–21 €, nova instalacija kupatila 340–1.000 € za prostoriju. 30–55 €/m² čitajte kao mokre zone, ne ceo stan.",
    ),
  },
  {
    n: "04",
    low: 5,
    high: 12,
    verdict: t("Выше типичного", "Above the usual rate", "Iznad uobičajenog"),
    note: t(
      "Машинная штукатурка в Белграде часто 5–10 €/м² стены, только работа. Ручная по маякам в квартире ближе к вашей вилке 9–15.",
      "Machine plaster in Belgrade is often €5–10/m² of wall, labour only. Hand plaster on guides in a flat sits closer to your €9–15.",
      "Mašinski malter u Beogradu je često 5–10 €/m² zida, samo rad. Ručni po vodilicama u stanu bliži je vaših 9–15.",
    ),
  },
  {
    n: "05",
    low: 8,
    high: 14,
    verdict: t("Выше типичного", "Above the usual rate", "Iznad uobičajenog"),
    note: t(
      "Ориентир по труду без смеси: открытых прайсов мало, обычно 8–14 €/м². Ваши 12–20 — верх этой полки.",
      "A labour guide without the mix: public lists are thin, usually €8–14/m². Your €12–20 is the top of that shelf.",
      "Okvir za rad bez smeše: javnih cenovnika je malo, obično 8–14 €/m². Vaših 12–20 je vrh te police.",
    ),
  },
  {
    n: "06",
    low: 14,
    high: 26,
    verdict: t("Выше типичного", "Above the usual rate", "Iznad uobičajenog"),
    note: t(
      "Простая зашивка около 14 €. Перегородка с каркасом обычно 18–28. Ваши 20–36 — верх, если это ниши и короба, а не ровная стена.",
      "A plain lining is about €14. A framed partition is usually €18–28. Your €20–36 is the top end when it is niches and boxing, not a flat wall.",
      "Obična obloga je oko 14 €. Pregrada sa konstrukcijom obično 18–28. Vaših 20–36 je vrh kad su niše i kutije, ne ravan zid.",
    ),
  },
  {
    n: "07",
    low: 5,
    high: 9,
    verdict: t("Выше типичного", "Above the usual rate", "Iznad uobičajenog"),
    note: t(
      "За м² стены, только труд: глет и покраска в Белграде чаще 5–9 €. Если ту же сумму считать от пола, 8–14 уже недорого: стены и потолок больше пола примерно в 2,5–3 раза.",
      "Per m² of wall, labour only: skim and paint in Belgrade is more often €5–9. The same €8–14 per m² of floor is not expensive — walls and ceiling are about 2.5–3 times the floor.",
      "Po m² zida, samo rad: glet i krečenje u Beogradu češće je 5–9 €. Istih 8–14 po m² poda nije skupo — zidovi i plafon su oko 2,5–3 puta veći od poda.",
    ),
  },
  {
    n: "08",
    low: 18,
    high: 40,
    verdict: t("Внутри рынка", "Inside the market", "U okviru tržišta"),
    note: t(
      "Стандартная плитка часто 15–22 €. Крупный формат 25–40, ещё крупнее — выше. Ваши 22–42 как раз про крупный формат.",
      "Standard tile is often €15–22. Large format is €25–40, and bigger still costs more. Your €22–42 is the large-format band.",
      "Standardna keramika je često 15–22 €. Veliki format 25–40, još veći ide više. Vaših 22–42 je baš veliki format.",
    ),
  },
  {
    n: "09",
    low: null,
    high: null,
    verdict: t("Другая единица", "Different unit", "Druga jedinica"),
    note: t(
      "Мы считаем м² проёма. Мастера чаще называют цену за дверь или окно целиком, поэтому прямую вилку за м² не ставим.",
      "We price per m² of opening. Trades usually quote a whole door or window, so there is no honest €/m² band to put beside it.",
      "Mi računamo m² otvora. Majstori češće kažu cenu za cela vrata ili prozor, zato ne stavljamo raspon po m².",
    ),
  },
  {
    n: "10",
    low: 12,
    high: 22,
    verdict: t("Чуть выше середины", "A bit above the middle", "Malo iznad sredine"),
    note: t(
      "Гипсокартонный или натяжной потолок, только работа, обычно 12–22 €. Полотно и свет считаются отдельно и часто дороже работы.",
      "A drywall or stretch ceiling, labour only, is usually €12–22. The sheet and the lights are separate and often cost more than the labour.",
      "Gipsani ili zategnuti plafon, samo rad, obično je 12–22 €. Platno i rasveta idu odvojeno i često koštaju više od rada.",
    ),
  },
];

export const steps: { n: string; title: L; text: L }[] = [
  { n: "01", title: t("Замер", "Measure", "Merenje"), text: t("Приезжаем в Белград или Нови-Сад, снимаем размеры и фиксируем задачу.", "We come to Belgrade or Novi Sad, measure and lock the brief.", "Dolazimo u Beograd ili Novi Sad, merimo i beležimo zadatak.") },
  { n: "02", title: t("Смета", "Quote", "Predračun"), text: t("Разбивка по работам и материалам. Цена работ — за м².", "Split into labour and materials. Labour is priced per m².", "Razdvojeno na radove i materijal. Rad se računa po m².") },
  { n: "03", title: t("Работы", "Work", "Radovi"), text: t("График по этапам. За каждый этап 50% до старта и 50% после приёмки.", "Scheduled in stages. Each stage is 50% before it starts and 50% after acceptance.", "Raspored po fazama. Svaka faza: 50% pre početka i 50% posle prijema.") },
  { n: "04", title: t("Сдача", "Handover", "Primopredaja"), text: t("Совместный осмотр, устранение замечаний, гарантия на работы.", "Walkthrough together, snagging, warranty on the work.", "Zajednički pregled, otklanjanje primedbi, garancija na rad.") },
];

export const included: L[] = [
  t("Выезд и замер без оплаты", "Site visit and measure at no charge", "Dolazak i merenje bez naknade"),
  t("Все работы считаются за м², материалы отдельно", "All labour is priced per m², materials separate", "Svi radovi se računaju po m², materijal odvojeno"),
  t("Каждый этап: 50% предоплата и 50% после приёмки", "Each stage: 50% before and 50% after acceptance", "Svaka faza: 50% avans i 50% posle prijema"),
  t("Укрывка пола и вывоз строительного мусора", "Floor protection and waste removal", "Zaštita poda i odvoz šuta"),
  t("Фотоотчёт по этапам", "Photo updates by stage", "Foto-izveštaj po fazama"),
  t("Гарантия на выполненные работы", "Warranty on completed work", "Garancija na izvedene radove"),
];

export const faqs: { q: L; a: L }[] = [
  { q: t("Работаете только в Белграде?", "Only Belgrade?", "Radite samo u Beogradu?"), a: t("Основная география — Белград и Нови-Сад. Объекты рядом обсуждаем отдельно после замера.", "Belgrade and Novi Sad are the core area. Nearby jobs we discuss after a measure.", "Osnova su Beograd i Novi Sad. Objekte u blizini dogovaramo posle merenja.") },
  { q: t("Можно заказать только санузел или одну комнату?", "Can I book just a bathroom or one room?", "Mogu samo kupatilo ili jedna soba?"), a: t("Да. Берём и точечные работы: санузел, кухня, электрика, покраска, плитка.", "Yes. Bathroom, kitchen, electrics, paint or tile on their own are fine.", "Da. Uzimamo i pojedinačne radove: kupatilo, kuhinju, elektriku, krečenje, pločice.") },
  { q: t("Материалы ваши или наши?", "Your materials or ours?", "Vaš materijal ili naš?"), a: t("Как удобнее. Можем закупить по смете или работать с тем, что уже купили вы.", "Either way. We can buy to the quote, or use what you already have.", "Kako vam odgovara. Možemo nabaviti po predračunu ili raditi sa vašim materijalom.") },
  { q: t("Как считаются цены?", "How are prices calculated?", "Kako se računaju cene?"), a: t("На все виды работ цена указана за квадратный метр, только работа. Итог — ставка × площадь после замера.", "Every trade is priced per square metre, labour only. The total is the rate times the measured area.", "Svaka vrsta radova ima cenu po kvadratu, samo rad. Zbir je cena × izmerena površina.") },
  { q: t("Как проходит оплата?", "How does payment work?", "Kako ide plaćanje?"), a: t("Смета делится на этапы. За каждый этап — 50% предоплата до начала работ и 50% после приёмки этого этапа.", "The quote is split into stages. Each stage is 50% before that work starts and 50% after that stage is accepted.", "Predračun se deli na faze. Za svaku fazu — 50% avans pre početka i 50% posle prijema te faze.") },
  { q: t("Есть гарантия?", "Is there a warranty?", "Ima li garancije?"), a: t("Да, на работы бригады. Срок фиксируем в договоре вместе с перечнем работ.", "Yes, on our work. The term sits in the contract with the scope.", "Da, na naše radove. Rok stoji u ugovoru uz spisak radova.") },
];

export const gallery: { src: string; title: L; caption: L }[] = [
  { src: "/photos/bath.jpg", title: t("Санузел", "Bathroom", "Kupatilo"), caption: t("Плитка, скрытая сантехника, ниша", "Tile, concealed plumbing, niche", "Pločice, skrivena instalacija, niša") },
  { src: "/photos/kitchen.jpg", title: t("Кухня", "Kitchen", "Kuhinja"), caption: t("Чистовая отделка и столешница", "Finish and worktop", "Završna obrada i radna ploča") },
  { src: "/photos/living.jpg", title: t("Комнаты", "Rooms", "Sobe"), caption: t("Шпаклёвка и покраска", "Skim and paint", "Glet i krečenje") },
  { src: "/photos/tile-laid.jpg", title: t("Плитка", "Tile", "Pločice"), caption: t("Крупный формат, ровная плоскость", "Large format, flat plane", "Veliki format, ravna površina") },
  { src: "/photos/plaster.jpg", title: t("Штукатурка", "Plaster", "Malter"), caption: t("Стены под чистовую", "Walls ready to finish", "Zidovi spremni za završnicu") },
  { src: "/photos/hero-clean.jpg", title: t("Подготовка", "Prep", "Priprema"), caption: t("Объект до чистовых работ", "Before the finish coats", "Pre završnih radova") },
];

export type JobKind = "cosmetic" | "turnkey" | "bath" | "kitchen";

export const jobKinds: { id: JobKind; low: number; high: number; label: L; hint: L }[] = [
  { id: "cosmetic", low: 70, high: 130, label: t("Косметика", "Refresh", "Osveženje"), hint: t("Покраска и пол, без переноса инженерии", "Paint and floors, no services moved", "Krečenje i pod, bez pomeranja instalacija") },
  { id: "turnkey", low: 280, high: 460, label: t("Под ключ", "Turnkey", "Ključ u ruke"), hint: t("Демонтаж, инженерия и чистовая, сумма за м²", "Strip-out, services and finish, per m²", "Rušenje, instalacije i završnica, po m²") },
  { id: "bath", low: 160, high: 250, label: t("Санузел", "Bathroom", "Kupatilo"), hint: t("Гидроизоляция, плитка, сантехника — за м²", "Tanking, tile, plumbing — per m²", "Hidroizolacija, pločice, vodovod — po m²") },
  { id: "kitchen", low: 90, high: 150, label: t("Кухня", "Kitchen", "Kuhinja"), hint: t("Фартук, пол, электрика. Мебель не входит", "Splashback, floor, electrics. Furniture excluded", "Keramička traka, pod, elektrika. Nameštaj nije uračunat") },
];

export function estimate(kind: JobKind, area: number) {
  const rate = jobKinds.find((job) => job.id === kind)!;
  return {
    low: Math.round(rate.low * area),
    high: Math.round(rate.high * area),
    perLow: rate.low,
    perHigh: rate.high,
  };
}

export const openings: { title: L; text: L }[] = [
  { title: t("Штукатур-маляр", "Plasterer and painter", "Malterer i moler"), text: t("Маяки, шпаклёвка и покраска жилых комнат.", "Guides, skim coat and paint in living rooms.", "Vodilice, glet i krečenje stambenih soba.") },
  { title: t("Плиточник", "Tiler", "Keramičar"), text: t("Крупный формат, санузлы, ровная плоскость и затирка.", "Large format, bathrooms, a flat plane and grout.", "Veliki format, kupatila, ravna površina i fugovanje.") },
  { title: t("Электрик", "Electrician", "Električar"), text: t("Новая разводка, щиток и точки по схеме.", "New wiring, board and points to plan.", "Nova instalacija, tabla i tačke po šemi.") },
  { title: t("Сантехник", "Plumber", "Vodoinstalater"), text: t("Скрытая разводка и перенос стояков.", "Concealed pipes and moving risers.", "Skrivena instalacija i pomeranje vertikala.") },
  { title: t("Гипсокартон", "Drywall", "Gips-karton"), text: t("Перегородки, ниши и короба.", "Partitions, niches and boxing.", "Pregrade, niše i kutije.") },
  { title: t("Подсобный", "Labourer", "Pomoćni radnik"), text: t("Демонтаж, поднос материала и уборка объекта.", "Strip-out, moving materials and keeping the site clear.", "Rušenje, prenos materijala i čišćenje objekta.") },
];

export const crewConditions: L[] = [
  t("Объекты в Белграде и Нови-Саде, работаете в составе бригады.", "Sites in Belgrade and Novi Sad, as part of the crew.", "Objekti u Beogradu i Novom Sadu, rad u sastavu ekipe."),
  t("Оплата за сданный объём: закрыли этап — расчёт в евро.", "Pay for finished volume: close a stage, get paid in euros.", "Isplata za predatu količinu: zatvorena faza — obračun u evrima."),
  t("Ставку называем по специальности до выхода на объект.", "The rate is agreed by trade before you start.", "Cenu dogovaramo po struci pre izlaska na objekat."),
  t("Свой инструмент — плюс. Расходники есть на объекте.", "Your own tools are a plus. Consumables are on site.", "Sopstveni alat je prednost. Potrošni materijal je na objektu."),
  t("Можно выйти на один этап или остаться в постоянном составе.", "Join for one stage, or stay on the crew.", "Možete na jednu fazu ili da ostanete u stalnom sastavu."),
  t("На объекте говорят по-русски. Сербский на старте не обязателен.", "Russian is spoken on site. Serbian is not required to start.", "Na objektu se govori ruski. Srpski na početku nije obavezan."),
];

export const jobsCopy = {
  ru: {
    title: "Работа для мастеров",
    lead: "Ищем людей в бригаду RENOVA. Нужен чистый результат и умение держать этап, а не обещание «сделаем быстро».",
    conditions: "Условия",
    openings: "Открытые места",
    apply: "Связаться",
    applyNote: "Откроется выбор: звонок, WhatsApp, Telegram, Viber или почта.",
  },
  en: {
    title: "Work for trades",
    lead: "RENOVA is hiring people for the crew. We need a clean finish and a stage you can hold, not a promise to go faster.",
    conditions: "Conditions",
    openings: "Open roles",
    apply: "Get in touch",
    applyNote: "You’ll pick a call, WhatsApp, Telegram, Viber or email.",
  },
  sr: {
    title: "Posao za majstore",
    lead: "RENOVA traži ljude u ekipu. Treba čist rezultat i faza koja se drži, ne obećanje da će biti brzo.",
    conditions: "Uslovi",
    openings: "Otvorena mesta",
    apply: "Kontakt",
    applyNote: "Otvoriće se izbor: poziv, WhatsApp, Telegram, Viber ili mejl.",
  },
} as const;

export const contactCopy = {
  ru: {
    title: "Как связаться",
    lead: "Выберите удобный способ. Если текст заявки уже есть, он подставится в сообщение.",
    button: "Связь",
    phone: "Позвонить",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    viber: "Viber",
    email: "Почта",
    close: "Закрыть",
  },
  en: {
    title: "How to reach us",
    lead: "Pick a channel. If you already wrote a message, it goes with you.",
    button: "Contact",
    phone: "Call",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    viber: "Viber",
    email: "Email",
    close: "Close",
  },
  sr: {
    title: "Kako da nas kontaktirate",
    lead: "Izaberite način. Ako je tekst već napisan, ide uz poruku.",
    button: "Kontakt",
    phone: "Poziv",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    viber: "Viber",
    email: "Mejl",
    close: "Zatvori",
  },
} as const;

export const ui = {
  ru: {
    nav: ["Работы", "Как идём", "Смета", "Результат", "Вакансии", "Вопросы", "Заявка"],
    cities: "Белград · Нови-Сад",
    h1: "Ремонт квартиры без сюрпризов в смете",
    lead: "Бригада RENOVA закрывает объект целиком: от демонтажа до плитки и покраски. Все работы считаются за квадратный метр.",
    ctaEstimate: "Посчитать за м²",
    ctaVisit: "Вызвать на замер",
    stats: [
      ["за м²", "цена на каждый вид работ"],
      ["50 / 50", "предоплата и постоплата этапа"],
      ["2 города", "Белград и Нови-Сад"],
    ],
    onSite: "На объекте",
    onSiteTitle: "Подготовка под чистовую",
    servicesTitle: "Что делаем",
    servicesLead: "Цена каждого вида работ — за м², только работа, без материалов.",
    per: "€/м²",
    processTitle: "Как идём по объекту",
    estimateKicker: "Ориентир",
    estimateTitle: "Смета за квадратный метр",
    estimateLead: "Ставка за м² × площадь. Это разговорная цифра: точную фиксируем после замера.",
    ratesTitle: "Смета по работам",
    ratesLead: "Нажмите строку — сравнение с Белградом, осень 2026. Только работа, материалы отдельно.",
    colWork: "Работа",
    colOurs: "RENOVA",
    colMarket: "Рынок",
    ratesFoot: "Строки не складываются: у каждой своя поверхность. Пакет ниже — это уже ставка за м² пола.",
    area: "Площадь, м²",
    labour: "Работы, без материалов",
    total: "Итого за площадь",
    book: "Зафиксировать замер",
    workTitle: "Как выглядит результат",
    workLead: "Формат отделки, который сдаём. Ориентир по уровню, не каталог чужих адресов.",
    faqTitle: "Вопросы до замера",
    requestTitle: "Замер в Белграде или Нови-Саде",
    requestLead: "Напишите задачу и выберите, куда её отправить: звонок, WhatsApp, Telegram, Viber или почта. Замер бесплатный.",
    name: "Имя",
    phone: "Телефон",
    city: "Город",
    cityOptions: ["Белград", "Нови-Сад", "Рядом, уточню"],
    task: "Задача",
    taskOptions: ["Ремонт под ключ", "Санузел", "Кухня", "Косметика", "Один вид работ"],
    note: "Комментарий",
    notePh: "Площадь, срок, что уже куплено",
    send: "Выбрать способ связи",
    sent: "Заявка собрана. Выберите мессенджер в окне.",
    requestTag: "Заявка RENOVA",
    footer: "Ремонт квартир · Белград и Нови-Сад",
    mobileEstimate: "Смета",
    mobileRequest: "Заявка",
    menuOpen: "Открыть меню",
    menuClose: "Закрыть меню",
    heroAlt: "Квартира до чистовой отделки, чистый пол у лестницы",
    meta: "Ремонт квартир в Белграде и Нови-Саде — RENOVA",
    description:
      "Ремонт квартир под ключ в Белграде и Нови-Саде: электрика, сантехника, штукатурка, плитка и покраска. Цены за м², оплата 50/50 по этапам, бесплатный замер.",
  },
  en: {
    nav: ["Work", "Process", "Quote", "Results", "Jobs", "FAQ", "Enquiry"],
    cities: "Belgrade · Novi Sad",
    h1: "Apartment renovation with a quote you can read",
    lead: "RENOVA takes the whole job: strip-out through tile and paint. Every trade is priced per square metre.",
    ctaEstimate: "Price per m²",
    ctaVisit: "Book a measure",
    stats: [
      ["per m²", "a rate for every trade"],
      ["50 / 50", "before and after each stage"],
      ["2 cities", "Belgrade and Novi Sad"],
    ],
    onSite: "On site",
    onSiteTitle: "Ready for the finish",
    servicesTitle: "What we do",
    servicesLead: "Every trade is priced per m², labour only, materials separate.",
    per: "€/m²",
    processTitle: "How a job runs",
    estimateKicker: "Guide",
    estimateTitle: "A quote per square metre",
    estimateLead: "Rate per m² times the area. A figure to talk from — the contract number comes after we measure.",
    ratesTitle: "Rates by trade",
    ratesLead: "Tap a row for Belgrade, autumn 2026. Labour only, materials separate.",
    colWork: "Trade",
    colOurs: "RENOVA",
    colMarket: "Market",
    ratesFoot: "Do not add the rows: each one is a different surface. The package below is a rate per m² of floor.",
    area: "Area, m²",
    labour: "Labour, materials excluded",
    total: "Total for this area",
    book: "Book the measure",
    workTitle: "What the finish looks like",
    workLead: "The standard we hand over. A level to expect, not a list of other people’s addresses.",
    faqTitle: "Before we visit",
    requestTitle: "A measure in Belgrade or Novi Sad",
    requestLead: "Write the brief, then choose a call, WhatsApp, Telegram, Viber or email. The visit is free.",
    name: "Name",
    phone: "Phone",
    city: "City",
    cityOptions: ["Belgrade", "Novi Sad", "Nearby, I’ll say"],
    task: "Job",
    taskOptions: ["Turnkey", "Bathroom", "Kitchen", "Refresh", "One trade"],
    note: "Note",
    notePh: "Area, timing, what you’ve already bought",
    send: "Choose how to send",
    sent: "The enquiry is ready. Pick a channel in the window.",
    requestTag: "RENOVA enquiry",
    footer: "Apartment renovation · Belgrade and Novi Sad",
    mobileEstimate: "Quote",
    mobileRequest: "Enquiry",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    heroAlt: "Apartment before finishes, clear floor by the stairs",
    meta: "Apartment renovation in Belgrade and Novi Sad — RENOVA",
    description:
      "Turnkey apartment renovation in Belgrade and Novi Sad. Electrics, plumbing, plaster, tile and paint, priced per m². Free site measure. Each stage is 50% before and 50% after.",
  },
  sr: {
    nav: ["Radovi", "Tok", "Predračun", "Rezultat", "Posao", "Pitanja", "Upit"],
    cities: "Beograd · Novi Sad",
    h1: "Renoviranje stana bez iznenađenja u predračunu",
    lead: "Ekipa RENOVA zatvara objekat od rušenja do pločica i krečenja. Svi radovi se računaju po kvadratnom metru.",
    ctaEstimate: "Cena po m²",
    ctaVisit: "Zakaži merenje",
    stats: [
      ["po m²", "cena za svaku vrstu radova"],
      ["50 / 50", "avans i ostatak po fazi"],
      ["2 grada", "Beograd i Novi Sad"],
    ],
    onSite: "Na objektu",
    onSiteTitle: "Priprema za završnicu",
    servicesTitle: "Šta radimo",
    servicesLead: "Cena svake vrste radova je po m², samo rad, materijal odvojeno.",
    per: "€/m²",
    processTitle: "Kako ide objekat",
    estimateKicker: "Okvir",
    estimateTitle: "Predračun po kvadratu",
    estimateLead: "Cena po m² × površina. Broj za razgovor: tačan iznos fiksiramo posle merenja.",
    ratesTitle: "Predračun po radovima",
    ratesLead: "Dodirnite red — poređenje sa Beogradom, jesen 2026. Samo rad, materijal odvojeno.",
    colWork: "Rad",
    colOurs: "RENOVA",
    colMarket: "Tržište",
    ratesFoot: "Redove ne sabirajte: svaki je druga površina. Paket ispod je cena po m² poda.",
    area: "Površina, m²",
    labour: "Radovi, bez materijala",
    total: "Zbir za ovu površinu",
    book: "Zakaži merenje",
    workTitle: "Kako izgleda rezultat",
    workLead: "Nivo završnice koji predajemo. Orijentir, ne spisak tuđih adresa.",
    faqTitle: "Pre dolaska",
    requestTitle: "Merenje u Beogradu ili Novom Sadu",
    requestLead: "Opišite zadatak i izaberite poziv, WhatsApp, Telegram, Viber ili mejl. Merenje je besplatno.",
    name: "Ime",
    phone: "Telefon",
    city: "Grad",
    cityOptions: ["Beograd", "Novi Sad", "U blizini, javiću"],
    task: "Zadatak",
    taskOptions: ["Ključ u ruke", "Kupatilo", "Kuhinja", "Osveženje", "Jedna vrsta radova"],
    note: "Komentar",
    notePh: "Površina, rok, šta je već kupljeno",
    send: "Izaberite način slanja",
    sent: "Upit je spreman. Izaberite kanal u prozoru.",
    requestTag: "Upit RENOVA",
    footer: "Renoviranje stanova · Beograd i Novi Sad",
    mobileEstimate: "Cena",
    mobileRequest: "Upit",
    menuOpen: "Otvori meni",
    menuClose: "Zatvori meni",
    heroAlt: "Stan pre završnice, čist pod pored stepenica",
    meta: "Renoviranje stanova u Beogradu i Novom Sadu — RENOVA",
    description:
      "Renoviranje stanova ključ u ruke u Beogradu i Novom Sadu: elektrika, vodovod, malter, pločice i krečenje. Cena po m², plaćanje 50/50 po fazama, merenje besplatno.",
  },
} as const;

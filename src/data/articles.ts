import type { Lang } from "@/data/site";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type CategoryId = "prices" | "bath" | "engineering" | "handover" | "prep";

type L = Record<Lang, string>;

export const categories: { id: CategoryId; title: L; text: L }[] = [
  {
    id: "prices",
    title: { ru: "Цены", en: "Prices", sr: "Cene" },
    text: {
      ru: "Ставки за м² в Белграде и Нови-Саде: только работа, без материалов.",
      en: "Rates per m² in Belgrade and Novi Sad: labour only, materials apart.",
      sr: "Cene po m² u Beogradu i Novom Sadu: samo rad, materijal odvojeno.",
    },
  },
  {
    id: "bath",
    title: { ru: "Санузел", en: "Bathrooms", sr: "Kupatilo" },
    text: {
      ru: "Мокрые зоны: гидроизоляция, скрытая разводка и плитка.",
      en: "Wet rooms: tanking, concealed pipes and tile.",
      sr: "Mokre zone: hidroizolacija, skrivena instalacija i pločice.",
    },
  },
  {
    id: "engineering",
    title: { ru: "Инженерия", en: "Services", sr: "Instalacije" },
    text: {
      ru: "Электрика и сантехника: что входит в работу мастера.",
      en: "Electrics and plumbing: what the labour rate covers.",
      sr: "Elektrika i vodovod: šta ulazi u cenu rada.",
    },
  },
  {
    id: "handover",
    title: { ru: "Приёмка", en: "Handover", sr: "Prijem" },
    text: {
      ru: "Как закрывать этап и когда платить вторые 50%.",
      en: "How to close a stage and when the second 50% is due.",
      sr: "Kako se zatvara faza i kada se plaća drugih 50%.",
    },
  },
  {
    id: "prep",
    title: { ru: "Подготовка", en: "Preparation", sr: "Priprema" },
    text: {
      ru: "Новостройка под чистовую и порядок работ до покраски.",
      en: "A new flat before the finishes, and the order of work.",
      sr: "Novogradnja pre završnice i redosled radova.",
    },
  },
];

export type Article = {
  slug: string;
  category: CategoryId;
  updated: string;
  title: L;
  description: L;
  lead: L;
  body: Record<Lang, Block[]>;
  faq?: { q: L; a: L }[];
};

const p = (text: string): Block => ({ type: "p", text });
const h2 = (text: string): Block => ({ type: "h2", text });
const ul = (items: string[]): Block => ({ type: "ul", items });

export const articles: Article[] = [
  {
    slug: "remont-kvartiry-beograd-2026",
    category: "prices",
    updated: "2026-11-18",
    title: {
      ru: "Сколько стоит ремонт квартиры в Белграде в 2026 году",
      en: "What an apartment renovation costs in Belgrade in 2026",
      sr: "Koliko košta renoviranje stana u Beogradu 2026.",
    },
    description: {
      ru: "Работы за м² в Белграде и Нови-Саде в 2026: демонтаж, электрика, санузел, покраска и пакет под ключ. Материалы отдельно, фирма с материалами — другая цифра.",
      en: "Belgrade and Novi Sad labour rates per m² in 2026, from strip-out to a bathroom. Materials are separate. A company quote with materials is a different number.",
      sr: "Cene rada po m² u Beogradu i Novom Sadu 2026: od rušenja do kupatila. Materijal je odvojen. Firma sa materijalom je drugi iznos.",
    },
    lead: {
      ru: "Объявление «ремонт от 250 €/м²» и объявление «под ключ 700 €/м²» говорят о разных вещах. Ниже — работа мастера в Белграде и Нови-Саде осенью 2026, без материалов.",
      en: "A line that says “from €250/m²” and a line that says “turnkey €700/m²” are not the same product. These are tradesman labour rates for Belgrade and Novi Sad in autumn 2026, materials excluded.",
      sr: "Oglas „od 250 €/m²“ i oglas „ključ u ruke 700 €/m²“ nisu ista stvar. Ovo su cene rada majstora u Beogradu i Novom Sadu, jesen 2026, bez materijala.",
    },
    body: {
      ru: [
        h2("Две разные сметы"),
        p("Ставка за работу — это руки и инструмент. Демонтаж 10–18 €/м², штукатурка 5–12, стяжка 8–14, шпаклёвка и покраска 5–9 €/м² стены и потолка, плитка крупного формата 25–40, гипсокартон 14–26, потолки 12–22. Электрика новой разводкой 20–35 €/м², сантехника мокрой зоны 85–130 €/м². Кабель, смесь, краска, плитка и приборы в эти вилки не входят."),
        p("Пакет «под ключ» 250–400 €/м² — это тоже труд: демонтаж, инженерия и чистовая на квадратный метр пола. Фирменные 500–800 €/м² обычно уже с материалами, организацией и маржой. Складывать их с трудовой ставкой нельзя."),
        h2("Почему строки сметы не складываются"),
        p("Покраска считается по стенам и потолку, плитка — по своей плоскости, сантехника — по мокрой зоне, а не по всей квартире. Если сложить все строки и умножить на площадь пола, цифра будет вдвое больше реального объёма."),
        ul([
          "Косметика, покраска и пол без переноса инженерии: 30–55 €/м² пола.",
          "Кухня без мебели, фартук и электрика: 50–90 €/м².",
          "Санузел с гидроизоляцией и плиткой: 180–280 €/м² мокрой зоны.",
          "Квартира под ключ, только работа: 250–400 €/м² пола.",
        ]),
        h2("Что двигает цену внутри вилки"),
        p("Нижняя граница — ровные стены, мало подрезки, понятная схема точек. Верхняя — кривая геометрия, перенос стояков, крупный формат с запилом, много коробов. Точную цифру имеет смысл фиксировать после замера, а не по фото в переписке."),
        h2("Пример на 55 м²"),
        p("Труд «под ключ» по нижней и верхней границе: 55 × 250 = 13 750 € и 55 × 400 = 22 000 €. Это ещё не плитка, не кабель и не краска. На санузел 6 м² отдельно закладывают 1 080–1 680 € работы, если он не сидит внутри пакета целиком. Материалы на такую квартиру легко добавляют столько же, сколько работа, если брать средний керамогранит и нормальную электрику."),
      ],
      en: [
        h2("Two quotes that should not be compared"),
        p("A labour rate is hands and tools. Strip-out is €10–18/m², plaster €5–12, screed €8–14, skim and paint €5–9/m² of wall and ceiling, large-format tile €25–40, drywall €14–26, ceilings €12–22. A new electrical layout is €20–35/m², plumbing of a wet room €85–130/m². Cable, mix, paint, tile and fittings sit outside those bands."),
        p("A turnkey labour package of €250–400/m² is still labour: strip-out, services and finishes, priced on floor area. A company figure of €500–800/m² usually includes materials, coordination and margin. Do not add the two together."),
        h2("Why the rows do not add up"),
        p("Paint is priced on walls and ceilings, tile on its own surface, plumbing on the wet area rather than the whole flat. Adding every row and multiplying by the floor area doubles the real quantity."),
        ul([
          "A refresh, paint and floors, services left where they are: €30–55/m² of floor.",
          "A kitchen without furniture, splashback and electrics: €50–90/m².",
          "A bathroom with tanking and tile: €180–280/m² of wet area.",
          "Turnkey labour for the flat: €250–400/m² of floor.",
        ]),
        h2("What moves a job inside the band"),
        p("The low end is straight walls, little cutting and a clear plan of points. The high end is crooked geometry, moved risers, large-format tile with mitres, and a lot of boxing. The number to sign is the one after a site measure, not the one guessed from a photo."),
        h2("A 55 m² example"),
        p("Turnkey labour at the two ends is 55 × 250 = €13,750 and 55 × 400 = €22,000. That is not the tile, the cable or the paint. A 6 m² bathroom adds €1,080–1,680 of labour if it is not already inside the package. Materials on a flat of this size often match the labour if you buy mid-range porcelain and a proper electrical spec."),
      ],
      sr: [
        h2("Dva predračuna koja se ne porede"),
        p("Cena rada su ruke i alat. Rušenje 10–18 €/m², malter 5–12, košuljica 8–14, glet i krečenje 5–9 €/m² zida i plafona, pločice velikog formata 25–40, gips-karton 14–26, plafoni 12–22. Nova elektrika 20–35 €/m², vodovod mokre zone 85–130 €/m². Kabl, smeša, boja, pločice i oprema nisu u tim rasponima."),
        p("Paket „ključ u ruke“ 250–400 €/m² i dalje je rad: rušenje, instalacije i završnica, po m² poda. Firmina cifra 500–800 €/m² obično već ima materijal, organizaciju i maržu. To se ne sabira."),
        h2("Zašto se redovi ne sabiraju"),
        p("Krečenje ide po zidu i plafonu, pločice po svojoj površini, vodovod po mokroj zoni, ne po celom stanu. Ako saberete sve redove i pomnožite podom, iznos je duplo veći od stvarne količine."),
        ul([
          "Osveženje, krečenje i pod bez pomeranja instalacija: 30–55 €/m² poda.",
          "Kuhinja bez nameštaja, keramička traka i elektrika: 50–90 €/m².",
          "Kupatilo sa hidroizolacijom i pločicama: 180–280 €/m² mokre zone.",
          "Stan ključ u ruke, samo rad: 250–400 €/m² poda.",
        ]),
        h2("Šta diže cenu unutar raspona"),
        p("Donja granica su ravni zidovi, malo sečenja i jasna šema tačaka. Gornja je kriva geometrija, pomeranje vertikala, veliki format sa rezovima i puno kutija. Tačan iznos se fiksira posle merenja, ne po fotografiji."),
        h2("Primer na 55 m²"),
        p("Rad „ključ u ruke“: 55 × 250 = 13.750 € i 55 × 400 = 22.000 €. To još nisu pločice, kabl ni boja. Kupatilo od 6 m² dodaje 1.080–1.680 € rada ako nije već u paketu. Materijal na takav stan često dostigne rad, ako se uzme srednji keramogranit i normalna elektrika."),
      ],
    },
    faq: [
      {
        q: {
          ru: "Сколько стоит ремонт квартиры за м² в Белграде в 2026?",
          en: "What does apartment renovation cost per m² in Belgrade in 2026?",
          sr: "Koliko košta renoviranje stana po m² u Beogradu 2026?",
        },
        a: {
          ru: "Работа под ключ у частного мастера — 250–400 €/м² пола, без материалов. С материалами у фирмы чаще называют 500–800 €/м².",
          en: "Turnkey labour from a tradesman is €250–400/m² of floor, materials excluded. A company price with materials is more often €500–800/m².",
          sr: "Rad ključ u ruke kod majstora je 250–400 €/m² poda, bez materijala. Firma sa materijalom češće kaže 500–800 €/m².",
        },
      },
      {
        q: {
          ru: "Материалы входят в цену за м²?",
          en: "Are materials included in the rate per m²?",
          sr: "Da li je materijal u ceni po m²?",
        },
        a: {
          ru: "Нет. В ставке RENOVA только работа. Смесь, кабель, краска, плитка и сантехника считаются отдельно.",
          en: "No. A RENOVA rate is labour. Mix, cable, paint, tile and sanitaryware are priced apart.",
          sr: "Ne. U ceni RENOVA je samo rad. Smeša, kabl, boja, pločice i sanitarije idu odvojeno.",
        },
      },
    ],
  },
  {
    slug: "cena-za-m2-chto-vhodit",
    category: "prices",
    updated: "2026-11-18",
    title: {
      ru: "Что входит в цену за м², а что мастер считает отдельно",
      en: "What a price per m² includes, and what is priced apart",
      sr: "Šta ulazi u cenu po m², a šta majstor računa odvojeno",
    },
    description: {
      ru: "Как читать ставку мастера в Белграде: работа за м², материалы отдельно, почему вилка шире на плитке и электрике и как сравнивать две сметы.",
      en: "How to read a Belgrade tradesman’s rate: labour per m², materials apart, and how to compare two quotes without mixing units.",
      sr: "Kako čitati cenu majstora u Beogradu: rad po m², materijal odvojeno i kako porediti dva predračuna.",
    },
    lead: {
      ru: "Две сметы с одинаковой суммой часто описывают разный объём. Одна включает кабель и краску, другая — только работу. Путаница почти всегда в единице измерения.",
      en: "Two quotes with the same total often describe different work. One includes cable and paint, the other is labour only. The confusion is almost always the unit.",
      sr: "Dva predračuna sa istim zbirom često opisuju različit obim. Jedan ima kabl i boju, drugi samo rad. Zabuna je skoro uvek u jedinici mere.",
    },
    body: {
      ru: [
        h2("Работа и материал — разные строки"),
        p("Мастер продаёт укладку, выравнивание, разводку и подключение. Мешок смеси, катушка кабеля, ведро краски и коробка плитки остаются закупкой. Если в объявлении этого нет, спросите прямо: цифра за руки или «всё включено». На объектах RENOVA в ставку не входят смесь, кабель, фурнитура, краска, плитка, затирка, полотно двери и сантехника."),
        h2("Одна ставка — одна поверхность"),
        ul([
          "Шпаклёвка и покраска: м² стены и потолка, не пола.",
          "Стяжка и ламинат: м² пола.",
          "Плитка: м² той плоскости, куда её кладут.",
          "Сантехника: м² мокрой зоны, не всей квартиры.",
          "Двери: м² проёма, полотно отдельно.",
        ]),
        p("Вилка, а не одна цифра, нужна потому что квартира в Новом Белграде с ровными стенами и старый фонд у крепости — не один объём подрезки и штроб."),
        h2("Как сравнивать два предложения"),
        p("Выпишите в три колонки: работа, материал, что не входит. Приведите всё к одной площади. Смета «15 €/м² покраска с краской» и смета «7 €/м² работа, краска ваша» могут стоить одинаково. Смета без вывоза мусора, без заделки штроб и без гидроизоляции почти всегда дешевле на бумаге и дороже на объекте."),
        h2("Пакет и отдельные работы"),
        p("Пакет за м² пола удобен, когда закрывается вся квартира. Отдельные строки удобны, когда нужен один санузел или только электрика. Не просите сложить десять ставок в одну «цену квартиры»: у них разные знаменатели."),
      ],
      en: [
        h2("Labour and materials are different rows"),
        p("The tradesman sells laying, levelling, wiring and connections. Bags of mix, a reel of cable, a tin of paint and a box of tile stay a purchase. If an advert does not say which, ask: is the figure hands, or all-in? On a RENOVA job the rate does not include mix, cable, fittings, paint, tile, grout, the door leaf or the sanitaryware."),
        h2("One rate, one surface"),
        ul([
          "Skim and paint: m² of wall and ceiling, not floor.",
          "Screed and laminate: m² of floor.",
          "Tile: m² of the surface it goes on.",
          "Plumbing: m² of wet area, not the whole flat.",
          "Doors: m² of the opening. The leaf is separate.",
        ]),
        p("A band, not a single figure, exists because a flat in New Belgrade with straight walls and an old flat by the fortress are not the same amount of cutting and chasing."),
        h2("How to compare two quotes"),
        p("Make three columns: labour, materials, exclusions. Put both quotes on the same area. “€15/m² paint including the tin” and “€7/m² labour, you buy the paint” can cost the same. A quote that skips waste removal, closing the chases and tanking is cheaper on paper and more expensive on site."),
        h2("A package and single trades"),
        p("A rate per m² of floor is useful when the whole flat is in scope. Single rows are useful for one bathroom or electrics only. Do not ask to add ten rates into one “price of the flat”: they have different denominators."),
      ],
      sr: [
        h2("Rad i materijal su različiti redovi"),
        p("Majstor prodaje postavljanje, ravnanje, razvod i priključke. Džak smeše, kabl, kanta boje i kutija pločica ostaju nabavka. Ako oglas to ne kaže, pitajte: cifra je za ruke ili „sve uključeno“? Na objektima RENOVA u cenu ne ulaze smeša, kabl, oprema, boja, pločice, fuga, krilo vrata ni sanitarije."),
        h2("Jedna cena, jedna površina"),
        ul([
          "Glet i krečenje: m² zida i plafona, ne poda.",
          "Košuljica i laminat: m² poda.",
          "Pločice: m² površine na koju idu.",
          "Vodovod: m² mokre zone, ne celog stana.",
          "Vrata: m² otvora, krilo odvojeno.",
        ]),
        p("Raspon, a ne jedna cifra, postoji jer stan na Novom Beogradu sa ravnim zidovima i starogradnja nisu ista količina sečenja i šliceva."),
        h2("Kako porediti dva predračuna"),
        p("Napravite tri kolone: rad, materijal, šta nije uključeno. Svedite oba na istu površinu. „15 €/m² krečenje sa bojom“ i „7 €/m² rad, boja vaša“ mogu isto da koštaju. Predračun bez odvoza šuta, bez zatvaranja šliceva i bez hidroizolacije je jeftiniji na papiru i skuplji na objektu."),
        h2("Paket i pojedinačni radovi"),
        p("Cena po m² poda ima smisla kad se zatvara ceo stan. Pojedinačni redovi imaju smisla za jedno kupatilo ili samo elektriku. Nemojte sabirati deset cena u jednu „cenu stana“: imenilac im nije isti."),
      ],
    },
  },
  {
    slug: "remont-sanuzla-beograd",
    category: "bath",
    updated: "2026-11-18",
    title: {
      ru: "Ремонт санузла в Белграде: гидроизоляция, плитка и скрытая сантехника",
      en: "Bathroom renovation in Belgrade: tanking, tile and concealed plumbing",
      sr: "Renoviranje kupatila u Beogradu: hidroizolacija, pločice i skriveni vodovod",
    },
    description: {
      ru: "Санузел в Белграде: цена работы 180–280 €/м² мокрой зоны, гидроизоляция до плитки, уклон, инсталляция и что покупается отдельно.",
      en: "A Belgrade bathroom: labour at €180–280/m² of wet area, tanking before tile, falls, a cistern frame, and what you buy separately.",
      sr: "Kupatilo u Beogradu: rad 180–280 €/m² mokre zone, hidroizolacija pre pločica, pad, ugradni vodokotlić i šta se kupuje odvojeno.",
    },
    lead: {
      ru: "Санузел дороже комнаты не из-за «сложности вообще», а потому что ошибка в гидроизоляции и уклоне вскрывается после того, как плитка уже лежит.",
      en: "A bathroom costs more than a room not because it is vaguely “harder”, but because a failed tanking or a wrong fall shows up after the tile is down.",
      sr: "Kupatilo košta više od sobe ne zato što je „teže uopšte“, nego zato što greška u hidroizolaciji i padu izađe kad su pločice već postavljene.",
    },
    body: {
      ru: [
        h2("Считать мокрую зону, не всю квартиру"),
        p("Пакет санузла у RENOVA — 180–280 €/м² мокрой зоны, только работа: гидроизоляция, плитка, сантехника. Отдельная ставка сантехники 85–130 €/м² — это разводка и подключение, без плитки. Не умножайте её на площадь квартиры. Ванная 5–7 м² и гостевой туалет 1,5–2 м² — нормальный объём для београдской квартиры."),
        h2("Порядок, который нельзя переставлять"),
        ul([
          "Демонтаж до основания, которое ещё держит воду.",
          "Скрытая разводка воды и канализации, выводы под смеситель, инсталляцию и технику.",
          "Стяжка с уклоном к трапу, если душ в полу.",
          "Гидроизоляция чаши и подъём на стены, с лентой в углах. Потом проба, потом плитка.",
          "Крупный формат, затирка, подключение приборов.",
        ]),
        p("Плитка на сухую стену без гидроизоляции выглядит законченной ровно до первого душа. Переделка стоит как новый санузел, потому что снимается всё."),
        h2("Что покупает заказчик"),
        p("Трубы, инсталляция, трап, смесители, плитка, клей и затирка. Работа укладки крупного формата 25–40 €/м² уже сидит внутри пакета, если берёте санузел целиком, а не одну стену. Гипсокартонный короб вокруг инсталляции — 14–26 €/м² этой конструкции, лист и профиль отдельно."),
        h2("Где обычно теряют деньги"),
        p("Перенос стояка, душ в полу вместо поддона, плитка 120 см с запилом в нише, тёплый пол. Это верх вилки, и это нужно назвать до старта, а не «по ходу». Ниша под химию и ревизия на инсталляции дешевле, чем вскрытие короба через год."),
      ],
      en: [
        h2("Price the wet area, not the flat"),
        p("A RENOVA bathroom package is €180–280/m² of wet area, labour only: tanking, tile, plumbing. The plumbing row of €85–130/m² is pipes and connections, without tile. Do not multiply it by the whole flat. A 5–7 m² bathroom and a 1.5–2 m² guest toilet is a normal Belgrade flat."),
        h2("An order you should not shuffle"),
        ul([
          "Strip back to a base that can still hold water.",
          "Concealed water and waste, outlets for the tap, the frame and appliances.",
          "A screed with a fall to the drain, if the shower is in the floor.",
          "Tank the tray and up the walls, with tape in the corners. Test, then tile.",
          "Large format, grout, and fitting the ware.",
        ]),
        p("Tile on a dry wall with no tanking looks finished until the first shower. Opening it costs about the same as a new bathroom, because everything comes off."),
        h2("What the client buys"),
        p("Pipes, the cistern frame, the drain, taps, tile, adhesive and grout. Large-format laying at €25–40/m² is already inside the package if you take the whole room, not one wall. A drywall box around the frame is €14–26/m² of that build, board and profile apart."),
        h2("Where the money usually moves"),
        p("A moved riser, a floor shower instead of a tray, 120 cm tile with mitres in a niche, underfloor heat. That is the top of the band, and it has to be named before the start. A niche for bottles and an access panel on the frame are cheaper than opening the box a year later."),
      ],
      sr: [
        h2("Računa se mokra zona, ne ceo stan"),
        p("Paket kupatila kod RENOVA je 180–280 €/m² mokre zone, samo rad: hidroizolacija, pločice, vodovod. Posebna cena vodovoda 85–130 €/m² su cevi i priključci, bez pločica. Nemojte je množiti površinom stana. Kupatilo 5–7 m² i gostinski toalet 1,5–2 m² su normalan beogradski stan."),
        h2("Redosled koji se ne meša"),
        ul([
          "Skidanje do osnove koja još drži vodu.",
          "Skrivena voda i kanalizacija, izvodi za slavinu, ugradni vodokotlić i aparate.",
          "Košuljica sa padom ka slivniku, ako je tuš u podu.",
          "Hidroizolacija kade i podizanje na zidove, sa trakom u uglovima. Proba, pa pločice.",
          "Veliki format, fuga, priključak opreme.",
        ]),
        p("Pločice na suvom zidu bez hidroizolacije izgledaju gotovo do prvog tuša. Popravka košta kao novo kupatilo, jer se skida sve."),
        h2("Šta kupuje naručilac"),
        p("Cevi, ugradni vodokotlić, slivnik, slavine, pločice, lepak i fuga. Postavljanje velikog formata 25–40 €/m² već je u paketu ako radite celu prostoriju, ne jedan zid. Kutija od gips-kartona oko vodokotlića je 14–26 €/m² te konstrukcije, tabla i profil odvojeno."),
        h2("Gde obično ode novac"),
        p("Pomeranje vertikale, tuš u podu umesto kade, pločica od 120 cm sa rezovima u niši, podno grejanje. To je vrh raspona i mora da se kaže pre početka. Niša za hemiju i revizioni otvor jeftiniji su od otvaranja kutije za godinu dana."),
      ],
    },
  },
  {
    slug: "elektrika-kvartira-beograd",
    category: "engineering",
    updated: "2026-11-18",
    title: {
      ru: "Электрика в квартире в Белграде: разводка, щиток и что не входит в работу",
      en: "Apartment electrics in Belgrade: wiring, the board, and what labour excludes",
      sr: "Elektrika u stanu u Beogradu: razvod, tabla i šta nije u ceni rada",
    },
    description: {
      ru: "Новая электрика в квартире в Белграде: 20–35 €/м² работа, щиток и точки по схеме. Кабель и фурнитура отдельно, штробы заделываются.",
      en: "A new electrical layout in a Belgrade flat: €20–35/m² labour, a board and points to plan. Cable and fittings are separate, and the chases are closed.",
      sr: "Nova elektrika u stanu u Beogradu: 20–35 €/m² rada, tabla i tačke po šemi. Kabl i oprema odvojeno, šlicevi se zatvaraju.",
    },
    lead: {
      ru: "Старая алюминиевая разводка в фонде Белграда не тянет варочную панель, духовой шкаф и кондиционер одновременно. Новая схема считается до штробы, а не «добавим розетку по пути».",
      en: "Old aluminium wiring in Belgrade’s housing stock will not carry a hob, an oven and an air conditioner at once. A new layout is drawn before the chase, not “we’ll add a socket on the way”.",
      sr: "Stara aluminijumska instalacija u beogradskom fondu ne vuče ploču, rernu i klimu odjednom. Nova šema se crta pre štemovanja, ne „dodaćemo utičnicu usput“.",
    },
    body: {
      ru: [
        h2("Что такое ставка 20–35 €/м²"),
        p("Это работа по площади, которую перебирают: новая разводка, щиток и автоматы, точки света и розетки по схеме, заделка штроб. Нижняя граница — понятный план и короткие трассы. Верхняя — много точек, перенос щита, слабые перегородки, где штроба идёт тяжелее. Кабель, подрозетники, механизмы и светильники покупаются отдельно."),
        h2("Схема до начала"),
        ul([
          "Отдельные линии на варочную, духовку, стиральную, посудомойку и кондиционер.",
          "Розетки кухни не на одной линии с комнатой.",
          "Выводы света там, где будет мебель, а не «по центру как было».",
          "Запас места в щите: автомат и УЗО не впихивают последним рядом.",
        ]),
        p("Точка, которой нет на схеме, после штукатурки стоит дороже, чем та же точка в смете. Штроба по свежей стене — это новый этап, а не мелочь."),
        h2("Слабый ток и кухня"),
        p("Интернет, домофон и телевизор лучше заложить пустой трубой рядом с силовой, пока стены открыты. На кухне выводы под технику совпадают с сантехническими: их отмечают на одном чертеже, иначе розетка оказывается за холодильником, а кран — впритык к щитку."),
        h2("Как принять электрику"),
        p("До закрытия стен: щит подписан, линии прозваниваются, штробы заделаны, схема точек совпадает с листом. Вторые 50% этапа платят после этого, а не когда «розетки вроде на месте». Покраска поверх открытой штробы — брак приёмки, не косметика."),
      ],
      en: [
        h2("What the €20–35/m² rate is"),
        p("It is labour on the area being redone: new wiring, a board and breakers, lights and sockets to a plan, and the chases closed. The low end is a clear plan and short runs. The high end is many points, a moved board, and weak partitions where a chase is harder. Cable, back boxes, the mechanisms and the lights are bought separately."),
        h2("A plan before the start"),
        ul([
          "Separate circuits for the hob, oven, washer, dishwasher and air conditioner.",
          "Kitchen sockets not on the same circuit as the living room.",
          "Light points where the furniture will be, not “centred as before”.",
          "Spare ways in the board. The RCD is not squeezed in as the last row.",
        ]),
        p("A point that is not on the drawing costs more after the plaster than the same point in the quote. A chase through a fresh wall is a new stage, not a favour."),
        h2("Data and the kitchen"),
        p("Internet, the entry phone and television are cheaper as an empty conduit next to the power while the walls are open. Kitchen outlets have to sit on the same drawing as the plumbing, or the socket ends up behind the fridge and the tap hard against the board."),
        h2("How to accept the electrics"),
        p("Before the walls close: the board is labelled, the circuits test out, the chases are filled, and the points match the sheet. The second 50% of the stage is due after that, not when the sockets “look about right”. Paint over an open chase is a failed handover, not a finish."),
      ],
      sr: [
        h2("Šta je cena 20–35 €/m²"),
        p("To je rad na površini koja se menja: nova instalacija, tabla i osigurači, rasveta i utičnice po šemi, šlicevi zatvoreni. Donja granica je jasan plan i kratke trase. Gornja je puno tačaka, pomeranje table i slabe pregrade. Kabl, dozne, mehanizmi i svetiljke kupuju se odvojeno."),
        h2("Šema pre početka"),
        ul([
          "Posebni strujni krugovi za ploču, rernu, veš-mašinu, sudomašinu i klimu.",
          "Utičnice kuhinje nisu na istom krugu sa sobom.",
          "Izvodi za svetlo tamo gde će nameštaj, ne „u sredini kao što je bilo“.",
          "Mesta u tabli: osigurač i FID sklopka nisu poslednji red na silu.",
        ]),
        p("Tačka koje nema na šemi posle maltera košta više nego ista tačka u predračunu. Šlic kroz svež zid je nova faza, ne usluga."),
        h2("Slaba struja i kuhinja"),
        p("Internet, interfon i televizija jeftiniji su kao prazna cev pored struje dok su zidovi otvoreni. Izvodi u kuhinji moraju biti na istom crtežu sa vodovodom, inače utičnica završi iza frižidera, a slavina uz tablu."),
        h2("Kako primiti elektriku"),
        p("Pre zatvaranja zidova: tabla je označena, linije se proveravaju, šlicevi su zatvoreni, tačke se poklapaju sa listom. Drugih 50% faze se plaća posle toga, ne kad „utičnice nekako stoje“. Krečenje preko otvorenog šlica je neuspeo prijem, ne završnica."),
      ],
    },
  },
  {
    slug: "priemka-remonta",
    category: "handover",
    updated: "2026-11-18",
    title: {
      ru: "Как принять этап ремонта и когда платить вторые 50%",
      en: "How to accept a renovation stage, and when the second 50% is due",
      sr: "Kako primiti fazu renoviranja i kada platiti drugih 50%",
    },
    description: {
      ru: "Приёмка ремонта в Белграде: 50% до старта этапа и 50% после приёмки. Что считать замечанием, а что новой работой, и что проверить до покраски.",
      en: "Accepting renovation work in Belgrade: 50% before a stage and 50% after it is accepted. What is a snag, what is new work, and what to check before paint.",
      sr: "Prijem radova u Beogradu: 50% pre faze i 50% posle prijema. Šta je primedba, šta novi rad i šta proveriti pre krečenja.",
    },
    lead: {
      ru: "Вторые 50% — не аванс «чтобы ребята не пропали» и не штраф. Это оплата закрытого этапа. Пока этап не принят, эти деньги остаются у вас.",
      en: "The second 50% is not a deposit “so the crew doesn’t disappear”, and it is not a fine. It pays for a stage that is closed. Until you accept it, that money stays with you.",
      sr: "Drugih 50% nije avans „da ekipa ne nestane“ i nije kazna. To je plaćanje zatvorene faze. Dok fazu ne primite, taj novac ostaje kod vas.",
    },
    body: {
      ru: [
        h2("Как делятся деньги"),
        p("Смета режется на этапы: демонтаж, инженерия, стяжка и штукатурка, плитка, покраска. За каждый этап 50% до старта и 50% после совместной приёмки. Не платите вторую половину за «почти готово» и не просите начать следующий этап в счёт непроверенного предыдущего."),
        h2("Что смотреть до закрытия стен"),
        ul([
          "Штробы заделаны, не заклеены бумагой под покраску.",
          "Выводы воды и электрики на местах по схеме.",
          "Гидроизоляция санузла целая, углы с лентой, до плитки.",
          "Стяжка без пустот под простукивание там, где будет плитка.",
        ]),
        p("После покраски эти вещи либо не видны, либо их вскрытие портит чистовую. Принимать инженерию нужно при открытых стенах."),
        h2("Замечание и новая работа"),
        p("Замечание — то, что было в смете и сделано криво: волна на стене под покраску, пустой угол гидроизоляции, розетка не там. Это закрывается до второй оплаты. Новая работа — ниша, которой не было, перенос двери, другой формат плитки. Это отдельная строка, а не «раз уж вы здесь». Так смета не расползается в середине объекта."),
        h2("Как фиксировать приёмку"),
        p("Короткий список в переписке и фото при дневном свете. Дата, этап, что принято, что осталось доплатить. Устной «ну вроде нормально» недостаточно, если через месяц спор про уклон душевого. Гарантия RENOVA на работы начинается с принятого этапа, а не с обещания в чате."),
      ],
      en: [
        h2("How the money is split"),
        p("The quote is cut into stages: strip-out, services, screed and plaster, tile, paint. Each stage is 50% before it starts and 50% after you accept it together. Do not pay the second half for “almost done”, and do not start the next stage against an unchecked previous one."),
        h2("What to look at before the walls close"),
        ul([
          "Chases are filled, not papered over for paint.",
          "Water and electrical outlets are where the drawing says.",
          "Bathroom tanking is intact, corners taped, before tile.",
          "The screed has no hollows where tile will go.",
        ]),
        p("After paint these things are either invisible or the opening ruins the finish. Accept the services while the walls are open."),
        h2("A snag and new work"),
        p("A snag is something that was in the quote and came out wrong: a wave in a wall that is about to be painted, a dry corner in the tanking, a socket in the wrong place. That is closed before the second payment. New work is a niche that was not there, a moved door, a different tile size. That is a new row, not “while you’re here”. That is how a quote stays a quote."),
        h2("How to record the handover"),
        p("A short list in the chat and photos in daylight. Date, stage, what was accepted, what is left to pay. A spoken “seems fine” is weak if the shower fall is argued a month later. A RENOVA warranty on the work starts from an accepted stage, not from a promise in chat."),
      ],
      sr: [
        h2("Kako se deli novac"),
        p("Predračun se seče na faze: rušenje, instalacije, košuljica i malter, pločice, krečenje. Svaka faza je 50% pre početka i 50% posle zajedničkog prijema. Ne plaćajte drugu polovinu za „skoro gotovo“ i ne počinjite sledeću fazu na račun neproverene prethodne."),
        h2("Šta gledati pre zatvaranja zidova"),
        ul([
          "Šlicevi su zatvoreni, nisu zalepljeni papirom pod krečenje.",
          "Izvodi vode i struje su gde šema kaže.",
          "Hidroizolacija kupatila je cela, uglovi sa trakom, pre pločica.",
          "Košuljica nema šupljine tamo gde idu pločice.",
        ]),
        p("Posle krečenja to se ili ne vidi, ili otvaranje kvari završnicu. Instalacije se primaju dok su zidovi otvoreni."),
        h2("Primedba i novi rad"),
        p("Primedba je ono što je bilo u predračunu, a urađeno je krivo: talas na zidu pred krečenje, suv ugao hidroizolacije, utičnica na pogrešnom mestu. To se zatvara pre druge uplate. Novi rad je niša koje nije bilo, pomerena vrata, drugi format pločica. To je novi red, ne „kad ste već tu“. Tako predračun ostaje predračun."),
        h2("Kako se beleži prijem"),
        p("Kratak spisak u prepiski i fotografije na dnevnom svetlu. Datum, faza, šta je primljeno, šta je ostalo da se plati. Usmeno „valjda je u redu“ slabo stoji ako se za mesec dana spore oko pada tuša. Garancija RENOVA na rad počinje od primljene faze, ne od obećanja u ćaskanju."),
      ],
    },
  },
  {
    slug: "kvartira-pod-chistovuyu",
    category: "prep",
    updated: "2026-11-18",
    title: {
      ru: "Квартира под чистовую в новостройке: что сделать до покраски и пола",
      en: "A new-build flat ready for finishes: what has to happen before paint and floors",
      sr: "Stan u novogradnji pred završnicu: šta ide pre krečenja i poda",
    },
    description: {
      ru: "Квартира под чистовую в Белграде: порядок стяжки, штукатурки, электрики и санузла до покраски. Что проверить у застройщика и что остаётся вам.",
      en: "A Belgrade new-build before the finishes: the order of screed, plaster, electrics and the bathroom. What to check from the developer, and what is still yours.",
      sr: "Stan u novogradnji pred završnicu u Beogradu: redosled košuljice, maltera, elektrike i kupatila. Šta proveriti kod investitora i šta ostaje vama.",
    },
    lead: {
      ru: "«Под чистовую» в сербской новостройке обычно значит голые стены и выводы, а не готовность к дивану. Покраска и ламинат — последние, и они не прячут кривую стяжку.",
      en: "“Ready for finishes” in a Serbian new-build usually means bare walls and stubbed services, not a room you can put a sofa in. Paint and laminate come last, and they do not hide a bad screed.",
      sr: "„Za završnicu“ u srpskoj novogradnji obično znači gole zidove i izvode, ne sobu spremnu za kauč. Krečenje i laminat su poslednji i ne kriju lošu košuljicu.",
    },
    body: {
      ru: [
        h2("Что часто уже есть, а чего нет"),
        p("У застройщика проверьте стяжку на пустоты и уровень, штукатурку на отслоение, работает ли стояк, есть ли контур заземления и хватает ли ввода на электроплиту. «Стены белые» не значит, что их можно красить: часто это грунтованный черновой слой. Если геометрия уехала, маяки и штукатурка 5–12 €/м² дешевле, чем толстый слой шпаклёвки."),
        h2("Порядок до чистовой"),
        ul([
          "Перегородки и мокрые точки: где душ, где стиральная, где щит.",
          "Электрика и сантехника, пока можно штробить.",
          "Стяжка 8–14 €/м², в санузле с уклоном.",
          "Штукатурка, потом гипсокартонные короба 14–26 €/м².",
          "Гидроизоляция и плитка мокрых зон.",
          "Шпаклёвка и покраска 5–9 €/м², пол в конце.",
        ]),
        p("Ламинат до покраски собирает пыль шпаклёвки в замки. Плитку в санузле кладут до чистовой покраски жилых комнат, чтобы пыль от реза не садилась в свежую краску."),
        h2("Пол и двери"),
        p("Высоту стяжки связывают с дверными полотнами и балконным порогом до заливки, а не после. Дверь ставят, когда уровень пола известен: работа 20–40 €/м² проёма, полотно отдельно. Потолок, если он нужен, делают до покраски стен: 12–22 €/м² работа, полотно и свет отдельно."),
        h2("Сколько это в трудовой смете"),
        p("Новостройка без сноса старой плитки часто дешевле вторички на демонтаже (10–18 €/м², если снимать всё же приходится). Пакет под ключ 250–400 €/м² пола остаётся ориентиром, если делаются и инженерия, и чистовая. Один только «покрасить и положить ламинат» — это косметика 30–55 €/м², и называть её под ключ не стоит."),
      ],
      en: [
        h2("What is often there, and what is not"),
        p("Check the developer’s screed for hollows and level, the plaster for loose spots, whether the riser works, whether there is an earth, and whether the supply will take an electric hob. “The walls are white” does not mean they are ready for paint: it is often a primed base coat. If the geometry is out, plaster on guides at €5–12/m² is cheaper than a thick skim."),
        h2("The order before the finishes"),
        ul([
          "Partitions and wet points: shower, washer, board.",
          "Electrics and plumbing while chasing is still possible.",
          "Screed at €8–14/m², with a fall in the bathroom.",
          "Plaster, then drywall boxes at €14–26/m².",
          "Tanking and tile in the wet rooms.",
          "Skim and paint at €5–9/m², the floor last.",
        ]),
        p("Laminate laid before paint collects skim dust in the locks. Bathroom tile goes down before the final paint in the living rooms, so cutting dust does not land in fresh paint."),
        h2("Floors and doors"),
        p("Tie the screed height to the door leaves and the balcony threshold before the pour, not after. A door is hung once the floor level is known: labour €20–40/m² of opening, the leaf apart. A ceiling, if you need one, goes in before the walls are painted: €12–22/m² labour, the sheet and the lights apart."),
        h2("Where this sits in a labour quote"),
        p("A new-build with no old tile to lift is often cheaper than a second-hand flat on strip-out (€10–18/m² if you do have to strip). Turnkey labour of €250–400/m² of floor is still the guide when both services and finishes are in scope. “Paint it and lay laminate” is a refresh at €30–55/m², and it should not be called turnkey."),
      ],
      sr: [
        h2("Šta često već postoji, a čega nema"),
        p("Kod investitora proverite košuljicu na šupljine i nivelaciju, malter na odvajanje, da li vertikala radi, da li ima uzemljenje i da li priključak vuče električnu ploču. „Zidovi su beli“ ne znači da mogu da se kreče: često je to samo grundirani grubi sloj. Ako je geometrija otišla, malter po vodilicama 5–12 €/m² jeftiniji je od debelog gleta."),
        h2("Redosled pre završnice"),
        ul([
          "Pregrade i mokre tačke: tuš, veš-mašina, tabla.",
          "Elektrika i vodovod dok se još može štemovati.",
          "Košuljica 8–14 €/m², u kupatilu sa padom.",
          "Malter, pa kutije od gips-kartona 14–26 €/m².",
          "Hidroizolacija i pločice mokrih zona.",
          "Glet i krečenje 5–9 €/m², pod na kraju.",
        ]),
        p("Laminat pre krečenja kupi prašinu gleta u bravicama. Pločice u kupatilu idu pre završnog krečenja soba, da prašina od sečenja ne padne na svežu boju."),
        h2("Pod i vrata"),
        p("Visinu košuljice vežite za krila vrata i prag terase pre izlivanja, ne posle. Vrata se ugrađuju kad je nivo poda poznat: rad 20–40 €/m² otvora, krilo odvojeno. Plafon, ako treba, ide pre krečenja zidova: 12–22 €/m² rada, platno i rasveta odvojeno."),
        h2("Gde je to u predračunu rada"),
        p("Novogradnja bez skidanja starih pločica često je jeftinija od starog stana na rušenju (10–18 €/m² ako ipak mora da se skida). Paket ključ u ruke 250–400 €/m² poda ostaje orijentir kad se rade i instalacije i završnica. Samo „okrečiti i staviti laminat“ je osveženje 30–55 €/m² i ne zove se ključ u ruke."),
      ],
    },
  },
  {
    slug: "kak-vybrat-brigadu-beograd",
    category: "handover",
    updated: "2026-11-23",
    title: {
      ru: "Как выбрать бригаду на ремонт квартиры в Белграде и не потерять аванс",
      en: "How to choose a renovation crew in Belgrade and not lose the deposit",
      sr: "Kako izabrati ekipu za renoviranje stana u Beogradu i ne izgubiti avans",
    },
    description: {
      ru: "Как выбрать бригаду на ремонт квартиры в Белграде и Нови-Саде: письменный объём, оплата по этапам, аванс не больше 50% и красные флаги до перевода денег.",
      en: "How to choose a renovation crew in Belgrade and Novi Sad: a written scope, payment by stages, a deposit of no more than 50%, and red flags before you pay.",
      sr: "Kako izabrati ekipu za renoviranje stana u Beogradu i Novom Sadu: pismeni obim, plaćanje po fazama, avans najviše 50% i crvene zastavice pre prve uplate.",
    },
    lead: {
      ru: "Три номера в Telegram и фраза «можем начать завтра» ещё не бригада. В Белграде и Нови-Саде работу отдают тому, у кого есть письменный объём, понятные этапы и вторые 50% только после приёмки.",
      en: "Three Telegram numbers and a line that says “we can start tomorrow” is not a crew. In Belgrade and Novi Sad you hand the job to someone with a written scope, clear stages, and the second 50% due only after handover.",
      sr: "Tri broja na Telegramu i rečenica „možemo sutra da počnemo“ još nisu ekipa. U Beogradu i Novom Sadu posao se daje onome ko ima pismeni obim, jasne faze i drugih 50% tek posle prijema.",
    },
    body: {
      ru:
        [
          h2("С чего начинать выбор"),
          p("В Белграде и Нови-Саде за один вечер легко собрать три обещания: «под ключ», «начнём в понедельник», «скидка, если сразу переведёте». Это ещё не выбор. Выбор начинается с объёма работ, с того, что входит в ставку, и с того, когда уходят вторые 50%. Пока этого нет на бумаге, сравнивать бригады нельзя: вы сравниваете тон голоса в чате, а не работу."),
          p("Попросите короткое письмо или сообщение, которое можно переслать: площадь, состав работ, ставка за работу без материалов, этапы, срок на каждый этап, кто покупает материал, кто вывозит мусор, как принимается этап. Если человек не может этого написать и предлагает «обсудим на объекте, там видно», на объекте как раз и появится вторая смета, уже после аванса."),
          h2("Письменный объём важнее скидки"),
          p("Договор или хотя бы подписанный объём с датой защищает обе стороны. В Сербии частный мастер может работать по-разному — не угадывайте статус за него, а спросите PIB и может ли он выдать счёт или фискальный чек. Для многих заказчиков это простая проверка, что человек работает открыто. Юридическую форму под ваш случай, если она важна для оплаты или учёта, лучше уточнить у бухгалтера или юриста, а не по универсальному шаблону из чата."),
          p("В объёме должны быть единицы измерения: покраска по м² стены и потолка, сантехника по мокрой зоне, двери по проёму. Иначе через месяц спор «это было во второй комнате» не на чем закрыть. На объектах RENOVA смета режется на этапы, и каждый этап закрывается отдельно. Скидка, которая стирает эти строки, — не скидка, а размытый объём."),
          h2("Как платить, чтобы не кормить пустые обещания"),
          p("Нормальная схема — 50% до старта этапа и 50% после совместной приёмки. Не отдавайте всю сумму «на материал и ребят» в первый день. Материал лучше покупать самому или оплачивать по накладной на ваш адрес, а не переводом «на закупку» без списка и без чека. Если бригада просит больше 50% до начала работ или вторую половину «чтобы заказать плитку заранее и не тормозить» без счёта — это уже повод остановиться, а не идти навстречу."),
          p("Не смешивайте этапы в одном платеже. Вторые 50% за электрику не платятся вместе с авансом на покраску, пока стены ещё открыты и приёмки не было. Деньги за закрытый этап и деньги за следующий — разные переводы. Так проще понять, за что вы уже заплатили, если объект вдруг остановится."),
          h2("Красные флаги до перевода"),
          ul([
            "Нет письменного объёма, только голосовые в Telegram и обещание «всё обсудим по ходу».",
            "«Завтра можем заехать», но нет ни одного адреса, куда можно приехать и посмотреть живую работу.",
            "Цена заметно ниже рыночной вилки без объяснения, что вычеркнуто: часто вычеркнуты вывоз мусора, гидроизоляция, заделка штроб или сама приёмка.",
            "Просьба перевести всё на карту «друга» или «жены, у неё лимит больше».",
            "Отказ фиксировать этапы и вторые 50% после приёмки.",
            "Давление: «если сегодня не решите, бригада уйдёт на другой объект».",
          ]),
          p("Дешёвая ставка может быть честной, если объём уже и единицы понятны. Но фраза «под ключ за 180 €/м², всё включено, материал наш» при рыночной работе 250–400 €/м² без материала почти всегда означает другой состав работ или риск, что объект встанет на середине. Сравнивайте не итоговую сумму, а строки."),
          h2("Как смотреть прошлые объекты"),
          p("Просите не только фото в телефоне, а адрес или короткую встречу с заказчиком на сданном объекте. В Белграде и Нови-Саде это реально: один санузел во Врачаре и одна кухня в Новом Белграде говорят больше, чем альбом с фильтрами. Смотрите плоскости плитки, примыкания к стоякам, щиток с подписями групп, ровность покраски у окна на дневном свету. Если хозяин готов показать угол санузла и рассказать, как принимали гидроизоляцию до плитки, это ценнее десяти отзывов «всё супер»."),
          p("Короткий разговор с прежним заказчиком стоит держать предметным: как принимали этап, приходили ли на переделку, совпал ли срок, кто покупал материал, как решали скрытые работы. Если бригада не даёт ни одного живого контакта и прячет объекты за историями в мессенджере, это такой же сигнал, как отсутствие сметы."),
          h2("Смета, которую можно сравнить"),
          p("Выпишите две-три бригады в одну таблицу: работа, материал, мусор, сроки, условие вторых 50%. Приведите ставки к одним единицам. Смета «покраска 15 €/м² с краской» и смета «7 €/м² работа, краска ваша» могут сойтись в деньгах и разойтись в ответственности за переделку. Смета без гидроизоляции санузла будет красивее на бумаге и дороже после протечки к соседу снизу."),
          p("Для ориентира по работе без материала в 2026 году на объектах в Белграде и Нови-Саде держите вилки, которые уже разобраны отдельно: демонтаж 10–18 €/м², электрика 20–35, санузел с гидроизоляцией и плиткой 180–280 €/м² мокрой зоны, квартира под ключ только работа 250–400 €/м² пола. Если цифра выпадает из вилки, сначала ищите вычеркнутую строку, а не «удачную скидку»."),
          h2("Дом, управник и мусор"),
          p("Бригада работает не в пустом поле, а в доме с соседями и правилами. До старта уточните у управника: часы шумных работ, можно ли пользоваться лифтом для мусора, куда ставить контейнер, нужна ли заявка жильцам. Это не мелочь. Объект в центре Белграда без договорённости по вывозу легко встаёт на третий день, и срок в смете уже не действует."),
          p("Кто платит вывоз, мешки и контейнер, должно быть в объёме. Иначе «ставка за демонтаж» внезапно вырастет на парковку во дворе и простой. В старом фонде без лифта эта строка обычно тяжелее, чем в новостройке с грузовым подъёмом. Бригада, которая не хочет разговаривать с управником, на таком объекте теряет дни — и эти дни потом объясняют как «ремонт всегда затягивается»."),
          h2("Если уже началось и что-то не так"),
          p("Не доплачивайте «чтобы доделали» этап, который вы не приняли. Зафиксируйте замечания списком и фото при дневном свете, дайте понятный срок на исправление. Если бригада пропала после аванса, письменный объём и подтверждения переводов — это то, с чем можно идти дальше; голосовые сообщения держатся слабее. Нового человека на объект берите уже по оставшемуся объёму, а не с просьбой «доделайте как получится»."),
          p("Менять бригаду в середине тяжело, но обычно дешевле, чем оплатить вторые 50% за незакрытую инженерию и потом вскрывать стены под чистовой. Пока этап не принят, вторые 50% остаются у вас. В этом и смысл схемы, а не в недоверии «на всякий случай». Чем яснее закрыт предыдущий этап, тем меньше спор с новой бригадой про то, кто штробил и кто оставил пустоту под стяжкой."),
        ],
      en:
        [
          h2("Where the choice actually starts"),
          p("In Belgrade and Novi Sad it is easy to collect three promises in one evening: “turnkey”, “we start on Monday”, “a discount if you transfer today”. That is not a choice. A choice starts with the scope, with what the rate includes, and with when the second 50% leaves your account. Until that is on paper you are not comparing crews. You are comparing a tone of voice in a chat."),
          p("Ask for a short note you can forward: the area, the work, the labour rate without materials, the stages, a time for each stage, who buys the material, who takes the waste, and how a stage is accepted. If someone cannot write that down and says “we’ll see on site”, the second quote will appear on site, after the deposit."),
          h2("A written scope is worth more than a discount"),
          p("A contract, or at least a signed scope with a date, protects both sides. A tradesman in Serbia may work under different legal forms — do not guess the status for him. Ask for a PIB and whether he can issue an invoice or a fiscal receipt. For many clients that is a simple check that the person works in the open. If the legal form matters for your payment or accounts, ask an accountant or a lawyer, not a universal template from a chat."),
          p("The scope needs units: paint per m² of wall and ceiling, plumbing per wet area, doors per opening. Otherwise a month later there is nothing to close a dispute that “this was in the second room”. On RENOVA jobs the quote is cut into stages, and each stage is closed on its own. A discount that wipes those rows is not a discount. It is a blurred scope."),
          h2("How to pay without feeding empty promises"),
          p("A sound split is 50% before a stage starts and 50% after you accept it together. Do not hand over the whole sum “for materials and the lads” on day one. Buy the material yourself, or pay it against a delivery note to your address, not as a transfer “for purchasing” with no list and no receipt. If the crew wants more than 50% before work starts, or the second half “so we can order the tile early and not stall” with no invoice, that is a reason to stop, not a reason to be helpful."),
          p("Do not mix stages in one payment. The second 50% for the electrics is not paid with the paint deposit while the walls are still open and there has been no handover. Money for a closed stage and money for the next one are separate transfers. That makes it clearer what you have already paid if the job stops."),
          h2("Red flags before you transfer"),
          ul([
            "No written scope, only voice notes in Telegram and a promise to “sort it as we go”.",
            "“We can come tomorrow”, but not a single address where you can go and see finished work.",
            "A price well below the market band with no explanation of what was taken out: waste removal, tanking, closing of chases or the handover itself are often missing.",
            "A request to send everything to a “friend’s” card, or to “my wife, her limit is higher”.",
            "A refusal to set stages and to leave the second 50% until after handover.",
            "Pressure: “if you don’t decide today, the crew goes to another job”.",
          ]),
          p("A low rate can be honest if the scope is already there and the units are clear. But “turnkey at €180/m², everything included, materials ours” against labour of €250–400/m² without materials almost always means a different set of work, or a risk that the job stalls halfway. Compare the rows, not the headline total."),
          h2("How to look at past jobs"),
          p("Ask not only for photos on a phone, but for an address or a short meeting with a previous client on a finished job. In Belgrade and Novi Sad that is realistic: one bathroom in Vračar and one kitchen in New Belgrade tell you more than a filtered album. Look at tile planes, junctions at the risers, a labelled board, and the paint by a window in daylight. If the owner will show a bathroom corner and say how the tanking was accepted before the tile, that is worth more than ten “all great” reviews."),
          p("Keep the talk with a previous client specific: how the stage was accepted, whether they came back to fix work, whether the time held, who bought the material, how hidden work was handled. If a crew will not give a single live contact and hides the jobs behind stories in a messenger, that is the same signal as a missing quote."),
          h2("A quote you can actually compare"),
          p("Put two or three crews in one table: labour, materials, waste, time, and the rule for the second 50%. Bring the rates to the same units. A quote of “paint at €15/m² with paint included” and a quote of “€7/m² labour, you buy the paint” can meet in money and differ in who pays for a redo. A quote without bathroom tanking looks cleaner on paper and costs more after a leak into the flat below."),
          p("For a labour-only steer in 2026 on jobs in Belgrade and Novi Sad, keep the bands already set out elsewhere: strip-out €10–18/m², electrics €20–35, a bathroom with tanking and tile €180–280/m² of wet area, turnkey labour for the flat €250–400/m² of floor. If a figure falls outside the band, look first for a missing row, not for a “lucky discount”."),
          h2("The building, the manager and the waste"),
          p("A crew is not working in an empty field. They are in a building with neighbours and house rules. Before you start, ask the building manager about noisy-work hours, whether the lift may be used for waste, where a skip can stand, and whether residents need a notice. This is not a trifle. A job in central Belgrade with no agreement on waste can stop on day three, and the time in the quote no longer holds."),
          p("Who pays for removal, bags and the skip must be in the scope. Otherwise the “strip-out rate” suddenly grows by a yard parking fee and downtime. In an old building with no lift that row is usually heavier than in a new build with a goods lift. A crew that will not speak to the building manager loses days on a job like that — and later explains those days as “renovation always overruns”."),
          h2("If work has started and something is wrong"),
          p("Do not pay extra “so they finish” a stage you have not accepted. List the snags, take photos in daylight, and give a clear time to put them right. If the crew disappears after the deposit, a written scope and proof of transfers are what you can take further; voice notes hold up more weakly. Bring a new person onto the job against the remaining scope, not with a request to “just finish it somehow”."),
          p("Changing crews midway is hard, but it is usually cheaper than paying the second 50% for services that were never accepted and then opening the walls under a finish. Until you accept the stage, the second 50% stays with you. That is the point of the split, not a general distrust “just in case”. The cleaner the previous stage is closed, the less you argue with the new crew about who chased the walls and who left a hollow under the screed."),
        ],
      sr:
        [
          h2("Gde izbor zaista počinje"),
          p("U Beogradu i Novom Sadu lako je za jedno veče sakupiti tri obećanja: „ključ u ruke“, „počinjemo u ponedeljak“, „popust ako odmah uplatite“. To još nije izbor. Izbor počinje od obima radova, od toga šta ulazi u cenu i od toga kada odlaze drugih 50%. Dok toga nema na papiru, ekipe se ne porede. Poredite ton u ćaskanju, ne rad."),
          p("Zatražite kratko pismo ili poruku koju možete da prosledite: kvadratura, sastav radova, cena rada bez materijala, faze, rok za svaku fazu, ko kupuje materijal, ko odvozi šut, kako se prima faza. Ako čovek to ne može da napiše i nudi „videćemo na objektu, tamo se vidi“, na objektu će se baš pojaviti drugi predračun, već posle avansa."),
          h2("Pismeni obim vredi više od popusta"),
          p("Ugovor ili barem potpisan obim sa datumom štiti obe strane. U Srbiji privatni majstor može da radi na različite načine — ne pogađajte status umesto njega. Pitajte za PIB i da li može da izda račun ili fiskalni isečak. Za mnoge naručioce to je jednostavna provera da čovek radi otvoreno. Pravnu formu za vaš slučaj, ako je važna za plaćanje ili evidenciju, bolje je pitati knjigovođu ili pravnika, ne po univerzalnom šablonu iz ćaskanja."),
          p("U obimu moraju da stoje jedinice: krečenje po m² zida i plafona, vodovod po mokroj zoni, vrata po otvoru. Inače se za mesec dana spor „to je bilo u drugoj sobi“ nema čime da zatvori. Na objektima RENOVA predračun se seče na faze i svaka faza se zatvara posebno. Popust koji briše te redove nije popust, nego zamućen obim."),
          h2("Kako plaćati da ne hranite prazna obećanja"),
          p("Normalna šema je 50% pre početka faze i 50% posle zajedničkog prijema. Ne dajte ceo iznos „za materijal i momke“ prvog dana. Materijal bolje kupite sami ili platite po otpremnici na vašu adresu, ne uplatom „za nabavku“ bez spiska i bez računa. Ako ekipa traži više od 50% pre početka radova ili drugu polovinu „da naručimo pločice unapred i da ne stoji“ bez računa — to je razlog da stanu, ne da izađete u susret."),
          p("Ne mešajte faze u jednoj uplati. Drugih 50% za elektriku se ne plaća zajedno sa avansom za krečenje dok su zidovi još otvoreni i prijema nije bilo. Novac za zatvorenu fazu i novac za sledeću su različite uplate. Tako je jasnije šta ste već platili ako objekat stane."),
          h2("Crvene zastavice pre uplate"),
          ul([
            "Nema pismenog obima, samo glasovne na Telegramu i obećanje „sve ćemo usput da dogovorimo“.",
            "„Sutra možemo da dođemo“, ali nema nijedne adrese gde možete da vidite živ rad.",
            "Cena je znatno ispod tržišnog raspona bez objašnjenja šta je izbačeno: često fale odvoz šuta, hidroizolacija, zatvaranje šliceva ili sam prijem.",
            "Zahtev da sve prebacite na karticu „prijatelja“ ili „žene, ima veći limit“.",
            "Odbijanje da se faze i drugih 50% posle prijema stave na papir.",
            "Pritisak: „ako danas ne odlučite, ekipa ide na drugi objekat“.",
          ]),
          p("Jeftina cena može da bude poštena ako je obim već tu i jedinice su jasne. Ali rečenica „ključ u ruke za 180 €/m², sve uračunato, materijal naš“ uz tržišni rad 250–400 €/m² bez materijala skoro uvek znači drugi sastav radova ili rizik da objekat stane na pola. Ne poredite zbir, nego redove."),
          h2("Kako gledati ranije objekte"),
          p("Ne tražite samo fotografije na telefonu, nego adresu ili kratak sastanak sa naručiocem na predatom objektu. U Beogradu i Novom Sadu to je realno: jedno kupatilo na Vračaru i jedna kuhinja na Novom Beogradu kažu više od albuma sa filterima. Gledajte ravni pločica, spojeve uz vertikale, tablu sa oznakama grupa, ravnost krečenja kod prozora na dnevnom svetlu. Ako vlasnik može da pokaže ugao kupatila i da kaže kako je hidroizolacija primljena pre pločica, to vredi više od deset ocena „sve super“."),
          p("Kratak razgovor sa prethodnim naručiocem držite konkretnim: kako je faza primljena, da li su dolazili na ispravku, da li je rok pogođen, ko je kupovao materijal, kako su rešavali skriveni rad. Ako ekipa ne da nijedan živi kontakt i objekte krije iza priča u porukama, to je isti znak kao predračun koji ne postoji."),
          h2("Predračun koji možete da poredite"),
          p("Ispišite dve-tri ekipe u jednu tabelu: rad, materijal, šut, rokovi, uslov za drugih 50%. Svedite cene na iste jedinice. Predračun „krečenje 15 €/m² sa bojom“ i predračun „7 €/m² rad, boja vaša“ mogu da se slože u novcu i da se raziđu u odgovornosti za popravku. Predračun bez hidroizolacije kupatila lepše izgleda na papiru i skuplji je posle curenja kod suseda ispod."),
          p("Za orijentir rada bez materijala u 2026. na objektima u Beogradu i Novom Sadu držite raspone koji su već posebno razloženi: rušenje 10–18 €/m², elektrika 20–35, kupatilo sa hidroizolacijom i pločicama 180–280 €/m² mokre zone, stan ključ u ruke samo rad 250–400 €/m² poda. Ako cifra ispadne iz raspona, prvo tražite izbačeni red, ne „srećan popust“."),
          h2("Zgrada, upravnik i šut"),
          p("Ekipa ne radi u praznom polju, nego u zgradi sa susedima i pravilima. Pre početka pitajte upravnika: sate bučnih radova, da li se lift sme za šut, gde može kontejner, treba li obaveštenje stanarima. To nije sitnica. Objekat u centru Beograda bez dogovora o odvozu lako stane trećeg dana, i rok iz predračuna više ne važi."),
          p("Ko plaća odvoz, vreće i kontejner mora da stoji u obimu. Inače se „cena rušenja“ iznenada poveća za parking u dvorištu i zastoj. U staroj gradnji bez lifta taj red obično teži više nego u novogradnji sa teretnim liftom. Ekipa koja neće da razgovara sa upravnikom na takvom objektu gubi dane — i te dane kasnije objašnjava kao „renoviranje se uvek oduži“."),
          h2("Ako je već počelo i nešto nije u redu"),
          p("Ne doplaćujte „da završe“ fazu koju niste primili. Zabeležite primedbe spiskom i fotografijama na dnevnom svetlu i dajte jasan rok za ispravku. Ako ekipa nestane posle avansa, pismeni obim i potvrde uplata su ono s čim možete dalje; glasovne poruke stoje slabije. Novog čoveka na objekat uzimajte po preostalom obimu, ne sa molbom „dovršite kako god“."),
          p("Menjati ekipu u sredini je teško, ali obično jeftinije nego platiti drugih 50% za nezatvorene instalacije i potom otvarati zidove pod završnicom. Dok fazu ne primite, drugih 50% ostaju kod vas. U tome je smisao šeme, ne u nepoverenju „za svaki slučaj“. Što je prethodna faza jasnije zatvorena, to je manji spor sa novom ekipom o tome ko je šlicovao i ko je ostavio šupljinu pod košuljicom."),
        ],
    },
    faq: [
      {
        q: { ru: "Нужен ли договор с частным мастером в Белграде?", en: "Do you need a contract with a private tradesman in Belgrade?", sr: "Da li je potreban ugovor sa privatnim majstorom u Beogradu?" },
        a: { ru: "Письменный объём с этапами, суммами и сроками нужен в любом случае, даже если это короткое соглашение, а не толстый контракт. Статус мастера лучше уточнить у него и, если нужно, у специалиста: универсального шаблона «для всех случаев» из чата недостаточно.", en: "A written scope with stages, sums and times is needed in any case, even if it is a short agreement rather than a thick contract. Ask the tradesman about his status and, if it matters, ask a professional: a universal “works for everyone” template from a chat is not enough.", sr: "Pismeni obim sa fazama, iznosima i rokovima potreban je u svakom slučaju, čak i kad je to kratak sporazum, a ne debeli ugovor. Status majstora bolje je pitati njega i, ako treba, stručnjaka: univerzalni šablon „za sve slučajeve“ iz ćaskanja nije dovoljan." },
      },
      {
        q: { ru: "Какой аванс нормален за ремонт квартиры?", en: "What deposit is normal for an apartment renovation?", sr: "Koji avans je normalan za renoviranje stana?" },
        a: { ru: "На объектах RENOVA это 50% этапа до старта и 50% после приёмки. Аванс за всю квартиру сразу или больше половины до любых работ — плохой знак. Материал оплачивайте по накладной, не «пакетом на закупку».", en: "On RENOVA jobs it is 50% of the stage before it starts and 50% after handover. A deposit for the whole flat at once, or more than half before any work, is a bad sign. Pay for materials against a delivery note, not as a “purchasing bundle”.", sr: "Na objektima RENOVA to je 50% faze pre početka i 50% posle prijema. Avans za ceo stan odjednom ili više od polovine pre bilo kakvih radova loš je znak. Materijal plaćajte po otpremnici, ne „paketom za nabavku“." },
      },
      {
        q: { ru: "Что делать, если бригада просит доплату в середине работ?", en: "What if the crew asks for extra money in the middle of the job?", sr: "Šta ako ekipa traži doplatu u sredini radova?" },
        a: { ru: "Сначала разделите замечание и новую работу. То, что было в смете и сделано криво, закрывается до второй оплаты. Ниша, которой не было, или другой формат плитки — отдельная строка. Пока это не расписано, не переводите «чтобы не останавливать объект».", en: "First split a snag from new work. Something that was in the quote and came out wrong is closed before the second payment. A niche that was not there, or a different tile size, is a new row. Until that is written down, do not transfer “so the job doesn’t stop”.", sr: "Prvo razdvojite primedbu i novi rad. Ono što je bilo u predračunu i urađeno je krivo zatvara se pre druge uplate. Niša koje nije bilo ili drugi format pločica je novi red. Dok to nije raspisano, ne prebacujte „da objekat ne stane“." },
      },
      {
        q: { ru: "Можно ли сменить бригаду в середине ремонта?", en: "Can you change crews in the middle of a renovation?", sr: "Može li se ekipa promeniti u sredini renoviranja?" },
        a: { ru: "Да. Зафиксируйте, что уже сделано и что не принято, не оплачивайте непринятый этап и отдайте остаток объёма новой бригаде письменно. Чем яснее закрыт предыдущий этап, тем меньше спор про «это не мы штробили».", en: "Yes. Record what is already done and what was not accepted, do not pay for a stage you have not accepted, and hand the remaining scope to a new crew in writing. The clearer the previous stage is closed, the less you argue about “we didn’t chase those walls”.", sr: "Da. Zabeležite šta je već urađeno i šta nije primljeno, ne plaćajte neprimljenu fazu i preostali obim predajte novoj ekipi pismeno. Što je prethodna faza jasnije zatvorena, to je manji spor „to nismo mi šlicovali“." },
      },
    ],
  },
  {
    slug: "sroki-remonta-kvartiry-beograd",
    category: "prep",
    updated: "2026-11-23",
    title: {
      ru: "Сколько длится ремонт квартиры в Белграде: сроки по этапам",
      en: "How long an apartment renovation takes in Belgrade: timelines by stage",
      sr: "Koliko traje renoviranje stana u Beogradu: rokovi po fazama",
    },
    description: {
      ru: "Сроки ремонта квартиры в Белграде и Нови-Саде: сколько идут демонтаж, инженерия, стяжка, плитка и покраска, и почему «месяц под ключ» редко сходится на деле.",
      en: "How long apartment renovation takes in Belgrade and Novi Sad: strip-out, services, screed, tile and paint, and why a “turnkey month” rarely holds in practice.",
      sr: "Rokovi renoviranja stana u Beogradu i Novom Sadu: rušenje, instalacije, košuljica, pločice i krečenje, i zašto se „mesec ključ u ruke“ retko poklopi u praksi.",
    },
    lead: {
      ru: "Срок ремонта — не одна дата в объявлении, а сумма этапов, сушки и поставок. Квартира 55 м² в новостройке Нового Белграда и та же площадь в старом фонде — разный календарь, даже если ставка похожа.",
      en: "The length of a renovation is not one date in an advert. It is the stages, the drying and the deliveries added up. A 55 m² new-build in New Belgrade and the same area in an older building are different calendars, even when the labour rate looks alike.",
      sr: "Rok renoviranja nije jedan datum u oglasu, nego zbir faza, sušenja i isporuka. Stan od 55 m² u novogradnji na Novom Beogradu i ista površina u staroj gradnji različiti su kalendari, čak i kad je cena rada slična.",
    },
    body: {
      ru:
        [
          h2("Откуда берётся срок, а не «два месяца под ключ»"),
          p("В Белграде и Нови-Саде фраза «сделаем за месяц» без разбивки по этапам обычно означает, что в месяц не влезет сушка стяжки или ожидание плитки. Срок — это не характер бригады и не обещание в чате. Это последовательность работ плюс паузы, которые нельзя честно вычеркнуть. Пока нет графика по этапам, требовать «сдачу к такой-то дате» почти бессмысленно: неясно, какая пауза уже была заложена, а какая появится по ходу."),
          p("Ниже — ориентиры на осень 2026 года, не календарь под ваш ключ. Точный график появляется после замера и после того, как выбран материал, который реально есть на складе, а не «потом подберём по ходу». Если материал ещё не выбран, в сроке уже дыра, даже если руки свободны с понедельника."),
          h2("Косметика и полный цикл — разные календари"),
          p("Если инженерию не трогают, а делают покраску, пол и точечные правки, для квартиры 50–70 м² часто хватает двух-четырёх недель чистой работы — при условии, что стены уже относительно ровные и материал стоит на объекте. Это близко к вилке косметики 30–55 €/м² пола: объём меньше, и срок короче. Такая работа не становится «капитальным ремонтом за месяц»: в неё просто не входят разводка и мокрые зоны."),
          p("Полный цикл «под ключ» только работа 250–400 €/м² — демонтаж, электрика, сантехника, выравнивание, мокрые зоны, чистовая — для той же площади чаще занимает два-четыре месяца, иногда дольше. Разница не в том, что бригада «медленная». Разница в сушке, в согласовании стояков, в поставках крупноформатной плитки и в том, что этапы нельзя честно наложить друг на друга без остатка. Обещать нижнюю границу срока при верхней границе объёма — тот же приём, что обещать нижнюю границу цены без строк."),
          h2("Порядок этапов, который нельзя переставить"),
          ul([
            "Демонтаж и вывоз, если это не голая новостройка под чистовую.",
            "Разводка электрики и сантехники, щиток, выводы по схеме — пока стены открыты.",
            "Гидроизоляция мокрых зон до плитки, не «под неё потом, если останется день».",
            "Штукатурка, стяжка и время на набор прочности и сушку основания.",
            "Плитка, затем двери после понятной отметки пола, затем покраска и чистовой пол.",
            "Подключение техники и приёмка чистовой, а не «поживёте, подтянем».",
          ]),
          p("Красить до готовности инженерии или класть ламинат на сырую стяжку — самый короткий путь переделать объект и сдвинуть срок ещё раз. На объектах RENOVA следующий этап не стартует в счёт непринятого предыдущего: это бережёт и деньги, и календарь. Простой в два дня из-за приёмки дешевле, чем неделя на вскрытие уже покрашенной стены."),
          h2("Сколько закладывать на каждый этап"),
          p("Демонтаж квартиры 50–70 м² часто занимает от нескольких дней до полутора недель. В старом фонде без лифта вывоз сам по себе растягивает этап: бой плитки и старой стяжки не исчезают за вечер. Черновая электрика и сантехника обычно занимают одну-три недели, если схема точек готова заранее. Перенос стояка и ожидание соседа или управляющего дома могут добавить дни, которые не зависят от рук мастера и не «лечатся» сверхурочными."),
          p("Выравнивание стен и стяжка — это не только дни укладки, но и пауза до покрытия. Срок сушки зависит от толщины, состава смеси и влажности в квартире; это не «завтра кладём ламинат». Заложите резерв неделями, а не часами, и проверяйте готовность основания по состоянию, а не по календарю в чате. Плитка санузла 5–8 м² часто занимает одну-две недели чистой укладки; крупный формат с запилами ближе к верхней границе. Покраска и чистовой пол — от нескольких дней до двух недель после готовности поверхностей."),
          p("Эти вилки не складываются как сумма минимумов. Пока сохнет стяжка, часть работ в санузле или ожидание поставки могут идти параллельно. Но нельзя честно обещать, что все паузы схлопнутся в ноль. Календарь, в котором каждый этап записан по нижней границе и паузы вычеркнуты, почти всегда разъедется на второй-третьей неделе."),
          h2("Что двигает срок вверх"),
          ul([
            "Нет схемы точек и выводов до старта: каждая новая розетка после штукатурки — новый этап, а не мелочь «раз уж вы здесь».",
            "Материал «ещё выберем по ходу»: крупноформатная плитка, двери и техника с поставкой в несколько недель встречаются часто.",
            "Старый фонд: кривые стены, скрытые стояки, спуск мусора по лестнице.",
            "Правила дома: короткие часы шумных работ, запрет контейнера во дворе, очередь на лифт.",
            "Мокрые работы в сырой квартире без отопления осенью: основание сохнет дольше, чем в тёплом контуре.",
          ]),
          p("Верхняя граница вилки по цене часто совпадает с верхней границей по сроку. Кривая геометрия, перенос стояков и крупный формат требуют и часов работы, и календарного запаса. Нижняя граница — ровные стены, готовая схема, материал на объекте в первый день и дом, где можно работать полный день. Если из этих условий нет ни одного, обещать короткий срок бесполезно."),
          h2("Как собрать календарь, который можно требовать"),
          p("Попросите график не в виде одной даты сдачи, а по этапам: дата старта, дата приёмки, явная пауза на сушку. Впишите, кто отвечает за поставку каждой позиции. Если плитку везёте вы, задержка склада — ваш риск для календаря. Если везёт бригада, это должно быть в объёме, иначе сдвиг потом объяснят как «вы же сами хотели этот формат»."),
          p("Фиксируйте факт старта и факт приёмки коротко в переписке, с датой и фото. Срок сдвигается не «потому что ремонт это всегда так», а по конкретной причине: не пришёл материал, не готово основание, управник закрыл шумные работы, после демонтажа открылась новая работа. Тогда разговор про задержку на чём стоять, а график можно сдвинуть письменно, а не голосом в конце дня."),
          h2("Новостройка и старый фонд"),
          p("Новостройка под чистовую часто короче уже на старте: снимать старую плитку и вывозить тонны боя не нужно, и это экономия дней и строки демонтажа 10–18 €/м². Инженерию всё равно нельзя проводить «между покраской». Старый фонд почти всегда добавляет вскрытие, выравнивание и сюрпризы в стенах. На такой квартире закладывайте резерв и по сроку, и по смете: скрытая работа после демонтажа идёт отдельной строкой и отдельными днями, а не молчаливым удлинением «тех же двух месяцев»."),
          p("Если сравниваете две бригады только по дате «сдадим к первому», спросите, какая сушка и какой материал уже сидят в этой дате. Короткая дата с пустым списком условий почти всегда короче только на бумаге. В Белграде и Нови-Саде это видно на объектах, где плитку заказали после начала штукатурки, а потом винили календарь, а не закупку."),
        ],
      en:
        [
          h2("Where the time comes from, not “two months, turnkey”"),
          p("In Belgrade and Novi Sad a line that says “we’ll do it in a month”, with no split by stage, usually means the drying of the screed or the wait for tile will not fit in that month. Time is not a crew’s character, and it is not a promise in a chat. It is a sequence of work plus pauses you cannot honestly delete. Until there is a stage-by-stage plan, demanding “handover by this date” is almost empty: you cannot see which pause was already allowed for, and which will appear later."),
          p("What follows is a steer for autumn 2026, not a calendar for your keys. A real programme appears after a survey and after the material that is actually in stock has been chosen, not “we’ll pick it as we go”. If the material is not chosen yet, there is already a hole in the time, even if the crew is free on Monday."),
          h2("A refresh and a full cycle are different calendars"),
          p("If the services are left in place and you are painting, fitting a floor and doing local repairs, a 50–70 m² flat often takes two to four weeks of actual work — if the walls are already reasonably straight and the material is on site. That sits near the cosmetic band of €30–55/m² of floor: less work, and a shorter time. That job does not become “a full renovation in a month”. The wiring and the wet rooms are simply not in it."),
          p("A full turnkey cycle of labour only, at €250–400/m² — strip-out, electrics, plumbing, levelling, wet rooms, finishes — more often takes two to four months for the same area, and sometimes longer. The difference is not a “slow” crew. It is drying, agreement on risers, lead times for large-format tile, and the fact that stages cannot honestly be stacked with no remainder. Promising the short end of the time at the heavy end of the scope is the same trick as promising the low end of the price with rows missing."),
          h2("The order of stages you cannot rearrange"),
          ul([
            "Strip-out and waste removal, unless it is a bare new-build ready for finishes.",
            "Electrics and plumbing, the board, outlets to a drawing — while the walls are open.",
            "Tanking of wet rooms before tile, not “under it later if a day is left”.",
            "Plaster, screed, and time for the base to gain strength and dry.",
            "Tile, then doors once the floor level is known, then paint and the finished floor.",
            "Connection of appliances and acceptance of the finishes, not “you can live in it, we’ll tidy later”.",
          ]),
          p("Painting before the services are ready, or laying laminate on a damp screed, is the shortest way to redo the job and move the date again. On RENOVA jobs the next stage does not start against an unaccepted previous one: that protects the money and the calendar. Two days of waiting for a handover is cheaper than a week spent opening a wall that is already painted."),
          h2("How much time to allow for each stage"),
          p("Strip-out of a 50–70 m² flat often takes a few days to a week and a half. In an old building with no lift the waste alone stretches the stage: broken tile and old screed do not vanish in an evening. First-fix electrics and plumbing usually take one to three weeks if the plan of points is ready in advance. Moving a riser, or waiting for a neighbour or the building manager, can add days that do not depend on the tradesman’s hands and are not “cured” by overtime."),
          p("Levelling the walls and the screed is not only the days of laying. It is also the pause before a covering. Drying time depends on thickness, the mix and the humidity in the flat; it is not “we lay the laminate tomorrow”. Allow a reserve in weeks, not hours, and judge whether the base is ready by its condition, not by a date in the chat. Tile in a 5–8 m² bathroom often takes one to two weeks of laying; large-format work with mitres sits nearer the top of that band. Paint and the finished floor take a few days to two weeks after the surfaces are ready."),
          p("These bands do not add up as a sum of minimums. While the screed dries, some bathroom work or a wait for a delivery can run in parallel. But you cannot honestly promise that every pause will collapse to zero. A calendar in which every stage is written at its shortest and the pauses are deleted will almost always slip in the second or third week."),
          h2("What pushes the time out"),
          ul([
            "No plan of points and outlets before the start: each new socket after the plaster is a new stage, not a trifle “while you’re here”.",
            "Material still “to be chosen as we go”: large-format tile, doors and appliances with a lead time of several weeks are common.",
            "An old building: crooked walls, hidden risers, waste carried down the stairs.",
            "House rules: short hours for noisy work, no skip in the yard, a queue for the lift.",
            "Wet trades in a damp, unheated flat in autumn: the base dries more slowly than in a warm shell.",
          ]),
          p("The top of the price band often matches the top of the time band. Crooked geometry, moved risers and large-format tile take both working hours and calendar reserve. The low end is straight walls, a ready drawing, material on site on day one, and a building where a full day of work is allowed. If none of that is in place, a short programme is not a useful promise."),
          h2("How to build a calendar you can actually hold people to"),
          p("Ask for a programme not as one handover date, but by stages: a start date, an acceptance date, and a clear pause for drying. Write down who is responsible for each delivery. If you are bringing the tile, a warehouse delay is your risk to the calendar. If the crew is bringing it, that must sit in the scope, or a slip will later be explained as “you wanted that size”."),
          p("Record the actual start and the actual handover briefly in the chat, with a date and photos. Time moves not “because renovation is always like that”, but for a specific reason: the material did not arrive, the base is not ready, the manager closed noisy work, or new work appeared after strip-out. Then a talk about delay has something to stand on, and the programme can be moved in writing, not by a voice note at the end of the day."),
          h2("A new-build and an older flat"),
          p("A new-build ready for finishes is often shorter at the start: there is no old tile to take up and no tonnes of waste to carry, which already saves days and the strip-out row of €10–18/m². The services still cannot be run “between coats of paint”. An older flat almost always adds opening-up, levelling and surprises in the walls. On a job like that, allow a reserve in time and in the quote: hidden work after strip-out is a new row and new days, not a silent stretching of “the same two months”."),
          p("If you compare two crews only by the date “we’ll hand over on the first”, ask which drying and which material already sit inside that date. A short date with an empty list of conditions is almost always shorter only on paper. In Belgrade and Novi Sad you see it on jobs where the tile was ordered after the plaster had started, and the calendar was blamed instead of the purchasing."),
        ],
      sr:
        [
          h2("Odakle dolazi rok, a ne „dva meseca ključ u ruke“"),
          p("U Beogradu i Novom Sadu rečenica „uradićemo za mesec dana“ bez podele po fazama obično znači da u taj mesec ne staje sušenje košuljice ili čekanje pločica. Rok nije karakter ekipe i nije obećanje u ćaskanju. To je redosled radova plus pauze koje se ne mogu pošteno izbrisati. Dok nema grafikona po fazama, tražiti „predaju do tog datuma“ skoro je prazno: ne vidi se koja pauza je već uračunata, a koja će se pojaviti usput."),
          p("Ispod su orijentiri za jesen 2026, ne kalendar za vaše ključeve. Tačan grafikon dolazi posle merenja i posle izbora materijala koji stvarno postoji na stanju, ne „odabraćemo usput“. Ako materijal još nije izabran, u roku već postoji rupa, čak i ako su ruke slobodne od ponedeljka."),
          h2("Osveženje i pun ciklus različiti su kalendari"),
          p("Ako se instalacije ne diraju, a rade se krečenje, pod i tačkaste ispravke, za stan 50–70 m² često staju dve do četiri nedelje čistog rada — pod uslovom da su zidovi već relativno pravi i da je materijal na objektu. To je blizu raspona kozmetike 30–55 €/m² poda: obim je manji, i rok je kraći. Takav posao ne postaje „kapitalno renoviranje za mesec dana“. U njega jednostavno ne ulaze razvod i mokre zone."),
          p("Pun ciklus „ključ u ruke“ samo rad 250–400 €/m² — rušenje, elektrika, vodovod, ravnanje, mokre zone, završnica — za istu površinu češće traje dva do četiri meseca, ponekad i duže. Razlika nije u tome što je ekipa „spora“. Razlika je u sušenju, u dogovoru oko vertikala, u isporuci pločica velikog formata i u tome što se faze ne mogu pošteno naslagati bez ostatka. Obećati donju granicu roka uz gornju granicu obima isti je potez kao obećati donju cenu bez redova."),
          h2("Redosled faza koji se ne premešta"),
          ul([
            "Rušenje i odvoz, ako nije gola novogradnja pred završnicu.",
            "Razvod elektrike i vodovoda, tabla, izvodi po šemi — dok su zidovi otvoreni.",
            "Hidroizolacija mokrih zona pre pločica, ne „pod njih posle, ako ostane dan“.",
            "Malter, košuljica i vreme da podloga dobije čvrstoću i da se osuši.",
            "Pločice, zatim vrata posle jasne kote poda, zatim krečenje i završni pod.",
            "Priključak aparata i prijem završnice, ne „uselite se, doterati ćemo“.",
          ]),
          p("Krečiti pre nego što su instalacije spremne ili stavljati laminat na vlažnu košuljicu najkraći je put da se objekat prepravi i da se rok pomeri još jednom. Na objektima RENOVA sledeća faza ne kreće na račun neprimljene prethodne: to čuva i novac i kalendar. Zastoj od dva dana zbog prijema jeftiniji je od nedelje otvaranja već okrečenog zida."),
          h2("Koliko vremena ostaviti za svaku fazu"),
          p("Rušenje stana 50–70 m² često traje od nekoliko dana do nedelju i po. U staroj gradnji bez lifta sam odvoz razvlači fazu: lom pločica i stara košuljica ne nestaju za veče. Gruba elektrika i vodovod obično traju jednu do tri nedelje ako je šema tačaka spremna unapred. Pomeranje vertikale i čekanje suseda ili upravnika mogu da dodaju dane koji ne zavise od ruku majstora i ne „leče se“ prekovremenim radom."),
          p("Ravnanje zidova i košuljica nisu samo dani ugradnje, nego i pauza do obloge. Rok sušenja zavisi od debljine, smeše i vlage u stanu; to nije „sutra stavljamo laminat“. Ostavite rezervu u nedeljama, ne u satima, i spremnost podloge proveravajte po stanju, ne po kalendaru u ćaskanju. Pločice u kupatilu 5–8 m² često traže jednu do dve nedelje čiste ugradnje; veliki format sa rezovima bliži je gornjoj granici. Krečenje i završni pod traju od nekoliko dana do dve nedelje posle spremnosti površina."),
          p("Ti rasponi se ne sabiraju kao zbir minimuma. Dok se košuljica suši, deo radova u kupatilu ili čekanje isporuke mogu da idu paralelno. Ali se ne može pošteno obećati da će se sve pauze skupiti na nulu. Kalendar u kome je svaka faza upisana po donjoj granici i pauze su izbačene skoro uvek se raziđe već druge ili treće nedelje."),
          h2("Šta diže rok naviše"),
          ul([
            "Nema šeme tačaka i izvoda pre početka: svaka nova utičnica posle maltera nova je faza, ne sitnica „kad ste već tu“.",
            "Materijal „još biramo usput“: pločice velikog formata, vrata i aparati sa isporukom od nekoliko nedelja česti su.",
            "Stara gradnja: krivi zidovi, skrivene vertikale, spuštanje šuta niz stepenice.",
            "Pravila zgrade: kratki sati bučnih radova, zabrana kontejnera u dvorištu, red za lift.",
            "Mokri radovi u vlažnom stanu bez grejanja u jesen: podloga se suši duže nego u toploj ljusci.",
          ]),
          p("Gornja granica cene često se poklapa sa gornjom granicom roka. Kriva geometrija, pomeranje vertikala i veliki format traže i sate rada i kalendarsku rezervu. Donja granica su ravni zidovi, gotova šema, materijal na objektu prvog dana i zgrada u kojoj se sme raditi pun dan. Ako od toga nema ništa, kratak rok nije korisno obećanje."),
          h2("Kako složiti kalendar koji možete da tražite"),
          p("Zatražite grafikon ne kao jedan datum predaje, nego po fazama: datum početka, datum prijema, jasna pauza za sušenje. Upišite ko odgovara za isporuku svake stavke. Ako pločice dovozite vi, zastoj skladišta je vaš rizik za kalendar. Ako ih vozi ekipa, to mora da stoji u obimu, inače će pomeranje kasnije biti objašnjeno kao „pa hteli ste taj format“."),
          p("Beležite činjenicu početka i činjenicu prijema kratko u prepisci, sa datumom i fotografijama. Rok se pomera ne „zato što je renoviranje uvek takvo“, nego iz konkretnog razloga: materijal nije stigao, podloga nije spremna, upravnik je zatvorio bučne radove, posle rušenja se pojavio novi rad. Onda razgovor o kašnjenju ima na čemu da stoji, i grafikon se pomera pismeno, ne glasovnom porukom na kraju dana."),
          h2("Novogradnja i stara gradnja"),
          p("Novogradnja pred završnicu često je kraća već na startu: ne skida se stara keramika i ne odvoze se tone šuta, pa to već štedi dane i red rušenja 10–18 €/m². Instalacije se ipak ne mogu raditi „između krečenja“. Stara gradnja skoro uvek dodaje otvaranje, ravnanje i iznenađenja u zidovima. Na takvom stanu ostavite rezervu i u roku i u predračunu: skriveni rad posle rušenja ide kao novi red i novi dani, ne kao tiho produženje „istih dva meseca“."),
          p("Ako poredite dve ekipe samo po datumu „predajemo prvog“, pitajte koje sušenje i koji materijal već sede u tom datumu. Kratak datum s praznim spiskom uslova skoro uvek je kraći samo na papiru. U Beogradu i Novom Sadu to se vidi na objektima gde su pločice naručene posle početka malterisanja, a krivica je pala na kalendar, ne na nabavku."),
        ],
    },
    faq: [
      {
        q: { ru: "Сколько длится ремонт квартиры 50–70 м² в Белграде?", en: "How long does renovation of a 50–70 m² flat take in Belgrade?", sr: "Koliko traje renoviranje stana 50–70 m² u Beogradu?" },
        a: { ru: "Косметика без переноса инженерии часто занимает две-четыре недели. Полный цикл с разводкой, выравниванием и мокрыми зонами обычно два-четыре месяца, иногда дольше из-за сушки и поставок. Точнее скажет график по этапам после замера.", en: "A refresh with no moved services often takes two to four weeks. A full cycle with new wiring, levelling and wet rooms is usually two to four months, sometimes longer because of drying and deliveries. A stage-by-stage programme after a survey is more precise.", sr: "Osveženje bez pomeranja instalacija često traje dve do četiri nedelje. Pun ciklus sa razvodom, ravnanjem i mokrim zonama obično je dva do četiri meseca, ponekad duže zbog sušenja i isporuka. Tačniji je grafikon po fazama posle merenja." },
      },
      {
        q: { ru: "Можно ли сделать капитальный ремонт квартиры за месяц?", en: "Can you do a full apartment renovation in a month?", sr: "Može li se kapitalno renoviranje stana uraditi za mesec dana?" },
        a: { ru: "Редко, если в объём входят стяжка, новая электрика и санузел. Сушка основания и поставка плитки сами по себе могут занять больше недели. Месяц реален скорее для косметики с готовыми стенами и материалом на объекте.", en: "Rarely, if the scope includes a screed, new electrics and a bathroom. Drying of the base and a tile delivery can themselves take more than a week. A month is more realistic for a refresh with ready walls and material already on site.", sr: "Retko, ako u obim ulaze košuljica, nova elektrika i kupatilo. Sušenje podloge i isporuka pločica i same mogu da potraju više od nedelje. Mesec je realniji za osveženje sa spremnim zidovima i materijalom već na objektu." },
      },
      {
        q: { ru: "Почему бригада сдвигает срок ремонта?", en: "Why does a crew move the renovation date?", sr: "Zašto ekipa pomera rok renoviranja?" },
        a: { ru: "Частые причины — материал не пришёл, основание не готово к покрытию, после демонтажа открылись скрытые работы, в доме ограничили шумные часы. Каждую причину стоит записывать. Сдвиг «просто затянулось» без причины — уже вопрос к ведению объекта, не к календарю как таковому.", en: "Common reasons are that the material did not arrive, the base is not ready to cover, hidden work appeared after strip-out, or the building limited noisy hours. Each reason is worth writing down. A slip that is “just delayed” with no reason is already a question of how the job is run, not of the calendar itself.", sr: "Česti razlozi su da materijal nije stigao, podloga nije spremna za oblogu, posle rušenja se pojavio skriveni rad ili je zgrada skratila bučne sate. Svaki razlog vredi zapisati. Pomeranje „samo se odužilo“ bez razloga već je pitanje vođenja objekta, ne kalendara samog po sebi." },
      },
      {
        q: { ru: "Когда можно начинать следующий этап ремонта?", en: "When can the next renovation stage start?", sr: "Kada sme da krene sledeća faza renoviranja?" },
        a: { ru: "После приёмки предыдущего, а не «чтобы не простаивать». Краска по открытым штробам и пол по сырой стяжке экономят дни и стоят переделки, которая сдвигает срок ещё раз.", en: "After the previous stage has been accepted, not “so no one stands idle”. Paint over open chases and a floor on a damp screed save days and cost a redo, which moves the date again.", sr: "Posle prijema prethodne, ne „da se ne stoji“. Boja preko otvorenih šliceva i pod na vlažnoj košuljici štede dane i koštaju preradu, koja opet pomera rok." },
      },
    ],
  },
  {
    slug: "remont-starogo-fonda-beograd",
    category: "prep",
    updated: "2026-11-23",
    title: {
      ru: "Ремонт квартиры в старом фонде Белграда: стены, стояки и скрытые работы",
      en: "Renovating an old apartment in Belgrade: walls, risers and hidden work",
      sr: "Renoviranje stana u staroj gradnji Beograda: zidovi, vertikale i skriveni radovi",
    },
    description: {
      ru: "Ремонт квартиры в старом фонде Белграда и Нови-Сада: кривые стены, старая инженерия, стояки, вывоз без лифта и как закладывать скрытые работы в смету.",
      en: "Renovating an old flat in Belgrade and Novi Sad: crooked walls, old services, risers, waste without a lift, and how to allow for hidden work in the quote.",
      sr: "Renoviranje stana u staroj gradnji Beograda i Novog Sada: krivi zidovi, stare instalacije, vertikale, odvoz bez lifta i kako u predračun staviti skriveni rad.",
    },
    lead: {
      ru: "В новостройке под чистовую часто нет старой плитки и тонны боя. В старом фонде Белграда и Нови-Сада объект почти всегда начинается со вскрытия: под слоями оказываются кривые стены, слабая разводка и мокрые углы, которых не было на фото.",
      en: "A new-build ready for finishes often has no old tile and no tonnes of waste. In an older flat in Belgrade or Novi Sad the job almost always starts with opening-up: under the layers you find crooked walls, weak wiring and wet corners that were not in the listing photos.",
      sr: "U novogradnji pred završnicu često nema starih pločica i tona šuta. U staroj gradnji Beograda i Novog Sada objekat skoro uvek počinje otvaranjem: pod slojevima ispadnu krivi zidovi, slaba instalacija i mokri uglovi kojih nije bilo na fotografijama oglasa.",
    },
    body: {
      ru:
        [
          h2("Чем старый фонд не похож на новостройку"),
          p("Отдельный разбор квартиры под чистовую в новостройке описывает другой старт: демонтаж 10–18 €/м² там часто не нужен. В старом фонде Белграда и Нови-Сада работа почти всегда начинается со вскрытия. Под покраской, стяжкой и старой плиткой оказываются кривая геометрия, изношенная разводка и следы протечек, которых не было в объявлении о продаже или аренде."),
          p("«Старый фонд» — не один тип дома. Довоенная и межвоенная кладка в центре, послевоенный кирпич и панельные дома разных десятилетий ведут себя по-разному. Общее одно: до вскрытия смета — ориентир, а не финал. Скрытую работу нужно заранее договориться считать отдельной строкой, с оценкой до продолжения, а не «раз уж вскрыли, делайте». Иначе объект в старом доме превращается в бесконечную доплату без понятного остатка."),
          h2("Стены, полы и геометрия"),
          p("В старых квартирах ровная плоскость под покраску без выравнивания — редкость. Штукатурка 5–12 €/м² и шпаклёвка с покраской 5–9 €/м² стены и потолка часто идут ближе к верхней границе вилки: больше маяков, больше слоя, больше подрезки на примыканиях к косякам и стоякам. Пол может иметь уклон к стояку или «ступеньку» между комнатами. Стяжка 8–14 €/м² тогда тоже ближе к верху, а чистовой пол и двери нельзя заказывать, пока нет общей отметки."),
          p("Гипсокартон 14–26 €/м² и короба помогают спрятать разводку там, где штроба в слабой перегородке опаснее, чем короб. Это не «удорожание ради красоты», а решение по месту после вскрытия. Заложите в ожидания, что часть стен может потребовать дополнительного выравнивания или короба. Нижняя граница вилки по выравниванию в таком доме часто слишком оптимистична, если смотреть только на фото при вечернем свете."),
          h2("Электрика, которая не тянет новую кухню"),
          p("Старый щиток и разводка часто рассчитаны на другую нагрузку: без запаса под варочную, духовку, посудомойку и кондиционеры. Вилка новой разводки 20–35 €/м² в таком доме чаще ближе к верхней границе: трассы длиннее, штроба сложнее, щиток иногда переносят. Кабель, автоматы, подрозетники и фурнитура по-прежнему отдельно. «Оставить как было и только перекрасить» вскрывается, когда кухня уже заказана, а отдельного контура на варочную нет."),
          p("До демонтажа имеет смысл открыть щиток и набросать схему точек. Слаботочку — интернет, домофон, телевидение — дешевле заложить пустым каналом, пока стены открыты. В старом фонде сверлить уже покрашенные стены больнее и дороже, чем заложить канал в тот же день, когда идёт разводка силовой. Приёмка электрики, как и в любой квартире, нужна до закрытия стен: подписанный щиток, проверка контуров, выводы по схеме."),
          h2("Стояки, соседи и мокрые зоны"),
          p("Вода и канализация в старом фонде часто общие на стояк. Перенос вывода или замена участка на вашем этаже может затронуть соседа сверху или снизу. Это согласовывают заранее, а не в день, когда труба уже срезана. Ставка сантехники 85–130 €/м² мокрой зоны — про работу; трубы и приборы отдельно. Верх вилки обычно там, где стояк неудобный, доступ тесный и гидроизоляцию приходится класть по живой, неровной основе."),
          p("Санузел в старом фонде — место, где экономия на гидроизоляции обходится дороже всего: под вами чужая квартира, а не технический этаж новостройки. Гидроизоляция, лента в углах и приёмка до плитки обязательны. Работа санузла с гидроизоляцией и плиткой 180–280 €/м² мокрой зоны в старом доме редко сидит на нижней границе, если основание пришлось выравнивать и переносить выводы. Протечка после «укладки по старой стяжке, и так сойдёт» чинится уже чужим потолком."),
          h2("Дом, лестница и вывоз"),
          p("Во многих домах центра Белграда и старых кварталов Нови-Сада нет грузового лифта, а управник жёстко ограничивает часы шума и место под контейнер. Демонтаж тогда длится дольше, и строка вывоза весит больше, чем в новостройке. Это вписывают в объём до старта: кто заказывает контейнер, куда спускают бой плитки, можно ли пользоваться лифтом, в какие часы можно шуметь. Иначе срок и сумма демонтажа 10–18 €/м² перестают быть ориентиром уже на второй день."),
          p("Соседи в старом фонде слышат работу ближе. Короткое уведомление о шумных работах и соблюдение часов дома снимают часть конфликтов ещё до первой перфорации. Бригада, которая не готова разговаривать с управником, на таком объекте теряет дни, а потом объясняет это «сложностями старого фонда». Сложность настоящая, но она должна быть в календаре заранее, а не как сюрприз после аванса."),
          h2("Как закладывать сюрприз в смету, не раздувая её заранее"),
          p("Не нужно заранее удваивать всю смету «на всякий случай». Нужно другое: замер и, где это безопасно, вскрытие сомнительных мест до большой закупки; вилка по выравниванию и инженерии, а не одна нижняя цифра; правило, что скрытая работа после демонтажа оформляется новой строкой, оценивается и принимается отдельно. Так вы не платите за несуществующий объём и не спорите, когда из стены выходит мокрый стояк."),
          p("Для ориентира: труд «под ключ» 250–400 €/м² пола в старом фонде чаще живёт в верхней половине вилки, плюс демонтаж 10–18 €/м², плюс материал отдельно. На квартире 55 м² пакет работы 55 × 250–400 € остаётся ориентиром, но выравнивание, перенос выводов и усиление электрики могут добавить отдельные строки. Фиксируйте их после вскрытия, до продолжения, а не молчанием в чате через две недели."),
          h2("Что решить до вскрытия"),
          ul([
            "Схема электрики и кухни, а не «розетки как стояли», если нагрузка растёт.",
            "Остаются ли стояки на месте, и кто говорит с соседями, если нет.",
            "Санузел: гидроизоляция и формат плитки до заказа крупного формата, который может не сесть в кривую нишу.",
            "Кто покупает материал и где он хранится на объекте, если сухого склада нет.",
            "Правила управника по шуму, лифту и мусору, записанные до первого рабочего дня.",
          ]),
          p("После вскрытия решения дороже: плитка уже едет, мебель уже заказана, а вывод оказался на пятнадцать сантиметров левее. В старом фонде порядок «сначала инженерия и геометрия, потом чистовая» — не пожелание дизайнера, а способ не выкинуть чистовой материал. Если сравниваете бригады, спросите не только цену «под ключ», но и как они оформляют скрытые работы. Ответ «решим на месте» в таком доме обычно дороже, чем вилка, проговорённая заранее."),
        ],
      en:
        [
          h2("How an older flat is not a new-build"),
          p("The separate note on a new-build ready for finishes describes a different start: the strip-out row of €10–18/m² is often not needed there. In an older flat in Belgrade or Novi Sad the work almost always begins with opening-up. Under the paint, the screed and the old tile you find crooked geometry, tired wiring and traces of leaks that were not in the sale or rental listing."),
          p("“Old stock” is not one kind of building. Pre-war and inter-war masonry in the centre, post-war brick and panel blocks of different decades do not behave the same way. What they share is this: until the opening-up, the quote is a steer, not a final figure. Hidden work should be agreed in advance as a separate row, priced before it continues, not as “now that it’s open, just do it”. Otherwise a job in an older building becomes an endless extra without a clear remainder."),
          h2("Walls, floors and geometry"),
          p("In older flats a flat plane ready for paint, with no levelling, is unusual. Plaster at €5–12/m² and skim and paint at €5–9/m² of wall and ceiling often sit nearer the top of the band: more dots, more thickness, more cutting at door linings and risers. The floor may fall towards a stack or have a “step” between rooms. Screed at €8–14/m² then also sits higher, and the finished floor and the doors should not be ordered until there is a common level."),
          p("Drywall at €14–26/m² and boxing help hide runs where a chase in a weak partition is riskier than a box. That is not “extra cost for looks”. It is a decision on the spot after opening-up. Build into your expectations that some walls may need more levelling or boxing. The low end of the levelling band is often too hopeful in a house like this if you have only looked at photos in evening light."),
          h2("Electrics that will not carry a new kitchen"),
          p("An old board and old wiring are often sized for a different load: no spare capacity for a hob, an oven, a dishwasher and air conditioners. A new layout at €20–35/m² in a house like this more often sits near the top of the band: longer runs, harder chases, sometimes a moved board. Cable, breakers, back boxes and fittings are still separate. “Leave it as it is and just repaint” comes to light when the kitchen is already ordered and there is no dedicated circuit for the hob."),
          p("Before strip-out it is worth opening the board and sketching a plan of points. Data — internet, the entry phone, television — is cheaper as an empty conduit while the walls are open. In an older flat, drilling walls that are already painted is more painful and more expensive than laying a conduit on the same day as the power. As in any flat, the electrics should be accepted before the walls close: a labelled board, circuits tested, outlets where the drawing says."),
          h2("Risers, neighbours and wet rooms"),
          p("Water and waste in an older building often share a stack. Moving an outlet or replacing a section on your floor can affect the neighbour above or below. That is agreed in advance, not on the day the pipe has already been cut. The plumbing rate of €85–130/m² of wet area is labour; pipes and fittings are separate. The top of the band is usually where the riser is awkward, the access is tight and the tanking has to go onto a live, uneven base."),
          p("The bathroom in an older flat is where saving on tanking costs the most: below you is someone else’s ceiling, not a new-build service floor. Tanking, tape at the corners and acceptance before tile are not optional. Labour for a bathroom with tanking and tile at €180–280/m² of wet area rarely sits at the low end in an old house if the base had to be levelled and the outlets moved. A leak after “we’ll tile the old screed, it’ll be fine” is repaired on somebody else’s ceiling."),
          h2("The building, the stairs and the waste"),
          p("In many buildings in central Belgrade and in the older quarters of Novi Sad there is no goods lift, and the manager is strict about noisy hours and where a skip may stand. Strip-out then takes longer, and the waste row weighs more than in a new-build. Put it in the scope before you start: who orders the skip, where broken tile is carried down, whether the lift may be used, and which hours are allowed for noise. Otherwise the time and the strip-out figure of €10–18/m² stop being a steer on day two."),
          p("Neighbours in an older building hear the work more closely. A short notice of noisy work and respect for the house hours remove some of the conflict before the first drill. A crew that is not ready to speak to the manager loses days on a job like this, and later explains it as “the trouble with old buildings”. The difficulty is real, but it should be in the calendar in advance, not as a surprise after the deposit."),
          h2("How to allow for a surprise without inflating the quote in advance"),
          p("You do not need to double the whole quote “just in case”. You need something else: a survey and, where it is safe, opening of doubtful spots before a large purchase; a band for levelling and services, not a single low figure; and a rule that hidden work after strip-out is written as a new row, priced and accepted on its own. That way you do not pay for work that does not exist, and you do not argue when a wet riser comes out of a wall."),
          p("As a steer: turnkey labour of €250–400/m² of floor in older stock more often lives in the upper half of the band, plus strip-out at €10–18/m², plus materials separately. On a 55 m² flat the labour package of 55 × €250–400 remains a steer, but levelling, moved outlets and a heavier electrical layout can add separate rows. Record them after opening-up, before you continue, not in silence in the chat two weeks later."),
          h2("What to settle before opening-up"),
          ul([
            "A plan for the electrics and the kitchen, not “sockets as they were”, if the load is going up.",
            "Whether the risers stay where they are, and who speaks to the neighbours if they do not.",
            "The bathroom: tanking and the tile size before you order a large format that may not sit in a crooked niche.",
            "Who buys the material and where it is stored on site if there is no dry store.",
            "The manager’s rules on noise, the lift and waste, written down before the first working day.",
          ]),
          p("After opening-up the decisions cost more: the tile is already on its way, the furniture is already ordered, and the outlet has come out fifteen centimetres to the left. In an older flat the order “services and geometry first, finishes later” is not a designer’s wish. It is how you avoid throwing finished material away. If you are comparing crews, ask not only the “turnkey” price, but how they record hidden work. The answer “we’ll decide on site” in a house like this is usually more expensive than a band agreed in advance."),
        ],
      sr:
        [
          h2("Po čemu se stara gradnja ne poklapa sa novogradnjom"),
          p("Poseban tekst o stanu u novogradnji pred završnicu opisuje drugi start: red rušenja 10–18 €/m² tamo često nije potreban. U staroj gradnji Beograda i Novog Sada rad skoro uvek počinje otvaranjem. Ispod krečenja, košuljice i starih pločica ispadnu kriva geometrija, istrošena instalacija i tragovi curenja kojih nije bilo u oglasu za prodaju ili izdavanje."),
          p("„Stara gradnja“ nije jedan tip zgrade. Predratna i međuratna zidana u centru, posleratna cigla i panelni blokovi različitih decenija ne ponašaju se isto. Zajedničko je ovo: do otvaranja predračun je orijentir, ne konačan iznos. Skriveni rad treba unapred dogovoriti kao poseban red, sa procenom pre nastavka, ne kao „kad je već otvoreno, radite“. Inače objekat u staroj kući postaje beskrajna doplata bez jasnog ostatka."),
          h2("Zidovi, podovi i geometrija"),
          p("U starim stanovima ravna ravan pred krečenje, bez ravnanja, retkost je. Malter 5–12 €/m² i glet sa krečenjem 5–9 €/m² zida i plafona često idu bliže gornjoj granici raspona: više merica, deblji sloj, više sečenja uz štokove i vertikale. Pod može imati pad ka vertikali ili „stepenik“ između soba. Košuljica 8–14 €/m² tada takođe ide naviše, a završni pod i vrata ne treba naručivati dok nema zajedničke kote."),
          p("Gips-karton 14–26 €/m² i kutije pomažu da se razvod sakrije tamo gde je šlic u slaboj pregradi opasniji od kutije. To nije „poskupljenje radi izgleda“, nego odluka na licu mesta posle otvaranja. U očekivanja stavite da deo zidova može da zatraži dodatno ravnanje ili kutiju. Donja granica raspona za ravnanje u takvoj kući često je previše optimistična ako se gleda samo fotografija pri večernjem svetlu."),
          h2("Elektrika koja ne nosi novu kuhinju"),
          p("Stara tabla i stari razvod često su računati za drugo opterećenje: bez rezerve za ploču, rernu, mašinu za sudove i klime. Raspon novog razvoda 20–35 €/m² u takvoj kući češće je bliži gornjoj granici: trase su duže, šlic je teži, tabla se ponekad premešta. Kabl, osigurači, dozne i oprema i dalje idu odvojeno. „Ostaviti kako jeste i samo okrečiti“ otkrije se kad je kuhinja već naručena, a nema posebnog kola za ploču."),
          p("Pre rušenja ima smisla otvoriti tablu i skicirati šemu tačaka. Slabostruju — internet, interfon, televiziju — jeftinije je staviti praznom cevi dok su zidovi otvoreni. U staroj gradnji bušenje već okrečenih zidova bolnije je i skuplje nego položiti cev istog dana kad ide razvod struje. Prijem elektrike, kao i u svakom stanu, treba pre zatvaranja zidova: označena tabla, provera kola, izvodi po šemi."),
          h2("Vertikale, susedi i mokre zone"),
          p("Voda i kanalizacija u staroj gradnji često su zajedničke na vertikalu. Pomeranje izvoda ili zamena deonice na vašem spratu može da zahvati suseda iznad ili ispod. To se dogovara unapred, ne na dan kad je cev već odsečena. Cena vodovoda 85–130 €/m² mokre zone je rad; cevi i oprema idu odvojeno. Gornja granica obično je tamo gde je vertikala nezgodna, prilaz tesan i hidroizolaciju treba staviti na živu, neravnu podlogu."),
          p("Kupatilo u staroj gradnji mesto je gde ušteda na hidroizolaciji najviše košta: ispod vas je tuđi stan, ne tehnički sprat novogradnje. Hidroizolacija, traka u uglovima i prijem pre pločica nisu opcija. Rad kupatila sa hidroizolacijom i pločicama 180–280 €/m² mokre zone u staroj kući retko sedi na donjoj granici ako je podlogu trebalo ravnati i izvode pomerati. Curenje posle „stavićemo na staru košuljicu, biće dobro“ popravlja se već na tuđem plafonu."),
          h2("Zgrada, stepenice i odvoz"),
          p("U mnogim zgradama centra Beograda i starih četvrti Novog Sada nema teretnog lifta, a upravnik strogo ograničava sate buke i mesto za kontejner. Rušenje tada traje duže, i red odvoza teži više nego u novogradnji. To se upisuje u obim pre početka: ko naručuje kontejner, kuda se spušta lom pločica, sme li se lift, u koje sate sme buka. Inače rok i iznos rušenja 10–18 €/m² već drugog dana prestaju da budu orijentir."),
          p("Susedi u staroj gradnji čuju rad izbliza. Kratko obaveštenje o bučnim radovima i poštovanje sati zgrade skidaju deo sukoba pre prve bušilice. Ekipa koja nije spremna da razgovara sa upravnikom na takvom objektu gubi dane, pa to kasnije objašnjava kao „teškoće stare gradnje“. Teškoća je stvarna, ali treba da stoji u kalendaru unapred, ne kao iznenađenje posle avansa."),
          h2("Kako u predračun staviti iznenađenje, a ne naduvati ga unapred"),
          p("Ne treba unapred udvostručiti ceo predračun „za svaki slučaj“. Treba nešto drugo: merenje i, gde je bezbedno, otvaranje sumnjivih mesta pre velike kupovine; raspon za ravnanje i instalacije, ne jedna donja cifra; i pravilo da se skriveni rad posle rušenja piše kao novi red, procenjuje i prima posebno. Tako ne plaćate nepostojeći obim i ne sporite se kad iz zida izađe mokra vertikala."),
          p("Za orijentir: rad „ključ u ruke“ 250–400 €/m² poda u staroj gradnji češće živi u gornjoj polovini raspona, plus rušenje 10–18 €/m², plus materijal odvojeno. Na stanu od 55 m² paket rada 55 × 250–400 € ostaje orijentir, ali ravnanje, pomeranje izvoda i jača elektrika mogu da dodaju posebne redove. Beležite ih posle otvaranja, pre nastavka, ne ćutanjem u ćaskanju dve nedelje kasnije."),
          h2("Šta rešiti pre otvaranja"),
          ul([
            "Šema elektrike i kuhinje, ne „utičnice kako su stajale“, ako opterećenje raste.",
            "Ostaju li vertikale gde jesu, i ko govori sa susedima ako ne.",
            "Kupatilo: hidroizolacija i format pločica pre porudžbine velikog formata koji može da ne stane u krivu nišu.",
            "Ko kupuje materijal i gde se čuva na objektu ako nema suvog skladišta.",
            "Pravila upravnika o buci, liftu i šutu, upisana pre prvog radnog dana.",
          ]),
          p("Posle otvaranja odluke su skuplje: pločice već idu, nameštaj je već naručen, a izvod je ispao petnaest centimetara ulevo. U staroj gradnji redosled „prvo instalacije i geometrija, potom završnica“ nije želja dizajnera, nego način da se ne baci završni materijal. Ako poredite ekipe, pitajte ne samo cenu „ključ u ruke“, nego i kako evidentiraju skriveni rad. Odgovor „rešićemo na licu mesta“ u takvoj kući obično je skuplji od raspona dogovorenog unapred."),
        ],
    },
    faq: [
      {
        q: { ru: "Дороже ли ремонт в старом фонде, чем в новостройке?", en: "Is renovation in an older building more expensive than in a new-build?", sr: "Da li je renoviranje u staroj gradnji skuplje nego u novogradnji?" },
        a: { ru: "Часто да, в основном из-за демонтажа, выравнивания и старой инженерии. Нижняя граница вилки «под ключ» 250 €/м² реже достижима, если стены кривые и стояки неудобные. Точнее скажет замер и вскрытие, не фото из объявления.", en: "Often yes, mainly because of strip-out, levelling and old services. The low end of the turnkey band, €250/m², is harder to reach if the walls are crooked and the risers are awkward. A survey and opening-up are more precise than listing photos.", sr: "Često da, uglavnom zbog rušenja, ravnanja i starih instalacija. Donja granica raspona „ključ u ruke“ 250 €/m² ređe je dostižna ako su zidovi krivi i vertikale nezgodne. Tačniji su merenje i otvaranje, ne fotografije iz oglasa." },
      },
      {
        q: { ru: "Можно ли оставить старую электрику и поменять только чистовую?", en: "Can you leave the old electrics and change only the finishes?", sr: "Može li se ostaviti stara elektrika i promeniti samo završnica?" },
        a: { ru: "Иногда, если нагрузка не растёт и щиток в порядке. Новая кухня и кондиционеры чаще требуют новой разводки. Решение стоит принять до покраски: штроба по свежей стене — уже новый этап.", en: "Sometimes, if the load is not rising and the board is sound. A new kitchen and air conditioners more often need a new layout. The decision should be taken before paint: a chase in a fresh wall is already a new stage.", sr: "Ponekad, ako opterećenje ne raste i tabla je u redu. Nova kuhinja i klime češće traže novi razvod. Odluku treba doneti pre krečenja: šlic po svežem zidu već je nova faza." },
      },
      {
        q: { ru: "Нужно ли согласовывать ремонт в старом доме с управником?", en: "Do you need to agree a renovation in an older building with the manager?", sr: "Treba li renoviranje u staroj zgradi uskladiti sa upravnikom?" },
        a: { ru: "Правила дома — часы шума, лифт, контейнер — лучше узнать до старта. Работы, которые затрагивают общие стояки или несущие конструкции, могут потребовать отдельного согласования; это не универсальная «бумажка на любой ремонт», и её лучше уточнять по вашему объёму, а не по общему совету.", en: "House rules — noisy hours, the lift, the skip — are best learned before you start. Work that touches shared risers or load-bearing structure may need a separate agreement; it is not a universal “paper for any renovation”, and it is better checked against your scope than against a general tip.", sr: "Pravila zgrade — sati buke, lift, kontejner — bolje je saznati pre početka. Radovi koji diraju zajedničke vertikale ili noseće konstrukcije mogu da zahtevaju poseban dogovor; to nije univerzalni „papir za svako renoviranje“, i bolje ga je proveriti prema vašem obimu, ne po opštem savetu." },
      },
      {
        q: { ru: "Как не уйти в бесконечную доплату после вскрытия?", en: "How do you avoid endless extras after opening-up?", sr: "Kako ne ući u beskrajnu doplatu posle otvaranja?" },
        a: { ru: "Договоритесь заранее, что скрытая работа идёт отдельной строкой и оценивается до продолжения. Не принимайте этап и не платите вторые 50%, пока новая строка не ясна. Так сюрприз остаётся строкой в смете, а не бездонной кассой.", en: "Agree in advance that hidden work is a separate row and is priced before you continue. Do not accept the stage and do not pay the second 50% until the new row is clear. That way the surprise stays a line in the quote, not a bottomless till.", sr: "Dogovorite unapred da skriveni rad ide kao poseban red i da se procenjuje pre nastavka. Ne primajte fazu i ne plaćajte drugih 50% dok novi red nije jasan. Tako iznenađenje ostaje red u predračunu, ne bezdan kasa." },
      },
    ],
  },
];

export const journalCopy = {
  ru: {
    nav: "Статьи",
    title: "Разбор ремонта",
    lead: "Цены, санузел, электрика и приёмка по Белграду и Нови-Саду. Конкретно, без общих советов.",
    all: "Все темы",
    read: "Читать",
    updated: "Обновлено",
    home: "На главную",
    more: "Ещё по теме",
    empty: "В этой теме пока нет статей.",
  },
  en: {
    nav: "Guides",
    title: "Renovation notes",
    lead: "Prices, bathrooms, electrics and handover in Belgrade and Novi Sad. Specific, not generic advice.",
    all: "All topics",
    read: "Read",
    updated: "Updated",
    home: "Home",
    more: "More in this topic",
    empty: "No articles in this topic yet.",
  },
  sr: {
    nav: "Tekstovi",
    title: "Beleške o renoviranju",
    lead: "Cene, kupatilo, elektrika i prijem u Beogradu i Novom Sadu. Konkretno, bez opštih saveta.",
    all: "Sve teme",
    read: "Čitaj",
    updated: "Ažurirano",
    home: "Početna",
    more: "Još iz teme",
    empty: "U ovoj temi još nema tekstova.",
  },
} as const;

export function homePath(lang: Lang) {
  return lang === "ru" ? "/" : `/${lang}`;
}

export function articlesPath(lang: Lang) {
  return lang === "ru" ? "/articles" : `/${lang}/articles`;
}

export function articlePath(lang: Lang, slug: string) {
  return `${articlesPath(lang)}/${slug}`;
}

export function categoryPath(lang: Lang, id: CategoryId) {
  return `${articlesPath(lang)}/category/${id}`;
}

export function getArticle(slug: string) {
  return articles.find((item) => item.slug === slug);
}

export function getCategory(id: string) {
  return categories.find((item) => item.id === id);
}

export function articlesIn(id: CategoryId) {
  return articles.filter((item) => item.category === id);
}

export function articleHead(lang: Lang, origin: string, slug: string) {
  const article = getArticle(slug);
  if (!article) return { meta: [] };
  return pageHead(lang, origin, articlePath(lang, slug), article.title[lang], article.description[lang], articleJson(lang, origin, article));
}

export function categoryHead(lang: Lang, origin: string, id: string) {
  const category = getCategory(id);
  if (!category) return { meta: [] };
  const title = `${category.title[lang]} — ${journalCopy[lang].title}`;
  return pageHead(lang, origin, categoryPath(lang, category.id), title, category.text[lang], breadcrumbJson(lang, origin, [
    [journalCopy[lang].title, articlesPath(lang)],
    [category.title[lang], categoryPath(lang, category.id)],
  ]));
}

export function articlesIndexHead(lang: Lang, origin: string) {
  return pageHead(lang, origin, articlesPath(lang), journalCopy[lang].title, journalCopy[lang].lead, breadcrumbJson(lang, origin, [
    [journalCopy[lang].title, articlesPath(lang)],
  ]));
}

function pageHead(lang: Lang, origin: string, path: string, title: string, description: string, json: unknown) {
  const url = origin ? `${origin}${path}` : path;
  const image = origin ? `${origin}/og.jpg` : "/og.jpg";
  const fullTitle = `${title} | RENOVA`;
  const locale = lang === "ru" ? "ru_RU" : lang === "sr" ? "sr_RS" : "en_GB";
  const alternates = (["ru", "en", "sr"] as const).map((code) => ({
    rel: "alternate" as const,
    hrefLang: code,
    href: origin ? `${origin}${pathFor(code, path, lang)}` : pathFor(code, path, lang),
  }));
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "author", content: "RENOVA" },
      { property: "og:type", content: "article" },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:locale", content: locale },
      { property: "og:site_name", content: "RENOVA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [
      { rel: "canonical", href: url },
      ...alternates,
      { rel: "alternate", hrefLang: "x-default", href: origin ? `${origin}${pathFor("ru", path, lang)}` : pathFor("ru", path, lang) },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(json) }],
  };
}

function pathFor(target: Lang, path: string, from: Lang) {
  const stripped = path.replace(articlesPath(from), "") || "";
  return `${articlesPath(target)}${stripped}`;
}

function articleJson(lang: Lang, origin: string, article: Article) {
  const path = articlePath(lang, article.slug);
  const url = origin ? `${origin}${path}` : path;
  const graph: object[] = [
    {
      "@type": "Article",
      headline: article.title[lang],
      description: article.description[lang],
      datePublished: article.updated,
      dateModified: article.updated,
      inLanguage: lang,
      mainEntityOfPage: url,
      author: { "@type": "Organization", name: "RENOVA", url: origin ? `${origin}${homePath(lang)}` : homePath(lang) },
      publisher: { "@type": "Organization", name: "RENOVA" },
      image: origin ? `${origin}/og.jpg` : "/og.jpg",
    },
    ...(breadcrumbJson(lang, origin, [
      [journalCopy[lang].title, articlesPath(lang)],
      [categories.find((item) => item.id === article.category)!.title[lang], categoryPath(lang, article.category)],
      [article.title[lang], path],
    ])["@graph"] as object[]),
  ];
  if (article.faq?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: article.faq.map((item) => ({
        "@type": "Question",
        name: item.q[lang],
        acceptedAnswer: { "@type": "Answer", text: item.a[lang] },
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

function breadcrumbJson(lang: Lang, origin: string, crumbs: [string, string][]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: journalCopy[lang].home, item: origin ? `${origin}${homePath(lang)}` : homePath(lang) },
          ...crumbs.map(([name, path], index) => ({
            "@type": "ListItem",
            position: index + 2,
            name,
            item: origin ? `${origin}${path}` : path,
          })),
        ],
      },
    ],
  };
}


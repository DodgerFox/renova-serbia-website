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
  {
    slug: "kak-sekonomit-na-remonte-kvartiry",
    category: "prices",
    updated: "2026-11-24",
    title: {
      ru: "Как сэкономить на ремонте квартиры в Белграде и не переделывать потом",
      en: "How to save on an apartment renovation in Belgrade without paying twice",
      sr: "Kako uštedeti na renoviranju stana u Beogradu i ne raditi ponovo",
    },
    description: {
      ru: "Как сэкономить на ремонте квартиры в Белграде и Нови-Саде: где резать бюджет можно, где нельзя, закупка материалов, формат плитки и решения до старта работ.",
      en: "How to save on a flat renovation in Belgrade and Novi Sad: where you can cut the budget, where you cannot, buying materials, tile format and early decisions.",
      sr: "Kako uštedeti na renoviranju stana u Beogradu i Novom Sadu: gde se budžet sme seći, gde ne, nabavka materijala, format pločica i odluke pre početka radova.",
    },
    lead: {
      ru: "Самая дорогая строка в ремонте — не плитка и не бригада, а переделка. Настоящая экономия в Белграде и Нови-Саде делается до первого рабочего дня: решениями, схемой и сметой, а не поиском самой низкой ставки.",
      en: "The most expensive line in a renovation is not the tile or the crew. It is redoing work. Real savings in Belgrade and Novi Sad are made before the first working day: with decisions, a layout and a clear quote, not by hunting for the lowest rate.",
      sr: "Najskuplja stavka u renoviranju nisu pločice ni ekipa, nego prepravka. Prava ušteda u Beogradu i Novom Sadu pravi se pre prvog radnog dana: odlukama, šemom i predračunom, a ne traženjem najniže cene.",
    },
    body: {
      ru: [
        h2("Сначала решения, потом деньги"),
        p("Стена, которую красят второй раз, потому что забыли розетку; стяжка, которую вскрывают ради трубы; кухня, которая не встала на выводы, — так уходит больше денег, чем на любой разнице в ставке. Поэтому главная экономия делается на бумаге: схема электрики, план кухни и санузла, выбранные материалы и письменная смета работ до старта."),
        p("Ставки ниже — только работа, без материалов, как в остальных разборах RENOVA. Пакет «под ключ» 250–400 €/м² пола, косметика без переноса инженерии 30–55 €/м². Сэкономить — не значит выбрать самую низкую цифру из объявлений. Это значит попасть в нижнюю половину честной вилки за счёт простых решений и не платить за одну и ту же работу дважды."),
        h2("Где резать бюджет можно"),
        ul([
          "Оставить мокрые точки и стояки на месте: перенос ванной или кухни на другую стену почти всегда поднимает и сантехнику, и стяжку, и сроки.",
          "Стандартный формат плитки вместо 120 см: меньше подрезки и боя, укладка ближе к нижней границе 25–40 €/м².",
          "Простые потолки: покраска по ровной плите вместо многоуровневого гипсокартона, если не нужно прятать трассы.",
          "Меньше коробов и ниш «для красоты»: гипсокартон 14–26 €/м² за каждую конструкцию складывается быстро.",
          "Двери, светильники и смесители среднего класса: их можно заменить позже без пыли и демонтажа.",
          "Мебель и декор — потом: они не требуют штробы и не ломают готовую отделку.",
        ]),
        p("Простое правило: всё, что можно поменять за день отвёрткой, — хороший кандидат на экономию сейчас. Всё, что спрятано в стене или под полом, — нет. Дорогой светильник можно купить через год, а вторую линию на кухню после покраски проложить без штробы уже не получится."),
        h2("Где экономить нельзя"),
        p("Есть работы, которые дёшево сделать один раз и очень дорого переделать. Здесь слишком низкая цена часто означает пропущенный слой, а не особенно ловкого мастера."),
        ul([
          "Гидроизоляция санузла с лентой в углах и приёмкой до плитки.",
          "Электрика: отдельные линии на варочную, духовку, кондиционеры и стиральную машину, щиток с запасом.",
          "Стяжка и отметки пола: от них зависят двери, пороги и ламинат.",
          "Выравнивание стен под покраску: кривая стена под матовой краской видна при боковом свете.",
          "Трубы и фитинги: экономия на материале в стене вскрывается протечкой к соседу.",
        ]),
        p("Если бюджет не сходится, лучше отложить часть чистовой, чем упростить скрытые работы. Перекрасить комнату можно за выходные. Переложить плитку из-за протечки — это уже новый санузел, а в старом фонде ещё и разговор с соседом снизу."),
        h2("Материалы: кто покупает и как не переплатить"),
        p("В трудовой смете материалы всегда отдельно. Покупать их можно самому или поручить бригаде — главное, чтобы это было записано. Своя закупка экономит наценку, но требует времени: список, количество, доставка, подъём на этаж и хранение на объекте. Если вы работаете и не можете ездить по магазинам, простой бригады в ожидании смеси обойдётся дороже сэкономленной наценки."),
        ul([
          "Просите у мастера список с расходом по каждому этапу, а не «купите смесь».",
          "Плитку берите с запасом на подрезку и бой и из одной партии: оттенок и калибр разных партий могут отличаться.",
          "Не завозите всё сразу на весь ремонт: краска и ламинат месяц стоят на стройке без пользы и рискуют пострадать.",
          "Сравнивайте одинаковые позиции: клей, затирку и грунт разных классов нельзя сравнивать только по цене мешка.",
          "Фиксируйте, кто отвечает за доставку, подъём и вывоз упаковки и мусора.",
        ]),
        p("Сколько брать запаса на плитку, зависит от формата и раскладки: при диагональной укладке и сложной нише подрезки больше. Точную цифру даёт мастер по своей раскладке, а не калькулятор на сайте магазина. Докупать недостающие коробки другой партии в конце — частая и обидная ошибка."),
        h2("Смета, которая защищает бюджет"),
        p("Экономия заканчивается там, где смета расплывчатая. Строка «санузел — по договорённости» или «электрика — по факту» почти всегда превращается в доплату. Письменный объём по помещениям, единица измерения для каждой строки и оплата по этапам — 50% до старта этапа и 50% после приёмки — держат бюджет лучше, чем торг о скидке."),
        p("Сравнивайте предложения одинаковыми строками: стены — по площади стен, плитку — по её плоскости, сантехнику — по мокрой зоне. Подробнее о том, как читать ставку за квадратный метр, — в отдельном разборе. Смета без демонтажа, вывоза и грунтовки выглядит дешевле, но эти строки просто появятся позже."),
        h2("Ошибки, которые съедают экономию"),
        ul([
          "Менять решения в процессе: перенос розетки после шпаклёвки — это новая штроба и новая покраска.",
          "Заказать кухню до выводов или делать выводы без размеров кухни.",
          "Покупать плитку до замера и потом докупать другую партию.",
          "Нанимать отдельных мастеров на каждую мелочь без общего графика: простои между ними тоже стоят денег.",
          "Принимать этап «на глаз» и платить вторые 50% до проверки.",
          "Экономить на защите: плёнка и картон на окнах, дверях и готовом полу стоят меньше, чем замена одной двери.",
        ]),
        h2("Новостройка и старый фонд"),
        p("В новостройке под чистовую экономия проще: демонтажа почти нет, инженерию можно сразу развести по своей схеме, а лишние решения легко не принимать. В старом фонде Белграда и Нови-Сада главная экономия — честная вилка на скрытые работы и правило, что каждая новая строка после вскрытия оценивается до продолжения. Попытка сэкономить, оставив старую разводку под новой кухней, почти всегда заканчивается штробой по свежей покраске."),
        h2("Пример разумной экономии на 55 м²"),
        p("Квартира 55 м² в новостройке. Пакет работы 55 × 250–400 € — ориентир для полного цикла. Если мокрые точки остаются на месте, плитка стандартного формата, потолки под покраску и без многоуровневого гипсокартона, итог чаще ложится в нижнюю половину вилки. Если в той же квартире переносят санузел, выбирают плитку 120 см и тёплый пол — в верхнюю. Материалы в обоих случаях считаются отдельно."),
        p("Разница не в «дешёвом мастере», а в количестве сложных решений. Их лучше выбрать осознанно до старта, чем обнаружить в середине работ, когда отказаться уже нельзя."),
      ],
      en: [
        h2("Decisions first, money second"),
        p("A wall painted twice because a socket was forgotten, a screed opened up for a pipe, a kitchen that does not fit its outlets: that is where more money goes than on any difference in rates. So the biggest saving is made on paper. An electrical layout, a kitchen and bathroom plan, chosen materials and a written labour quote before the start."),
        p("The rates below are labour only, materials apart, as in the other RENOVA notes. A turnkey package is €250–400/m² of floor; a refresh without moving services is €30–55/m². Saving does not mean picking the lowest number from the adverts. It means landing in the lower half of an honest range through simple choices, and never paying for the same work twice."),
        h2("Where you can cut"),
        ul([
          "Keep wet points and risers where they are: moving a bath or kitchen to another wall nearly always raises plumbing, screed and time.",
          "A standard tile size instead of 120 cm: less cutting and breakage, laying closer to the bottom of €25–40/m².",
          "Simple ceilings: paint on a flat slab instead of multi-level drywall, unless you need to hide runs.",
          "Fewer boxes and decorative niches: drywall at €14–26/m² per build adds up quickly.",
          "Mid-range doors, lights and taps: they can be swapped later with no dust and no strip-out.",
          "Furniture and decor later: they need no chasing and do not damage finished surfaces.",
        ]),
        p("A simple rule: anything you can change in a day with a screwdriver is a good candidate for saving now. Anything hidden in a wall or under the floor is not. You can buy an expensive light next year; a second kitchen circuit after painting cannot be run without chasing."),
        h2("Where you should not cut"),
        p("Some work is cheap to do once and very expensive to redo. Here a price that is too low usually means a missing layer, not an unusually skilled tradesman."),
        ul([
          "Bathroom tanking with tape in the corners, signed off before tile.",
          "Electrics: separate circuits for the hob, oven, air conditioners and washing machine, and a board with spare capacity.",
          "Screed and floor levels: doors, thresholds and laminate depend on them.",
          "Wall levelling before paint: a crooked wall under matt paint shows in side light.",
          "Pipes and fittings: savings on material inside a wall show up as a leak into the flat below.",
        ]),
        p("If the budget does not close, postpone part of the finishes rather than simplify the hidden work. A room can be repainted over a weekend. Relaying tile after a leak is a new bathroom, and in an older building a conversation with the neighbour downstairs as well."),
        h2("Materials: who buys and how not to overpay"),
        p("Materials are always separate from a labour quote. You can buy them yourself or have the crew do it; what matters is that it is written down. Buying yourself saves the mark-up but costs time: the list, quantities, delivery, carrying upstairs and storage on site. If you work and cannot run to shops, a crew waiting idle for adhesive costs more than the mark-up you saved."),
        ul([
          "Ask the tradesman for a list with quantities per stage, not “buy some adhesive”.",
          "Order tile with an allowance for cuts and breakage, from one batch: shade and calibre can differ between batches.",
          "Do not deliver everything for the whole job at once: paint and laminate sitting on site for a month gain nothing and can get damaged.",
          "Compare like with like: adhesive, grout and primer of different classes cannot be judged by the price per bag.",
          "Agree who handles delivery, carrying up and removing packaging and waste.",
        ]),
        p("How much spare tile to order depends on size and layout: a diagonal pattern or a complex niche means more cuts. The tradesman gives the number from his layout, not the shop’s online calculator. Buying the missing boxes from another batch at the end is a common and annoying mistake."),
        h2("A quote that protects the budget"),
        p("Savings end where the quote is vague. A line like “bathroom: as agreed” or “electrics: at cost” almost always turns into extras. A written scope by room, a unit for every line and payment by stage, 50% before a stage starts and 50% after handover, protect the budget better than haggling for a discount."),
        p("Compare offers line by line in the same units: walls by wall area, tile by its own surface, plumbing by wet area. There is a separate note on how to read a rate per square metre. A quote without strip-out, waste removal and primer looks cheaper, but those lines simply appear later."),
        h2("Mistakes that eat the savings"),
        ul([
          "Changing decisions mid-job: moving a socket after skimming means a new chase and new paint.",
          "Ordering the kitchen before the outlets are set, or setting outlets without kitchen dimensions.",
          "Buying tile before measuring and then topping up from another batch.",
          "Hiring separate tradesmen for every small job without one schedule: idle days between them cost money too.",
          "Accepting a stage by eye and paying the second 50% before checking.",
          "Skimping on protection: film and board over windows, doors and a finished floor cost less than replacing one door.",
        ]),
        h2("New-build and older building"),
        p("In a new-build ready for finishes saving is easier: there is little strip-out, services can be laid to your own layout from the start, and it is easy simply not to add extra features. In older buildings in Belgrade and Novi Sad the main saving is an honest range for hidden work and a rule that every new line after opening-up is priced before work continues. Trying to save by keeping old wiring under a new kitchen nearly always ends with a chase through fresh paint."),
        h2("A sensible saving on 55 m²"),
        p("A 55 m² new-build flat. The labour package of 55 × €250–400 is the guide for a full cycle. If wet points stay put, tile is a standard size and ceilings are painted with no multi-level drywall, the total usually lands in the lower half of the range. If the same flat moves the bathroom, picks 120 cm tile and underfloor heating, it lands in the upper half. Materials are counted separately either way."),
        p("The difference is not a “cheap tradesman” but the number of complex choices. It is better to make them deliberately before the start than to discover them halfway through, when there is no way back."),
      ],
      sr: [
        h2("Prvo odluke, pa novac"),
        p("Zid koji se kreči drugi put jer je zaboravljena utičnica, košuljica koja se otvara zbog cevi, kuhinja koja ne leže na izvode — tu ode više novca nego na bilo kojoj razlici u ceni rada. Zato se najveća ušteda pravi na papiru: šema elektrike, plan kuhinje i kupatila, izabrani materijali i pismeni predračun rada pre početka."),
        p("Cene ispod su samo rad, bez materijala, kao i u ostalim tekstovima RENOVA. Paket ključ u ruke je 250–400 €/m² poda, osveženje bez pomeranja instalacija 30–55 €/m². Uštedeti ne znači izabrati najnižu cifru iz oglasa. Znači pasti u donju polovinu poštenog raspona zahvaljujući jednostavnim odlukama i ne platiti isti posao dvaput."),
        h2("Gde se budžet sme seći"),
        ul([
          "Ostavite mokre tačke i vertikale gde jesu: pomeranje kupatila ili kuhinje na drugi zid skoro uvek podiže i vodovod, i košuljicu, i rokove.",
          "Standardni format pločica umesto 120 cm: manje sečenja i loma, postavljanje bliže donjoj granici 25–40 €/m².",
          "Jednostavni plafoni: krečenje po ravnoj ploči umesto gips-kartona u više nivoa, ako ne treba sakriti trase.",
          "Manje kutija i niša „za lepotu“: gips-karton 14–26 €/m² po konstrukciji brzo se sabere.",
          "Vrata, rasveta i slavine srednje klase: mogu da se zamene kasnije, bez prašine i rušenja.",
          "Nameštaj i dekor kasnije: ne traže štemovanje i ne kvare gotovu završnicu.",
        ]),
        p("Jednostavno pravilo: sve što se može promeniti za dan odvijačem dobar je kandidat za uštedu sada. Sve što je sakriveno u zidu ili ispod poda nije. Skupu lampu možete kupiti za godinu dana, a drugi strujni krug za kuhinju posle krečenja bez štemovanja više ne ide."),
        h2("Gde se ne štedi"),
        p("Postoje radovi koje je jeftino uraditi jednom, a veoma skupo prepravljati. Tu preniska cena obično znači preskočen sloj, a ne posebno spretnog majstora."),
        ul([
          "Hidroizolacija kupatila sa trakom u uglovima i prijemom pre pločica.",
          "Elektrika: posebni krugovi za ploču, rernu, klime i veš-mašinu, tabla sa rezervom.",
          "Košuljica i kote poda: od njih zavise vrata, pragovi i laminat.",
          "Ravnanje zidova pre krečenja: kriv zid pod mat bojom vidi se na bočnom svetlu.",
          "Cevi i fitinzi: ušteda na materijalu u zidu otkrije se curenjem kod komšije.",
        ]),
        p("Ako budžet ne izlazi, bolje je odložiti deo završnice nego pojednostaviti skrivene radove. Sobu možete prekrečiti za vikend. Ponovno postavljanje pločica posle curenja je novo kupatilo, a u staroj gradnji i razgovor sa komšijom ispod."),
        h2("Materijal: ko kupuje i kako ne preplatiti"),
        p("U predračunu rada materijal je uvek odvojen. Možete ga kupiti sami ili prepustiti ekipi — važno je da to bude zapisano. Sopstvena nabavka štedi maržu, ali traži vreme: spisak, količine, dostava, unošenje na sprat i čuvanje na objektu. Ako radite i ne možete da obilazite prodavnice, ekipa koja čeka lepak košta više od uštede na marži."),
        ul([
          "Tražite od majstora spisak sa potrošnjom po fazi, a ne „kupite lepak“.",
          "Pločice uzmite sa rezervom za sečenje i lom i iz iste serije: nijansa i kalibar različitih serija mogu da se razlikuju.",
          "Ne dovozite sve odjednom za ceo posao: boja i laminat mesec dana na gradilištu ništa ne dobijaju, a mogu da se oštete.",
          "Poredite iste stavke: lepak, fugu i podlogu različitih klasa ne možete porediti samo po ceni džaka.",
          "Dogovorite ko je zadužen za dostavu, unošenje i odvoz ambalaže i šuta.",
        ]),
        p("Koliko rezerve uzeti za pločice zavisi od formata i rasporeda: dijagonalno postavljanje i složena niša znače više sečenja. Tačan broj daje majstor po svom rasporedu, a ne kalkulator na sajtu prodavnice. Dokupljivanje kutija iz druge serije na kraju česta je i neprijatna greška."),
        h2("Predračun koji čuva budžet"),
        p("Ušteda prestaje tamo gde je predračun nejasan. Stavka „kupatilo — po dogovoru“ ili „elektrika — po stvarnom stanju“ skoro uvek postane doplata. Pismeni obim po prostorijama, jedinica mere za svaku stavku i plaćanje po fazama — 50% pre početka faze i 50% posle prijema — čuvaju budžet bolje od cenkanja oko popusta."),
        p("Ponude poredite istim stavkama: zidove po površini zidova, pločice po njihovoj površini, vodovod po mokroj zoni. Kako se čita cena po kvadratu, objašnjeno je u posebnom tekstu. Predračun bez rušenja, odvoza i podloge izgleda jeftinije, ali se te stavke samo pojave kasnije."),
        h2("Greške koje pojedu uštedu"),
        ul([
          "Menjanje odluka u toku rada: pomeranje utičnice posle gletovanja znači novi šlic i novo krečenje.",
          "Naručiti kuhinju pre izvoda ili praviti izvode bez mera kuhinje.",
          "Kupiti pločice pre merenja, pa dokupljivati iz druge serije.",
          "Angažovati posebnog majstora za svaku sitnicu bez zajedničkog plana: dani čekanja između njih takođe koštaju.",
          "Primiti fazu „od oka“ i platiti drugih 50% pre provere.",
          "Štedeti na zaštiti: folija i karton na prozorima, vratima i gotovom podu koštaju manje od zamene jednih vrata.",
        ]),
        h2("Novogradnja i stara gradnja"),
        p("U novogradnji pred završnicu ušteda je lakša: rušenja skoro nema, instalacije mogu odmah da se razvedu po vašoj šemi, a suvišne odluke lako je ne doneti. U staroj gradnji Beograda i Novog Sada glavna ušteda je pošten raspon za skrivene radove i pravilo da se svaka nova stavka posle otvaranja proceni pre nastavka. Pokušaj da se uštedi tako što stara instalacija ostane ispod nove kuhinje skoro uvek se završi šlicem kroz sveže krečenje."),
        h2("Primer razumne uštede na 55 m²"),
        p("Stan od 55 m² u novogradnji. Paket rada 55 × 250–400 € je orijentir za pun ciklus. Ako mokre tačke ostaju na mestu, pločice su standardnog formata, a plafoni okrečeni bez gips-kartona u više nivoa, ukupan iznos obično pada u donju polovinu raspona. Ako se u istom stanu pomera kupatilo, biraju pločice od 120 cm i podno grejanje — u gornju. Materijal se u oba slučaja računa odvojeno."),
        p("Razlika nije u „jeftinom majstoru“, nego u broju složenih odluka. Bolje ih je doneti svesno pre početka nego ih otkriti usred radova, kad više nema nazad."),
      ],
    },
    faq: [
      {
        q: { ru: "На чём можно сэкономить при ремонте квартиры?", en: "What can you save on in an apartment renovation?", sr: "Na čemu može da se uštedi pri renoviranju stana?" },
        a: { ru: "На том, что легко поменять позже: двери, светильники, мебель, декор, сложные потолки и короба. Оставить мокрые точки на месте и выбрать стандартный формат плитки тоже заметно снижает объём работы.", en: "On things that are easy to change later: doors, lights, furniture, decor, complex ceilings and boxing. Keeping wet points in place and choosing a standard tile size also cuts the labour noticeably.", sr: "Na onome što se lako menja kasnije: vrata, rasveta, nameštaj, dekor, složeni plafoni i kutije. Ostaviti mokre tačke na mestu i izabrati standardni format pločica takođe primetno smanjuje obim rada." },
      },
      {
        q: { ru: "На чём нельзя экономить при ремонте?", en: "What should you not save on in a renovation?", sr: "Na čemu ne treba štedeti pri renoviranju?" },
        a: { ru: "На гидроизоляции, электрике, стяжке, выравнивании стен и трубах. Это скрытые работы: чтобы их переделать, придётся вскрыть уже готовую отделку.", en: "On tanking, electrics, screed, wall levelling and pipes. This is hidden work: to redo it you have to open up finishes that are already done.", sr: "Na hidroizolaciji, elektrici, košuljici, ravnanju zidova i cevima. To su skriveni radovi: da biste ih prepravili, morate otvoriti već gotovu završnicu." },
      },
      {
        q: { ru: "Выгоднее покупать материалы самому или через бригаду?", en: "Is it cheaper to buy materials yourself or through the crew?", sr: "Da li je isplativije kupovati materijal sam ili preko ekipe?" },
        a: { ru: "Самому — без наценки, но вы тратите время на список, доставку и хранение. Через бригаду удобнее. В любом случае просите список с расходом и записывайте, кто отвечает за закупку и к какому дню.", en: "Yourself means no mark-up, but you spend time on the list, delivery and storage. Through the crew is more convenient. Either way, ask for a list with quantities and write down who buys what and by which day.", sr: "Sami — bez marže, ali trošite vreme na spisak, dostavu i čuvanje. Preko ekipe je udobnije. U svakom slučaju tražite spisak sa potrošnjom i zapišite ko kupuje i do kog dana." },
      },
      {
        q: { ru: "Можно ли сделать ремонт дешевле, разбив его на части?", en: "Can you make a renovation cheaper by doing it in parts?", sr: "Može li renoviranje da bude jeftinije ako se radi u delovima?" },
        a: { ru: "Да, если сначала целиком сделать инженерию и черновые работы, а чистовую — по комнатам. Наоборот не стоит: штроба под новую линию после покраски — это уже переделка.", en: "Yes, if you do all the services and rough work first and the finishes room by room. Not the other way round: chasing a new circuit after painting is already redoing work.", sr: "Da, ako se prvo u celosti urade instalacije i grubi radovi, a završnica po sobama. Obrnuto ne: šlic za novi krug posle krečenja već je prepravka." },
      },
    ],
  },
  {
    slug: "dush-bez-poddona-ili-vanna",
    category: "bath",
    updated: "2026-11-24",
    title: {
      ru: "Душ без поддона или ванна: что выбрать при ремонте санузла",
      en: "Walk-in shower or bath: what to choose when renovating a bathroom",
      sr: "Tuš u ravni poda ili kada: šta izabrati pri renoviranju kupatila",
    },
    description: {
      ru: "Душ без поддона, поддон или ванна в квартире в Белграде и Нови-Саде: уклон, трап, высота стяжки, гидроизоляция и что выбрать для небольшого санузла.",
      en: "A walk-in shower, a tray or a bath in a Belgrade or Novi Sad flat: falls, the drain, screed height, tanking and what works best in a small bathroom.",
      sr: "Tuš u ravni poda, tuš-kada ili kada u stanu u Beogradu i Novom Sadu: pad, slivnik, visina košuljice, hidroizolacija i šta izabrati za malo kupatilo.",
    },
    lead: {
      ru: "Душ в уровень пола красиво смотрится на фото, но в квартире он начинается не с плитки, а с отметки стяжки и места под трап. Ванна и поддон проще, но занимают площадь. Разбираем, как выбрать и не вскрывать пол через год.",
      en: "A level-access shower looks great in photos, but in a flat it starts not with tile but with the screed level and room for a drain. A bath or a tray is simpler but takes up space. Here is how to choose without opening the floor a year later.",
      sr: "Tuš u ravni poda lepo izgleda na fotografijama, ali u stanu ne počinje od pločica, nego od kote košuljice i mesta za slivnik. Kada i tuš-kada su jednostavnije, ali zauzimaju prostor. Evo kako izabrati i ne otvarati pod za godinu dana.",
    },
    body: {
      ru: [
        h2("Три варианта — три разных объёма работы"),
        p("В санузле квартиры обычно выбирают из трёх сценариев: ванна, душевой поддон с ограждением или душ без поддона — плитка в уровень пола с трапом или линейным лотком. Снаружи разница в дизайне, внутри — в объёме работ. Ванна и поддон ставятся на готовую гидроизоляцию и подключаются к выводу. Душ без поддона требует уклона пола, утопленного трапа и тщательной гидроизоляции всей зоны."),
        p("Пакет санузла у RENOVA — 180–280 €/м² мокрой зоны, только работа. Душ в полу вместо поддона обычно сдвигает санузел к верхней границе вилки: сложнее стяжка, больше подрезки плитки под уклон, больше времени на гидроизоляцию и проверку. Трап, лоток, стекло и смесители покупаются отдельно, как и остальные материалы."),
        h2("Когда душ без поддона имеет смысл"),
        ul([
          "Санузел небольшой, и ванна занимает место, нужное под стиральную машину или шкаф.",
          "В квартире живут пожилые родители или маленький ребёнок: нет бортика, через который нужно перешагивать.",
          "Ванной почти не пользуются, а душ нужен каждый день.",
          "Есть запас по высоте пола или возможность поднять стяжку во всём санузле.",
          "Канализация рядом, и трап можно поставить с нормальным уклоном к стояку.",
        ]),
        p("Если хотя бы два последних пункта не выполняются, душ в уровень пола превращается в компромисс с порогом или слабым уклоном. Тогда честнее выбрать низкий поддон или ванну."),
        h2("Главное ограничение — высота и уклон"),
        p("Трапу нужна глубина, а воде — уклон. Если в полу мало высоты, остаётся поднять пол всего санузла, сделать порог на входе или — в худшем случае — поставить трап с плохим уклоном, у которого стоит вода. В новостройке это обычно решается на этапе стяжки. В старом фонде Белграда и Нови-Сада всё зависит от перекрытия и того, где проходит канализация: долбить плиту ради трапа — не решение."),
        p("Поэтому выбор делают до стяжки, а не после покупки плитки. Мастер проверяет отметку пола в санузле и коридоре, выход канализации, высоту трапа и толщину плиточного пирога. Если запаса нет, честный ответ — поддон или низкий поддон, утопленный в пол, а не «как-нибудь сделаем»."),
        h2("Линейный лоток или точечный трап"),
        p("Точечный трап в центре душевой зоны требует уклона с четырёх сторон: плитку режут «конвертом», и крупный формат здесь неудобен. Линейный лоток у стены даёт уклон в одну сторону, и крупную плитку можно положить почти целиком. Зато лоток длиннее и требует точной установки по уровню. Это выбор не только дизайна, но и раскладки плитки — согласуйте его до заказа материалов."),
        ul([
          "Точечный трап: проще в покупке и установке, но больше резов плитки.",
          "Линейный лоток: удобнее для крупного формата и уклона в одну сторону.",
          "Лоток у стены или под стеклом: продумайте, чтобы вода не выходила за пределы зоны.",
          "В любом варианте нужен доступ для чистки сифона после окончания работ.",
        ]),
        h2("Ванна и поддон: что учесть"),
        p("Ванна — не устаревший вариант, а разумный выбор для семьи с маленькими детьми и для тех, кто любит её принимать. Поддон быстрее и проще: меньше скрытых рисков, легче ремонт в будущем. Но гидроизоляция нужна и здесь — под ванной, вокруг поддона и на стенах в зоне брызг. Экран ванны лучше делать с ревизией: доступ к сифону понадобится."),
        ul([
          "Размер ванны или поддона фиксируют до плитки, чтобы не подрезать стены под готовое изделие.",
          "Ванну проверяют на устойчивость и герметизируют примыкание к стене до затирки.",
          "Низкий поддон, утопленный в стяжку, — компромисс между ванной и душем в уровень пола.",
          "Шторка дешевле стекла, но стекло лучше держит воду в зоне душа.",
        ]),
        h2("Гидроизоляция и стекло"),
        p("В душе без поддона гидроизоляция — не только пол, но и стены душевой зоны на всю высоту брызг, с лентой во всех углах и вокруг трапа. Приёмку делают до плитки: фото, проверка непрерывности слоя, по возможности — пролив. Этап санузла не закрывают и вторые 50% не платят, пока гидроизоляция не принята."),
        p("Стеклянное ограждение заказывают после плитки, по фактическому замеру. Уклон, который «на глаз нормальный», должен уводить воду к трапу, а не под стекло. Проверьте это ведром воды до установки стекла — потом исправлять придётся через плитку."),
        h2("Новостройка и старый фонд"),
        p("В новостройке под чистовую душ в уровень пола проще всего: стяжки ещё нет или её делают заново, канализация обычно выведена близко, а отметки пола можно связать с коридором и дверями на этапе подготовки. В старом фонде Белграда и Нови-Сада сначала снимают старую плитку и стяжку, смотрят, где проходит канализация и что под ней, и только потом обещают душ без порога. Если стояк далеко, а перекрытие тонкое, разумнее низкий поддон."),
        h2("Частые ошибки"),
        ul([
          "Купить плитку 120 см и только потом выбрать точечный трап.",
          "Поставить трап без доступа к сифону — чистить его придётся через плитку.",
          "Сделать уклон «на глаз» и не проверить его водой до стекла.",
          "Забыть про гидроизоляцию стен в зоне брызг, если стоит ванна.",
        ]),
        h2("Что решить до начала работ"),
        ul([
          "Ванна, поддон или душ без поддона — до стяжки, а не после.",
          "Тип трапа и его место — с учётом канализации и раскладки плитки.",
          "Формат плитки — с учётом уклона: крупный формат и точечный трап плохо сочетаются.",
          "Высота пола в санузле и коридоре и будет ли порог.",
          "Кто покупает трап, лоток, стекло и смесители и когда они должны быть на объекте.",
        ]),
        p("Переделка душа в полу — это вскрытие плитки, гидроизоляции и стяжки. Правильный выбор на старте дешевле любой экономии на материалах."),
      ],
      en: [
        h2("Three options, three different jobs"),
        p("A flat bathroom usually comes down to three options: a bath, a shower tray with a screen, or a walk-in shower — tile flush with the floor, draining to a point drain or a linear channel. On the surface the difference is design; underneath it is the amount of work. A bath or a tray sits on finished tanking and connects to an outlet. A walk-in shower needs a floor laid to falls, a recessed drain and careful tanking of the whole area."),
        p("A RENOVA bathroom package is €180–280/m² of wet area, labour only. A floor shower instead of a tray usually moves the room to the top of that band: a harder screed, more tile cutting for the falls, more time on tanking and checks. The drain, channel, glass and taps are bought separately, like other materials."),
        h2("When a walk-in shower makes sense"),
        ul([
          "The bathroom is small and a bath takes the space you need for a washing machine or a cabinet.",
          "Elderly parents or a small child live with you: there is no rim to step over.",
          "Nobody really uses the bath, but the shower runs every day.",
          "There is spare floor height, or the screed can be raised across the whole bathroom.",
          "The waste pipe is close, so the drain can sit with a proper fall to the stack.",
        ]),
        p("If the last two points do not hold, a level shower turns into a compromise with a step or weak falls. Then a low tray or a bath is the honest choice."),
        h2("The real limit: height and falls"),
        p("A drain needs depth and water needs a fall. Without enough floor height you either raise the whole bathroom floor, add a step at the door, or, at worst, fit a drain with poor falls where water stands. In a new-build this is usually settled at the screed stage. In older buildings in Belgrade and Novi Sad it depends on the slab and on where the waste runs: breaking into the slab for a drain is not a solution."),
        p("So the decision comes before the screed, not after the tile is bought. The tradesman checks the floor level in the bathroom and hallway, the waste outlet, the drain height and the build-up under the tile. If there is no room, the honest answer is a tray or a low tray set into the floor, not “we’ll manage somehow”."),
        h2("Linear channel or point drain"),
        p("A point drain in the middle of the shower needs falls from four sides: tile is cut in an envelope pattern, and large formats are awkward. A linear channel along a wall gives a single fall, so large tiles can go down almost whole. The channel is longer, though, and must be set precisely level. This is a tile layout decision as much as a design one, so agree it before materials are ordered."),
        ul([
          "Point drain: simpler to buy and fit, but more tile cuts.",
          "Linear channel: better for large formats and a single fall.",
          "Channel at the wall or under the glass: plan it so water does not escape the area.",
          "Either way you need access to clean the trap once the job is done.",
        ]),
        h2("Bath and tray: what to watch"),
        p("A bath is not outdated. It is a sensible choice for a family with small children and for anyone who enjoys a soak. A tray is faster and simpler: fewer hidden risks and easier repairs later. But tanking is needed here too — under the bath, around the tray and on the walls in the splash zone. Give the bath panel an access hatch: you will need to reach the trap."),
        ul([
          "Fix the size of the bath or tray before tiling, so walls are not cut back around the product.",
          "Check the bath is stable and seal the wall joint before grouting.",
          "A low tray set into the screed is a middle ground between a bath and a level shower.",
          "A curtain is cheaper than glass, but glass keeps water in the shower far better.",
        ]),
        h2("Tanking and glass"),
        p("In a walk-in shower tanking covers not just the floor but the shower walls up to full splash height, with tape in every corner and around the drain. It is signed off before tile: photos, a check that the layer is continuous and, where possible, a flood test. The bathroom stage is not closed and the second 50% is not paid until the tanking is accepted."),
        p("The glass screen is ordered after tiling, from a site measurement. Falls that look fine by eye must take water to the drain, not under the glass. Test it with a bucket of water before the glass goes in; afterwards the fix goes through the tile."),
        h2("New-build and older building"),
        p("In a new-build ready for finishes a level shower is easiest: the screed is not there yet or is being redone, the waste is usually close, and floor levels can be matched to the hallway and doors during preparation. In older buildings in Belgrade and Novi Sad the old tile and screed come off first; you see where the waste runs and what is under it, and only then promise a step-free shower. If the stack is far away and the slab is thin, a low tray is the sensible choice."),
        h2("Common mistakes"),
        ul([
          "Buying 120 cm tile and only then choosing a point drain.",
          "Fitting a drain with no access to the trap, so cleaning it means going through the tile.",
          "Setting the falls by eye and not testing them with water before the glass.",
          "Forgetting to tank the splash-zone walls when there is a bath.",
        ]),
        h2("What to settle before work starts"),
        ul([
          "Bath, tray or walk-in shower: before the screed, not after.",
          "Drain type and position, given the waste pipe and the tile layout.",
          "Tile size, given the falls: large formats and a point drain do not mix well.",
          "Floor height in the bathroom and hallway, and whether there will be a step.",
          "Who buys the drain, channel, glass and taps, and when they must be on site.",
        ]),
        p("Redoing a floor shower means opening up the tile, the tanking and the screed. The right choice at the start costs less than any saving on materials."),
      ],
      sr: [
        h2("Tri varijante, tri različita obima posla"),
        p("U kupatilu stana obično se bira između tri scenarija: kada, tuš-kada sa paravanom ili tuš u ravni poda — pločice u nivou poda sa slivnikom ili linijskim kanalom. Spolja je razlika u dizajnu, iznutra u obimu posla. Kada i tuš-kada stoje na gotovoj hidroizolaciji i priključuju se na izvod. Tuš u ravni poda traži pod u padu, upušten slivnik i pažljivu hidroizolaciju cele zone."),
        p("Paket kupatila kod RENOVA je 180–280 €/m² mokre zone, samo rad. Tuš u podu umesto tuš-kade obično pomera kupatilo ka gornjoj granici raspona: složenija košuljica, više sečenja pločica zbog pada, više vremena za hidroizolaciju i proveru. Slivnik, kanal, staklo i slavine kupuju se odvojeno, kao i ostali materijal."),
        h2("Kada tuš u ravni poda ima smisla"),
        ul([
          "Kupatilo je malo, a kada zauzima mesto potrebno za veš-mašinu ili ormarić.",
          "U stanu žive stariji roditelji ili malo dete: nema ivice preko koje se prelazi.",
          "Kadu skoro niko ne koristi, a tuš je svakodnevni.",
          "Postoji rezerva u visini poda ili mogućnost da se košuljica podigne u celom kupatilu.",
          "Kanalizacija je blizu, pa slivnik može da dobije normalan pad ka vertikali.",
        ]),
        p("Ako poslednje dve tačke ne važe, tuš u ravni poda postaje kompromis sa pragom ili slabim padom. Tada je poštenije izabrati nisku tuš-kadu ili kadu."),
        h2("Glavno ograničenje: visina i pad"),
        p("Slivniku treba dubina, a vodi pad. Ako u podu nema dovoljno visine, ostaje da se podigne pod celog kupatila, napravi prag na ulazu ili, u najgorem slučaju, ugradi slivnik sa lošim padom u kom voda stoji. U novogradnji se to obično rešava u fazi košuljice. U staroj gradnji Beograda i Novog Sada sve zavisi od međuspratne ploče i od toga gde ide kanalizacija: štemovanje ploče zbog slivnika nije rešenje."),
        p("Zato se odluka donosi pre košuljice, a ne posle kupovine pločica. Majstor proverava kotu poda u kupatilu i hodniku, izlaz kanalizacije, visinu slivnika i debljinu slojeva ispod pločica. Ako rezerve nema, pošten odgovor je tuš-kada ili niska tuš-kada upuštena u pod, a ne „snaći ćemo se“."),
        h2("Linijski kanal ili tačkasti slivnik"),
        p("Tačkasti slivnik u sredini tuša traži pad sa četiri strane: pločice se seku „kovertom“, i veliki format tu nije zgodan. Linijski kanal uz zid daje pad u jednu stranu, pa velike pločice mogu da idu skoro cele. Kanal je doduše duži i mora precizno da se postavi u nivo. To je odluka o rasporedu pločica koliko i o dizajnu, zato je dogovorite pre naručivanja materijala."),
        ul([
          "Tačkasti slivnik: jednostavniji za kupovinu i ugradnju, ali više rezova pločica.",
          "Linijski kanal: bolji za veliki format i pad u jednu stranu.",
          "Kanal uz zid ili ispod stakla: isplanirajte da voda ne izlazi iz zone.",
          "U svakoj varijanti treba pristup za čišćenje sifona posle završetka radova.",
        ]),
        h2("Kada i tuš-kada: na šta obratiti pažnju"),
        p("Kada nije zastarela, već razumna odluka za porodicu sa malom decom i za one koji vole kupanje. Tuš-kada je brža i jednostavnija: manje skrivenih rizika, lakša popravka kasnije. Ali i ovde treba hidroizolacija — ispod kade, oko tuš-kade i na zidovima u zoni prskanja. Maska kade neka ima revizioni otvor: pristup sifonu će zatrebati."),
        ul([
          "Dimenzija kade ili tuš-kade fiksira se pre pločica, da se zidovi ne seku naknadno.",
          "Kada se proverava na stabilnost, a spoj sa zidom se zaptiva pre fugovanja.",
          "Niska tuš-kada upuštena u košuljicu je kompromis između kade i tuša u ravni poda.",
          "Zavesa je jeftinija od stakla, ali staklo mnogo bolje drži vodu u zoni tuša.",
        ]),
        h2("Hidroizolacija i staklo"),
        p("Kod tuša u ravni poda hidroizolacija nije samo pod, nego i zidovi tuš-zone do pune visine prskanja, sa trakom u svim uglovima i oko slivnika. Prijem se radi pre pločica: fotografije, provera neprekidnosti sloja i, gde je moguće, test potapanjem. Faza kupatila se ne zatvara i drugih 50% se ne plaća dok hidroizolacija nije primljena."),
        p("Stakleni paravan se naručuje posle pločica, po stvarnoj meri. Pad koji „od oka izgleda dobro“ mora da vodi vodu ka slivniku, a ne ispod stakla. Proverite to kofom vode pre ugradnje stakla; kasnije se ispravka radi kroz pločice."),
        h2("Novogradnja i stara gradnja"),
        p("U novogradnji pred završnicu tuš u ravni poda je najjednostavniji: košuljice još nema ili se radi iznova, kanalizacija je obično blizu, a kote poda mogu da se usklade sa hodnikom i vratima u fazi pripreme. U staroj gradnji Beograda i Novog Sada prvo se skidaju stare pločice i košuljica, vidi se gde ide kanalizacija i šta je ispod, pa se tek onda obećava tuš bez praga. Ako je vertikala daleko, a ploča tanka, razumnija je niska tuš-kada."),
        h2("Česte greške"),
        ul([
          "Kupiti pločice od 120 cm, pa tek onda izabrati tačkasti slivnik.",
          "Ugraditi slivnik bez pristupa sifonu, pa ga čistiti kroz pločice.",
          "Napraviti pad „od oka“ i ne proveriti ga vodom pre stakla.",
          "Zaboraviti hidroizolaciju zidova u zoni prskanja kad postoji kada.",
        ]),
        h2("Šta rešiti pre početka radova"),
        ul([
          "Kada, tuš-kada ili tuš u ravni poda: pre košuljice, ne posle.",
          "Tip slivnika i mesto, uz kanalizaciju i raspored pločica.",
          "Format pločica, uz pad: veliki format i tačkasti slivnik se loše slažu.",
          "Visina poda u kupatilu i hodniku i da li će biti praga.",
          "Ko kupuje slivnik, kanal, staklo i slavine i kada moraju da budu na objektu.",
        ]),
        p("Prepravka tuša u podu znači otvaranje pločica, hidroizolacije i košuljice. Prava odluka na početku jeftinija je od bilo kakve uštede na materijalu."),
      ],
    },
    faq: [
      {
        q: { ru: "Можно ли сделать душ без поддона в квартире?", en: "Can you have a walk-in shower in an apartment?", sr: "Može li se napraviti tuš u ravni poda u stanu?" },
        a: { ru: "Да, если хватает высоты для трапа и уклона, а канализация рядом. В новостройке это обычно решают на этапе стяжки, в старом фонде — после проверки перекрытия и стояка.", en: "Yes, if there is enough height for the drain and the falls, and the waste pipe is close. In a new-build this is usually settled at the screed stage; in an older building, after checking the slab and the stack.", sr: "Da, ako ima dovoljno visine za slivnik i pad, a kanalizacija je blizu. U novogradnji se to obično rešava u fazi košuljice, u staroj gradnji posle provere ploče i vertikale." },
      },
      {
        q: { ru: "Душ без поддона дороже ванны?", en: "Is a walk-in shower more expensive than a bath?", sr: "Da li je tuš u ravni poda skuplji od kade?" },
        a: { ru: "По работе обычно да: уклон, утопленный трап и подрезка плитки сдвигают санузел к верхней границе 180–280 €/м² мокрой зоны. Трап, лоток и стекло покупаются отдельно.", en: "In labour, usually yes: falls, a recessed drain and tile cutting move the room towards the top of €180–280/m² of wet area. The drain, channel and glass are bought separately.", sr: "Po radu obično da: pad, upušten slivnik i sečenje pločica pomeraju kupatilo ka gornjoj granici 180–280 €/m² mokre zone. Slivnik, kanal i staklo kupuju se odvojeno." },
      },
      {
        q: { ru: "Что лучше: линейный лоток или точечный трап?", en: "Which is better: a linear channel or a point drain?", sr: "Šta je bolje: linijski kanal ili tačkasti slivnik?" },
        a: { ru: "Лоток удобнее для крупной плитки и уклона в одну сторону. Точечный трап проще, но требует больше резов. Выбор делают вместе с раскладкой плитки, до закупки.", en: "A channel suits large tiles and a single fall. A point drain is simpler but needs more cuts. Choose it together with the tile layout, before buying.", sr: "Kanal je bolji za velike pločice i pad u jednu stranu. Tačkasti slivnik je jednostavniji, ali traži više rezova. Bira se zajedno sa rasporedom pločica, pre kupovine." },
      },
      {
        q: { ru: "Нужна ли гидроизоляция под ванну?", en: "Do you need tanking under a bath?", sr: "Da li je potrebna hidroizolacija ispod kade?" },
        a: { ru: "Да. Под ванной, вокруг поддона и на стенах в зоне брызг — с лентой в углах. Вода, попавшая за экран, всё равно уходит к соседу снизу.", en: "Yes. Under the bath, around the tray and on the walls in the splash zone, with tape in the corners. Water that gets behind the panel still ends up with the neighbour below.", sr: "Da. Ispod kade, oko tuš-kade i na zidovima u zoni prskanja, sa trakom u uglovima. Voda koja prođe iza maske i dalje završi kod komšije ispod." },
      },
    ],
  },
  {
    slug: "otoplenie-i-kondicioner-pri-remonte",
    category: "engineering",
    updated: "2026-11-24",
    title: {
      ru: "Отопление и кондиционер при ремонте квартиры: что сделать до стяжки и покраски",
      en: "Heating and air conditioning in a flat renovation: what to do before screed and paint",
      sr: "Grejanje i klima pri renoviranju stana: šta uraditi pre košuljice i krečenja",
    },
    description: {
      ru: "Радиаторы, тёплый пол и кондиционеры при ремонте квартиры в Белграде и Нови-Саде: трассы, линии в щитке, дренаж и согласования, которые решают до покраски.",
      en: "Radiators, underfloor heating and air conditioners in a Belgrade or Novi Sad renovation: pipe runs, circuits, condensate drains and approvals before paint.",
      sr: "Radijatori, podno grejanje i klime pri renoviranju stana u Beogradu i Novom Sadu: trase, strujni krugovi, odvod kondenzata i dogovori pre krečenja.",
    },
    lead: {
      ru: "Кондиционер, который вешают после покраски, оставляет короб на свежей стене и кабель через полкомнаты. Радиатор, который меняют после ламината, — следы на полу. Тепло и холод в квартире решают вместе с электрикой и сантехникой, а не в конце.",
      en: "An air conditioner fitted after painting leaves trunking on a fresh wall and a cable across half the room. A radiator swapped after the laminate leaves marks on the floor. Heating and cooling are planned with the electrics and plumbing, not at the end.",
      sr: "Klima koja se kači posle krečenja ostavlja kanalicu na svežem zidu i kabl preko pola sobe. Radijator koji se menja posle laminata ostavlja tragove na podu. Grejanje i hlađenje se rešavaju zajedno sa elektrikom i vodovodom, a ne na kraju.",
    },
    body: {
      ru: [
        h2("Почему это этап инженерии, а не чистовой"),
        p("В большинстве квартир Белграда и Нови-Сада зимой работает центральное отопление от городской теплосети, реже — свой газовый котёл или электрические приборы. Летом почти везде нужны кондиционеры. И то и другое связано со стенами, полом и щитком. Если не решить их на этапе инженерии, придётся штробить и красить второй раз."),
        p("Монтаж кондиционера и работы на системе отопления часто делает отдельный специалист, а не бригада отделки, и его цену уточняют у него. Задача ремонта — подготовить для него трассы, линии, отверстия и доступ в правильный момент, а не подстраиваться под него на готовых стенах."),
        h2("Кондиционеры: что заложить до шпаклёвки"),
        ul([
          "Место внутреннего блока в каждой комнате — с учётом кровати, дивана и штор: поток не должен бить в изголовье.",
          "Место наружного блока — по правилам дома: управник может ограничивать фасад и указывать, где ставить блоки.",
          "Скрытая трасса фреона и дренажа в стене или коробе — до шпаклёвки и покраски.",
          "Отдельная линия в щитке под кондиционеры, если нагрузка растёт.",
          "Дренаж: конденсат уходит в канализацию через сифон или наружу, но не на балкон соседа.",
        ]),
        p("Скрытая трасса — это штроба или короб, и её делают вместе с электрикой. Новая разводка 20–35 €/м² и гипсокартон 14–26 €/м² за короб — те же ставки, что в остальных разборах. Медь, кабель, дренаж и сам кондиционер — отдельно. Если блок покупают позже, оставьте заглушённую трассу и вывод кабеля: это дешевле, чем короб по готовой стене."),
        p("В части новостроек Белграда и Нови-Сада застройщик уже оставил закладные трассы под кондиционеры и место под наружный блок на фасаде или балконе. Это стоит проверить до ремонта: где выходят трубки и дренаж, есть ли кабель и к какой линии он идёт. Иногда закладная трасса ведёт не туда, где вы хотите видеть блок, и решение — перенести блок или трассу — принимают до шпаклёвки, а не после."),
        h2("Радиаторы на центральном отоплении"),
        p("Заменить или перенести радиатор в квартире на городской теплосети — не то же самое, что поменять смеситель. Система общая для дома, и слив стояка, отключение и запуск не делают самовольно. Порядок выясняют заранее у управника и в теплосети, а работы на трубах отопления по возможности планируют вне отопительного сезона."),
        ul([
          "Решите, остаются ли радиаторы на своих местах, до стяжки и шпаклёвки.",
          "Если радиатор снимают на время покраски, договоритесь, кто снимает, кто ставит обратно и как это совпадает с графиком дома.",
          "Не меняйте размер и тип радиатора без согласования: это может повлиять на всю систему дома.",
          "Подводка к радиатору из пола или из стены — решение до стяжки, а не после ламината.",
          "Терморегуляторы на радиаторах удобны, если их допускает система дома.",
        ]),
        p("Покраска за радиатором — частая мелочь, которая потом раздражает годами. Если радиатор можно снять по согласованному порядку, стену за ним выравнивают и красят вместе со всей комнатой. Если нельзя — заранее обсудите с мастером, как он пройдёт это место."),
        h2("Своё отопление: котёл и тёплый пол"),
        p("Если в квартире свой газовый котёл, его место, дымоход и трассы к радиаторам фиксируют до стяжки. Работы с газом выполняют только специалисты с соответствующим допуском — это не строка в смете отделочника. Электрический котёл или обогреватели требуют отдельной мощности в щитке, и это решается на схеме электрики."),
        p("Тёплый пол чаще всего просят в санузле. Электрический мат кладут под плитку, и ему нужны отдельная линия и терморегулятор. Водяной тёплый пол от центрального отопления в многоквартирном доме обычно не подключают без согласования — уточните до покупки. Тёплый пол сдвигает санузел к верхней границе вилки 180–280 €/м² мокрой зоны, и это нужно назвать до старта."),
        h2("Щиток и нагрузка"),
        p("Кондиционеры, электрический тёплый пол, бойлер, варочная и духовка вместе дают нагрузку, на которую старый щиток часто не рассчитан. Перед электрикой составьте список всех мощных приборов и проверьте, хватает ли подведённой мощности квартиры. Увеличение мощности — отдельный вопрос с электросетью, и он занимает время: узнавайте заранее, а не когда приборы уже куплены."),
        ul([
          "Отдельная линия под каждый кондиционер или группу — по схеме электрика.",
          "Отдельная линия под бойлер и электрический тёплый пол.",
          "Свободное место в щитке под прибор, который появится позже.",
        ]),
        h2("Порядок работ"),
        ul([
          "Схема: где блоки кондиционеров, радиаторы, котёл и тёплый пол — до демонтажа.",
          "Трассы кондиционеров и трубы отопления — вместе с электрикой и сантехникой.",
          "Приёмка трасс до закрытия: фото с рулеткой, проверка герметичности там, где это применимо.",
          "Стяжка, штукатурка, шпаклёвка и покраска.",
          "Радиаторы на место, внутренние блоки — после покраски, на готовые выводы.",
        ]),
        p("Повесить внутренний блок после финальной покраски — нормально, если трасса уже в стене. Штробить и прокладывать её после покраски — нет."),
        h2("Частые ошибки"),
        ul([
          "Купить кондиционер до того, как решено место блока и трассы.",
          "Оставить дренаж «на потом» и вывести его по фасаду или в цветочный горшок.",
          "Покрасить комнату, не сняв радиатор, хотя порядок дома это позволял.",
          "Положить электрический тёплый пол без отдельной линии и терморегулятора.",
          "Не сфотографировать трассы перед закрытием стен и потом сверлить наугад.",
        ]),
        h2("Как принять этот этап"),
        p("Перед закрытием стен сфотографируйте трассы с рулеткой, чтобы потом не сверлить в медь или кабель. Проверьте, что дренаж уходит с уклоном, а выводы стоят там, где по плану будет блок. Радиаторы после возврата проверяют на протечки при запуске отопления. Как и с любым этапом, вторые 50% — после приёмки, а не после обещания «потом подключим»."),
      ],
      en: [
        h2("Why this is a services stage, not a finish"),
        p("Most flats in Belgrade and Novi Sad are heated in winter by central heating from the city network; fewer have their own gas boiler or electric heaters. In summer almost every flat needs air conditioning. Both are tied to the walls, the floor and the electrical board. If they are not settled at the services stage, you end up chasing and painting twice."),
        p("Air conditioners and heating work are often handled by a separate specialist, not the finishing crew, and their price is quoted by them. The renovation’s job is to prepare runs, circuits, openings and access at the right moment, not to work around them on finished walls."),
        h2("Air conditioning: what to plan before skimming"),
        ul([
          "The indoor unit position in each room, allowing for the bed, sofa and curtains: the airflow should not hit the headboard.",
          "The outdoor unit position under building rules: the manager may restrict the façade and say where units go.",
          "A concealed refrigerant and condensate run in the wall or a box, before skimming and paint.",
          "A dedicated circuit for air conditioners if the load is growing.",
          "Condensate: into the waste via a trap or outside, but not onto the neighbour’s balcony.",
        ]),
        p("A concealed run means a chase or a box, done together with the electrics. New wiring at €20–35/m² and drywall boxing at €14–26/m² are the same rates as in the other notes. Copper pipe, cable, the drain and the unit itself are separate. If the unit comes later, leave a capped run and a cable outlet: cheaper than trunking on a finished wall."),
        p("In some new-builds in Belgrade and Novi Sad the developer has already left pre-installed AC conduits and a spot for the outdoor unit on the façade or balcony. Check it before the renovation: where the pipes and drain come out, whether there is a cable and which circuit it goes to. Sometimes the pre-installed run leads somewhere other than where you want the unit, and the choice to move the unit or the run is made before skimming, not after."),
        h2("Radiators on central heating"),
        p("Replacing or moving a radiator in a flat on the city network is not like swapping a tap. The system is shared by the building, and draining the riser, shutting off and restarting are not done on your own initiative. Find out the procedure from the building manager and the heating provider in advance, and plan work on heating pipes outside the heating season where possible."),
        ul([
          "Decide whether radiators stay where they are before screed and skimming.",
          "If a radiator comes off for painting, agree who removes it, who refits it and how that fits the building’s schedule.",
          "Do not change radiator size or type without approval: it can affect the whole building’s system.",
          "Feed pipes from the floor or the wall are a decision before screed, not after the laminate.",
          "Radiator thermostats are handy if the building’s system allows them.",
        ]),
        p("Paint behind a radiator is a small thing that annoys people for years. If the radiator can come off under an agreed procedure, the wall behind it is levelled and painted with the rest of the room. If not, discuss with the tradesman in advance how he will handle that spot."),
        h2("Your own heating: boiler and underfloor"),
        p("If the flat has its own gas boiler, its position, flue and runs to the radiators are fixed before the screed. Gas work is done only by specialists with the right authorisation; it is not a line in the finisher’s quote. An electric boiler or heaters need dedicated capacity in the board, and that belongs in the electrical layout."),
        p("Underfloor heating is most often requested in the bathroom. An electric mat goes under the tile and needs its own circuit and thermostat. Wet underfloor heating fed from central heating in an apartment block is usually not connected without approval, so check before buying. Underfloor heating moves the bathroom to the top of the €180–280/m² wet-area band, and that has to be named before the start."),
        h2("The board and the load"),
        p("Air conditioners, electric underfloor heating, a water heater, a hob and an oven together create a load an old board often was not built for. Before the electrics, list every high-power appliance and check whether the flat’s supplied capacity is enough. Raising the capacity is a separate matter with the grid operator and takes time, so ask early, not once the appliances are bought."),
        ul([
          "A dedicated circuit for each air conditioner or group, per the electrician’s layout.",
          "A dedicated circuit for the water heater and electric underfloor heating.",
          "Spare room in the board for an appliance that will arrive later.",
        ]),
        h2("Order of work"),
        ul([
          "Layout: where AC units, radiators, the boiler and underfloor heating go, before strip-out.",
          "AC runs and heating pipes, together with the electrics and plumbing.",
          "Runs signed off before closing: photos with a tape measure, pressure checks where applicable.",
          "Screed, plaster, skimming and paint.",
          "Radiators back on, indoor units after painting, onto ready outlets.",
        ]),
        p("Hanging an indoor unit after the final coat is fine if the run is already in the wall. Chasing and laying the run after painting is not."),
        h2("Common mistakes"),
        ul([
          "Buying the air conditioner before the unit position and run are decided.",
          "Leaving the condensate drain “for later” and running it down the façade or into a plant pot.",
          "Painting the room without taking the radiator off, even though the building allowed it.",
          "Laying an electric underfloor mat without its own circuit and thermostat.",
          "Not photographing the runs before the walls close, then drilling blind.",
        ]),
        h2("How to sign off this stage"),
        p("Before the walls are closed, photograph the runs with a tape measure so nobody later drills into copper or cable. Check that the condensate drain has a fall and the outlets sit where the unit is planned. Refitted radiators are checked for leaks when the heating starts. As with any stage, the second 50% follows handover, not a promise to “connect it later”."),
      ],
      sr: [
        h2("Zašto je ovo faza instalacija, a ne završnice"),
        p("Većina stanova u Beogradu i Novom Sadu zimi se greje centralnim grejanjem iz gradske toplane, ređe sopstvenim gasnim kotlom ili električnim uređajima. Leti skoro svaki stan traži klimu. I jedno i drugo vezano je za zidove, pod i električnu tablu. Ako se ne reše u fazi instalacija, štemuje se i kreči dvaput."),
        p("Ugradnju klime i radove na grejanju često radi poseban majstor, a ne ekipa za završne radove, i cenu daje on. Zadatak renoviranja je da za njega pripremi trase, strujne krugove, otvore i pristup u pravom trenutku, a ne da se prilagođava na gotovim zidovima."),
        h2("Klima: šta predvideti pre gletovanja"),
        ul([
          "Mesto unutrašnje jedinice u svakoj sobi, uz krevet, kauč i zavese: struja vazduha ne treba da ide u uzglavlje.",
          "Mesto spoljne jedinice po pravilima zgrade: upravnik može da ograniči fasadu i odredi gde idu jedinice.",
          "Skrivena trasa freona i odvoda kondenzata u zidu ili kutiji, pre gletovanja i krečenja.",
          "Poseban krug u tabli za klime, ako opterećenje raste.",
          "Kondenzat: u kanalizaciju preko sifona ili napolje, ali ne na komšijin balkon.",
        ]),
        p("Skrivena trasa je šlic ili kutija i radi se zajedno sa elektrikom. Nova instalacija 20–35 €/m² i gips-karton 14–26 €/m² za kutiju iste su cene kao u ostalim tekstovima. Bakarne cevi, kabl, odvod i sama klima su odvojeno. Ako se jedinica kupuje kasnije, ostavite zatvorenu trasu i izvod kabla: jeftinije je od kanalice po gotovom zidu."),
        p("U delu novogradnje u Beogradu i Novom Sadu investitor je već ostavio pripremu za klimu i mesto za spoljnu jedinicu na fasadi ili terasi. To vredi proveriti pre renoviranja: gde izlaze cevi i odvod, ima li kabla i na koji krug ide. Nekad priprema vodi tamo gde ne želite jedinicu, i odluka da se pomeri jedinica ili trasa donosi se pre gletovanja, a ne posle."),
        h2("Radijatori na centralnom grejanju"),
        p("Zamena ili pomeranje radijatora u stanu na gradskoj toplani nije isto što i zamena slavine. Sistem je zajednički za zgradu, a pražnjenje vertikale, isključivanje i ponovno puštanje ne rade se na svoju ruku. Postupak se unapred proverava kod upravnika i toplane, a radovi na cevima grejanja planiraju se, kad je moguće, van grejne sezone."),
        ul([
          "Odlučite da li radijatori ostaju na svojim mestima pre košuljice i gletovanja.",
          "Ako se radijator skida zbog krečenja, dogovorite ko ga skida, ko vraća i kako se to uklapa u raspored zgrade.",
          "Ne menjajte veličinu i tip radijatora bez saglasnosti: to može uticati na ceo sistem zgrade.",
          "Priključak radijatora iz poda ili iz zida je odluka pre košuljice, a ne posle laminata.",
          "Termostatski ventili na radijatorima su praktični, ako ih sistem zgrade dozvoljava.",
        ]),
        p("Nekrečen zid iza radijatora je sitnica koja posle godinama nervira. Ako radijator sme da se skine po dogovorenom postupku, zid iza njega se ravna i kreči sa celom sobom. Ako ne sme, unapred dogovorite sa majstorom kako će rešiti to mesto."),
        h2("Sopstveno grejanje: kotao i podno grejanje"),
        p("Ako stan ima sopstveni gasni kotao, njegovo mesto, dimnjak i trase do radijatora fiksiraju se pre košuljice. Radove na gasu izvode samo stručnjaci sa odgovarajućim ovlašćenjem; to nije stavka u predračunu za završne radove. Električni kotao ili grejalice traže posebnu snagu u tabli, i to ide u šemu elektrike."),
        p("Podno grejanje se najčešće traži u kupatilu. Električna grejna mreža ide ispod pločica i traži poseban krug i termostat. Vodeno podno grejanje sa centralnog grejanja u stambenoj zgradi obično se ne priključuje bez saglasnosti, zato proverite pre kupovine. Podno grejanje pomera kupatilo ka gornjoj granici 180–280 €/m² mokre zone, i to mora da se kaže pre početka."),
        h2("Tabla i opterećenje"),
        p("Klime, električno podno grejanje, bojler, ploča i rerna zajedno daju opterećenje za koje stara tabla često nije pravljena. Pre elektrike napravite spisak svih jakih uređaja i proverite da li je odobrena snaga stana dovoljna. Povećanje snage je posebno pitanje sa elektrodistribucijom i traje, zato se raspitajte ranije, a ne kad su uređaji već kupljeni."),
        ul([
          "Poseban krug za svaku klimu ili grupu, po šemi električara.",
          "Poseban krug za bojler i električno podno grejanje.",
          "Slobodno mesto u tabli za uređaj koji stiže kasnije.",
        ]),
        h2("Redosled radova"),
        ul([
          "Šema: gde idu klime, radijatori, kotao i podno grejanje, pre rušenja.",
          "Trase klima i cevi grejanja, zajedno sa elektrikom i vodovodom.",
          "Prijem trasa pre zatvaranja: fotografije sa metrom, provera zaptivenosti gde je primenljivo.",
          "Košuljica, malter, glet i krečenje.",
          "Radijatori nazad, unutrašnje jedinice posle krečenja, na gotove izvode.",
        ]),
        p("Kačenje unutrašnje jedinice posle završnog krečenja je u redu ako je trasa već u zidu. Štemovanje i polaganje trase posle krečenja nije."),
        h2("Česte greške"),
        ul([
          "Kupiti klimu pre nego što su rešeni mesto jedinice i trasa.",
          "Ostaviti odvod kondenzata „za posle“ i pustiti ga niz fasadu ili u saksiju.",
          "Okrečiti sobu bez skidanja radijatora, iako je zgrada to dozvoljavala.",
          "Postaviti električno podno grejanje bez posebnog kruga i termostata.",
          "Ne fotografisati trase pre zatvaranja zidova, pa posle bušiti naslepo.",
        ]),
        h2("Kako primiti ovu fazu"),
        p("Pre zatvaranja zidova fotografišite trase sa metrom, da kasnije niko ne buši u bakar ili kabl. Proverite da odvod kondenzata ima pad i da su izvodi tamo gde je po planu jedinica. Vraćeni radijatori proveravaju se na curenje kad krene grejanje. Kao i kod svake faze, drugih 50% ide posle prijema, a ne posle obećanja „priključićemo posle“."),
      ],
    },
    faq: [
      {
        q: { ru: "Когда прокладывать трассу кондиционера при ремонте?", en: "When should the air conditioner run be laid during a renovation?", sr: "Kada se polaže trasa klime pri renoviranju?" },
        a: { ru: "Вместе с электрикой, до шпаклёвки и покраски. Сам блок можно повесить позже, если трасса и кабель уже выведены.", en: "Together with the electrics, before skimming and paint. The unit itself can be hung later if the run and cable are already in place.", sr: "Zajedno sa elektrikom, pre gletovanja i krečenja. Sama jedinica može da se okači kasnije ako su trasa i kabl već izvedeni." },
      },
      {
        q: { ru: "Можно ли самому перенести радиатор на центральном отоплении?", en: "Can you move a radiator on central heating yourself?", sr: "Može li se radijator na centralnom grejanju pomeriti samostalno?" },
        a: { ru: "Система общая для дома. Отключение, слив стояка и порядок работ уточняют у управника и в теплосети. Без этого перенос рискован для вас и для соседей.", en: "The system is shared by the building. Shut-off, draining the riser and the procedure are agreed with the manager and the heating provider. Without that, moving it is risky for you and the neighbours.", sr: "Sistem je zajednički za zgradu. Isključivanje, pražnjenje vertikale i postupak dogovaraju se sa upravnikom i toplanom. Bez toga je pomeranje rizično i za vas i za komšije." },
      },
      {
        q: { ru: "Нужна ли отдельная линия под кондиционер?", en: "Does an air conditioner need its own circuit?", sr: "Da li klimi treba poseban strujni krug?" },
        a: { ru: "Мощные приборы обычно получают свои линии по схеме электрика. Это решают до штробы, вместе со всей разводкой, а не когда кондиционер уже куплен.", en: "High-power appliances usually get their own circuits in the electrician’s layout. That is decided before chasing, with the rest of the wiring, not once the unit is bought.", sr: "Jaki uređaji obično dobijaju svoje krugove po šemi električara. To se rešava pre štemovanja, sa celom instalacijom, a ne kad je klima već kupljena." },
      },
      {
        q: { ru: "Можно ли сделать тёплый пол в квартире?", en: "Can you install underfloor heating in an apartment?", sr: "Može li se napraviti podno grejanje u stanu?" },
        a: { ru: "Электрический под плиткой — да, с отдельной линией и терморегулятором. Водяной от центрального отопления в многоквартирном доме обычно не подключают без согласования — уточните до покупки.", en: "Electric under tile, yes, with its own circuit and thermostat. Wet underfloor heating from central heating in an apartment block is usually not connected without approval, so check before buying.", sr: "Električno ispod pločica — da, sa posebnim krugom i termostatom. Vodeno sa centralnog grejanja u stambenoj zgradi obično se ne priključuje bez saglasnosti, zato proverite pre kupovine." },
      },
    ],
  },
];

const writtenOrder = new Map(articles.map((item, index) => [item.slug, index]));
articles.sort(
  (a, b) => b.updated.localeCompare(a.updated) || (writtenOrder.get(b.slug) ?? 0) - (writtenOrder.get(a.slug) ?? 0),
);

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


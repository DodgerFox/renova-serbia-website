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


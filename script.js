// Pełna talia tarota (78 kart) oparta na nazwach plików, które podałaś.
// Grafiki muszą leżeć w: images/tarot/NazwaPliku.png

const TAROT_CARDS = [
  // === WIELKIE ARKANA ===
  {
    id: "00-TheFool",
    name: "0. Głupiec",
    image: "images/tarot/00-TheFool.png",
    keywords: "początek, spontaniczność, zaufanie, podróż",
    description:
      "Głupiec symbolizuje nowe początki, skok w nieznane i zaufanie do życia. Zachęca do otwartości i odwagi, ale przypomina też, by uważać na potencjalne ryzyko."
  },
  {
    id: "01-TheMagician",
    name: "I. Mag",
    image: "images/tarot/01-TheMagician.png",
    keywords: "manifestacja, wola, koncentracja, zasoby",
    description:
      "Mag mówi o możliwości świadomego kreowania rzeczywistości. Masz wszystkie narzędzia, których potrzebujesz – chodzi o skupienie, wolę i działanie."
  },
  {
    id: "02-TheHighPriestess",
    name: "II. Kapłanka",
    image: "images/tarot/02-TheHighPriestess.png",
    keywords: "intuicja, tajemnica, podświadomość, milczenie",
    description:
      "Kapłanka zaprasza do słuchania swojej intuicji i wewnętrznego głosu. Część odpowiedzi pozostaje jeszcze ukryta – to dobry moment na obserwację i refleksję."
  },
  {
    id: "03-TheEmpress",
    name: "III. Cesarzowa",
    image: "images/tarot/03-TheEmpress.png",
    keywords: "obfitość, troska, kreatywność, natura",
    description:
      "Cesarzowa symbolizuje płodność, tworzenie i opiekę. Wskazuje na okres wzrostu, komfortu i dbania o siebie oraz innych."
  },
  {
    id: "04-TheEmperor",
    name: "IV. Cesarz",
    image: "images/tarot/04-TheEmperor.png",
    keywords: "struktura, władza, stabilność, odpowiedzialność",
    description:
      "Cesarz reprezentuje porządek, granice i zdolność do brania odpowiedzialności. Może oznaczać figurę autorytetu lub potrzebę wprowadzenia większej struktury w życie."
  },
  {
    id: "05-TheHierophant",
    name: "V. Kapłan",
    image: "images/tarot/05-TheHierophant.png",
    keywords: "tradycja, nauka, wartości, autorytet duchowy",
    description:
      "Kapłan łączy się z tradycją, nauczaniem i systemem wartości. Może oznaczać mentora, szkołę, instytucję lub potrzebę poszukania głębszego sensu."
  },
  {
    id: "06-TheLovers",
    name: "VI. Kochankowie",
    image: "images/tarot/06-TheLovers.png",
    keywords: "relacje, wybór, wartości, połączenie",
    description:
      "Kochankowie mówią o związkach i głębokich relacjach, ale także o wyborach zgodnych z sercem. To karta harmonii, zaufania i odpowiedzialnej decyzji."
  },
  {
    id: "07-TheChariot",
    name: "VII. Rydwan",
    image: "images/tarot/07-TheChariot.png",
    keywords: "determinacja, ruch, zwycięstwo, kontrola",
    description:
      "Rydwan symbolizuje silną wolę, ruch do przodu i umiejętność utrzymania kontroli nad sytuacją. To karta postępu poprzez skupienie i dyscyplinę."
  },
  {
    id: "08-Strength",
    name: "VIII. Siła",
    image: "images/tarot/08-Strength.png",
    keywords: "odwaga, wewnętrzna siła, łagodność, opanowanie",
    description:
      "Siła mówi o łagodnej, ale zdecydowanej mocy. To nie brutalna siła, lecz odwaga, cierpliwość i umiejętność panowania nad emocjami."
  },
  {
    id: "09-TheHermit",
    name: "IX. Pustelnik",
    image: "images/tarot/09-TheHermit.png",
    keywords: "samotność, mądrość, poszukiwanie, refleksja",
    description:
      "Pustelnik zachęca do wycofania się, by odnaleźć własną prawdę. To czas na refleksję, wewnętrzne poszukiwania i spokój."
  },
  {
    id: "10-WheelOfFortune",
    name: "X. Koło Fortuny",
    image: "images/tarot/10-WheelOfFortune.png",
    keywords: "zmiana, cykle, los, przełom",
    description:
      "Koło Fortuny mówi o zmianach, które często są poza naszą kontrolą. Możliwy jest nagły zwrot akcji, zakończenie jednego cyklu i początek kolejnego."
  },
  {
    id: "11-Justice",
    name: "XI. Sprawiedliwość",
    image: "images/tarot/11-Justice.png",
    keywords: "równowaga, prawo, konsekwencje, prawda",
    description:
      "Sprawiedliwość symbolizuje uczciwość, odpowiedzialność i skutki wcześniejszych decyzji. Może oznaczać sprawy urzędowe lub potrzebę obiektywnego spojrzenia."
  },
  {
    id: "12-TheHangedMan",
    name: "XII. Wisielec",
    image: "images/tarot/12-TheHangedMan.png",
    keywords: "zawieszenie, nowe spojrzenie, poświęcenie",
    description:
      "Wisielec to zatrzymanie i spojrzenie na sprawy z innej perspektywy. Czasem wymaga poświęcenia lub odpuszczenia kontroli, by coś naprawdę zrozumieć."
  },
  {
    id: "13-Death",
    name: "XIII. Śmierć",
    image: "images/tarot/13-Death.png",
    keywords: "zakończenie, transformacja, odrodzenie",
    description:
      "Śmierć rzadko oznacza dosłowną śmierć – to przede wszystkim koniec pewnego etapu i głęboka transformacja. Aby przyszło nowe, coś starego musi się zakończyć."
  },
  {
    id: "14-Temperance",
    name: "XIV. Umiarkowanie",
    image: "images/tarot/14-Temperance.png",
    keywords: "harmonia, równowaga, cierpliwość, łagodzenie",
    description:
      "Umiarkowanie mówi o szukaniu środka, balansie pomiędzy skrajnościami. To karta cierpliwości, spokojnego łączenia różnych elementów w jedną całość."
  },
  {
    id: "15-TheDevil",
    name: "XV. Diabeł",
    image: "images/tarot/15-TheDevil.png",
    keywords: "uzależnienie, pokusa, zniewolenie, cień",
    description:
      "Diabeł symbolizuje przywiązanie do czegoś, co nas ogranicza: nawyki, relacje, lęki. Zachęca, by zobaczyć, gdzie sami trzymamy się kajdan."
  },
  {
    id: "16-TheTower",
    name: "XVI. Wieża",
    image: "images/tarot/16-TheTower.png",
    keywords: "nagły wstrząs, rozpad, prawda, przebudzenie",
    description:
      "Wieża to nagłe zmiany, które burzą fałszywe struktury. Choć może być to trudne doświadczenie, otwiera drogę do bardziej autentycznego życia."
  },
  {
    id: "17-TheStar",
    name: "XVII. Gwiazda",
    image: "images/tarot/17-TheStar.png",
    keywords: "nadzieja, inspiracja, uzdrowienie, spokój",
    description:
      "Gwiazda wnosi poczucie spokoju i wiary, że sprawy ułożą się dobrze. To karta uzdrowienia, delikatnej inspiracji i zaufania do procesu."
  },
  {
    id: "18-TheMoon",
    name: "XVIII. Księżyc",
    image: "images/tarot/18-TheMoon.png",
    keywords: "iluzje, lęk, sny, podświadomość",
    description:
      "Księżyc wskazuje na zamieszanie, lęki i iluzje. Nie wszystko jest jasne – warto zaufać intuicji, ale też uważać na projekcje i fantazje."
  },
  {
    id: "19-TheSun",
    name: "XIX. Słońce",
    image: "images/tarot/19-TheSun.png",
    keywords: "radość, sukces, jasność, energia",
    description:
      "Słońce to bardzo pozytywna karta: mówi o radości, przejrzystości sytuacji i życiowej energii. Sukces jest blisko lub już trwa."
  },
  {
    id: "20-Judgement",
    name: "XX. Sąd Ostateczny",
    image: "images/tarot/20-Judgement.png",
    keywords: "przebudzenie, ocena, nowy etap, wezwanie",
    description:
      "Sąd Ostateczny symbolizuje moment przebudzenia i zrozumienia. To czas podsumowań, ale też otwarcia się na nowy poziom świadomości."
  },
  {
    id: "21-TheWorld",
    name: "XXI. Świat",
    image: "images/tarot/21-TheWorld.png",
    keywords: "spełnienie, domknięcie, podróż, całość",
    description:
      "Świat oznacza zakończenie ważnego cyklu i poczucie spełnienia. To karta integracji doświadczeń, podróży i dojścia do celu."
  },

  // === BUŁAWY (WANDS01–Wands14) ===
  {
    id: "Wands01",
    name: "As Buław",
    image: "images/tarot/Wands01.png",
    keywords: "energia, zapał, początek działania",
    description:
      "As Buław to wybuch inspiracji, motywacji i chęci działania. Idealny moment na start projektu, w który wkładasz serce."
  },
  {
    id: "Wands02",
    name: "Dwójka Buław",
    image: "images/tarot/Wands02.png",
    keywords: "planowanie, wizja, wybór kierunku",
    description:
      "Dwójka Buław zachęca do spojrzenia szerzej i zaplanowania kolejnych kroków. Czas wybrać, w którą stronę chcesz pójść."
  },
  {
    id: "Wands03",
    name: "Trójka Buław",
    image: "images/tarot/Wands03.png",
    keywords: "rozwój, oczekiwanie, perspektywy",
    description:
      "Trójka Buław mówi o pierwszych efektach działań i o tym, że horyzont się poszerza. Twoje plany zaczynają nabierać kształtu."
  },
  {
    id: "Wands04",
    name: "Czwórka Buław",
    image: "images/tarot/Wands04.png",
    keywords: "świętowanie, dom, stabilność",
    description:
      "Czwórka Buław symbolizuje radość, małe święta i poczucie stabilności. Dobry moment, by cieszyć się tym, co już osiągnęłaś."
  },
  {
    id: "Wands05",
    name: "Piątka Buław",
    image: "images/tarot/Wands05.png",
    keywords: "rywalizacja, konflikt, napięcie",
    description:
      "Piątka Buław pokazuje zderzenie różnych energii – spory, dyskusje, czasem chaos. Warto zadbać o jasne zasady gry."
  },
  {
    id: "Wands06",
    name: "Szóstka Buław",
    image: "images/tarot/Wands06.png",
    keywords: "sukces, uznanie, zwycięstwo",
    description:
      "Szóstka Buław to karta sukcesu i docenienia. Twoje wysiłki zostają zauważone, a Ty możesz poczuć dumę z osiągnięć."
  },
  {
    id: "Wands07",
    name: "Siódemka Buław",
    image: "images/tarot/Wands07.png",
    keywords: "obrona, stawanie za sobą, granice",
    description:
      "Siódemka Buław zachęca do obrony swojego stanowiska i swoich wartości. Masz prawo stanąć mocno na swoim."
  },
  {
    id: "Wands08",
    name: "Ósemka Buław",
    image: "images/tarot/Wands08.png",
    keywords: "przyspieszenie, wiadomości, ruch",
    description:
      "Ósemka Buław symbolizuje szybki bieg wydarzeń, nagłe wiadomości lub podróż. Sprawy zaczynają się dziać szybciej."
  },
  {
    id: "Wands09",
    name: "Dziewiątka Buław",
    image: "images/tarot/Wands09.png",
    keywords: "wytrwałość, zmęczenie, obrona",
    description:
      "Dziewiątka Buław mówi o zmęczeniu po długiej walce, ale też o determinacji, by wytrwać do końca."
  },
  {
    id: "Wands10",
    name: "Dziesiątka Buław",
    image: "images/tarot/Wands10.png",
    keywords: "przeciążenie, obowiązki, ciężar",
    description:
      "Dziesiątka Buław wskazuje na zbyt wiele na głowie. Może warto odłożyć część ciężaru lub poprosić o pomoc."
  },
  {
    id: "Wands11",
    name: "Paź Buław",
    image: "images/tarot/Wands11.png",
    keywords: "entuzjazm, wiadomość, nowa pasja",
    description:
      "Paź Buław jest jak ciekawy świata posłaniec. To iskra nowej pasji lub pomysł, który warto zbadać."
  },
  {
    id: "Wands12",
    name: "Rycerz Buław",
    image: "images/tarot/Wands12.png",
    keywords: "impuls, przygoda, pośpiech",
    description:
      "Rycerz Buław działa szybko i z pasją. Uważaj tylko, by nie działać zbyt pochopnie."
  },
  {
    id: "Wands13",
    name: "Królowa Buław",
    image: "images/tarot/Wands13.png",
    keywords: "charyzma, pewność siebie, ogień",
    description:
      "Królowa Buław emanuje pewnością siebie i magnetyzmem. Zachęca do odważnego wyrażania swojej energii."
  },
  {
    id: "Wands14",
    name: "Król Buław",
    image: "images/tarot/Wands14.png",
    keywords: "lider, wizja, przedsiębiorczość",
    description:
      "Król Buław to przywódca z wizją. Zachęca do przejęcia steru i odważnego działania."
  },

  // === KIELICHY (Cups01–Cups14) ===
  {
    id: "Cups01",
    name: "As Kielichów",
    image: "images/tarot/Cups01.png",
    keywords: "nowe uczucia, intuicja, otwarte serce",
    description:
      "As Kielichów symbolizuje początek w sferze uczuć: nowe emocje, relacje lub kreatywną inspirację."
  },
  {
    id: "Cups02",
    name: "Dwójka Kielichów",
    image: "images/tarot/Cups02.png",
    keywords: "partnerstwo, porozumienie, więź",
    description:
      "Dwójka Kielichów to karta relacji i wzajemnego przyciągania. Może oznaczać związek, współpracę lub pojednanie."
  },
  {
    id: "Cups03",
    name: "Trójka Kielichów",
    image: "images/tarot/Cups03.png",
    keywords: "świętowanie, przyjaźń, radość",
    description:
      "Trójka Kielichów pokazuje radość dzieloną z innymi, wspólne świętowanie i wsparcie przyjaciół."
  },
  {
    id: "Cups04",
    name: "Czwórka Kielichów",
    image: "images/tarot/Cups04.png",
    keywords: "apatia, znudzenie, zamyślenie",
    description:
      "Czwórka Kielichów mówi o znużeniu i trudności w dostrzeżeniu nowych możliwości. Warto rozbudzić ciekawość."
  },
  {
    id: "Cups05",
    name: "Piątka Kielichów",
    image: "images/tarot/Cups05.png",
    keywords: "żal, strata, rozczarowanie",
    description:
      "Piątka Kielichów wskazuje na smutek po stracie. Karta przypomina, że nie wszystko jest jeszcze przegrane."
  },
  {
    id: "Cups06",
    name: "Szóstka Kielichów",
    image: "images/tarot/Cups06.png",
    keywords: "wspomnienia, nostalgia, dzieciństwo",
    description:
      "Szóstka Kielichów to powrót do wspomnień i prostych radości. Może wskazywać na osoby lub sprawy z przeszłości."
  },
  {
    id: "Cups07",
    name: "Siódemka Kielichów",
    image: "images/tarot/Cups07.png",
    keywords: "fantazje, iluzje, wiele opcji",
    description:
      "Siódemka Kielichów pokazuje mnogość możliwości, ale też chaos i iluzje. Warto sprawdzić, co jest realne."
  },
  {
    id: "Cups08",
    name: "Ósemka Kielichów",
    image: "images/tarot/Cups08.png",
    keywords: "odejście, poszukiwanie, zmiana",
    description:
      "Ósemka Kielichów mówi o odejściu od czegoś, co już nie daje satysfakcji. To krok ku czemuś głębszemu."
  },
  {
    id: "Cups09",
    name: "Dziewiątka Kielichów",
    image: "images/tarot/Cups09.png",
    keywords: "spełnienie, zadowolenie, przyjemność",
    description:
      "Dziewiątka Kielichów to karta życzeń, satysfakcji i emocjonalnego spełnienia."
  },
  {
    id: "Cups10",
    name: "Dziesiątka Kielichów",
    image: "images/tarot/Cups10.png",
    keywords: "rodzina, harmonia, szczęście",
    description:
      "Dziesiątka Kielichów symbolizuje emocjonalne spełnienie w relacjach, rodzinie i bliskim otoczeniu."
  },
  {
    id: "Cups11",
    name: "Paź Kielichów",
    image: "images/tarot/Cups11.png",
    keywords: "wrażliwość, wiadomość, kreatywność",
    description:
      "Paź Kielichów jest delikatny i wrażliwy. Często przynosi wieści serca lub impuls twórczy."
  },
  {
    id: "Cups12",
    name: "Rycerz Kielichów",
    image: "images/tarot/Cups12.png",
    keywords: "romantyzm, propozycja, marzenia",
    description:
      "Rycerz Kielichów to posłaniec uczuć. Może symbolizować romantyczną propozycję lub marzycielską naturę."
  },
  {
    id: "Cups13",
    name: "Królowa Kielichów",
    image: "images/tarot/Cups13.png",
    keywords: "empatia, intuicja, wsparcie",
    description:
      "Królowa Kielichów jest opiekuńcza i bardzo intuicyjna. Zachęca do troski o emocje swoje i innych."
  },
  {
    id: "Cups14",
    name: "Król Kielichów",
    image: "images/tarot/Cups14.png",
    keywords: "dojrzałość emocjonalna, równowaga uczuć",
    description:
      "Król Kielichów panuje nad emocjami, ale ich nie tłumi. Symbolizuje dojrzałość, empatię i spokój."
  },

  // === DENARY (Pentacles01–Pentacles14) ===
  {
    id: "Pentacles01",
    name: "As Denarów",
    image: "images/tarot/Pentacles01.png",
    keywords: "materia, szansa, stabilność, praca",
    description:
      "As Denarów oznacza realną, namacalną szansę: propozycję pracy, projekt lub inwestycję."
  },
  {
    id: "Pentacles02",
    name: "Dwójka Denarów",
    image: "images/tarot/Pentacles02.png",
    keywords: "równowaga, żonglowanie sprawami, elastyczność",
    description:
      "Dwójka Denarów pokazuje konieczność łączenia kilku spraw na raz i znalezienia dla nich balansu."
  },
  {
    id: "Pentacles03",
    name: "Trójka Denarów",
    image: "images/tarot/Pentacles03.png",
    keywords: "współpraca, nauka, rzemiosło",
    description:
      "Trójka Denarów mówi o współdziałaniu, nauce i rozwijaniu umiejętności w praktyce."
  },
  {
    id: "Pentacles04",
    name: "Czwórka Denarów",
    image: "images/tarot/Pentacles04.png",
    keywords: "kontrola, oszczędzanie, przywiązanie",
    description:
      "Czwórka Denarów wskazuje na potrzebę bezpieczeństwa materialnego, ale czasem także na zbytnią kontrolę."
  },
  {
    id: "Pentacles05",
    name: "Piątka Denarów",
    image: "images/tarot/Pentacles05.png",
    keywords: "niedostatek, trudności, wykluczenie",
    description:
      "Piątka Denarów pokazuje poczucie braku – finansowego lub emocjonalnego. Warto poszukać wsparcia."
  },
  {
    id: "Pentacles06",
    name: "Szóstka Denarów",
    image: "images/tarot/Pentacles06.png",
    keywords: "dar, pomoc, wymiana",
    description:
      "Szóstka Denarów mówi o dawaniu i przyjmowaniu wsparcia. To karta równowagi w wymianie."
  },
  {
    id: "Pentacles07",
    name: "Siódemka Denarów",
    image: "images/tarot/Pentacles07.png",
    keywords: "cierpliwość, plony, ocena postępów",
    description:
      "Siódemka Denarów zachęca do cierpliwości i oceny dotychczasowych działań. Plony dojrzewają."
  },
  {
    id: "Pentacles08",
    name: "Ósemka Denarów",
    image: "images/tarot/Pentacles08.png",
    keywords: "praca, nauka, doskonalenie",
    description:
      "Ósemka Denarów to karta solidnej pracy i szlifowania umiejętności."
  },
  {
    id: "Pentacles09",
    name: "Dziewiątka Denarów",
    image: "images/tarot/Pentacles09.png",
    keywords: "komfort, niezależność, obfitość",
    description:
      "Dziewiątka Denarów symbolizuje niezależność i przyjemność z owoców własnej pracy."
  },
  {
    id: "Pentacles10",
    name: "Dziesiątka Denarów",
    image: "images/tarot/Pentacles10.png",
    keywords: "rodzina, majątek, bezpieczeństwo",
    description:
      "Dziesiątka Denarów mówi o długoterminowej stabilności, rodzinie i dorobku."
  },
  {
    id: "Pentacles11",
    name: "Paź Denarów",
    image: "images/tarot/Pentacles11.png",
    keywords: "nauka, oferta, praktyczność",
    description:
      "Paź Denarów symbolizuje ucznia, który uczy się poprzez konkretne doświadczenie. Może oznaczać także praktyczną ofertę."
  },
  {
    id: "Pentacles12",
    name: "Rycerz Denarów",
    image: "images/tarot/Pentacles12.png",
    keywords: "systematyczność, obowiązkowość, praca",
    description:
      "Rycerz Denarów działa powoli, ale konsekwentnie. To karta solidności i wytrwałości."
  },
  {
    id: "Pentacles13",
    name: "Królowa Denarów",
    image: "images/tarot/Pentacles13.png",
    keywords: "opieka, praktyczność, dom",
    description:
      "Królowa Denarów łączy troskę z pragmatyzmem. Dba o komfort, bezpieczeństwo i codzienność."
  },
  {
    id: "Pentacles14",
    name: "Król Denarów",
    image: "images/tarot/Pentacles14.png",
    keywords: "stabilność finansowa, biznes, bezpieczeństwo",
    description:
      "Król Denarów to dojrzałość w sferze materii: odpowiedzialne podejście do pracy, finansów i zasobów."
  },

  // === MIECZE (Swords01–Swords14) ===
  {
    id: "Swords01",
    name: "As Mieczy",
    image: "images/tarot/Swords01.png",
    keywords: "jasność, intelekt, prawda, decyzja",
    description:
      "As Mieczy mówi o przejrzystym myśleniu, nowym pomyśle lub ważnej prawdzie. To dobry moment na podjęcie decyzji."
  },
  {
    id: "Swords02",
    name: "Dwójka Mieczy",
    image: "images/tarot/Swords02.png",
    keywords: "blokada, decyzja, balans",
    description:
      "Dwójka Mieczy pokazuje wstrzymanie i trudność w podjęciu decyzji. Czas poszukać więcej informacji lub wejść głębiej w siebie."
  },
  {
    id: "Swords03",
    name: "Trójka Mieczy",
    image: "images/tarot/Swords03.png",
    keywords: "ból, rozstanie, rozczarowanie",
    description:
      "Trójka Mieczy symbolizuje emocjonalny ból i zranienie. To trudne, ale często oczyszczające doświadczenie."
  },
  {
    id: "Swords04",
    name: "Czwórka Mieczy",
    image: "images/tarot/Swords04.png",
    keywords: "odpoczynek, przerwa, regeneracja",
    description:
      "Czwórka Mieczy zachęca do zatrzymania się, odpoczynku i zebrania sił."
  },
  {
    id: "Swords05",
    name: "Piątka Mieczy",
    image: "images/tarot/Swords05.png",
    keywords: "konflikt, wygrana za wszelką cenę",
    description:
      "Piątka Mieczy pokazuje sytuację, w której ktoś musi przegrać, by ktoś inny wygrał. Warto przemyśleć, czy cena nie jest zbyt wysoka."
  },
  {
    id: "Swords06",
    name: "Szóstka Mieczy",
    image: "images/tarot/Swords06.png",
    keywords: "przejście, podróż, zmiana",
    description:
      "Szóstka Mieczy mówi o przejściu z trudnej sytuacji w spokojniejszą. Czasem oznacza dosłowną podróż."
  },
  {
    id: "Swords07",
    name: "Siódemka Mieczy",
    image: "images/tarot/Swords07.png",
    keywords: "spryt, strategia, tajemnica",
    description:
      "Siódemka Mieczy wskazuje na kombinowanie, działania zakulisowe lub potrzebę sprytnego planu."
  },
  {
    id: "Swords08",
    name: "Ósemka Mieczy",
    image: "images/tarot/Swords08.png",
    keywords: "ograniczenie, lęk, mentalna pułapka",
    description:
      "Ósemka Mieczy pokazuje poczucie uwięzienia, często w głowie. Klucz leży w zmianie sposobu myślenia."
  },
  {
    id: "Swords09",
    name: "Dziewiątka Mieczy",
    image: "images/tarot/Swords09.png",
    keywords: "zmartwienia, bezsenność, lęk",
    description:
      "Dziewiątka Mieczy to karta niepokoju i czarnych myśli. Warto sprawdzić, które lęki są realne, a które tylko w wyobraźni."
  },
  {
    id: "Swords10",
    name: "Dziesiątka Mieczy",
    image: "images/tarot/Swords10.png",
    keywords: "koniec, przesyt, punkt zwrotny",
    description:
      "Dziesiątka Mieczy mówi o zakończeniu trudnej sytuacji. Choć wygląda dramatycznie, dalej może być już tylko lepiej."
  },
  {
    id: "Swords11",
    name: "Paź Mieczy",
    image: "images/tarot/Swords11.png",
    keywords: "ciekawość, informacja, komunikacja",
    description:
      "Paź Mieczy jest bystry i czujny. Może symbolizować rozmowę, wiadomość lub potrzebę zdobycia informacji."
  },
  {
    id: "Swords12",
    name: "Rycerz Mieczy",
    image: "images/tarot/Swords12.png",
    keywords: "impuls, działanie, słowa",
    description:
      "Rycerz Mieczy działa szybko i zdecydowanie, czasem zbyt ostro. Uważaj na pochopne słowa."
  },
  {
    id: "Swords13",
    name: "Królowa Mieczy",
    image: "images/tarot/Swords13.png",
    keywords: "logika, szczerość, granice",
    description:
      "Królowa Mieczy jest szczera i klarowna. Zachęca do komunikacji opartej na prawdzie i rozsądku."
  },
  {
    id: "Swords14",
    name: "Król Mieczy",
    image: "images/tarot/Swords14.png",
    keywords: "analityczny umysł, prawo, autorytet",
    description:
      "Król Mieczy symbolizuje intelekt, analizę i obiektywizm. Może oznaczać specjalistę lub osobę decyzyjną."
  }
];

// Funkcja losująca kartę z całej talii
function drawRandomCard() {
  const randomIndex = Math.floor(Math.random() * TAROT_CARDS.length);
  return TAROT_CARDS[randomIndex];
}

// Po załadowaniu DOM podpinamy logikę
document.addEventListener("DOMContentLoaded", () => {
  const drawButton = document.getElementById("draw-button");
  const cardImage = document.getElementById("card-image");
  const cardName = document.getElementById("card-name");
  const cardKeywords = document.getElementById("card-keywords");
  const cardDescription = document.getElementById("card-description");

  function renderCard(card) {
    cardImage.src = card.image;
    cardImage.alt = card.name;
    cardName.textContent = card.name;
    cardKeywords.textContent = "Słowa kluczowe: " + card.keywords;
    cardDescription.textContent = card.description;
  }

  drawButton.addEventListener("click", () => {
    const card = drawRandomCard();
    renderCard(card);
  });
});

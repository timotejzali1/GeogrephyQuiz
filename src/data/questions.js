/**
 * Question bank – Slovenian geography curriculum (14 topics).
 * Each: { id, topic, question, options, correctIndex }
 */
export const QUESTIONS = [
  // 1. Geografija kot znanstvena veda
  { id: 1, topic: 1, question: 'Iz katerih grških besed izhaja beseda geografija?', options: ['GEO (Zemlja) in GRAFEIN (opisovati)', 'GEO (svet) in GRAPHOS (pisati)', 'GEOS (pokrajina) in GRAFIA (znanost)', 'TERRA (Zemlja) in DESCRIBERE (opisovati)'], correctIndex: 0 },
  { id: 2, topic: 1, question: 'Kdo je bil starogrški matematik, geograf in astronom, ki se je ukvarjal z geografijo?', options: ['Aristotel', 'Eratosten', 'Pitagora', 'Ptolomej'], correctIndex: 1 },
  { id: 3, topic: 1, question: 'Kaj danes geografija počne poleg opisovanja?', options: ['Samo risanje zemljevidov', 'Proučuje naravne in družbene pojave ter njihovo medsebojno prepletenost', 'Meriti temperature in padavine', 'Samo proučuje reke in gore'], correctIndex: 1 },
  { id: 4, topic: 1, question: 'Katera veja splošne geografije proučuje površje?', options: ['Hidrologija', 'Geomorfologija', 'Klimatogeografija', 'Biogeografija'], correctIndex: 1 },
  { id: 5, topic: 1, question: 'Kaj proučuje regionalna geografija?', options: ['Samo splošne zakonitosti', 'Naravne in družbene pojave v manjših, zaključenih delih površja (regije, pokrajine, države)', 'Samo podnebje po svetu', 'Samo prebivalstvo'], correctIndex: 1 },
  // 2. Zemlja kot planet
  { id: 6, topic: 2, question: 'Približno koliko je stara Zemlja?', options: ['1 milijardo let', '2,5 milijarde let', '4,6 milijarde let', '10 milijard let'], correctIndex: 2 },
  { id: 7, topic: 2, question: 'Koliko traja en dan na Zemlji (vrtenje okoli osi)?', options: ['12 ur', '24 ur', '365 dni', '23 ur 56 minut'], correctIndex: 1 },
  { id: 8, topic: 2, question: 'S približno kolikšno hitrostjo Zemlja kroži okoli Sonca?', options: ['Okoli 30 km/s', 'Okoli 300 km/s', 'Okoli 3 km/s', 'Okoli 3000 km/s'], correctIndex: 0 },
  { id: 9, topic: 2, question: 'Kakšna je približna dolžina obsega ekvatorja?', options: ['Okoli 40.075 km', 'Okoli 20.000 km', 'Okoli 60.000 km', 'Okoli 10.000 km'], correctIndex: 0 },
  { id: 10, topic: 2, question: 'Kakšna oblika najbolj opisuje Zemljo?', options: ['Idealna krogla', 'Geoid (sploščen na polih)', 'Elipsoid brez sploščenja', 'Ravna ploskev'], correctIndex: 1 },
  // 3. Notranja zgradba Zemlje
  { id: 11, topic: 3, question: 'Katera zemska skorja je tanjša in bazaltna?', options: ['Celinska', 'Oceanska', 'Obe sta enaki', 'Plašč'], correctIndex: 1 },
  { id: 12, topic: 3, question: 'Kateri minerali gradijo celinsko skorjo (SIAL)?', options: ['Silicij in aluminij', 'Železo in nikelj', 'Ogljik in kisik', 'Kalcij in magnezij'], correctIndex: 0 },
  { id: 13, topic: 3, question: 'Do približno katere globine sega plašč?', options: ['1.000 km', '2.900 km', '5.000 km', '6.371 km'], correctIndex: 1 },
  { id: 14, topic: 3, question: 'Kaj je litosfera?', options: ['Samo zemska skorja', 'Skorja + zgornji del zgornjega plašča', 'Samo plašč', 'Zunanje jedro'], correctIndex: 1 },
  { id: 15, topic: 3, question: 'Zakaj je notranje jedro trdno, zunanje pa tekoče?', options: ['Zaradi temperature', 'Zaradi ogromnega pritiska v notranjem jedru', 'Zaradi kemijske sestave', 'Zaradi vrtenja Zemlje'], correctIndex: 1 },
  // 4. Tektonika in premikanje plošč
  { id: 16, topic: 4, question: 'Kaj povzroča premikanje litosferskih plošč?', options: ['Vrtenje Zemlje', 'Konvekcijski tokovi magme v notranjosti Zemlje', 'Magnetno polje', 'Lunina gravitacija'], correctIndex: 1 },
  { id: 17, topic: 4, question: 'Kaj nastane, ko se plošče oddaljujejo (razmikanje)?', options: ['Gorovja', 'Novi grebeni', 'Jarki', 'Prelomnice'], correctIndex: 1 },
  { id: 18, topic: 4, question: 'Kaj se zgodi pri približevanju (podrivanju) plošč?', options: ['Nastanejo le prelomnice', 'Nastajajo gorovja in jarki', 'Nastanejo le novi grebeni', 'Nič posebnega'], correctIndex: 1 },
  { id: 19, topic: 4, question: 'Kje je znana prelomnica San Andreas?', options: ['V Evropi', 'V Aziji', 'V Severni Ameriki (Kalifornija)', 'V Afriki'], correctIndex: 2 },
  { id: 20, topic: 4, question: 'Katera plošča je ena od večjih (npr. Tihooceanska)?', options: ['Evrazijska', 'Afriška', 'Pacifiška (Tihooceanska)', 'Antarktična'], correctIndex: 2 },
  // 5. Potresi
  { id: 21, topic: 5, question: 'Kaj je potres?', options: ['Vulkanični izbruh', 'Tresenje tal zaradi nenadne sprostitve napetosti v zemeljski skorji', 'Padanje meteorita', 'Plima'], correctIndex: 1 },
  { id: 22, topic: 5, question: 'Kje se nahaja hipocenter potresa?', options: ['Na površju Zemlje', 'V notranjosti Zemlje (žarišče)', 'V atmosferi', 'V oceanu'], correctIndex: 1 },
  { id: 23, topic: 5, question: 'Kaj je epicenter?', options: ['Žarišče v notranjosti', 'Točka na površju neposredno nad hipocentrom', 'Instrument za merjenje', 'Vrsta potresa'], correctIndex: 1 },
  { id: 24, topic: 5, question: 'Kateri so glavni vzroki za nastanek potresov?', options: ['Samo vulkani', 'Premikanje litosferskih plošč (tektonski), izbruhi vulkanov, udori, eksplozije', 'Samo človekova dejavnost', 'Samo padavine'], correctIndex: 1 },
  { id: 25, topic: 5, question: 'V kakšni obliki se energija potresa širi?', options: ['Kot toplota', 'V obliki potresnih valov', 'Kot svetloba', 'Kot zvok v zraku'], correctIndex: 1 },
  // 6. Kartografija
  { id: 26, topic: 6, question: 'Kaj je kartografija?', options: ['Znanost o rekah', 'Veda o branju, izdelovanju in uporabi zemljevidov', 'Znanost o podnebju', 'Znanost o gorah'], correctIndex: 1 },
  { id: 27, topic: 6, question: 'Kaj pove merilo na zemljevidu?', options: ['Smer severa', 'Za koliko je podoba pomanjšana glede na naravo', 'Legendo', 'Lege naselij'], correctIndex: 1 },
  { id: 28, topic: 6, question: 'Kaj so izohipse?', options: ['Črte na zemljevidu', 'Ploskve, ki povezujejo točke z isto nadmorsko višino', 'Meje držav', 'Reke'], correctIndex: 1 },
  { id: 29, topic: 6, question: 'Pri merilu 1:25.000 koliko je 1 cm na karti v naravi?', options: ['25 m', '250 m', '2,5 km', '25 km'], correctIndex: 1 },
  { id: 30, topic: 6, question: 'Kaj je zemljevid (karta)?', options: ['Fotografija Zemlje', 'Pomanjšana, posplošena in pojasnjena podoba Zemljinega površja na ravni ploskvi', 'Samo risba reliefa', 'Samo politične meje'], correctIndex: 1 },
  // 7. Gibanje Zemlje
  { id: 31, topic: 7, question: 'Koliko traja rotacija Zemlje (en dan)?', options: ['12 ur', '24 ur', '365 dni', '23 ur 56 min'], correctIndex: 1 },
  { id: 32, topic: 7, question: 'Kaj je posledica rotacije Zemlje?', options: ['Letni časi', 'Menjava dneva in noči', 'Plime', 'Padavine'], correctIndex: 1 },
  { id: 33, topic: 7, question: 'Koliko časa traja revolucija (kroženje okoli Sonca)?', options: ['24 ur', '28 dni', '365 dni in 6 ur', '12 mesecev točno'], correctIndex: 2 },
  { id: 34, topic: 7, question: 'Kdaj je poletni solsticij na severni polobli (najdaljši dan pri nas)?', options: ['21. marec', '23. september', '21. junij', '21. december'], correctIndex: 2 },
  { id: 35, topic: 7, question: 'Kdaj sta dan in noč po vsem svetu približno po 12 ur (enakonočje)?', options: ['21. junij in 21. december', '21. marec in 23. september', 'Samo 1. april', 'Vsak dan na ekvatorju'], correctIndex: 1 },
  { id: 36, topic: 7, question: 'Za koliko stopinj je Zemljina os nagnjena glede na pravokotnico na ravnino kroženja?', options: ['0°', '23,5°', '45°', '90°'], correctIndex: 1 },
  // 8. Vulkanizem
  { id: 37, topic: 8, question: 'Kaj je magma?', options: ['Lava na površju', 'Staljena kamnina pod površjem', 'Trdna kamnina', 'Vodna para'], correctIndex: 1 },
  { id: 38, topic: 8, question: 'Kaj je lava?', options: ['Magma v notranjosti', 'Magma, ko prodre na površje', 'Vulkanični pepel', 'Kamnina'], correctIndex: 1 },
  { id: 39, topic: 8, question: 'Kaj je krater vulkana?', options: ['Rezervoar magme', 'Cev za dvig magme', 'Odprtina na vrhu vulkana', 'Osnova vulkana'], correctIndex: 2 },
  { id: 40, topic: 8, question: 'Kje se nahaja večina delujočih vulkanov?', options: ['Samo v Evropi', 'Na robovih litosferskih plošč, veliko okoli Tihega oceana (Ognjeni obroč)', 'Samo na Havajih', 'Povsod enakomerno'], correctIndex: 1 },
  { id: 41, topic: 8, question: 'Kaj je vulkanski dimnik?', options: ['Krater', 'Cev, po kateri se magma dviga', 'Magmatsko ognjišče', 'Lava'], correctIndex: 1 },
  // 9. Potresi - dopolnitev
  { id: 42, topic: 9, question: 'Kaj je seizmologija?', options: ['Veda o vulkanih', 'Veda, ki proučuje potrese', 'Veda o podnebju', 'Veda o morju'], correctIndex: 1 },
  { id: 43, topic: 9, question: 'Kaj meri Richterjeva lestvica?', options: ['Učinke na zgradbe', 'Magnitudo (sproščeno energijo); ima 9 stopenj', 'Globino žarišča', 'Hitrost valov'], correctIndex: 1 },
  { id: 44, topic: 9, question: 'Kaj meri EMS (Mercallijeva) lestvica?', options: ['Magnitudo', 'Učinke potresa na ljudi, zgradbe in naravo; 12 stopenj', 'Globino', 'Čas potresa'], correctIndex: 1 },
  { id: 45, topic: 9, question: 'Kaj je cunami?', options: ['Vrsta vulkana', 'Rušilni valovi na morju zaradi podmorskih potresov', 'Vrsta vetra', 'Podmorski vulkan'], correctIndex: 1 },
  { id: 46, topic: 9, question: 'Kaj je seismograf?', options: ['Naprava za merjenje potresov', 'Vrsta potresa', 'Vulkan', 'Zemljevid potresov'], correctIndex: 0 },
  // 10. Pangea in tektonika plošč
  { id: 47, topic: 10, question: 'Kdo je postavil teorijo o Pangei?', options: ['Darwin', 'Alfred Wegener (1912)', 'Newton', 'Einstein'], correctIndex: 1 },
  { id: 48, topic: 10, question: 'Na katera dva dela naj bi Pangea razpadla?', options: ['Evrazija in Amerika', 'Lavrazija (sever) in Gondvana (jug)', 'Sever in jug ekvatorja', 'Vzhod in zahod'], correctIndex: 1 },
  { id: 49, topic: 10, question: 'Kateri so dokazi za Pangeo?', options: ['Samo računalniški modeli', 'Ujemanje obalnih črt, isti fosili na različnih celinah, ista vrsta in starost kamnin', 'Samo temperature', 'Samo podnebje'], correctIndex: 1 },
  { id: 50, topic: 10, question: 'Kaj so vroče točke?', options: ['Območja na robu plošč', 'Območja sredi litosferskih plošč, kjer magma prodira na površje (npr. Havaji)', 'Vulkanski kraterji', 'Potresna žarišča'], correctIndex: 1 },
  // 11. Tropski deževni gozd
  { id: 51, topic: 11, question: 'Kje leži tropski deževni gozd?', options: ['Samo v Afriki', 'Ob ekvatorju (Amazonija, porečje Konga, Jugovzhodna Azija)', 'Samo v Aziji', 'Ob povratnikih'], correctIndex: 1 },
  { id: 52, topic: 11, question: 'Kakšne so temperature v tropskem deževnem gozdu?', options: ['Nizke in spremenljive', 'Visoke in stalne skozi leto (okoli 25–28 °C)', 'Zmerne', 'Zelo nizke pozimi'], correctIndex: 1 },
  { id: 53, topic: 11, question: 'Kaj je "zenitno deževje"?', options: ['Deževje le ob ekvatorju', 'Skoraj vsak dan popoldne nevihte zaradi močnega izhlapevanja', 'Deževje le ponoči', 'Letna količina padavin'], correctIndex: 1 },
  { id: 54, topic: 11, question: 'Kakšna je prst v tropskem deževnem gozdu (laterit)?', options: ['Zelo rodovitna trajno', 'Rdečkasta, hitro izčrpana ob poseku gozda zaradi spiranja', 'Peščena', 'Glinska'], correctIndex: 1 },
  { id: 55, topic: 11, question: 'Kakšno rastlinstvo je v tropskem deževnem gozdu?', options: ['Nizko in redko', 'Zimzeleno, bujno, večplastno (drevesa, liane, epifiti)', 'Samo trava', 'Samo mah'], correctIndex: 1 },
  // 12. Savana
  { id: 56, topic: 12, question: 'Kje leži savana?', options: ['Ob ekvatorju', 'Severno in južno od tropskega deževnega gozda; prehod med gozdom in puščavo', 'Samo v Afriki', 'Ob polih'], correctIndex: 1 },
  { id: 57, topic: 12, question: 'Kakšna je padavinska značilnost savane?', options: ['Enakomerno skozi leto', 'Menjava deževne dobe (poleti) in sušne dobe (pozimi)', 'Samo suša', 'Samo deževje'], correctIndex: 1 },
  { id: 58, topic: 12, question: 'Kakšno rastje je v savani?', options: ['Gosta drevesa', 'Visoka trava z redkimi drevesi (akacije, baobabi)', 'Samo trava', 'Samo grmovje'], correctIndex: 1 },
  { id: 59, topic: 12, question: 'Kaj je desertifikacija?', options: ['Nastanek puščave', 'Širjenje puščav zaradi pretirane paše in sežiganja', 'Nastanek savane', 'Povečanje vlažnosti'], correctIndex: 1 },
  // 13. Puščave in polpuščave
  { id: 60, topic: 13, question: 'Kje ležijo puščave okoli povratnikov?', options: ['Ob ekvatorju', 'Ob območju stalnega visokega zračnega tlaka (npr. Sahara, Kalahari)', 'Samo v Aziji', 'Ob morju'], correctIndex: 1 },
  { id: 61, topic: 13, question: 'Koliko padavin je v puščavi letno (približno)?', options: ['Nad 2000 mm', 'Nad 500 mm', 'Manj kot 250 mm', 'Okoli 1000 mm'], correctIndex: 2 },
  { id: 62, topic: 13, question: 'Kakšna so dnevna nihanja temperature v puščavi?', options: ['Majhna', 'Velika (vroči dnevi, mrzle noči)', 'Enakomerna', 'Nič posebnega'], correctIndex: 1 },
  { id: 63, topic: 13, question: 'Kaj je peščena puščava (erg)?', options: ['Kamnita', 'Sipine', 'Gramozna', 'Slana'], correctIndex: 1 },
  { id: 64, topic: 13, question: 'Kaj je hamada?', options: ['Peščena puščava', 'Kamnita puščava (skale, goli kamen)', 'Gramozna puščava', 'Oaza'], correctIndex: 1 },
  // 14. Gospodarstvo in prebivalstvo v tropskih pasovih
  { id: 65, topic: 14, question: 'Kaj je pomembna dejavnost v tropskem gozdu?', options: ['Samo poljedelstvo', 'Nabiralništvo, lov, izkoriščanje lesa in rudnih bogastev', 'Samo ribištvo', 'Samo industrija'], correctIndex: 1 },
  { id: 66, topic: 14, question: 'Kaj je pomembna dejavnost v savani?', options: ['Samo lov', 'Poljedelstvo in živinoreja (nomadstvo)', 'Samo rudarstvo', 'Samo gozdarstvo'], correctIndex: 1 },
  { id: 67, topic: 14, question: 'Katera težava je povezana z izsekavanjem tropskih gozdov?', options: ['Samo izguba lesa', 'Uničevanje "pljuč sveta" in izguba biotske raznovrstnosti', 'Samo podnebne spremembe', 'Samo selitve'], correctIndex: 1 },
  { id: 68, topic: 14, question: 'Katera tropska bolezen je omenjena v snovi?', options: ['Gripa', 'Malarija, spalna bolezen', 'Prehlad', 'Dijabetes'], correctIndex: 1 },
  { id: 69, topic: 14, question: 'Kaj je težava v sušnih območjih savan in puščav?', options: ['Preveč vode', 'Pomanjkanje vode', 'Preveč gozdov', 'Pomanjkanje sonca'], correctIndex: 1 },
  // Extra for variety
  { id: 70, topic: 1, question: 'Kaj proučuje demogeografija?', options: ['Gospodarstvo', 'Prebivalstvo', 'Podnebje', 'Relief'], correctIndex: 1 },
  { id: 71, topic: 2, question: 'Kolikšna je približna površina Zemlje v km²?', options: ['Okoli 510 milijonov km²', 'Okoli 100 milijonov km²', 'Okoli 1 milijarda km²', 'Okoli 200 milijonov km²'], correctIndex: 0 },
  { id: 72, topic: 3, question: 'Kaj je astenosfera?', options: ['Zemska skorja', 'Plast pod litosfero v zgornjem plašču (bolj plastična)', 'Zunanje jedro', 'Notranje jedro'], correctIndex: 1 },
  { id: 73, topic: 7, question: 'Kdaj je zimski solsticij na severni polobli (najkrajši dan pri nas)?', options: ['21. junij', '23. september', '21. marec', '21. december'], correctIndex: 3 },
  { id: 74, topic: 8, question: 'Kaj je magmatsko ognjišče?', options: ['Krater', 'Rezervoar magme globoko pod površjem', 'Vulkanski dimnik', 'Lava'], correctIndex: 1 },
  { id: 75, topic: 13, question: 'Kaj je serir?', options: ['Peščena puščava', 'Kamnita puščava', 'Gramozna puščava (droben pesek, kamenčki)', 'Oaza'], correctIndex: 2 },
];

export const QUESTIONS_PER_PAGE_DEFAULT = 10;
export const MIN_QUESTIONS = 1;
export const MAX_QUESTIONS = QUESTIONS.length;

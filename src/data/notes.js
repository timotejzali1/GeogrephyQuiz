/**
 * Zapisi in flash kartice – 14 tem geografije.
 * FLASHCARDS: kratke kartice { id, front, back }.
 * NOTES: { id, title, content } za prikaz vseh zapiskov.
 */

export const FLASHCARDS = [
  { id: 1, front: 'Izvor besede geografija?', back: 'GEO (Zemlja) + GRAFEIN (opisovati, pisati, risati).' },
  { id: 2, front: 'Kdo je bil Eratosten?', back: 'Starogrški matematik, geograf in astronom.' },
  { id: 3, front: 'Kaj je geografija danes?', back: 'Kompleksna veda, ki proučuje naravne in družbene pojave ter njihovo povezanost.' },
  { id: 4, front: 'Kaj proučuje geomorfologija?', back: 'Površje.' },
  { id: 5, front: 'Kaj proučuje hidrologija?', back: 'Vode.' },
  { id: 6, front: 'Kaj proučuje klimatogeografija?', back: 'Podnebje.' },
  { id: 7, front: 'Kaj proučuje biogeografija?', back: 'Živi svet.' },
  { id: 8, front: 'Kaj proučuje pedogeografija?', back: 'Prsti.' },
  { id: 9, front: 'Kaj proučuje demogeografija?', back: 'Prebivalstvo.' },
  { id: 10, front: 'Kaj proučuje regionalna geografija?', back: 'Pojave v regijah, pokrajinah in državah.' },
  { id: 11, front: 'Koliko je stara Zemlja?', back: '4,6 milijarde let.' },
  { id: 12, front: 'Koliko traja en dan na Zemlji?', back: '24 ur (vrtenje okoli osi).' },
  { id: 13, front: 'Hitrost kroženja Zemlje okoli Sonca?', back: 'Približno 30 km/s (107.000 km/h).' },
  { id: 14, front: 'Obseg ekvatorja?', back: '40.075 km.' },
  { id: 15, front: 'Polmer Zemlje?', back: 'Približno 6.378 km.' },
  { id: 16, front: 'Površina Zemlje?', back: '510.100.000 km².' },
  { id: 17, front: 'Kakšna je oblika Zemlje?', back: 'Geoid (rahlo sploščena na polih).' },
  { id: 18, front: 'Katera skorja je tanjša in bazaltna?', back: 'Oceanska (5–10 km).' },
  { id: 19, front: 'Katera skorja je debelejša in granitna?', back: 'Celinska (25–70 km).' },
  { id: 20, front: 'Kaj pomeni SIAL?', back: 'Silicij in aluminij – minerali celinske skorje.' },
  { id: 21, front: 'Do katere globine sega plašč?', back: 'Približno 2.900 km.' },
  { id: 22, front: 'Kaj je litosfera?', back: 'Zemeljska skorja + zgornji del zgornjega plašča.' },
  { id: 23, front: 'Kaj je astenosfera?', back: 'Plast pod litosfero v zgornjem plašču (bolj plastična).' },
  { id: 24, front: 'Zakaj je zunanje jedro tekoče?', back: 'Zaradi zelo visokih temperatur.' },
  { id: 25, front: 'Zakaj je notranje jedro trdno?', back: 'Zaradi ogromnega pritiska.' },
  { id: 26, front: 'Kaj povzroča premikanje plošč?', back: 'Konvekcijski tokovi magme v notranjosti Zemlje.' },
  { id: 27, front: 'Kaj nastane pri razmikanju plošč?', back: 'Oceanski hrbti.' },
  { id: 28, front: 'Kaj je subdukcija?', back: 'Ena plošča se podriva pod drugo → gorovja in globokomorski jarki.' },
  { id: 29, front: 'Kje je prelomnica San Andreas?', back: 'V Severni Ameriki (Kalifornija); plošče drsijo druga ob drugi.' },
  { id: 30, front: 'Kaj je potres?', back: 'Tresenje tal zaradi sprostitve napetosti v skorji.' },
  { id: 31, front: 'V kakšni obliki se širi energija potresa?', back: 'Potresni valovi.' },
  { id: 32, front: 'Kateri potresi so najpogostejši in najmočnejši?', back: 'Tektonski (premikanje plošč).' },
  { id: 33, front: 'Kaj je hipocenter?', back: 'Žarišče potresa v notranjosti (5–30 km, lahko do 700 km).' },
  { id: 34, front: 'Kaj je epicenter?', back: 'Točka na površju neposredno nad hipocentrom.' },
  { id: 35, front: 'Kaj je kartografija?', back: 'Veda o izdelovanju, branju in uporabi zemljevidov.' },
  { id: 36, front: 'Kaj je zemljevid (karta)?', back: 'Pomanjšana, posplošena in pojasnjena podoba površja na ploskvi.' },
  { id: 37, front: 'Kaj pove merilo?', back: 'Za koliko je podoba na karti pomanjšana glede na naravo.' },
  { id: 38, front: 'Pri 1 : 25.000 koliko je 1 cm na karti v naravi?', back: '250 m.' },
  { id: 39, front: 'Kaj so izohipse?', back: 'Krivulje, ki povezujejo točke z isto nadmorsko višino.' },
  { id: 40, front: 'Koliko traja rotacija Zemlje?', back: '24 ur.' },
  { id: 41, front: 'Posledica rotacije?', back: 'Menjava dneva in noči.' },
  { id: 42, front: 'Koliko traja revolucija?', back: '365 dni in približno 6 ur.' },
  { id: 43, front: 'Za koliko je nagnjena Zemljina os?', back: '23,5°.' },
  { id: 44, front: 'Kdaj je poletni solsticij?', back: '21. junij – najdaljši dan pri nas.' },
  { id: 45, front: 'Kdaj je zimski solsticij?', back: '21. december – najkrajši dan pri nas.' },
  { id: 46, front: 'Kdaj je jesensko enakonočje?', back: '23. september.' },
  { id: 47, front: 'Kdaj je spomladansko enakonočje?', back: '21. marec.' },
  { id: 48, front: 'Kaj je magma?', back: 'Staljena kamnina pod površjem.' },
  { id: 49, front: 'Kaj je lava?', back: 'Magma, ko prodre na površje.' },
  { id: 50, front: 'Kaj je magmatsko ognjišče?', back: 'Rezervoar magme pod površjem.' },
  { id: 51, front: 'Kaj je vulkanski dimnik?', back: 'Kanal, po katerem se magma dviga.' },
  { id: 52, front: 'Kaj je krater vulkana?', back: 'Odprtina na vrhu vulkana.' },
  { id: 53, front: 'Kje leži večina delujočih vulkanov?', back: 'Na robovih plošč, okoli Tihega oceana (Ognjeni obroč).' },
  { id: 54, front: 'Koliko delujočih vulkanov je približno?', back: 'Okoli 530.' },
  { id: 55, front: 'Kaj je seizmologija?', back: 'Veda, ki proučuje potrese.' },
  { id: 56, front: 'Kaj je seismograf?', back: 'Naprava za merjenje potresov.' },
  { id: 57, front: 'Kaj meri Richterjeva lestvica?', back: 'Magnitudo (sproščeno energijo).' },
  { id: 58, front: 'Kaj meri EMS lestvica?', back: 'Učinke potresa na ljudi, zgradbe in naravo (12 stopenj).' },
  { id: 59, front: 'Kaj je cunami?', back: 'Zelo veliki morski valovi (podmorski potresi ali vulkanski izbruhi).' },
  { id: 60, front: 'Kdo je leta 1912 predstavil teorijo o Pangei?', back: 'Alfred Wegener.' },
  { id: 61, front: 'Na katera dva dela je razpadla Pangea?', back: 'Lavrazija (sever) in Gondvana (jug).' },
  { id: 62, front: 'Pred koliko let je Pangea razpadla?', back: 'Približno 200 milijonov let.' },
  { id: 63, front: 'Kaj so vroče točke?', back: 'Območja sredi plošč, kjer magma prodira na površje (npr. Havaji).' },
  { id: 64, front: 'Kje leži tropski deževni gozd?', back: 'Ob ekvatorju (Amazonija, Kongo, jugovzhodna Azija).' },
  { id: 65, front: 'Kaj so zenitne padavine?', back: 'Skoraj vsak dan popoldne nevihte v tropskem gozdu.' },
  { id: 66, front: 'Kakšna je prst v tropskem gozdu?', back: 'Laterit (rdečkasta), po poseku hitro izčrpana.' },
  { id: 67, front: 'Kje leži savana?', back: 'Severno in južno od tropskega gozda – prehod med gozdom in puščavo.' },
  { id: 68, front: 'Kakšno podnebje ima savana?', back: 'Deževna in sušna doba se izmenjujeta.' },
  { id: 69, front: 'Kaj je desertifikacija?', back: 'Širjenje puščav (npr. zaradi paše in požiganja).' },
  { id: 70, front: 'Koliko padavin je v puščavi letno?', back: 'Manj kot 250 mm.' },
  { id: 71, front: 'Kaj je erg?', back: 'Peščena puščava (sipine).' },
  { id: 72, front: 'Kaj je hamada?', back: 'Kamnita puščava (gole skale).' },
  { id: 73, front: 'Kaj je serir?', back: 'Gramozna puščava (pesek in kamenčki).' },
  { id: 74, front: 'Kaj je pomembna dejavnost v tropskem gozdu?', back: 'Nabiralništvo, lov, les, rudne bogatine.' },
  { id: 75, front: 'Kaj je pomembna dejavnost v savani?', back: 'Poljedelstvo in živinoreja (nomadstvo).' },
  { id: 76, front: 'Kateri tropski bolezni sta omenjeni?', back: 'Malarija, spalna bolezen.' },
];

export const NOTES = [
  {
    id: 1,
    title: '1. Geografija kot znanstvena veda',
    content: `Izvor besede: grško GEO (Zemlja – Gea je bila grška boginja Zemlje) + GRAFEIN (opisovati, pisati, risati).

Zgodovina: Do 19. stoletja je geografija pomenila predvsem opisovanje Zemlje (odkritja, novi kraji, zemljevidi). Z geografijo se je ukvarjal že starogrški matematik, geograf in astronom Eratosten.

Danes: Geografija je kompleksna veda, ki proučuje (ne le opisuje) naravne in družbene pojave ter njihovo medsebojno povezanost in soodvisnost.

Naloga geografije: Proučevanje naravnogeografskih in družbenogeografskih dejavnikov, ki oblikujejo pokrajino.

Delitev geografije:
• Splošna geografija – proučuje splošne zakonitosti o pojavih in procesih na Zemljinem površju.
  Fizična (naravna): geomorfologija (površje), hidrologija (vode), klimatogeografija (podnebje), biogeografija (živi svet), pedogeografija (prsti).
  Družbena: demogeografija (prebivalstvo), geografija naselij, ekonomska geografija (gospodarstvo), politična geografija.
• Regionalna geografija – proučuje naravne in družbene pojave v manjših, zaključenih delih Zemljinega površja (regije, pokrajine, države).`,
  },
  {
    id: 2,
    title: '2. Zemlja kot planet',
    content: `Starost: 4,6 milijarde let
Dan: 24 ur (vrtenje okoli osi)
Hitrost kroženja okoli Sonca: približno 30 km/s (≈ 107.000 km/h)
Obseg ekvatorja: 40.075 km
Polmer: približno 6.378 km
Površina: 510.100.000 km²
Oblika: geoid (rahlo sploščena na polih)`,
  },
  {
    id: 3,
    title: '3. Notranja zgradba Zemlje',
    content: `Zemlja je sestavljena iz več plasti:

1. Zemeljska skorja
   • oceanska: tanjša (5–10 km), bazaltna
   • celinska: debelejša (25–70 km), granitna (minerali SIAL – silicij in aluminij)
2. Zgornji plašč
3. Spodnji plašč (plašč sega do globine približno 2.900 km)
4. Zunanje jedro – tekoče (zaradi zelo visokih temperatur)
5. Notranje jedro – trdno (zaradi ogromnega pritiska)

Litosfera: zemeljska skorja + zgornji del zgornjega plašča
Astenosfera: plast pod litosfero v zgornjem plašču, ki je bolj plastična.`,
  },
  {
    id: 4,
    title: '4. Tektonika in premikanje plošč',
    content: `Konvekcijski tokovi: gibanje magme v notranjosti Zemlje, ki povzroča premikanje litosferskih plošč. Vroča magma se dviga, pod litosfero ohladi in razteka, nato pa ponovno potone.

Litosferske plošče: Zemljino površje je razdeljeno na več velikih in manjših plošč (npr. evrazijska, afriška, severnoameriška, pacifiška).

Premikanje plošč:
• Razmikanje: plošče se oddaljujejo (nastajajo oceanski hrbti).
• Približevanje (subdukcija): ena plošča se podriva pod drugo (nastajajo gorovja in globokomorski jarki).
• Drsenje: plošče drsijo druga ob drugi (npr. prelomnica San Andreas).`,
  },
  {
    id: 5,
    title: '5. Potresi',
    content: `Definicija: Potres je tresenje tal, ki nastane zaradi nenadne sprostitve napetosti v zemeljski skorji. Energija se širi v obliki potresnih valov.

Vzroki za nastanek:
1. premikanje litosferskih plošč (tektonski potresi – najpogostejši in najmočnejši)
2. izbruhi ognjenikov
3. udori v jamah ali rudnikih
4. eksplozije

Osnovni pojmi:
• Hipocenter: žarišče potresa v notranjosti Zemlje (5–30 km, lahko tudi do 700 km).
• Epicenter: točka na površju neposredno nad hipocentrom, kjer so učinki potresa najmočnejši.`,
  },
  {
    id: 6,
    title: '6. Kartografija',
    content: `Kartografija je veda o izdelovanju, branju in uporabi zemljevidov.

Zemljevid (karta): pomanjšana, posplošena in pojasnjena podoba Zemljinega površja ali njegovih delov na ravni ploskvi.

Merilo – pove, za koliko je podoba na zemljevidu pomanjšana glede na naravo:
• Številčno merilo: npr. 1 : 25.000 (1 cm na karti = 250 m v naravi)
• Grafično merilo: premica, razdeljena na enote

Vsebina karte:
• relief: prikazan z izohipsami (krivulje, ki povezujejo točke z isto nadmorsko višino)
• vode: reke, jezera, morja
• naselja in promet: ceste, železnice, mesta
• meje: politične in administrativne`,
  },
  {
    id: 7,
    title: '7. Gibanje Zemlje',
    content: `Zemlja opravlja dve glavni gibanji:

1. Rotacija – vrtenje Zemlje okoli svoje osi (od zahoda proti vzhodu)
   • traja 24 ur
   • posledica: menjava dneva in noči

2. Revolucija – kroženje Zemlje okoli Sonca
   • traja 365 dni in približno 6 ur
   • Zemljina os je nagnjena za 23,5°
   • posledica: menjava letnih časov

Pomembni datumi:
• 21. junij – poletni solsticij: Sonce je navpično nad severnim povratnikom (23,5° S). Pri nas je najdaljši dan.
• 23. september – jesensko enakonočje: Sonce je nad ekvatorjem. Dan in noč trajata približno 12 ur.
• 21. december – zimski solsticij: Sonce je navpično nad južnim povratnikom (23,5° J). Pri nas je najkrajši dan.
• 21. marec – spomladansko enakonočje: Sonce je ponovno nad ekvatorjem.`,
  },
  {
    id: 8,
    title: '8. Vulkanizem',
    content: `Vulkanizem so vsi pojavi, povezani z dviganjem magme iz notranjosti Zemlje na površje.

• Magma: staljena kamnina pod površjem.
• Lava: magma, ko prodre na površje.

Zgradba ognjenika:
• magmatsko ognjišče: rezervoar magme pod površjem
• vulkanski dimnik: kanal, po katerem se magma dviga
• krater: odprtina na vrhu vulkana

Večina delujočih vulkanov (okoli 530) leži na robovih litosferskih plošč, največ okoli Tihega oceana (Ognjeni obroč).`,
  },
  {
    id: 9,
    title: '9. Potresi – dopolnitev',
    content: `• Seizmologija: veda, ki proučuje potrese.
• Seizmograf: naprava za merjenje potresov.

Lestvice:
• Richterjeva lestvica: meri magnitudo (sproščeno energijo).
• EMS lestvica (prej Mercallijeva): meri učinke potresa na ljudi, zgradbe in naravo. Ima 12 stopenj.
• Cunami: zelo veliki morski valovi, ki nastanejo zaradi podmorskih potresov ali vulkanskih izbruhov.`,
  },
  {
    id: 10,
    title: '10. Pangea in tektonika plošč',
    content: `Teorija o potovanju celin: leta 1912 je Alfred Wegener predstavil teorijo, da so bile vse celine nekoč združene v eno velecelino Pangeo.

Pangea je pred približno 200 milijoni let razpadla na:
• Lavrazijo (sever)
• Gondvano (jug)

Dokazi:
1. ujemanje obal Južne Amerike in Afrike
2. enaki fosili na različnih celinah
3. enake vrste in starost kamnin na ločenih obalah

Vroče točke: območja sredi litosferskih plošč, kjer magma prodira na površje (npr. Havaji).`,
  },
  {
    id: 11,
    title: '11. Tropski deževni gozd',
    content: `Lega: ob ekvatorju (Amazonija, porečje Konga, jugovzhodna Azija).

Podnebne značilnosti:
• temperature: stalno visoke (okoli 25–28 °C)
• padavine: več kot 2000 mm letno
• značilnost: zenitne padavine – skoraj vsak dan popoldne nastanejo nevihte
• vlažnost: zelo visoka

Rastlinstvo in živalstvo:
• gozd: zimzelen, gost in večplasten (visoka drevesa, liane, epifiti)
• živalstvo: zelo velika pestrost vrst
• prsti: rdečkasta prst (laterit), ki se po poseku gozda hitro izčrpa.`,
  },
  {
    id: 12,
    title: '12. Savana',
    content: `Lega: severno in južno od tropskega deževnega gozda – prehod med gozdom in puščavo.

Podnebje:
• visoke temperature skozi vse leto
• izmenjujeta se deževna doba in sušna doba

Rastlinstvo:
• visoka trava z redkimi drevesi (akacije, baobabi)

Težave:
• desertifikacija (širjenje puščav) zaradi pretirane paše in požiganja rastlinja.`,
  },
  {
    id: 13,
    title: '13. Puščave in polpuščave',
    content: `Lega: območja stalnega visokega zračnega tlaka okoli povratnikov (npr. Sahara, Kalahari, Arabska puščava) ali v zavetju visokih gor.

Podnebje:
• padavine: manj kot 250 mm letno
• temperature: velika dnevna nihanja (vroči dnevi, mrzle noči)

Tipi puščav:
1. peščena puščava (erg) – sipine
2. kamnita puščava (hamada) – gole skale
3. gramozna puščava (serir) – pesek in kamenčki`,
  },
  {
    id: 14,
    title: '14. Gospodarstvo in prebivalstvo v tropskih pasovih',
    content: `• tropski gozd: nabiralništvo, lov, izkoriščanje lesa in rudnih bogastev (železo, baker, boksit, zlato, diamanti)
• savana: poljedelstvo in živinoreja (nomadstvo)

Težave:
• izsekavanje gozdov – izguba biotske raznovrstnosti
• pomanjkanje vode v sušnih območjih
• tropske bolezni (npr. malarija, spalna bolezen)`,
  },
];

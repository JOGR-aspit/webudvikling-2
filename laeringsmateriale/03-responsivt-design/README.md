# Responsivt Webdesign

Responsivt webdesign (RWD) er en webdesigntilgang, der får websider til at fungere godt på alle skærmstørrelser og opløsninger og samtidig sikrer god brugervenlighed. Det er måden at designe til et web med flere enheder.

## Hvad skal vi lære?

-   Hvad responsivt design er - at designe weblayouts, så de er fleksible og fungerer godt på tværs af forskellige enheders skærmstørrelser, opløsninger osv.
-   Forholdet mellem moderne layoutværktøjer som grid og flexbox og responsivt design.
-   Koncepterne bag brugen af media queries til responsivt design, herunder mobile-first og breakpoints.
-   Hvorfor `<meta viewport="">` er nødvendig for at få webdokumenter til at blive vist korrekt på mobile enheder.

## Før responsivt deisgn, var der mobil-design

Før responsivt webdesign blev standardmetoden til at få hjemmesider til at fungere på tværs af forskellige enhedstyper, talte webudviklere om mobilt webdesign, mobil webudvikling eller nogle gange mobilvenligt design. Det er grundlæggende det samme som responsivt webdesign - målet er at sikre, at websites fungerer godt på tværs af enheder med forskellige fysiske egenskaber (skærmstørrelse, opløsning) med hensyn til layout, indhold (tekst og medier) og ydeevne.

Forskellen har primært at gøre med de involverede enheder og de teknologier, der er til rådighed for at skabe løsninger:

-   Vi plejede at tale om desktop eller mobil, men nu er der mange forskellige typer enheder til rådighed, f.eks. desktop, laptop, mobil, tablets, smartwatches osv. I stedet for at tage højde for nogle få forskellige skærmstørrelser er vi nu nødt til at designe websites defensivt for at tage højde for almindelige skærmstørrelser og -opløsninger samt ukendte faktorer.
-   Før i tiden havde mobile enheder lav effekt med hensyn til CPU/GPU og tilgængelig båndbredde. Nogle understøttede ikke CSS eller endda HTML, og derfor var det almindeligt at forsøge at bestemme enhedens/browserens type, før man serverede et websted, som enheden kunne klare. Mobile enheder fik ofte serveret meget enkle, basale oplevelser, fordi det var alt, hvad de kunne håndtere. I dag er mobile enheder i stand til at håndtere de samme teknologier som stationære computere, så sådanne teknikker er mindre almindelige.
    -   Du bør stadig bruge de teknikker, der er beskrevet i denne artikel, til at give mobilbrugere en passende oplevelse, da der stadig er begrænsninger som batterilevetid og båndbredde at tage hensyn til.
    -   Brugeroplevelsen er også et problem. En mobil bruger af et rejsesite vil måske bare tjekke flytider og oplysninger om forsinkelser og ikke blive præsenteret for en animeret 3D-globus, der viser flyruter og din virksomheds historie. Dette kan dog håndteres ved hjælp af responsive designteknikker.

Moderne teknologier er meget bedre til at skabe responsive oplevelser. For eksempel gør responsive billeder/medieteknologier det nu muligt at vise passende medier til forskellige enheder.

## Introduktion til responsivt web design

HTML er grundlæggende responsiv eller flydende. Hvis du opretter en webside, der kun indeholder HTML, uden CSS, og ændrer størrelsen på vinduet, vil browseren automatisk tilpasse teksten, så den passer til viewporten.

Selv om den responsive standardadfærd måske lyder, som om der ikke er brug for en løsning, kan lange tekstlinjer, der vises i fuld skærm på en bred skærm, være svære at læse. Hvis linjelængden på en bred skærm reduceres med CSS, f.eks. ved at oprette kolonner eller tilføje betydelig udfyldning, kan webstedet se mast ud for den bruger, der indsnævrer sit browservindue eller åbner webstedet på en mobil enhed.

[IMAGE]

Det fungerer heller ikke at skabe en webside, der ikke kan ændres i størrelse, ved at indstille en fast bredde; det fører til scroll-bars på smalle enheder og for meget tom plads på brede skærme.

Responsivt webdesign, eller RWD, er en designtilgang, der tager højde for forskellige enheder og enhedsstørrelser og muliggør automatisk tilpasning til skærmen, uanset om indholdet ses på en tablet, en telefon, et fjernsyn eller et smartwatch.

Responsivt webdesign er ikke en separat teknologi - det er en tilgang. Det er et udtryk, der bruges til at beskrive et sæt "best practices"", der bruges til at skabe et layout, der kan reagere på enhver enhed, der bruges til at se indholdet.

Udtrykket responsivt design blev opfundet af Ethan Marcotte i 2010 og beskrev brugen af flydende "grids"", flydende billeder og media queries til at skabe responsivt indhold.

På det tidspunkt var anbefalingen at bruge CSS `float` til layout og media queries til at læse browserens bredde og skabe layouts til forskellige breakpoints. Flydende billeder er indstillet til ikke at overskride bredden på deres container; de har deres `max-width`-property indstillet til `100%`. Flydende billeder skaleres ned, når kolonnen, der indeholder dem, bliver smallere, men bliver ikke større end deres egen størrelse, når kolonnen vokser. Det gør det muligt for et billede at skalere ned, så det passer til indholdet i stedet for at flyde over, men ikke vokse sig større og blive pixeleret, hvis beholderen bliver bredere end billedet.

Moderne CSS-layoutmetoder er i sagens natur responsive, og siden udgivelsen af Marcottes artikel har vi fået et væld af funktioner indbygget i webplatformen, som gør det lettere at designe responsive sider.

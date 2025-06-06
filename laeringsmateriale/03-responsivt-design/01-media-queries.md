# Media Queries

Media queries giver os mulighed for at køre en række tests (f.eks. om brugerens skærm er større end en bestemt bredde eller opløsning) og anvende CSS selektivt for at style siden passende til brugerens behov.

Følgende media query tester f.eks., om den aktuelle webside vises som skærmmedie (altså ikke et trykt dokument), og om viewporten er mindst `80rem` bred. CSS'en for `.container`-selectoren vil kun blive anvendt, hvis disse to ting er sande.

```css
@media screen and (min-width: 80rem) {
    .container {
        margin: 1em 2em;
    }
}
```

Du kan tilføje flere media queries i et stylesheet og tilpasse hele dit layout eller dele af det, så det passer bedst til de forskellige skærmstørrelser. De punkter, hvor en media query introduceres, og hvor layoutet ændres, kaldes breakpoints.

En almindelig fremgangsmåde ved brug af media queries er at skabe et simpelt layout med én kolonne til enheder med smalle skærme (f.eks. mobiltelefoner), og derefter tjekke for bredere skærme og implementere et layout med flere kolonner, når du ved, at du har nok skærmbredde til at håndtere det. At designe til mobilen først er kendt som mobile first design.

Hvis du bruger breakpoints, opfordrer best practice til at definere media query-breakpoints med relative enheder (f.eks. `rem`) i stedet for absolutte størrelser (f.eks. `px`) på en individuel enhed.

Media queries kan hjælpe med RWD, men er ikke et krav. Fleksible grids, relative enheder og minimums- og maksimumsenhedsværdier kan bruges uden medieforespørgsler.

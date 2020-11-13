# Frontend-data

Voor de Volkskrant moeten wij vooronderzoek doen op een aantal datasets en hieruit interessante inzichten uit halen. Het gaat hier dan om de auto in de stad. Alles wat hierover te maken heeft en interessante inzichten bevat, kunnen wij helemaal onderzoek. Het is dan wel de bedoeling dat we ook nog een passende visualisatie kunnen maken met de inzichten.Bij functional programming zal ik vooral kijken wat er in de 
datasets allemaal in zitten en met behulp van functional patterns ze proberen op te schonen en presenteerbaar te maken.

In deze repo zal ik al mijn keuzes voor het opschonen en presenteren van de data documenteren en uitleggen.

# Onderzoeksvraag

## Hoofdvraag

### Wat zijn de mogelijkheden van de carpool locaties binnen Nederland?
Carpoolen is het delen van je auto met mensen die dezelfde bestemming hebben. Dit kan met vreemden of met bekende. Carpool locaties zijn locaties in Nederland die bestemd zijn als meetup locatie voor het Carpoolen. Je kan natuurlijk ook op andere locatie elkaar ontmoeten, maar om het makkelijk te maken zijn deze carpool locaties gemaakt.

De carpool locaties binnen Nederland beschikken niet allemaal van dezelfde voorzieningen. Zo heeft de een laadpunt en de ander toegankelijkheid voor gehandicapten. Ik ga kijken wat nu precies de mogelijkheden zijn van de carpool locaties, en welke verbanden ik hieruit kan maken met de locaties.

## Deelvragen
**1. Hoeveel parkeerplaatsen zijn er in de omgeving van carpool locaties?**

   Carpool locaties zijn natuurlijk niet de enige locaties waar je elkaar kan zien. Er zijn dan altijd wel parkeetplaatsen in de buurt van carpool locaties waar je wellicht
   elkaar kan zien. Voor dit zal ik de variabel Aantal parkeer plaatsen gebruiken en die vergelijken met de carpool locatie namen (areadesc)
   
   Mogelijke visualisatie:
   ![Visu 1](https://github.com/lamartm/functional-programming/blob/main/images/mogelijke%20visu%201.png)
    
**2. Waar in Nederland kan je het best met een elektrisch auto komen om te carpoolen?**

   Eigenaren van elektrische auto's weten dat je niet overal nog even snel je auto kan opladen. Hierdoor zullen ze natuurlijk geinteresseerd zijn in de carpool locaties waar
   er een laad punt bevindt. Hier zal ik kijken naar alle carpool locaties die een laad punt hebben. Hiervoor gebruik ik de variabel Aantal Laadpunten en carpool locaties
   (areadesc)
   
   Mogelijke visualisatie:
   ![Visu 2](https://github.com/lamartm/functional-programming/blob/main/images/mogelijke%20visu%202.png)
    
**3. Welke carpool locaties zijn toegankelijk voor gehandicapten?**

   Gehandicapten hebben ook de mogelijkheid om te carpoolen. Het probleem alleen is dat de ene locatie beter voorzien is voor gehandicapten dan de andere. Ik ga hier kijken
   naar alle carpool locaties waar er voorzieningen zijn voor gehandicapten. Hiervoor gebruik ik de variabelen Toegankelijk voor gehandicapten en carpool locaties (areadesc)
   
   Mogelijke visualisatie:
   ![Visu 3](https://github.com/lamartm/functional-programming/blob/main/images/mogelijke%20visu%203.png)
    
**4. Wat zijn de afstanden van de carpool locaties met verschillende voorzieningen?**

   Het is wel interessant om te zien hoe ver een locatie met een laadpunt is met die van een die voorzieningen heeft voor gehandicapten. Hiervoor wil ik de variabelen locatie,
   toegankelijkheid voor gehandicapten, aantal laadpunten en aantal parkeerplaatsen. Een grote visualisatie die alles wat meer duidelijkheid geeft.
   
   Mogelijke visualisatie:
   
   ![Visu 4](https://github.com/lamartm/functional-programming/blob/main/images/mogelijke%20visu%204.png)
   
### Features
Ik heb in de repository ook nog de dataset van de studenten van de CMD gecleaned. De studenten moesten een vragenlijst invullen en hieruit kwam er veel vuile data. Dit moest door funtional patterns opgeschoond worden. Dingen zoals de correcte HEX kleuren toevoegen en non-answers zoals "/" en "0" weghalen.

### Variabelen

Ik zal hiervoor de dataset [GEO Carpool](https://opendata.rdw.nl/Parkeren/GEO-Carpool/9c54-cmfx/data) gebruiken en ga de volgende variabellen gebruiken:

- AreaDesc - De naam van de carpool locatie
- aantal_parkeer_plaatsen - Variabel die de aantal parkeerplaatsen van een carpool locatie laat zien
- aantal_laad_punten - Variabel die de aantal laadpunten van een carpool locatie laat zien
- toegankelijk_voor_gehandicapten - Variabel die de aantal carpool locaties laat zien die toegankelijk voor gehandicapten zijn
- Location -  Variabel die de locatie zien in coordinaten van de carpool locaties

## Verwachtingen

De carpool locatie met de meeste parkeerplaatsen zal naar mijn verwachting veel voorzieningen hebben. De afstanden tussen de carpool locaties met verschillende voorzieningen zal waarschijnlijk niet erg groot zijn.

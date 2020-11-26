# Frontend-data
   ![Visu 1](https://github.com/lamartm/frontend-data/blob/master/images/visu%201.PNG)
   ![Visu 2](https://github.com/lamartm/frontend-data/blob/master/images/visu%202.PNG)
   
## Live-Demo
[Link](https://lamartm.github.io/frontend-data/)
   
## Beschrijving 📖
Voor Frontend-Data maken we gebruik van de opgeschonde data die we in Functional Programming hebben gemaakt. Hiervan maken we visualisaties met behulp van de D3 library.
Ik zal gebruik maken van de carpool data van de RDW om een visualisatie te maken voor de Volkskrant. De visualisatie zal over de volgende vraag gaan:

### Wat zijn de mogelijkheden van de carpool locaties binnen Nederland?

Voor verdere uitleg over de vraag en de subvragen kunt u hier naartoe:
[wiki -  Concept beschrijving](google.com)

## Hulpbronnen 🦮
Ik heb voornamelijk de course van Curran gevolgd om een D3 visualisatie te maken: 
(https://www.youtube.com/watch?v=vHqTbSd4D4I&ab_channel=CurranKelleher)

Voor de rest heb ik gebruik gemaakt van de lessen die we kregen.

## Install guide 🚀
Clone deze repo:
```$ git https://github.com/lamartm/frontend-data.git```

Navigeer naar deze map en run de volgende command:
``` npm install ```

Om de project te gebruiken:
``` npm run dev ```

# Dependencies
```   
"dependencies": {
    "d3": "^6.2.0"
  }
```
# Scripts
```
"scripts": {
    "test": "node index.js"
  }
```

## Dataset 💽
Ik maakte hiervoor alleen gebruik van de carpool dataset van de RDW:
[Carpool dataset](https://opendata.rdw.nl/Parkeren/GEO-Carpool/9c54-cmfx)

## Variabelen 🗄️

De volgende variabellen zijn gebruikt van de RDW dataset:

- AreaDesc - De naam van de carpool locatie
- aantal_parkeer_plaatsen - Variabel die de aantal parkeerplaatsen van een carpool locatie laat zien
- aantal_laad_punten - Variabel die de aantal laadpunten van een carpool locatie laat zien
- toegankelijk_voor_gehandicapten - Variabel die de aantal carpool locaties laat zien die toegankelijk voor gehandicapten zijn
- Location -  Variabel die de locatie zien in coordinaten van de carpool locaties

## Sources ℹ️
[CurranKelleher. (2018, 23 augustus). Data Visualization 2018 Course Overview [Video]. YouTube.]
(https://www.youtube.com/watch?v=vHqTbSd4D4I&ab_channel=CurranKelleher)

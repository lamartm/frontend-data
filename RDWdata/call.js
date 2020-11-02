// Api en properties variabel importen van de file variables.js
import {api, properties} from './variables.js'
import {getData} from './api.js'
import {filteredData} from './dataTransform.js'


//Gebruik functie getData() en zet daarin de variabel api (wat een api endpoint heeft), vervolgens maak ik een nieuwe array aan met de .map() method en daarin kijk ik of sommige objecten
//de element/property toegankelijk_voor_gehandicapten hebben, zo niet voeg ik ze toe met een waarde van 0
export function call() {
getData(api)
.then(data => {
  let newArray = data.map( item => {
    if (item.toegankelijk_voor_gehandicapten) {
        return item
        } else {
        item.toegankelijk_voor_gehandicapten  = "0"
        
        return item 
        
        }    
  })

//.forEach() method gebruikt om elk van de properties in de variabel properties te gebruiken (als de prop parameter) in de functie filteredData, zodat ik alleen een array krijg
//die die properties heeft. filteredData() gebruikt hier natuurlijk als eerste parameter de nieuwe array waarin er de toegankelijk_voor_gehandicapten property toegevoegd is.
//Credits aan Brian voor het benoemen van de .forEach method!
  properties.forEach(prop => {
    const response = filteredData(newArray, prop)

    console.log(response)
  })
})
}
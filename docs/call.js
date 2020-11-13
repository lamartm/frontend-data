import {getData} from './api.js'

//Roep hier de functie met de RDW Data
export async function apiCall() {
const json = await getData()
//Maak hier functie die het gaat opschonen in een nieuwe array
const cleanedArray = json.map(item => {
//Wil nummer strings veranderen naar nummers, dus ga hier eerst de object in pairs opsplitsen
  const values = Object.entries(item)
//Van die values wil ik een nieuwe geschonde array maken
  const newValues = values.map((item, index) => {
//Kijk hier of de property value een nummer string is, zo ja parse het naar een nummer
        if(!isNaN(item[1])){
          item[1] = parseInt(item[1])
        }
//De location property values waarin genest in location dus moest eerst zoeken naar de property van location
//en hierin de latitude en longitude parsen naar een nummer, moest hier wel parseFloat gebruiken omdat
//latitude en longitude nummers zoals 53.222 zijn, parseInt zou het afronden
        if(item[0] === "location"){
          if(!isNaN(item[1].latitude) && !isNaN(item[1].longitude)){
            item[1].latitude = parseFloat(item[1].latitude)
            item[1].longitude = parseFloat(item[1].longitude)
          }
          }
        return item
    })
// Zet de object pairs hier weer terug in een object
  const object = Object.fromEntries(newValues) 
  return object
  }
  )
  return cleanedArray

}
//Maak hier een functie waarin ik alle properties die ik ga gebruiken in een object gezet heb
function ParkingObject(d) {
  return {longitude: d.location.longitude, latitude: d.location.latitude, parkeer: d.aantal_parkeer_plaatsen, laad: d.aantal_laad_punten, handicap: d.toegankelijk_voor_gehandicapten, gebied: d.areadesc};
}
//Van de properties die ik in een object gezet heb gebruik ik map om van de RDW data, een nieuwe array te
//krijgen met alleen die properties
export async function locatieData() {
  const dataArr = await apiCall()
  return dataArr.map(ParkingObject)
}


// export async function parkeerPerArea() {
//   const info =  await apiCall()
//   const newInfo = info.map(item => {
//       const areadesc = item.areadesc
//       const parkeer = item.aantal_parkeer_plaatsen
//       const obj = {areadesc: areadesc, parkeren: parkeer}
//       return obj
//     })
// return newInfo
// }



// apiCall()
//   .then (data => {
//     let comparison = data.map( item => {
//       const areadesc = item.areadesc
//       const parkeer = item.aantal_parkeer_plaatsen
//       const obj = {areadesc: areadesc, parkeren: parkeer}
//       return obj
//     })
//     return comparison
//   })

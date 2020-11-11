import {getData} from './api.js'


export async function apiCall() {
const json = await getData()
const cleanedArray = json.map(item => {
  const values = Object.entries(item)
  const newValues = values.map((item, index) => {
        if(!isNaN(item[1])){
          item[1] = parseInt(item[1])
        }
        if(item[0] === "location"){
          if(!isNaN(item[1].latitude) && !isNaN(item[1].longitude)){
            item[1].latitude = parseFloat(item[1].latitude)
            item[1].longitude = parseFloat(item[1].longitude)
          }
          }
        return item
  })
  const object = Object.fromEntries(newValues) 
  return object
}
)
  return cleanedArray

}
function ParkingObject(d) {
  return {longitude: d.location.longitude, latitude: d.location.latitude, parkeer: d.aantal_parkeer_plaatsen, gebied: d.areadesc};
}

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

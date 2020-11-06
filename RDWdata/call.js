// Api en properties variabel importen van de file variables.js
import {api, properties} from './variables.js'

import {getData} from './api.js'
import {filteredData} from './dataTransform.js'


//Dikke so naar Brian
export async function apiCall() {
const json = await getData()
const newArrayy = json.map(item => {
  const values = Object.entries(item)
  const newValues = values.map((item, index) => {
        if(!isNaN(parseInt(item[1]))){
          item[1] = parseInt(item[1])
        }
        return item
  })
  const kanDit = Object.fromEntries(newValues) 
  return kanDit
}
)
  return newArrayy

}

export async function parkeerPerArea() {
  const info =  await apiCall()
  const newInfo = info.map(item => {
      const areadesc = item.areadesc
      const parkeer = item.aantal_parkeer_plaatsen
      const obj = {areadesc: areadesc, parkeren: parkeer}
      return obj
    })
return newInfo
}


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
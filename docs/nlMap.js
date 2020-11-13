//Hier fetch ik de nederlandse provincie map topojson 
export default function () {
  return fetch('https://cartomap.github.io/nl/wgs84/provincie_2020.topojson')
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

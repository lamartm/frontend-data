import { locatieData} from './call.js'
import nlMap from './nlMap.js'

//De functie die exporteert naar index.js, heb gebruik gemaakt van de tutorials van Curran om de map te tonen
//en wat meer kleine dingen van de lessen op teams: https://www.youtube.com/watch?v=_8V5o2UHG0E&t=23429s&ab_channel=freeCodeCamp.org

export async function drawMap() {
  const locatie = await locatieData()
  console.log(locatie)
//Bewaar nlMap in nlData
  const nlData = await nlMap()
  const path = d3.geoPath()
//d3.zoom gebruikt die reageert op zoom van gebruiker
  const zoom = d3.zoom().on('zoom', function zoomed() { g.attr('transform', d3.event.transform) } )

//Radius scale van de cirkels in de map hier gezet op scaleSqrt
  const radiusScale = d3.scaleSqrt()

//Domain en range van de scale hier bepaald
  radiusScale.domain([0, 400])
             .range([0,10])

//Width en height handmatig gesteld voor viewbox
  const width = 975;
  const height = 610;

//Selecteer de div met id map en maak een svg element aan, call ook naar de zoom functie voor alleen in de div
  const svg = d3.select('#map')
    .append('svg')
    .attr("viewBox", [0, 0, width, height])
    .call(zoom)

// Maak een groep aan binnen de svg 
  const g = svg.append('g')
// De projection/look van de map bepaald van de map
  const projection = d3.geoMercator().scale(5000).center([5.1, 52])
// Pathgenerator die de path/map maakt
  const pathGenerator = path.projection(projection)

// De topojson wordt hier geconverteerd naar geojson en hiervan wordt de NL map punten gemaakt
  const provincies = g
    .append('g')
    .attr('fill', '#42428f')
    .attr('stroke', '#2c2c2e')
    .attr("stroke-width", .7)
    .selectAll('path')
    .data(topojson.feature(nlData, nlData.objects.provincie_2020).features)
    .join('path')
    .attr('d', pathGenerator)

// Nieuwe div gemaakt die de tooltip zal zijn, van nature hidden
  const tooltip = d3.select('#map')
    .append("div")
    .attr('class', 'hidden tooltip')

// Variabel die de select element selecteert en hiervan kijkt of de value van de gekozen optie is verandert, zo ja
//Dan wordt dat aangepast bij de cirkels. 
  const selectOption = document.getElementById("select")
// Roep de cirkel gelijk aan om vanaf het begin beeld te hebben
    makeCircles(g, selectOption.value)
  selectOption.addEventListener('change', (e) => {
    makeCircles(g, selectOption.value)
  })

// Functie die cirkels maakt op de map gebasseerd op de gekozen optie (selectedVariabel) en de gekozen groep/map waarop de cirkels
// gemaakt moeten worden (selectedGroup)
  function makeCircles(selectedGroup, selectedVariabel) {
    const circles = selectedGroup.selectAll('circle').data(locatie)
        svg
// Update call die elke keer gaat wanneer er een nieuwe variabel gekozen wordt, haal de vorige cirkels weg en zet de radius op 0
          .selectAll('circle').transition().duration(1000)
          .attr("r",  function(d){ return radiusScale( d[selectedVariabel]) })
    circles.enter()
        .append("circle")
            .attr("cx", function(d){ return projection([ d.longitude, d.latitude ])[0] })
            .attr("cy", function(d){ return projection([ d.longitude, d.latitude ])[1] })
            .attr("r",  function(d){ return radiusScale( d[selectedVariabel] ) })
            .style("fill", "69b3a2")
            .attr("stroke", "#69b3a2")
            .attr("stroke-width", .7)
            .attr("fill-opacity", .6)
            .attr('cursor', 'pointer')
// mouse events voor tooltip en styling
            .on('mousemove', mouseMove)
            .on("mouseout", mouseOut)
            // circles 
            //   .exit()
            //    .remove()
  }

  function mouseMove(d) {
    d3.select(this).style('fill', 'a4ff6b')
// Tooltip  word op mouse hover visible, positie ervan is bepaald van de muis coordinaten relatief van de window, de message zelf is relatief 
// van de geselecteerde variabel
    tooltip
      .classed('hidden', false)
      .attr('style', 'left:' + (d3.event.clientX + 20) + 'px; top:' + (d3.event.clientY - 20) + 'px')
      .html(`${d.gebied + '<br />' + 'Aantal:' + ' ' + d[selectOption.value]}`)
  }
  
  function mouseOut(d) {
    d3.select(this).style('fill', '69b3a2')

    tooltip
     .classed('hidden', true)
  }


} 

// export async function drawGraph() {
//   const dataAr = await locatieData()
//   const margin = {top: 20, bottom: 20, left: 40, right: 20}
//   const xScale = d3.scaleBand()
//                    .domain(dataAr.map(data => data.gebied))
//                    .rangeRound([0, 300])
//                    .padding(0.1)
//   const yScale = d3.scaleLinear()
//                    .domain([0,400])
//                    .range([200,0])
  
//   const container = d3.select('body')
//       .append('svg')
//       .classed('container', true)
//       .append('g')
//       .attr('transform', `translate(${margin.left},${margin.right})`);
  
//   container.append('g').call(d3.axisLeft(yScale));

//   container.append('g').call(d3.axisBottom(xScale)).attr('transform', `translate(0,200)`);

//   container.selectAll('.bar')
//   .data(dataAr)
//   .enter()
//   .append('rect')
//   .classed('bar', true)
//   .attr('width', xScale.bandwidth())
//   .attr('height', data => 200 - yScale(data.parkeer))
//   .attr('x', data => xScale(data.gebied))
//   .attr('y', data => yScale(data.parkeer))
// }

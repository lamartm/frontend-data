import { locatieData} from './call.js'
import nlMap from './nlMap.js'

export async function drawMap() {
  const locatie = await locatieData()

  const nlData = await nlMap()
  const path = d3.geoPath()
  const zoom = d3.zoom().on('zoom', function zoomed() { g.attr('transform', d3.event.transform) } )

  const radiusScale = d3.scaleSqrt()

  radiusScale.domain([0, 400])
             .range([0,10])

  const width = 975;
  const height = 610;

  const svg = d3.select('#map')
    .append('svg')
    .attr("viewBox", [0, 0, width, height])
    .call(zoom)

  const g = svg.append('g')
  const projection = d3.geoMercator().scale(5000).center([5.1, 52])
  const pathGenerator = path.projection(projection)

  const provincies = g
    .append('g')
    .attr('fill', '#6363ff')
    .attr('stroke', '#2c2c2e')
    .attr("stroke-width", .7)
    .selectAll('path')
    .data(topojson.feature(nlData, nlData.objects.provincie_2020).features)
    .join('path')
    .attr('d', path)

  const tooltip = d3.select('#map')
  .append("div")
  .attr('class', 'hidden tooltip')

  const selectOption = document.getElementById("select")

  makeCircles(g, selectOption.value)
  
  selectOption.addEventListener('change', (e) => {
    makeCircles(g, selectOption.value)
  })

  
  function makeCircles(selection, selected) {
    const circles = selection.selectAll('circles').data(locatie)
        svg
          .selectAll('circle').transition().duration(1000)
          .remove('circle')
          .attr("r",  0)
    circles.enter()
        .append("circle")
            .attr("cx", function(d){ return projection([d.longitude, d.latitude])[0] })
            .attr("cy", function(d){ return projection([d.longitude, d.latitude])[1] })
            .attr("r",  function(d){ return radiusScale(d[selected])})
            .style("fill", "69b3a2")
            .attr("stroke", "#69b3a2")
            .attr("stroke-width", .7)
            .attr("fill-opacity", .6)
            .attr('cursor', 'pointer')
            .on('mousemove', mouseMove)
            .on("mouseout", mouseOut)
  }

  function mouseMove(d) {
    d3.select(this).style('fill', 'a4ff6b')

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


//     makeCircles(g, check)
//   });

    //   .append('title')
    //       .text(d => `${'yoyoeee' + '<br />' + 'Aantal parkeerplaatsen:' + ' ' + d.parkeer}`)
  




//   function reset() {
//     provincies.transition().style('fill', null);
//     svg
//       .transition()
//       .duration(750)
//       .call(
//         zoom.transform,
//         d3.zoomIdentity,
//         d3.zoomTransform(svg.node()).invert([width / 2, height / 2])
//       );
//   }

 
} 

// export async function drawGraph() {
//   const dataAr = await parkeerPerArea()
//   const margin = {top: 20, bottom: 20, left: 40, right: 20}
//   const xScale = d3.scaleBand()
//                    .domain(dataAr.map(data => data.areadesc))
//                    .rangeRound([0, 3000])
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
//   .attr('height', data => 200 - yScale(data.parkeren))
//   .attr('x', data => xScale(data.areadesc))
//   .attr('y', data => yScale(data.parkeren))
// }

// const circle = g.selectAll('circles').data(check)
// circle.exit()
//         .remove()
// circle.enter()
//       .append('circle')
//       .attr("r",  function(d){ return radiusScale(d.check)})
// circle.transition()
//       .duration(500)
//       .attr("r",  function(d){ return radiusScale(d.check)})
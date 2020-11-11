import { locatieData } from './call.js'
import nlData from './nltopo.js';

export async function drawMap() {
  const locationData = await locatieData();
  const data = await nlData();
  const path = d3.geoPath();
  const zoom = d3.zoom().on('zoom', function zoomed() {
    g.attr('transform', d3.event.transform);
  });
  const radiusScale = d3.scaleSqrt()

  const width = 975;
  const height = 610;

  const svg = d3.select('#map')
      .append('svg')
      .classed('map', true)
      .attr("viewBox", [0, 0, width, height])

  const g = svg.append('g');
  const projection = d3.geoMercator().scale(6000).center([5.116667, 52.17]);
  const pathGenerator = path.projection(projection);

  const provincies = g
    .append('g')
    .attr('fill', '#6363ff')
    .attr('stroke', '#2c2c2e')
    .attr("stroke-width", .7)
    .attr('cursor', 'zoom-in')
    .selectAll('path')
    .data(topojson.feature(data, data.objects.provincie_2020).features)
    .join('path')
    .attr('d', path);

const tooltip = d3.select('#map')
.append("div")
.attr('class', 'hidden tooltip')


provincies.append('title').text((d) => d.properties.statname);

radiusScale.domain([0, 400])
            .range([0,10])

g.selectAll('circles')
      .data(locationData)
      .enter()
      .append("circle")
          .attr("cx", function(d){ return projection([d.longitude, d.latitude])[0] })
          .attr("cy", function(d){ return projection([d.longitude, d.latitude])[1] })
          .attr("r",  function(d){ return radiusScale(d.parkeer)})
          .style("fill", "69b3a2")
          .attr("stroke", "#69b3a2")
          .attr("stroke-width", .7)
          .attr("fill-opacity", .6)
          .attr('cursor', 'pointer')
          .on('mousemove', mouseMove)
          .on("mouseout", mouseOut)

    //   .append('title')
    //       .text(d => `${'yoyoeee' + '<br />' + 'Aantal parkeerplaatsen:' + ' ' + d.parkeer}`)
  
  svg.call(zoom);

  function mouseMove(d) {
    d3.select(this).style('fill', 'a4ff6b')

    tooltip
    .classed('hidden', false)
    .attr('style', 'left:' + (d3.event.clientX + 20) + 'px; top:' + (d3.event.clientY - 20) + 'px')
    .html(`${d.gebied + '<br />' + 'Aantal parkeerplaatsen:' + ' ' + d.parkeer}`);
  }
  
  function mouseOut(d) {
    d3.select(this).style('fill', '69b3a2')

    tooltip
     .classed('hidden', true);
  }

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


import { apiCall, parkeerPerArea } from './call.js'

(async () =>{
const dataAr = await parkeerPerArea()
const xValue = data => data.areadesc
const margin = {top: 20, bottom: 20, left: 40, right: 20}
const xScale = d3.scaleBand()
                 .domain(dataAr.map(xValue))
                 .rangeRound([0, 3000])
                 .padding(0.1)
const yScale = d3.scaleLinear()
                 .domain([0,400])
                 .range([200,0])


const container = d3.select('svg')
    .classed('container', true)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.right})`)
    container.append('g').call(d3.axisLeft(yScale))
    container.append('g').call(d3.axisBottom(xScale))
             .attr('transform', `translate(0,200)`)
    container.selectAll('.bar')
    .data(dataAr)
    .enter()
    .append('rect')
    .classed('bar', true)
    .attr('width', xScale.bandwidth())
    .attr('height', data => 200 - yScale(data.parkeren))
    .attr('x', data => xScale(xValue(data)))
    .attr('y', data => yScale(data.parkeren))

})()

// const data = parkeerPerArea()
// console.log(data)
// let azebi = parkeerPerArea()
// console.log(azebi)


const dummy_data = [
    { id: 'd1', value: 10, region: 'USA'},
    { id: 'd2', value: 11, region: 'India'},
    { id: 'd3', value: 12, region: 'Turkey'},
    { id: 'd4', value: 6, region: 'Canada'},
]







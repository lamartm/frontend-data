
const dummy_data = [
    { id: 'd1', value: 10, region: 'USA'},
    { id: 'd2', value: 11, region: 'India'},
    { id: 'd3', value: 12, region: 'Turkey'},
    { id: 'd4', value: 6, region: 'Canada'},
]
const xValue = data => data.region
const margin = {top: 50, bottom: 20, left: 40, right: 20}
const xScale = d3.scaleBand()
                 .domain(dummy_data.map(xValue))
                 .rangeRound([0, 400])
                 .padding(0.1)
const yScale = d3.scaleLinear()
                 .domain([0,14])
                 .range([300,0])

const xAxis = d3.axisBottom(xScale)
                
const yAxis = d3.axisLeft(yScale)
                .tickSize(-400)

const container = d3.select('svg')
    .classed('container', true)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)

const yAxisG = container.append('g').call(yAxis)

const xAxisG = container.append('g').call(xAxis)
             .attr('transform', `translate(0,300)`)
    

    xAxisG.selectAll('.tick line').remove()

    xAxisG.append('text')
             .classed('axis-label', true)
             .attr('fill', 'grey')
             .attr('x', innerWidth / 3.2)
             .attr('y', 50)
             .text('Countries')

    container.append('text')
             .classed('title', true)
             .attr('x', -8)
             .attr('y', -20)
             .text('Top 4 landen met meeste mensen')
    container.selectAll('.bar')
    .data(dummy_data)
    .enter()
    .append('rect')
    .classed('bar', true)
    .attr('width', xScale.bandwidth())
    .attr('height', data => 300 - yScale(data.value))
    .attr('x', data => xScale(xValue(data))).attr('transform', 'rotate(-90deg)')
    .attr('y', data => yScale(data.value))

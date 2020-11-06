
const svg = d3.select('svg')

const rect = svg
    .append('rect')
        .attr('x', 50)
        .attr('y', 50)
        .attr('width', 200)
        .attr('height', 200)
        .attr('fill', '#c96767')

const leftEye = svg
    .append('circle')
        .attr('r', 20)
        .attr('cx', 100)
        .attr('cy', 120)
        .attr('fill', 'black')

const rightEye = svg
    .append('circle')
        .attr('r', 20)
        .attr('cx', 200)
        .attr('cy', 124)
        .attr('fill', 'black')

const leftEyebrow = svg
    .append('line')
        .attr('x1', 75)
        .attr('y1', 85)
        .attr('x2', 130)
        .attr('y2', 100)
        .attr('stroke', 'black')
        .attr('stroke-width', 5)

const rightEyebrow = svg
    .append('line')
        .attr('x1', 175)
        .attr('y1', 100)
        .attr('x2', 230)
        .attr('y2', 90)
        .attr('stroke', 'black')
        .attr('stroke-width', 5)
    .transition().duration(2000)
        .attr('y1', 90)
        .attr('y2', 80)

const leftHorn = svg
    .append('path')
        .attr('d', "M 10 30 L 100 50 L 50 90 z")
        .attr('fill', 'black')
    .transition().duration(2000)
        .attr('d', "M 10 10 L 100 50 L 50 90 z")

const rightHorn = svg
    .append('path')
        .attr('d', "M 200 50 L 300 30 L 250 90 z")
        .attr('fill', 'black')
    .transition().duration(2000)
        .attr('d', "M 200 50 L 300 10 L 250 90 z")

const g = svg
    .append('g')
        .attr('transform', 'translate(140,250)')

const mouth = g
    .append('path')
        .attr('d',d3.arc()({
            innerRadius: 80,
            outerRadius: 90,
            startAngle: 7,
            endAngle: Math.PI * 1.8
        }))
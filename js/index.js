'use strict';

import * as d3 from 'd3';

let dataset = [5, 20, 15, 30, 10, 50, 15, 25, 20, 35];

/*

div bars

d3.select('body').selectAll('div')
    .data(dataset)
    .enter()
    .append('div')
    .attr('class', 'bar')
    .style('height', (d) => 5 * d + 'px');
    
    
*/


let w = 500, h = 250;

let svg = d3.select('body')
    .append('svg')
    .attr('width', w)
    .attr('height', h);

/*

svg circles

let circles = svg.selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('cx', (d, i) => i * 50 + Math.max.apply(null, dataset))
    .attr('cy', h/2)
    .attr('r', d => d);
    
*/

let barPadding = 1;

let rectangles = svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect');

rectangles
    .attr('x', (d, i) => i * (w/dataset.length))
    .attr('y', (d) => h - d * 5)
    .attr('width', w / dataset.length - barPadding)
    .attr('height', (d) => d * 5)
    .attr('fill', (d) => 'rgb(0, ' + (d * 5) % 255 + ', 0)');

svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text((d) => d)
    .attr('x', (d, i) => i * (w/dataset.length) + (w / dataset.length - barPadding) / 2)
    .attr('y', (d) => h - d * 5 + 15)
    .attr('font-family', 'sans-serif')
    .attr('font-size', '11px')
    .attr('fill', 'white')
    .attr('text-anchor', 'middle');
import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

const LineChart = ({data}) => {
  const [newData,setNewData]=useState([])
  
  
  console.log(newData)

  const svgRef = useRef();
  const targetEndDate = new Date('2023-11-10');

  useEffect(() => {
    const data1=data.map((ele)=>{
      return ele.value})
      setNewData(data1)
    const w = 650; // Increased width to accommodate 25px padding on both sides
    const h = 200; // Increased height to accommodate 25px padding on both sides
    const padding = 25; // Padding from all sides
    const svg = d3.select(svgRef.current)
      .attr('width', w)
      .attr('height', h);

    const xScale = d3.scaleTime()
      .domain([new Date('2023-10-31'), targetEndDate]) // Update the xScale domain to start from the start date and end at the target end date
      .range([padding, w - padding]); // Adjust range for xScale with padding

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(newData)])
      .range([h - padding, padding]); // Adjust range for yScale with padding

    const generateScaleLine = d3.line()
      .x((d, i) => xScale(new Date('2023-11-01').setDate(i))) // Generate x-coordinates based on date
      .y(yScale)
      .curve(d3.curveCardinal);

    svg.selectAll('.line')
      .data([newData])
      .join('path')
      .attr('d', d => generateScaleLine(d))
      .attr('fill', 'none')
      .attr('stroke', '#26C281')
      .style('stroke-width', '2px');

    const startDate = new Date('2023-11-01');
    const days = d3.timeDay.range(startDate, targetEndDate); // Update days to end at the target end date

    const xAxis = d3.axisBottom(xScale)
      .tickValues(days)
      .tickFormat(d3.timeFormat('%d'))
    

    svg.append('g')
      .call(xAxis)
      .attr('transform', `translate(0,${h - padding})`); // Adjust x-axis transform

    // Remove left-side border by setting stroke to 'none'
    svg.selectAll('.domain').remove();

  }, [newData]);

  return (
    <>
      <svg ref={svgRef}></svg>
      <style>
        {`
          .tooltip {
            font-size: 12px;
            fill: red;
          }
        `}
      </style>
    </>
  );
}

export default LineChart;

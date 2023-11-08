import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const CandlestickChart = ({data}) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const margin = { top: 40, right: 10, bottom: 30, left: -1 };
    const width = 500 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const xScale = d3.scaleBand()
      .domain(data.map((d) => d.month))
      .range([0, width])
      .padding(0.5);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([height, 0]);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg.append("g")
      .attr("transform", `translate(${margin.left}, ${height + margin.top})`)
      .call(xAxis);

    svg.append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`)
      .call(yAxis);

    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.month))
      .attr("y", (d) => yScale(d.value))
      .attr("width", "10px")
      .attr("height", (d) => height - yScale(d.value))
      .attr("fill", "#2BA25B")
      

    return () => {};
  }, []);

  return <svg ref={svgRef} width={450} height={200} />;
};

export default CandlestickChart;
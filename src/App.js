import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import * as d3 from 'd3';
import { useEffect, useState,useRef } from 'react';
import { Grid } from '@material-ui/core';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" target="_blank" href="https://saharsh-r.github.io/">
        Saharsh Rathi
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


function BarChart({ id, data, width = 800, height = 500 }) {
  const padding = 50;
  var years = data.map(d => new Date(d[0]))

  const xScale = d3.scaleTime()
  .domain([d3.min(years), d3.max(years)])
  .range([padding, width -  padding]);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, (d) => d[1])])
    .range([height - padding , padding]);

  const yAxis = d3.axisLeft(yScale);
  const xAxis = d3.axisBottom(xScale);
  const barWidth = (width / data.length) *0.85;


  useEffect(() => {

    const tooltip = d3
      .select('#tooltip')
      .attr('id', 'tooltip')
      .style('opacity', 0);

    const svg = d3
      .select('#' + id)
      .append('svg')
      .attr('width', width)
      .attr('height', height)

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => xScale(years[i]) )
      .attr('y', (d, i) => yScale(d[1]))
      .attr('width', barWidth)
      .attr('height', (d, i) =>  height -  padding -  yScale(d[1]))
      .attr('class', 'bar')
      .attr('data-date', (d) => d[0])
      .attr('data-gdp', d => d[1])
      .style('fill', '#810034')
      .on('mouseover', function(event, d) {
        d3.select(event.currentTarget).style('fill', '#fff600')
        tooltip.transition().duration(50).style('opacity', 0.9);
        tooltip
          .html(
              d[0]+
              '<br>' +
              '$' +
              d[1] +
              ' Billion'
          )
          .attr('data-date', d[0])
          .style('left', xScale(new Date(d[0])) + 'px')
          .style('top', yScale(d[1])+'px')
          .style('transform', 'translateY(-60px)');

      })
      .on('mouseout', ()=> {
        d3.select(event.currentTarget).style('fill', '#810034');
        tooltip.transition().duration(50).style('opacity', 0);
      });

    svg.append('g')
      .attr('transform', 'translate('+ padding + ', 0)')
      .attr('id', 'y-axis')
      .call(yAxis);
    svg.append('g')
      .attr('transform', `translate(${0}, ${height - padding})`)
      .attr('id', 'x-axis')
      .call(xAxis);

  }, []);
  

  return <div id={id} style={{position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> 
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      textAlign: 'center',
      width: 150,
      height: 50,
      backgroundColor: '#ff005c',
      color: 'white',
      fontSize: 15,
      boxShadow: '1px 1px 10px',
      borderRadius: 5,
      pointerEvents: 'none'

    }} id={'tooltip'}></div>
  </div>;
}

export default function App() {
  const [dataset, setDataset] = useState([])

  useEffect(() => {
    if (dataset.length == 0){
      fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json")
        .then(response => response.json())
        .then(data => {
          setDataset(data.data)})
    } 
  }, [dataset])
  
  return (
    <Grid container alignItems = 'center' justify = 'center'  style = {{backgroundColor: 'grey'}}>
      <Grid item >
        <Box  p={4} style={{backgroundColor: '#f5f5f5'}} borderRadius={40}>
          <Typography variant="h4" component="h1" align = 'center' id='title' gutterBottom>
            United States GDP
          </Typography>
          {dataset.length != 0 && 
            <BarChart id="barchart" data={dataset} />
          }
          <Copyright />
        </Box>
      </Grid>
    </Grid>
    
  );
}

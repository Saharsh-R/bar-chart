import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import * as d3 from 'd3';
import { useEffect, useState,useRef } from 'react';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


function BarChart({ id, data, width = 900, height = 500 }) {
  const padding = 50;
  const xScale = d3.scaleLinear()
    .domain([0, 274])
    .range([padding, width -  padding]);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, (d) => d[1])])
    .range([height - padding , padding]);

  const yAxis = d3.axisLeft(yScale);
  const xAxis = d3.axisBottom(xScale);

  useEffect(() => {

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
      .attr('x', (d, i) => xScale(i) )
      .attr('y', (d, i) => yScale(d[1]))
      .attr('width', 2)
      .attr('height', (d, i) => height -  padding -  yScale(d[1]))
      .attr('class', 'bar');

    svg.append('g')
      .attr('transform', 'translate('+ padding + ', 0)')
      .attr('id', 'y-axis')
      .call(yAxis);
    svg.append('g')
      .attr('transform', `translate(${0}, ${height - padding})`)
      .attr('id', 'x-axis')
      .call(xAxis);

  }, []);

  return <div id={id} />;
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
    
    <Container >
      <Box m={4} p={4} style={{backgroundColor: 'grey'}}>
        <Typography variant="h4" component="h1" id='title' gutterBottom>
          United States GDP
        </Typography>
        {dataset.length != 0 && 
          <BarChart id="barchart" data={dataset} />
        }
        <Copyright />
      </Box>
    </Container>
  );
}

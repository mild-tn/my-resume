import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid,ButtonGroup,Container,Button, Box } from '@material-ui/core';
import { Title,Subtitle } from '../Core/Text';
import color from '../Core/Color';
import Timeline from './Timeline'

const skills = [
  { text: "React.js" },{ text: "Next.js"},{ text: "styled-components" }, 
  { text: "Bootstrap" },{ text: "HTML/CSS/JavaScript" },{ text: "Git Command Line" },
  { text: "axios" },{ text: "Laravel" },{ text: "socket.io" },{ text: "Node.js" },
  { text: "Basic Ansible" },{ text: "Agile software development Method" },
  { text: "MVC Pattern" },{ text: "MVC Pattern" },{ text: "SQL" },{ text: "Photoshop" },
  { text: "illustator" },{ text : "Permiere Pro"},{ text: "Linux Command Line Basic"},
  { text: "Java"},{ text: "Docker"}
]

const Btn = styled.div`
  color: ${color.font};
  border: 1px solid #fff;
  padding: 0.5em;
  border-radius: 7px;
`
class index extends Component {
  render() {
    return (
      <React.Fragment>
        <Container maxWidth="md">
        <Grid item md="12" justify="center">
          <Title textAlign='center' lineHeight='30px'>Work Experience</Title>
        </Grid>
          <Grid item md="12">
            <Grid container direction="row" justify="center" item md="12">
              <Timeline/>
            </Grid>
        </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default index;
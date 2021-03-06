import React, { Component } from 'react';
import { Grid,Container } from '@material-ui/core';
import { Title,Header } from '../Core/Text';
import Timeline from './Timeline';
class index extends Component {
  render() {
    return (
      <React.Fragment>
        <Container maxWidth="ls">
        <Grid item md="12" justify="center">
          <Title textAlign='center'>Work Experience & Project</Title>
          <Header textAlign='center'>Showcase of my latest works, projects and developments.</Header>
        </Grid>
          <Grid item ls="12">
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
import { Box, Button, ButtonGroup, Container, Grid } from '@material-ui/core'
import { FaFacebook, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { Header, Subtitle, Title } from '../Core/Text';
import { IoIosMail, IoIosPhonePortrait } from "react-icons/io";
import React, { Component } from 'react';

import color from '../Core/Color'
import styled from 'styled-components';

const contact = [
  {icon : IoIosMail,text : "tassaneewan.mild@mail.kmutt.ac.th" ,link: "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=tassaneewan.mild@mail.kmutt.ac.th&tf=1"},
  {icon : FaGithub ,text : "github.com/mild-tn" ,link: "https://github.com/mild-tn"},
  {icon : FaFacebook,text: "facebook.com/mild.tn",link: "https://www.facebook.com/mmmild1"},
  {icon : FaMedium,text : "medium.com/@mild20091931",link: "https://medium.com/@mild20091931"},
  {icon : IoIosPhonePortrait,text: "0956787294",link: "-"},
  {icon : FaLinkedin,text: "@mild-tn",link: "https://www.linkedin.com/in/mild-tn"},
]

// const interests = [
//   { text: "#Web Technology" },
//   { text: "#Frontend Technology" },
//   { text: "#Tool for developer" },
//   { text: "#Linux Command Line" },
// ]

const TextIcon = styled.h1`
  color: ${color.font};
`

const BtnGroup = styled(ButtonGroup)`
  .MuiButton-root{
    color: ${color.font};
  }
  `
const LinkStyle = styled.a`
  color: ${color.font};
  text-decoration: none;
`

const Hr = styled.hr`
  width: 10%;
  background-color: ${color.font};
  margin-top: 3%;
`
class index extends Component {
  render() {
    return (
    <React.Fragment>
      <Container maxWidth="md">
        <Grid item md="12" justify="center">
          <Title textAlign='center' lineHeight='10px'>Profile</Title>
          <Header lineHeight='1.5rem' textAlign="center">My name is Tassneewan Noita. My nick name is Mild who love coding and ready to learn everything. </Header>
          <Header lineHeight='1.5rem' textAlign="center">I'm studying 4th student of Bachelor of Science (Information Technology), School of Information Technology,</Header>
          <Header lineHeight='1.5rem' textAlign="center">King Mongkut’s University of Technology Thonburi.</Header>
        </Grid>
        <Hr/>
        <Grid item md="12">
          <Subtitle>Contact</Subtitle>
            <Grid container direction="row" justify="center" item md="12">
              {contact.map((data,i) => {
                return (
                <Box mr={2} ml={2} key={i}>
                <Grid item justify="center">
                <BtnGroup variant="text" size="medium" aria-label="medium contained button group" >
                  <TextIcon>
                    <data.icon/>
                  </TextIcon>
                  <Button>
                    <LinkStyle href={data.link} target="_blank">
                      {data.text}
                    </LinkStyle>
                  </Button>
                </BtnGroup>
                </Grid>
                </Box>
                )
              })}
            </Grid>
        <Hr/>
        </Grid>
      </Container>
    </React.Fragment>
    );
  }
}

export default index;
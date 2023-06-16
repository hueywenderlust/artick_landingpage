import * as React from 'react';
import styledComponent from 'styled-components';
import Timer from "./Timer";

const Section = styledComponent.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
//   color: white;
//   font-size: 14px;
//   font-weight: 300;
`;

const Container = styledComponent.div`
    // width: 100%;
    // display: flex;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
    }
`;

const Header = styledComponent.h1`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
`

const Header2 = styledComponent.h1`
    font-size: 36px;
    font-weight: bold;
    position: relative;
    color: white;
    margin-bottom: 5%;
`

const DateText = styledComponent.h4`
    font-size: 40px;
    font-weight: bold;
    color: #FF5400;
    position: relative;
    margin-bottom: 5%;
`



const Brandrelease = () => {
  return (

    <Section>
        <Container>
                
            <Header>Brand Release</Header>
  
            <Header2>live on</Header2>


            <DateText>30th, June 2023 at 1400 HKT</DateText>
            <Timer />

        </Container>
    </Section>
  )
}

export default Brandrelease

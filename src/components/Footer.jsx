import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 5vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Copyright = styled.p`
  font-weight: 500;
  font-size: 15px;
`;


const Footer = () => {
  
  return (
    <Section>
      <Container>
        <Copyright>
             artick © Copyright 2023. All Rights Reserved
        </Copyright>
      </Container>
    </Section>
  );
};

export default Footer;

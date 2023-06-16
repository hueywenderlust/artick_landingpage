import React, { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import Footer from "./Footer";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 46px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #FF5400;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #FF5400;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 50%;
  height: 50%;
  object-fit: contain;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
  margin: auto;
  margin: 20% !important;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Subscribe = () => {
    const ref = useRef();
    const [success, setSuccess] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            "service_id",
            "template_id",
            ref.current,
            "public_key"
        )
        .then(
            (result) => {
            console.log(result.text);
            setSuccess(true);
            },
            (error) => {
            console.log(error.text);
            setSuccess(false);
            }
        );
    };

  return (
    <Section>
      <Container>
        <Left>
          {/* <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas> */}
          <Img src="./img/subscribe.png" />
        </Left>
        <Right>
          <Title>HSUHK Entrepreneurship Challenge 2023  </Title>
          <WhatWeDo>
            {/* <Line src="./img/line.png" /> */}
            <Subtitle>Limited Perks. Subscribe & Grab now.</Subtitle>
          </WhatWeDo>
          <Desc>
            You will receive our announcement  for new drops, perks, private events & more.
          </Desc>
           <Form ref={ref} onSubmit={handleSubmit}>
            <Input placeholder="Email" name="email" />
            <Button type="submit">Subscribe</Button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </Form>

        </Right>
      </Container>
    </Section>
  );
};

export default Subscribe;

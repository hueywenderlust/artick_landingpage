import styled from "styled-components";
import Hero from "./components/Hero";
import About from "./components/About";
import Subscribe from "./components/Subscribe";
import Brandrelease from "./components/Brandrelease";
import ProductDesc from "./components/ProductDesc";
import Works from "./components/Works";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Hero />
      <Works />
      <Subscribe />
    </Container>
  );
}

export default App;

import Head from "next/head";
//import Image from 'next/image'
import styles from "../styles/Home.module.css";
import {
  Logo,
  NavBar,
  PhotoContainer,
  EmailForm,
  Footer,
  PhotoCarousel,
} from "./pageComponents/indexComponents.js";
import {
  Image,
  Button,
  Carousel,
  Card,
  Row,
  Col,
  Jumbotron,
  Container,
  Nav,
} from "react-bootstrap";

/**
    <NavBar />
    <PhotoContainer />
    <EmailForm />
    <Footer />
 * @returns 
 */

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wedding Photographer Site</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossorigin="anonymous"
        />
      </Head>
      <Container>
        <Row>
          <NavBar />
          <Logo />
          <PhotoCarousel />
          <PhotoContainer />
          <EmailForm />
          <Footer />
        </Row>
      </Container>

      <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"></script>
    </div>
  );
}

//import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import Head from "next/head";
import React, { Component } from "react";
import ReactDOM from "react-dom";
//import {navStyle, navLinks} from '../../styles/NavBar.module.css';
//import {  Nav } from 'react-bootstrap'
import Link from "next/link";
import Router from "next/router";
import {
  imagePadding,
  logoStyle,
  carouselStyle,
  containerStyle,
  footerStyle,
  formStyle,
  navStyle,
  navLinks,
} from "../../styles/indexCompStyles.module.css";
import {
  Image,
  Button,
  Form,
  Carousel,
  Card,
  Row,
  Col,
  Jumbotron,
  Container,
  Nav,
} from "react-bootstrap";

function NavBar() {
  return (
    <Nav className={navStyle}>
      <Link href="undefined">
        <span className={navLinks}> Home </span>
      </Link>

      <Link href="undefined">
        <span className={navLinks}> About Us </span>
      </Link>

      <Link href="undefined">
        <span className={navLinks}> Our Wedding Photographers </span>
      </Link>

      <Link href="undefined">
        <span className={navLinks}>BOOK FOR YOUR WEDDING</span>
      </Link>
    </Nav>
  );
}

function Logo() {
  return <h1 className={logoStyle}> Wedding Photographs, LLC </h1>;
}

function PhotoCarousel() {
  return (
    <Container className={carouselStyle}>
      <Row>
        <Col>
          <Carousel fluid>
            <Carousel.Item>
              <Image
                className={imagePadding}
                src="/assets/HomepageCarousel/holdingHands.jpg"
                alt="First slide"
                fluid
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Image
                className={imagePadding}
                src="/assets/HomepageCarousel/placeSetting.jpg"
                alt="First slide"
                fluid
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className={imagePadding}
                src="/assets/HomepageCarousel/weddingShoes.jpg"
                alt="First slide"
                fluid
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

function PhotoContainer() {
  return (
    <div>
      <Container className={containerStyle} fluid>
        <Row>
          <Col xs="12" md="6">
            <Image className={imagePadding} src="/assets/wedPhoto4.jpg" fluid />
            <h1>First Caption</h1>
          </Col>
          <Col xs="12" md="6">
            <p>
              Phasellus volutpat lectus convallis, porta turpis at, mattis nibh.
              Donec porta dignissim justo, vel efficitur nisi lacinia ac. Duis
              ut odio pretium, blandit dui at, tristique est. Vestibulum in erat
              elit. Sed ut aliquet ipsum, et rutrum quam. Praesent tincidunt
              pharetra elit quis efficitur. In tempor orci mattis purus euismod
              pellentesque. Ut cursus dolor eu tempor aliquam.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className={containerStyle} fluid>
        <Row>
          <Col xs="12" md="6">
            <Image className={imagePadding} src="/assets/wedPhoto5.jpg" fluid />
            <h1>Second Caption</h1>
          </Col>
          <Col xs="12" md="6">
            <p>
              Phasellus volutpat lectus convallis, porta turpis at, mattis nibh.
              Donec porta dignissim justo, vel efficitur nisi lacinia ac. Duis
              ut odio pretium, blandit dui at, tristique est. Vestibulum in erat
              elit. Sed ut aliquet ipsum, et rutrum quam. Praesent tincidunt
              pharetra elit quis efficitur. In tempor orci mattis purus euismod
              pellentesque. Ut cursus dolor eu tempor aliquam.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className={containerStyle} fluid>
        <Row>
          <Col xs="12" md="6">
            <Image className={imagePadding} src="/assets/wedPhoto7.jpg" fluid />
            <h1>Third Caption</h1>
          </Col>
          <Col xs="12" md="6">
            Phasellus volutpat lectus convallis, porta turpis at, mattis nibh.
            Donec porta dignissim justo, vel efficitur nisi lacinia ac. Duis ut
            odio pretium, blandit dui at, tristique est. Vestibulum in erat
            elit. Sed ut aliquet ipsum, et rutrum quam. Praesent tincidunt
            pharetra elit quis efficitur. In tempor orci mattis purus euismod
            pellentesque. Ut cursus dolor eu tempor aliquam.
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function EmailForm() {
  return (
    <Form className={formStyle}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Sign Up For Our Newsletter & Special Offers!</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

function Footer() {
  return (
    <footer className={footerStyle}>
      <Container>
        <Row>
          <Col>
            {" "}
            Copyrights © Photography Studio 2021 West Coast Wedding
            Photographers
          </Col>
        </Row>
        <Row>
          <Col>
            <Image src="/assets/socialMediaBar/igFav.png" />
            <Image src="/assets/socialMediaBar/ttFav.png" />
            <Image src="/assets/socialMediaBar/liFav.png" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

// 👇️ named exports
export { NavBar, PhotoCarousel, Logo, PhotoContainer, EmailForm, Footer };

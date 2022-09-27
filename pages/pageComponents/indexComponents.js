/**
 Using the export keyword on the same line as the function's definition is the same as exporting the functions as an object after they have been declared.
Boxes.js
function SmallBox() {
  return (
    <div
      style={{
        backgroundColor: 'salmon',
        color: 'white',
        height: '100px',
        width: '100px',
      }}
    >
      Small Box
    </div>
  );
}

const BigBox = () => {
  return (
    <div
      style={{
        padding: '30px',
        backgroundColor: 'lime',
        color: 'white',
        height: '200px',
        width: '200px',
      }}
    >
      Big Box
    </div>
  );
};

// 👇️ named exports
export {SmallBox, BigBox};

Here is how we would import the functions in a file called App.js.

App.js
import {SmallBox, BigBox} from './Boxes';

export default function App() {
  return (
    <div>
      <SmallBox />

      <BigBox />
    </div>
  );
}

index page components:

Navbar, Photo Container of moving images, newsletter form, Foots with social and All Rights reserved


 */

//import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import Head from 'next/head'
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
//import {navStyle, navLinks} from '../../styles/NavBar.module.css';
//import {  Nav } from 'react-bootstrap'
import Link from 'next/link'
import Router from 'next/router'
import { imagePadding, rowStyle, imageBorder, containerStyle, footerStyle, formStyle, navStyle, navLinks } from '../../styles/indexCompStyles.module.css';
import {Image, Button, Form, Carousel, Card, Row, Col, Jumbotron, Container, Nav } from 'react-bootstrap'


function NavBar() {
    return (
      
      <Nav  className={navStyle}>
      
      <Link href='undefined'>
            Home  
    </Link>
    

    <Link href='undefined'>
             <a className={navLinks}>
             About Us </a>  
    </Link>


    <Link href='undefined'>
             <a className={navLinks}> Wedding Photographers</a>  
    </Link>
    
    
    <Link href='undefined'>
             <a className={navLinks}> BOOK FOR YOUR WEDDING</a>  
    </Link>
    
    </Nav>
    
     

    
      );
  }

  function PhotoContainer(){

    return (
     <div>
   
    <Container  className={containerStyle} fluid>

      <Row >
        <Col  xs="12" md="4"><Image className={imagePadding} src="/assets/wedPhoto1.jpg" fluid/></Col>
        <Col xs="12" md="4"><Image className={imagePadding} src="/assets/wedPhoto2.jpg" fluid/></Col>
        <Col xs="12" md="4"><Image   className={imagePadding} src="/assets/wedPhoto3.jpg" fluid/></Col>
      </Row>
        
        <Row>
        <Col xs="12" md="4"><Image className={imagePadding} src="/assets/wedPhoto4.jpg" fluid/></Col>
        <Col xs="12" md="4"><Image className={imagePadding} src="/assets/wedPhoto5.jpg" fluid/> </Col>
        <Col xs="12" md="4"><Image className={imagePadding} src="/assets/wedPhoto6.jpg" fluid/></Col>
        </Row>
      <Row>
        <Col xs="12" md="4"><Image className={imagePadding} src="/assets/wedPhoto7.jpg" fluid/></Col>
        <Col xs="12" md="4"><Image className={imagePadding} src="/assets/wedPhoto8.jpg" fluid/></Col>
        <Col xs="12" md="4"><Image className={imagePadding} src="/assets/wedPhoto9.jpg" fluid/></Col>
      </Row>

      

    </Container>
 
    

    </div>
    )
  }

  function EmailForm(){

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
    )
  }

  function Footer(){

    return (
      <footer className={footerStyle}>
    <Container>
      <Row>
     <Col> Copyrights © Photography Studio 2021 Portland Wedding Photographers</Col>
      </Row>
      <Row>
       <Col> 
      <Image src= "/assets/socialMediaBar/igFav.png" />
      <Image src= "/assets/socialMediaBar/ttFav.png" />
      <Image src= "/assets/socialMediaBar/liFav.png" />
      </Col>
      </Row>
      </Container>
      </footer>
    )
  }


  
  // 👇️ named exports
  export {NavBar, PhotoContainer, EmailForm, Footer};
import React from "react";
import door2 from "../MediaFiles/Main door Pictures/main door1.png";
import door1 from "../MediaFiles/Main door Pictures/main door2.webp";
import door3 from "../MediaFiles/Main door Pictures/main door3.jpeg";
import door4 from "../MediaFiles/Main door Pictures/main door4.png";
import door5 from "../MediaFiles/Main door Pictures/main door5.png";
import door6 from "../MediaFiles/Main door Pictures/main door6.jpg";
import door7 from "../MediaFiles/Main door Pictures/main door7.png";
import door8 from "../MediaFiles/Main door Pictures/main door8.png";
import pvc1 from "../MediaFiles/Pvc doors Pictures/pvc door1.jpg";
import pvc2 from "../MediaFiles/Pvc doors Pictures/pvc door2.jpg";
import pvc3 from "../MediaFiles/Pvc doors Pictures/pvc door3.jpg";
import pvc4 from "../MediaFiles/Pvc doors Pictures/pvc door4.jpeg";
import pvc5 from "../MediaFiles/Pvc doors Pictures/pvc door5.jpg";
import pvc6 from "../MediaFiles/Pvc doors Pictures/pvc doors 6.png";
import blub1 from "../MediaFiles/Blub Pictures/blub1.jpg";
import blub2 from "../MediaFiles/Blub Pictures/blub2.jpg";
import blub3 from "../MediaFiles/Blub Pictures/blub3.jpg";
import blub4 from "../MediaFiles/Blub Pictures/blub4.webp";
import blub5 from "../MediaFiles/Blub Pictures/blub5.webp";
import blub6 from "../MediaFiles/Blub Pictures/blub6.jpg";
import blub7 from "../MediaFiles/Blub Pictures/blub7.webp";
import blub8 from "../MediaFiles/Blub Pictures/blub8.png";
import blub9 from "../MediaFiles/Blub Pictures/blub9.jpg";
import blub10 from "../MediaFiles/Blub Pictures/blub1.jpg";
import switch3 from "../MediaFiles/Switch Pictures/switch1.png";
import switch2 from "../MediaFiles/Switch Pictures/switch2.png";
import switch1 from "../MediaFiles/Switch Pictures/switch3.jpg";
import switch4 from "../MediaFiles/Switch Pictures/switch4.jpg";
import switch5 from "../MediaFiles/Switch Pictures/switch5.webp";
import switch6 from "../MediaFiles/Switch Pictures/switch6.webp";
import switch7 from "../MediaFiles/Switch Pictures/switch7.jpg";
import switch8 from "../MediaFiles/Switch Pictures/switch8.webp";
import wire1 from "../MediaFiles/Wire Pictures/wire1.png";
import wire2 from "../MediaFiles/Wire Pictures/wire2.jpg";
import wire3 from "../MediaFiles/Wire Pictures/wire3.jpg";
import wire4 from "../MediaFiles/Wire Pictures/wire4.webp";
import wire5 from "../MediaFiles/Wire Pictures/wire5.webp";
import wire6 from "../MediaFiles/Wire Pictures/wire6.webp";
import wire7 from "../MediaFiles/Wire Pictures/wire7.webp";
import wire8 from "../MediaFiles/Wire Pictures/wire8.webp";
import wire9 from "../MediaFiles/Wire Pictures/wire9.webp";
import wire10 from "../MediaFiles/Wire Pictures/wire10.webp";
import wire11 from "../MediaFiles/Wire Pictures/wire11.jpg";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";

export const Shop = () => {
  const mainDoors = [door1, door2, door3, door4, door5, door6, door7, door8];
  const pvcDoors = [pvc3, pvc1, pvc2, pvc4, pvc5, pvc6];
  const blubs = [
    blub1,
    blub2,
    blub3,
    blub4,
    blub5,
    blub5,
    blub6,
    blub7,
    blub8,
    blub9,
    blub10,
  ];
  const switches = [
    switch1,
    switch2,
    switch3,
    switch4,
    switch5,
    switch6,
    switch7,
    switch8,
  ];
  const wires = [
    wire1,
    wire2,
    wire3,
    wire4,
    wire5,
    wire6,
    wire7,
    wire8,
    wire9,
    wire10,
    wire11,
  ];

  return (
    <>
      {/* Main doors */}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>MAIN DOORS</Accordion.Header>
          <Accordion.Body>
            <Carousel slide={false}>
              {mainDoors.map((door, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={door}
                    alt="door slide"
                    style={{height:"85vh"}}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <hr />
      {/* Pvc doors */}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>PVC DOORS</Accordion.Header>
          <Accordion.Body>
            <Carousel slide={false}>
              {pvcDoors.map((pvcdoor, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={pvcdoor}
                    alt="door slide"
                    style={{height:"85vh"}}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <hr />
      <h3>ELECTRICAL ITEMS</h3> <hr />
      {/* bulbs */}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>BULBS</Accordion.Header>
          <Accordion.Body>
            <Carousel slide={false}>
              {blubs.map((blub, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={blub}
                    alt="door slide"
                    style={{height:"95vh"}}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <hr />
      {/* switches */}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>SWITCHES</Accordion.Header>
          <Accordion.Body>
            <Carousel slide={false}>
              {switches.map((switchtypes, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={switchtypes}
                    alt="door slide"
                    style={{height:"95vh"}}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <hr />
      {/* wires */}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>BULBS</Accordion.Header>
          <Accordion.Body>
            <Carousel slide={false}>
              {wires.map((wire, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={wire}
                    alt="door slide"
                    style={{height:"95vh"}}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <hr />
    </>
  );
};

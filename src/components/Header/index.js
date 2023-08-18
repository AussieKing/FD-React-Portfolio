//! HEADER 

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import "./index.scss";

function Header() {
  return (
    <>  
      <Container fluid className="bg-dark">
        <Row className="justify-content-center text-center mb-0">
          <Col className="pb-0">
            <h1 className="text-white" style={{ fontSize: "20px" }}>
              <FontAwesomeIcon
                icon={faCode}
                className="fa-code"
                size="lg"
                style={{ color: "wheat" }}
              />
              <Link
                to="/about"
                className="text-white text-decoration-none"
                style={{ margin: "0" }}
              >
                Freddy Dordoni
              </Link>
              <FontAwesomeIcon
                icon={faCode}
                className="fa-code"
                size="lg"
                style={{ color: "wheat" }}
              />
            </h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}
// Export Header
export default Header;
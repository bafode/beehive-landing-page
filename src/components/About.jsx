import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Row, Col, Card, Carousel } from "react-bootstrap";
import { useTranslation } from "react-i18next";


export default function About() {
   const { t } = useTranslation();
    const concept = t("concept", { returnObjects: true });
    return (
      <section className="about-section section" id="about">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div
              className="about-text text-center"
              data-aos="fade"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="section-heading mb-5">
                <h1
                  style={{
                    letterSpacing: "1px",
                    color: "#5e17eb",
                  }}
                >
                  {concept.title}
                </h1>
              </div>

              {/* Affichage adaptatif */}
              <Carousel
                indicators={true}
                interval={null}
                className="d-block d-sm-none custom-carousel"
              >
                {concept.concepts.map((item) => (
                  <Carousel.Item key={item.id}>
                    <ConceptCard item={item} />
                  </Carousel.Item>
                ))}
              </Carousel>

              {/* Version Desktop */}
              <Row className="d-none d-sm-flex justify-content-center">
                {concept.concepts.map((item) => (
                  <Col key={item.id} xs={12} sm={6} md={4} className="mb-4">
                    <ConceptCard item={item} />
                  </Col>
                ))}
              </Row>

              <div className="btn-bar mt-4" style={{ paddingTop: "2rem" }}>
                <ScrollLink
                  to={concept.btnUrl}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={300}
                  className="px-btn btn btn-primary py-2 px-4 rounded-pill text-white"
                  style={{ fontWeight: "bold", fontSize: "1.1rem" }}
                >
                  <span>{concept.btnText}</span>
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

const ConceptCard = ({ item }) => (
  <Card
    className="shadow-lg"
    style={{
      backgroundColor: "#F3F2FF",
      borderRadius: "12px",
      height: "100%",
      border: "1px solid #dfe2e5",
      padding: "1rem",
    }}
  >
    <Card.Body>
      <Card.Title
        className="text-start"
        style={{
          fontSize: "1.8rem",
          fontWeight: "bold",
          color: "#5e17eb",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        }}
      >
        {item.title}
      </Card.Title>

      <hr style={{ borderTop: "3px solid #1976d2" }} />

      <Card.Text
        className="mt-2 text-start"
        style={{
          fontSize: "1.3rem",
          color: "black",
          lineHeight: "1.6",
        }}
      >
        {item.description}
      </Card.Text>
    </Card.Body>
  </Card>
);

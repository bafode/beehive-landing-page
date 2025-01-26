import React from "react";
import { Link as ScrollLink } from "react-scroll";
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
              <h1>{concept.title}</h1>
            </div>

            {/* Mobile: Affichage en carrousel */}
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

            {/* Desktop: Grille de cartes */}
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
    className="shadow-lg card-modern"
    style={{
      backgroundColor: "#F3F2FF",
      borderRadius: "12px",
      height: "100%",
      border: "1px solid #dfe2e5",
      padding: "1rem",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
  >
    <Card.Body>
      <Card.Title
        className="about-card card-heading"
        style={{
          fontWeight: "bold",
          fontSize: "1.5rem",
          color: "#5e17eb",
          textAlign: "center",
        }}
      >
        {item.title}
      </Card.Title>

      <hr style={{ borderTop: "3px solid #5e17eb" }} />

      <Card.Text
        className="mt-2 text-start"
        style={{
          fontSize: "1.1rem",
          color: "black",
          lineHeight: "1.6",
        }}
      >
        {item.description}
      </Card.Text>
    </Card.Body>
  </Card>
);

import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t } = useTranslation();
  const offres = t("offres", { returnObjects: true });
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Détecte les écrans <= 768px

  return (
    <section id="offres" className="py-5">
      <Container>
        {/* Titre */}
        <Row className="text-center mb-5">
          <Col>
            <h1
              style={{
                color: "#5e17eb", 
                fontWeight: "700",
                textTransform: "uppercase",
              }}
            >
              {offres.title}
            </h1>
          </Col>
        </Row>

        {/* Carousel ou Grid en fonction de l'écran */}
        {isMobile ? (
          <Carousel
            indicators={true}
            interval={null}
            className="d-block d-sm-none custom-carousel"
          >
            {offres.plans.map((plan, index) => (
              <Carousel.Item key={index}>
                <Card
                  className="shadow-sm"
                  style={{
                    backgroundColor: plan.backgroundColor,
                    color: plan.textColor === "white" ? "white" : "#000",
                  }}
                >
                  <Card.Body>
                    <h3
                      className={`text-${plan.textColor} text-center mb-4`}
                      style={{ fontWeight: "bold" }}
                    >
                      {plan.title}
                    </h3>
                    <ul className="list-unstyled">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="d-flex align-items-center mb-3">
                          <FaCheck
                            className={`me-2 ${
                              plan.iconColor
                                ? `text-${plan.iconColor}`
                                : "text-success"
                            }`}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                  <Card.Footer className="text-center">
                    <ScrollLink
                      to="contactus"
                      smooth={true}
                      duration={500}
                      className={`btn btn-${plan.buttonStyle} w-100`}
                      style={{ fontWeight: "600", cursor: "pointer" }}
                    >
                      {plan.buttonText}
                    </ScrollLink>
                  </Card.Footer>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <Row className="g-4">
            {offres.plans.map((plan, index) => (
              <Col xs={12} md={6} key={index}>
                <Card
                  className="shadow-sm h-100"
                  style={{
                    backgroundColor: plan.backgroundColor,
                    color: plan.textColor === "white" ? "white" : "#000",
                  }}
                >
                  <Card.Body>
                    <h3
                      className={`text-${plan.textColor} text-center mb-4`}
                      style={{ fontWeight: "bold" }}
                    >
                      {plan.title}
                    </h3>
                    <ul className="list-unstyled">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="d-flex align-items-center mb-3">
                          <FaCheck
                            className={`me-2 ${
                              plan.iconColor
                                ? `text-${plan.iconColor}`
                                : "text-success"
                            }`}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                  <Card.Footer className="text-center">
                    <ScrollLink
                      to="contactus"
                      smooth={true}
                      duration={500}
                      className={`btn btn-${plan.buttonStyle} w-100`}
                      style={{ fontWeight: "600", cursor: "pointer" }}
                    >
                      {plan.buttonText}
                    </ScrollLink>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
};

export default Pricing;

import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Comprendre = () => {
   const { t } = useTranslation();
    const comprendre = t("comprendre", { returnObjects: true });
  return (
    <section section className="about-section section" id="comprendre">
      <Container>
        {/* Titre */}
        <Row className="text-center mb-4">
          <Col>
            <h1
              style={{
                color: "#5e17eb",
                textTransform: "uppercase",
              }}
            >
              {comprendre.title}
            </h1>
          </Col>
        </Row>

        {/* Carte contenant la vidéo */}
        <Row className="justify-content-center">
          <Col md={12} >
            <Card className="shadow-lg rounded-4 border-0">
              <div className="position-relative">
                <video
                  autoPlay
                  loop
                  muted
                  poster="/images/maquette.png"
                  style={{
                    width: "100%",
                    height: "auto", // Maintient les proportions
                    bjectFit: "cover",
                  }}
                  className="w-100 rounded-3"
                >
                  <source src="/videos/comprendre.mp4" type="video/mp4" />
                </video>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Comprendre;

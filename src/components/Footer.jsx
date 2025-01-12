import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContactInfo from "./ContactInfo";
import IconLink from "./IconLink";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const footer = t("footer", { returnObjects: true });
  console.log(footer.platforms.items);
  return (
    <footer style={{ backgroundColor: "#f2f5f5", padding: "2rem 0" }}>
      <Container>
        {/* Logo et Contact */}
        <Row className="mb-4">
          <Col xs={12} md={4} className="text-center text-md-start">
            <img
              src="/images/beehive_logo.svg"
              alt="Beehive Logo"
              style={{ width: "150px", marginBottom: "1rem" }}
            />
            <div className="d-flex align-items-center mb-2">
              <ContactInfo />
            </div>
            {/* Réseaux sociaux */}
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <IconLink
                icon="line-md:instagram"
                to={"https://www.instagram.com/beehive.fr"}
              />
              <IconLink
                icon="entypo-social:linkedin"
                to={"https://www.linkedin.com/company/beehive-fr/"}
              />
              {/* <IconLink icon="ic:baseline-facebook" to={"#"} /> */}
              <IconLink
                icon="ic:baseline-tiktok"
                to={"https://www.tiktok.com/@beehive.fr"}
              />
              {/*{service?.xLink && <IconLink icon="line-md:twitter-x-alt" to={service?.xLink}/>}*/}
              {/* <IconLink icon="line-md:youtube" to={"#"} /> */}
            </div>
          </Col>

          {/* Navigation */}
          <Col xs={12} md={4} className="text-center">
            <h5 className="mb-3" style={{ fontWeight: "700", color: "#000" }}>
              {footer.about.title}
            </h5>
            <ul className="list-unstyled">
              {footer.about.items.map((item, index) => (
                <li key={index.toString()}>
                  <Link
                    to={item.url}
                    style={{ color: "#000", textDecoration: "none" }}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Plateformes */}
          <Col xs={12} md={4} className="text-center text-md-start">
            <h5 className="mb-3" style={{ fontWeight: "700", color: "#000" }}>
              {footer.platforms.title}
            </h5>
            <ul className="list-unstyled">
              {footer.platforms.items.map((item, index) => (
                <li key={index.toString()}>
                  <Link
                    to={item.url}
                    style={{ color: "#000", textDecoration: "none" }}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        {/* Copyright */}
        <Row>
          <Col className="text-center">
            <p style={{ color: "#000", marginBottom: "0" }}>
              &copy; Beehive 2024, tous droits réservés
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

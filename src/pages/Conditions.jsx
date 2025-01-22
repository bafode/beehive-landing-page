import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

const TermsAndConditions = () => {
  const styles = {
    container: {
      marginTop: "50px",
      padding: "20px",
      backgroundColor: "#f9f9fb",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    },
    title: {
      color: "#5e17eb",
      marginBottom: "1rem",
      textAlign: "center",
      fontWeight: "bold",
    },
    sectionTitle: {
      color: "#343a40",
      marginTop: "30px",
      fontWeight: "bold",
      fontSize: "1.8rem",
    },
    subSectionTitle: {
      color: "#555",
      marginTop: "15px",
      fontWeight: "600",
    },
    paragraph: {
      fontSize: "1rem",
      lineHeight: "1.8",
      color: "#555",
      textAlign: "justify",
    },
    listItem: {
      marginBottom: "10px",
      backgroundColor: "#fff",
      border: "1px solid #ddd",
      borderRadius: "6px",
      padding: "10px",
    },
    emailLink: {
      color: "#5e17eb",
      fontWeight: "bold",
    },
    card: {
      marginTop: "30px",
      padding: "15px",
      border: "none",
      borderRadius: "10px",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    },
    highlight: {
      fontWeight: "bold",
      color: "#5e17eb",
    },
  };

  return (
    <Container style={styles.container}>
      <Row>
        <Col>
          <h3
            style={styles.title}
            className="display-6 display-md-4 display-lg-3 text-center"
          >
            Conditions Générales d'Utilisation
          </h3>

          {/* Section 1 */}
          <section>
            <h4 style={styles.sectionTitle}>1. Objet</h4>
            <p style={styles.paragraph}>
              Les présentes Conditions Générales d'Utilisation (ci-après les{" "}
              <span style={styles.highlight}> "CGU"</span>) définissent les
              règles encadrant l’utilisation de l'application{" "}
              <span style={styles.highlight}>Beehive</span>, une plateforme
              sociale dédiée aux étudiants. En accédant aux services, les
              utilisateurs acceptent de respecter pleinement ces CGU.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h4 style={styles.sectionTitle}>2. Description des Services</h4>
            <p style={styles.paragraph}>
              <span style={styles.highlight}>Beehive</span> offre une gamme de
              fonctionnalités conçues pour améliorer l’interaction et la
              communication entre étudiants, notamment :
            </p>
            <ListGroup>
              <ListGroup.Item style={styles.listItem}>
                Création de profils personnalisés ;
              </ListGroup.Item>
              <ListGroup.Item style={styles.listItem}>
                Publication de contenus : textes, images, vidéos ;
              </ListGroup.Item>
              <ListGroup.Item style={styles.listItem}>
                Systèmes d'interaction : likes, commentaires, et partages ;
              </ListGroup.Item>
              <ListGroup.Item style={styles.listItem}>
                Messagerie instantanée sécurisée ;
              </ListGroup.Item>
              <ListGroup.Item style={styles.listItem}>
                Appels audio et vidéo en temps réel ;
              </ListGroup.Item>
              <ListGroup.Item style={styles.listItem}>
                Organisation et participation à des groupes et événements
                thématiques.
              </ListGroup.Item>
            </ListGroup>
          </section>

          {/* Section 3 */}
          <section>
            <h4 style={styles.sectionTitle}>
              3. Utilisation des Fonctionnalités
            </h4>
            <h5 style={styles.subSectionTitle}>
              3.1 Publications et Interactions
            </h5>
            <p style={styles.paragraph}>
              Les utilisateurs peuvent publier et partager du contenu avec leur
              réseau. Les interactions (likes, commentaires) doivent respecter
              les règles de conduite. Tout contenu inapproprié ou offensant peut
              être signalé et supprimé.
            </p>
            <h5 style={styles.subSectionTitle}>3.2 Messagerie</h5>
            <p style={styles.paragraph}>
              La messagerie instantanée permet aux utilisateurs de communiquer
              directement. Les messages doivent rester respectueux et ne pas
              contenir de spam, d'insultes, ou de contenus illicites.
            </p>
            <h5 style={styles.subSectionTitle}>3.3 Appels Audio et Vidéo</h5>
            <p style={styles.paragraph}>
              Les appels audio et vidéo sont disponibles pour favoriser les
              échanges en temps réel. Toute utilisation abusive (harcèlement,
              enregistrements non autorisés) est strictement interdite et peut
              entraîner des sanctions.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h4 style={styles.sectionTitle}>4. Engagements de l'Utilisateur</h4>
            <p style={styles.paragraph}>
              En utilisant les services de{" "}
              <span style={styles.highlight}>Beehive</span>, les utilisateurs
              s’engagent à :
            </p>
            <ListGroup>
              <ListGroup.Item style={styles.listItem}>
                Respecter les lois et règlements en vigueur ;
              </ListGroup.Item>
              <ListGroup.Item style={styles.listItem}>
                Ne pas publier de contenus offensants, nuisibles, ou illégaux ;
              </ListGroup.Item>
              <ListGroup.Item style={styles.listItem}>
                Ne pas utiliser les appels vidéo ou la messagerie à des fins de
                harcèlement ou d'abus ;
              </ListGroup.Item>
              <ListGroup.Item style={styles.listItem}>
                Respecter les droits des autres utilisateurs, notamment en
                matière de vie privée.
              </ListGroup.Item>
            </ListGroup>
          </section>

          {/* Section 5 */}
          <section>
            <h4 style={styles.sectionTitle}>5. Données personnelles</h4>
            <p style={styles.paragraph}>
              Les données des utilisateurs (messages, appels, interactions) sont
              collectées et stockées de manière sécurisée conformément à notre{" "}
              <a href="/privacy-policy" style={styles.emailLink}>
                politique de confidentialité
              </a>
              . Ces données sont utilisées pour offrir une expérience optimale.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h4 style={styles.sectionTitle}>6. Contact et Support</h4>
            <Card style={styles.card}>
              <Card.Body>
                <p style={styles.paragraph}>
                  Pour toute assistance ou question, contactez-nous à :
                </p>
                <p>
                  📧{" "}
                  <a href="mailto:support@beehive.com" style={styles.emailLink}>
                    support@beehive.com
                  </a>
                </p>
              </Card.Body>
            </Card>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default TermsAndConditions;

import React from "react";
import { Container, Row, Col, ListGroup, Card, Button } from "react-bootstrap";

const PrivacyPolicy = () => {
  const styles = {
    container: {
      marginTop: "50px",
      padding: "20px",
      backgroundColor: "#f4f4f9",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    },
    title: {
      color: "#5e17eb",
      marginBottom: "1rem",
      textAlign: "center",
      fontWeight: "bold",
    },
    subtitle: {
      color: "#333",
      marginTop: "20px",
      marginBottom: "10px",
      fontWeight: "600",
    },
    paragraph: {
      fontSize: "1rem",
      lineHeight: "1.6",
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
    link: {
      color: "#5e17eb",
      textDecoration: "none",
      fontWeight: "bold",
    },
    linkHover: {
      textDecoration: "underline",
    },
    email: {
      fontWeight: "bold",
      color: "#5e17eb",
    },
    card: {
      marginTop: "20px",
      padding: "15px",
      border: "none",
      borderRadius: "10px",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
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
            Politique de Confidentialité
          </h3>
          <p style={styles.paragraph}>
            Chez <strong>Beehive</strong>, nous prenons votre vie privée très au
            sérieux. Cette politique décrit en détail la manière dont nous
            collectons, utilisons et protégeons vos informations personnelles.
          </p>

          <h4 style={styles.subtitle}>À propos de Beehive</h4>
          <p style={styles.paragraph}>
            Beehive est une plateforme sociale destinée à connecter des
            utilisateurs autour d'intérêts communs et à leur offrir une
            expérience enrichissante. Nous nous engageons à respecter votre
            confidentialité et à traiter vos données en toute transparence.
          </p>

          <h4 style={styles.subtitle}>Utilisation des Données</h4>
          <p style={styles.paragraph}>
            Les informations que nous collectons via nos services sont utilisées
            pour :
          </p>
          <ListGroup>
            <ListGroup.Item style={styles.listItem}>
              Améliorer votre expérience utilisateur grâce à des contenus
              personnalisés ;
            </ListGroup.Item>
            <ListGroup.Item style={styles.listItem}>
              Gérer vos abonnements et vos préférences ;
            </ListGroup.Item>
            <ListGroup.Item style={styles.listItem}>
              Vous informer sur les nouveautés et les mises à jour de Beehive ;
            </ListGroup.Item>
            <ListGroup.Item style={styles.listItem}>
              Réaliser des analyses statistiques pour mieux comprendre vos
              besoins ;
            </ListGroup.Item>
            <ListGroup.Item style={styles.listItem}>
              Partager des offres et promotions, sous réserve de votre accord.
            </ListGroup.Item>
          </ListGroup>

          <h4 style={styles.subtitle}>Partage des Données</h4>
          <p style={styles.paragraph}>
            Vos données peuvent être partagées avec des partenaires autorisés
            uniquement pour des finalités strictement définies, telles que
            l'amélioration de nos services. Nous veillons à ce que ces tiers
            respectent les réglementations sur la protection des données, y
            compris le RGPD.
          </p>

          <h4 style={styles.subtitle}>Conservation des Données</h4>
          <p style={styles.paragraph}>
            Vos données sont conservées uniquement pendant la durée nécessaire
            aux finalités pour lesquelles elles ont été collectées. Ces durées
            sont précisées dans nos{" "}
            <a
              href="/terms-and-conditions"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Conditions Générales d'Utilisation (CGU)
            </a>
            .
          </p>

          <h4 style={styles.subtitle}>Vos Droits</h4>
          <p style={styles.paragraph}>
            Conformément à la législation en vigueur, vous avez le droit de :
          </p>
          <ListGroup>
            <ListGroup.Item style={styles.listItem}>
              <strong>Accéder</strong> à vos données personnelles ;
            </ListGroup.Item>
            <ListGroup.Item style={styles.listItem}>
              <strong>Modifier</strong> vos informations en cas d’erreurs ;
            </ListGroup.Item>
            <ListGroup.Item style={styles.listItem}>
              <strong>Supprimer</strong> vos données sous certaines conditions ;
            </ListGroup.Item>
            <ListGroup.Item style={styles.listItem}>
              <strong>Limiter</strong> le traitement de vos données ;
            </ListGroup.Item>
            <ListGroup.Item style={styles.listItem}>
              <strong>Porter plainte</strong> auprès de l'autorité compétente en
              cas de violation de vos droits.
            </ListGroup.Item>
          </ListGroup>

          <h4 style={styles.subtitle}>Sécurité des Données</h4>
          <p style={styles.paragraph}>
            Nous mettons en œuvre des mesures de sécurité avancées pour protéger
            vos données contre tout accès non autorisé, altération ou
            destruction.
          </p>

          <h4 style={styles.subtitle}>Nous Contacter</h4>
          <Card style={styles.card}>
            <Card.Body>
              <p style={styles.paragraph}>
                Si vous avez des questions ou souhaitez exercer vos droits,
                n'hésitez pas à nous contacter à :
              </p>
              <p>
                📧{" "}
                <a href="mailto:support@beehive.com" style={styles.email}>
                  support@beehive.com
                </a>
              </p>
            </Card.Body>
          </Card>

          <h4 style={styles.subtitle}>Mises à Jour</h4>
          <p style={styles.paragraph}>
            Cette politique peut être mise à jour périodiquement pour refléter
            les changements dans nos pratiques ou les exigences légales.
            Veuillez la consulter régulièrement.
          </p>

          <Button
            variant="primary"
            href="/"
            style={{ marginTop: "20px", backgroundColor: "#5e17eb" }}
          >
            Retour à l'Accueil
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPolicy;

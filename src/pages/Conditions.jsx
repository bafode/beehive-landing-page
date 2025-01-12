import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container mt-5 py-5">
      <h3 className="mt-5">Conditions Générales d'Utilisation</h3>

      <section className="mt-4">
        <h4>1. Objet</h4>
        <p>
          Les présentes Conditions Générales d'Utilisation (ci-après les "CGU")
          ont pour objet de définir les conditions dans lesquelles les
          utilisateurs (ci-après les "Utilisateurs") accèdent et utilisent les
          services proposés par <strong>Beehive</strong>
          (ci-après les "Services"). En accédant ou en utilisant les Services,
          l’Utilisateur accepte sans réserve les présentes CGU.
        </p>
      </section>

      <section className="mt-4">
        <h4>2. Description des Services</h4>
        <p>
          <strong>Beehive</strong> est une application qui permet aux étudiants
          de créer, partager et interagir au sein d’un réseau social dédié à la
          communauté étudiante. Les fonctionnalités incluent notamment :
        </p>
        <ul>
          <li>Création de profils personnalisés ;</li>
          <li>Publication de contenus (textes, images, vidéos) ;</li>
          <li>
            Interaction avec les autres utilisateurs via des commentaires et
            likes ;
          </li>
          <li>Participation à des événements et groupes d'intérêt.</li>
        </ul>
      </section>

      <section className="mt-4">
        <h4>3. Accès aux Services</h4>
        <h5>3.1 Inscription</h5>
        <p>
          Pour accéder aux Services, l’Utilisateur doit créer un compte en
          fournissant des informations exactes et à jour. L’Utilisateur est
          responsable de la confidentialité de ses identifiants.
        </p>
        <h5>3.2 Conditions d’éligibilité</h5>
        <p>
          Les Services sont réservés aux étudiants âgés de 16 ans ou plus.
          L’Utilisateur s’engage à utiliser les Services uniquement à des fins
          personnelles et non commerciales.
        </p>
      </section>

      <section className="mt-4">
        <h4>4. Engagements de l’Utilisateur</h4>
        <p>En utilisant les Services, l’Utilisateur s’engage à :</p>
        <ul>
          <li>Respecter les lois et règlements en vigueur ;</li>
          <li>
            Ne pas publier de contenus illicites, offensants, ou contraires aux
            bonnes mœurs ;
          </li>
          <li>
            Ne pas utiliser les Services à des fins frauduleuses ou
            malveillantes ;
          </li>
          <li>
            Respecter les droits des autres utilisateurs (notamment en matière
            de vie privée et de propriété intellectuelle).
          </li>
        </ul>
      </section>

      <section className="mt-4">
        <h4>5. Données personnelles</h4>
        <p>
          <strong>Beehive</strong> collecte et traite les données personnelles
          des Utilisateurs conformément à sa politique de confidentialité
         
          . Ces données sont nécessaires pour fournir les Services et améliorer
          l’expérience utilisateur.
        </p>
      </section>

      <section className="mt-4">
        <h4>6. Propriété intellectuelle</h4>
        <p>
          Tous les éléments de l’application (logos, contenus, design, etc.)
          sont la propriété exclusive de <strong>Beehive</strong>. Toute
          reproduction, modification, ou utilisation sans autorisation est
          strictement interdite.
        </p>
        <p>
          L’Utilisateur conserve les droits sur les contenus qu’il publie via
          l’application. Cependant, en publiant, l’Utilisateur accorde à{" "}
          <strong>Beehive</strong> une licence non exclusive pour utiliser,
          reproduire et afficher ces contenus dans le cadre des Services.
        </p>
      </section>

      <section className="mt-4">
        <h4>7. Responsabilités</h4>
        <h5>7.1 Responsabilité de Beehive</h5>
        <p>
          <strong>Beehive</strong> met en œuvre tous les moyens raisonnables
          pour assurer un service de qualité, mais ne peut garantir un
          fonctionnement ininterrompu ou exempt d’erreurs.{" "}
          <strong>Beehive</strong> décline toute responsabilité en cas de :
        </p>
        <ul>
          <li>Perte de données ;</li>
          <li>Utilisation abusive des Services par des tiers ;</li>
          <li>Dysfonctionnements techniques indépendants de sa volonté.</li>
        </ul>
        <h5>7.2 Responsabilité de l’Utilisateur</h5>
        <p>
          L’Utilisateur est seul responsable des contenus qu’il publie et des
          conséquences de son utilisation des Services.
        </p>
      </section>

      <section className="mt-4">
        <h4>8. Modification des CGU</h4>
        <p>
          <strong>Beehive</strong> se réserve le droit de modifier les présentes
          CGU à tout moment. Les modifications entreront en vigueur dès leur
          publication sur l’application. L’Utilisateur sera informé des
          changements et devra accepter les nouvelles conditions pour continuer
          à utiliser les Services.
        </p>
      </section>

      <section className="mt-4">
        <h4>9. Résiliation</h4>
        <p>
          <strong>Beehive</strong> peut suspendre ou résilier le compte d’un
          Utilisateur en cas de non-respect des CGU ou d’utilisation abusive des
          Services. L’Utilisateur peut également supprimer son compte à tout
          moment via les paramètres de l’application.
        </p>
      </section>

      <section className="mt-4">
        <h4>10. Contact</h4>
        <p>
          Pour toute question ou réclamation concernant les présentes CGU,
          l’Utilisateur peut contacter <strong>Beehive</strong> à l’adresse
          suivante : 📧{" "}
          <a href="mailto:support@beehive.com" style={{ color: "#5e17eb" }}>
            support@beehive.com
          </a>
        </p>
      </section>

      <section className="mt-4">
        <h4>11. Loi applicable et juridiction compétente</h4>
        <p>
          Les présentes CGU sont régies par la loi française. En cas de litige,
          et après échec de toute tentative de résolution amiable, les tribunaux
          compétents seront ceux du ressort de Paris.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;

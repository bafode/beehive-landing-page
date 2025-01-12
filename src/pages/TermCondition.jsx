import React from "react";

const TermCondition = () => {
  return (
    <div className="container mt-5 py-5">
      <h3 className="mt-5">Conditions Générales d'Utilisation</h3>
      <p>
        Les informations recueillies via ce formulaire sont collectées et
        traitées par <strong>Beehive</strong> afin de :
      </p>
      <ul>
        <li>Vous offrir une expérience personnalisée ;</li>
        <li>Gérer vos demandes et votre abonnement ;</li>
        <li>
          Réaliser des analyses statistiques pour améliorer nos services ;
        </li>
        <li>
          Vous tenir informé(e) des actualités, services, et offres proposées
          par <strong>Beehive</strong> ;
        </li>
        <li>
          Sous réserve de vos choix, partager des offres adaptées de nos
          partenaires.
        </li>
      </ul>
      <p>
        Vos données sont destinées exclusivement à <strong>Beehive</strong>,
        ainsi qu'à ses prestataires ou partenaires autorisés, pouvant être
        situés dans ou hors de l’Union européenne. Toutes les données sont
        traitées conformément aux normes de protection des données en vigueur,
        en particulier le{" "}
        <strong>Règlement Général sur la Protection des Données (RGPD)</strong>.
      </p>
      <h4>Conservation des données</h4>
      <p>
        Vos données seront conservées uniquement pendant la durée strictement
        nécessaire aux finalités pour lesquelles elles ont été collectées. Ces
        durées sont spécifiées dans nos{" "}
        <a
          href="/conditions"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#5e17eb" }}
        >
          Conditions Générales d'Utilisation
        </a>
        .
      </p>
      <h4>Vos droits</h4>
      <p>
        Conformément à la réglementation applicable, vous disposez des droits
        suivants sur vos données personnelles :
      </p>
      <ul>
        <li>
          <strong>Droit d’accès</strong> : Obtenir des informations sur les
          données collectées et leur traitement.
        </li>
        <li>
          <strong>Droit de rectification</strong> : Corriger des données
          incorrectes ou incomplètes.
        </li>
        <li>
          <strong>Droit d’effacement</strong> : Demander la suppression de vos
          données, sous certaines conditions.
        </li>
        <li>
          <strong>Droit de limitation</strong> : Restreindre temporairement le
          traitement de vos données.
        </li>
        <li>
          <strong>Droit d’opposition</strong> : Refuser certains traitements,
          notamment à des fins de prospection commerciale.
        </li>
        <li>
          <strong>Droit à la portabilité</strong> : Recevoir vos données dans un
          format structuré, couramment utilisé et lisible par machine.
        </li>
        <li>
          <strong>Droit concernant le sort des données après décès</strong> :
          Définir des directives sur la gestion de vos données personnelles
          post-mortem.
        </li>
      </ul>
      <p>
        Pour exercer vos droits ou obtenir des informations complémentaires,
        vous pouvez nous contacter à l’adresse suivante :
      </p>
      <p>
        📧{" "}
        <a href="mailto:support@beehive.com" style={{ color: "#5e17eb" }}>
          support@beehive.com
        </a>
      </p>
      <p>
        En utilisant nos services, vous acceptez le traitement de vos données
        tel que décrit ci-dessus. Nous nous engageons à protéger votre vie
        privée et à garantir la sécurité de vos informations personnelles.
      </p>
    </div>
  );
};

export default TermCondition;

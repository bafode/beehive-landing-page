import React from "react";

export default function BeehiveComingSoon() {
  return (
    <div className="coming-soon">
      <div
        className="coming-soon-content"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="100"
        style={{
          padding: "2rem",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#1976d2",
            fontSize: "2rem",
            fontWeight: "700",
          }}
        >
          Beehive
        </h1>
        <p style={{ fontSize: "1.25rem", color: "#555" }}>
          Bientôt disponible sur
        </p>
      </div>
    </div>
  );
}

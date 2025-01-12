import React from "react";
import { useTranslation } from "react-i18next";

export default function ContactInfo() {
  const { t } = useTranslation();
  const footer = t("footer", { returnObjects: true });
  return (
    <div className="contact-info">
      <div
        className="contact-info-in"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="100"
      >
        <label>{footer.email.title}:</label>
        <a href={`mailto:${footer.email.value}`} style={{ color: "#5e17eb" }}>
          {" "}
          {footer.email.value}
        </a>
      </div>

      <div
        className="contact-info-in"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="100"
      >
        <label>{footer.phone.title}:</label>
        <a href={`tel:${footer.phone.value}`} style={{ color: "#5e17eb" }}>
          {" "}
          {footer.phone.value}
        </a>
      </div>
    </div>
  );
}

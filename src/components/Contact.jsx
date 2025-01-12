import React from 'react';
import { useTranslation } from "react-i18next";
import ContactForm from './ContactForm';
import HeroSlider from './HeroSlider';

export default function Contact() {
  const { t } = useTranslation();
  const contact = t("contact", { returnObjects: true });



  return (
    <section id="contactus" className="section contactus-section">
      <div className="container">
        <div className="contactus-box rounded oveflow-hidden gray-bg">
          <div className="row g-0 p-4 p-lg-5">
            <div className="col-lg-4 pe-md-5">
              <div className="d-none d-lg-block mb-5">
                <img src={contact.imageUrl} alt="Beehive logo" /> 
              </div>
            </div>
            <div className="col-lg-8">
              <div
                className="contactus-title"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <h5>{contact.sectionHeading.title}</h5>
                <p className="m-0">
                  {contact.sectionHeading.subTitle1} <br />{" "}
                  {contact.sectionHeading.subTitle2}
                </p>
              </div>
            </div>
          </div>
          <div className="row g-0 contactus-form p-4 p-lg-5 flex-row-reverse">
            <div className="col-lg-6 pe-md-5">
              <div className="contact-form d-none d-lg-block mb-5">
                <HeroSlider />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
import HeroSlider from "./HeroSlider";
import { useTranslation } from "react-i18next";


export default function Hero() {
  const { t } = useTranslation();
  const hero = t("hero", { returnObjects: true });


  const textAnim1 = hero.textAnim1;
  const textAnim2 = hero.textAnim2;
  const heading = hero.heading;
  const description = hero.description;
  const btnText = hero.btnText;
  const btnUrl= hero.btnUrl;

  return (
    <section
      className="section home-section"
      id="home"
      data-scroll-index={0}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="card"
        style={{
          backgroundColor: "#5e17eb",
          borderRadius: "16px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          width: "100%", // Take full width
          maxWidth: "1200px", // Limit the max width
        }}
      >
        <div className="container" style={{ padding: "24px" }}>
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="hs-text-box">
                <h1>{heading}</h1>
                <h3 style={{ minHeight: 120 }}>
                  <TypeAnimation
                    key={textAnim1 + textAnim2}
                    sequence={[textAnim1, 1500, textAnim2, 1500]}
                    speed={50}
                    cursor={true}
                    repeat={Infinity}
                  />
                </h3>
                <h4 >
                  <div dangerouslySetInnerHTML={{ __html: description }} />
                </h4>
                <div className="btn-bar d-flex align-items-sm-center flex-column flex-sm-row">
                  <ScrollLink
                    to={btnUrl}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="px-btn"
                    style={{ backgroundColor: "#ffaf35" }}
                  >
                    <span>{btnText}</span>
                  </ScrollLink>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <HeroSlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import * as constants from "../constants";
import { useTranslation } from "react-i18next";
import { Button, Dropdown } from "react-bootstrap";

const LanguageDropdown = () => {
  const { i18n } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    const langKey = localStorage.getItem("langKey");
    const language = constants.languages.find((item) => item.key === langKey);
    if (!language?.key) {
      return {
        title: "Français",
        key: "fr",
        icon: "/images/french.png",
      };
    }
    return language;
  });

  const handleLanguageChange = async (lang) => {
    await i18n.changeLanguage(lang.key);
    localStorage.setItem("langKey", lang.key);
    setSelectedLanguage(lang);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle
        as={Button}
        variant="outline-primary"
        size="sm"
        style={{
          fontSize: "14px",
          padding: "5px 12px",
          height: "35px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          borderRadius: "20px",
          transition: "all 0.3s ease",
        }}
        className="d-flex align-items-center"
      >
        <img
          src={selectedLanguage.icon}
          alt={`${selectedLanguage.title} Flag`}
          style={{ width: "20px" }}
        />
        <span className="d-none d-md-inline">
          {selectedLanguage.key.toUpperCase()}
        </span>
      </Dropdown.Toggle>

      <Dropdown.Menu
        style={{
          minWidth: "200px",
          padding: "5px 0",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        {constants.languages.map((lang) => (
          <Dropdown.Item
            key={lang.key}
            onClick={() => handleLanguageChange(lang)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 15px",
              fontSize: "14px",
              transition: "background-color 0.2s ease",
            }}
            className="dropdown-item-hover"
          >
            <img
              src={lang.icon}
              alt={`${lang.title} Flag`}
              style={{ width: "20px" }}
            />
            <span className="d-sm-inline">{lang.title}</span>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageDropdown;

import React, { useState } from 'react';
import * as constants from "../constants";
import { useTranslation } from "react-i18next";
import { Button, Dropdown } from 'react-bootstrap';

const LanguageDropdown= () => {
    const { i18n } = useTranslation();

    const [selectedLanguage, setSelectedLanguage] = useState(() => {
        const langKey = localStorage.getItem("langKey");
        const language = constants.languages.find(item => item.key === langKey);
        if (!language?.key) {
            return {
                title: 'Français',
                key: "fr",
                icon: "/images/french.png"
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
                size="sm"  // Réduit la taille du bouton
                style={{
                    fontSize: '14px', 
                    padding: '5px 10px',  // Ajuste les espacements internes pour réduire la taille
                    height: '30px'  // Réduit la hauteur du bouton
                }}
            >
                <img
                    src={selectedLanguage.icon}
                    alt={`${selectedLanguage.title} Flag`}
                    style={{ width: '18px', marginRight: '6px' }}  
                />
                {selectedLanguage.key}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {constants.languages.map(lang => (
                    <Dropdown.Item
                        key={lang.key}
                        onClick={() => handleLanguageChange(lang)}
                        style={{ display: 'flex', alignItems: 'center' }}
                    >
                        <img
                            src={lang.icon}
                            alt={`${lang.title} Flag`}
                            className="flag-icon"
                            style={{ width: '20px', marginRight: '8px' }}
                        />
                        {lang.title}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default LanguageDropdown;

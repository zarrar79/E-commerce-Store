import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
    const [language, setLanguage] = useState("en");
    const [translations, setTranslations] = useState({});

    useEffect(() =>{
        fetchTranslations(language);
    }, [language]);

    const fetchTranslations = async (lang) => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/translations/${lang}`);
            setTranslations(response.data.translations);
        } catch (error) {
            console.error("Error fetching translations:", error);
        }
    };

    return (
        <TranslationContext.Provider value={{ translations, setLanguage }}>
            {children}
        </TranslationContext.Provider>
    );
};

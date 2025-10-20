import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const activeLang = i18n.language;

  return (
    <div className="flex gap-3 items-center">
      <button
        onClick={() => changeLanguage("es")}
        className={`text-2xl transition-opacity ${activeLang === "es" ? "opacity-100" : "opacity-50 hover:opacity-100"}`}
      >
        🇲🇽
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className={`text-2xl transition-opacity ${activeLang === "en" ? "opacity-100" : "opacity-50 hover:opacity-100"}`}
      >
        🇺🇸
      </button>
    </div>
  );
}

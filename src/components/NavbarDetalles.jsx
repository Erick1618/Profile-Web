import React from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

export function NavbarDetalles() {
  const navigate = useNavigate()
  const { t } = useTranslation("web");
    
      // Opción 1: si quieres mapear el array completo:
    const navbar = t("web.navbar", { returnObjects: true }) || [];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b1117]/60 backdrop-blur-sm border-b border-[rgba(255,255,255,0.02)]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
         <LanguageSwitcher />
        <button
          onClick={() => navigate("/CV")}
          className="flex items-center gap-2 bg-[#15345a] hover:bg-[#1f4f7f] text-white px-4 py-2 rounded-md"
        >
          <ArrowLeft size={18} />
          {navbar.btnstart}
        </button>
      </div>
    </nav>
  )
}

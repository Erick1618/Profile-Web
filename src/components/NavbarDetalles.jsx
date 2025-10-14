import React from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

export function NavbarDetalles() {
  const navigate = useNavigate()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b1117]/60 backdrop-blur-sm border-b border-[rgba(255,255,255,0.02)]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-white font-semibold text-lg">Detalles del Proyecto</div>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 bg-[#15345a] hover:bg-[#1f4f7f] text-white px-4 py-2 rounded-md"
        >
          <ArrowLeft size={18} />
          Volver al inicio
        </button>
      </div>
    </nav>
  )
}

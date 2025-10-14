import React from 'react'
import { RECOMMENDATIONS } from '../data/recommendations'


export function PDFViewer({ pdfUrl }) {
  return (
    <div
      className="w-full max-w-4xl mx-auto my-8 p-4"
      style={{
        height: "80vh",
        borderRadius: "5px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        backgroundColor: "#0D1117",
      }}
    >
      <iframe
        src={pdfUrl}
        title="PDF Viewer"
        width="100%"
        height="100%"
        style={{
          border: "none",
          borderRadius: "5px",
        }}
      ></iframe>
    </div>
  );
}



export default function Recommendations() {
  
  return (
   
    <section id="recommendations" className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Cartas y Recomendaciones</h2>
      <div className="space-y-4">
        
        {RECOMMENDATIONS.map((r, i) => (
        
          <blockquote key={i} className="p-4 rounded-md bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)] backdrop-blur-sm shadow-lg shadow-blue-500/10">
            <PDFViewer pdfUrl={r.path} />
            <footer className="mt-2 text-md text-gray-200">— {r.author}, {r.role}</footer>
          </blockquote>
        ))}

      
      </div>
    </section>
  )
}

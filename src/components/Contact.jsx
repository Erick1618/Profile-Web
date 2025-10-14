import React, { useState } from 'react'
import { trackContactFormSubmit } from "../analytics/gaEvents";

import { useTranslation } from "react-i18next";

// This uses EmailJS (client-side). Replace SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY with your EmailJS values.
// See https://www.emailjs.com/docs/sdk/installation/ for setup.
export default function Contact() {
      const { t } = useTranslation("web");
          const web = t("web.sections.contact", { returnObjects: true }) || [];

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const handleSend = async () => {
    setStatus('Enviando...')
    try {
      // Minimal EmailJS request using fetch (no SDK). Replace below placeholders.
      const SERVICE_ID = 'YOUR_SERVICE_ID'
      const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
      const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

      const payload = {
        
          from_name: name,
          from_email: email,
          message: message
        
      }

      const res = await fetch('https://olacheadev.com/CV/email.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
        body: JSON.stringify(payload)
      })

      if (res.ok) {
        setStatus('Mensaje enviado. Gracias!')
        setName(''); setEmail(''); setMessage('')
      } else {
        const text = await res.text()
        setStatus('Error enviando: ' + text)
      }
    } catch (err) {
      setStatus('Error: ' + err.message)
    }
  }

  return (
    <section id="contact" className="mt-12 mb-12">
      <h2 className="text-2xl font-bold mb-6">{web.title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)] backdrop-blur-sm shadow-lg shadow-blue-500/20">
          <form onSubmit={(e) => {
            e.preventDefault();
            trackContactFormSubmit();
            handleSend();
          }} >
            <input value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-transparent  border-[rgba(255,255,255,0.03)] px-3 py-3 rounded-md shadow-sm shadow-blue-500/10"  placeholder={web.name} required/>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-transparent border border-[rgba(255,255,255,0.03)] px-3 py-3 rounded-md shadow-sm shadow-blue-500/10" placeholder={web.email} required />
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full bg-transparent border border-[rgba(255,255,255,0.03)] px-3 py-4 rounded-md shadow-sm shadow-blue-500/10" rows={5} placeholder={web.message} required />
            <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 rounded-md">{web.send}</button>
          </form>
          

          <div className="mt-4 text-sm text-gray-300">{status}</div>
        </div>

       
      </div>
    </section>
  )
}

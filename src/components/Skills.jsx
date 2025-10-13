import React from 'react'
import { SKILLS } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Habilidades</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)]">
          <h3 className="font-semibold mb-4">Hard Skills</h3>
          
            {SKILLS.hard.map((s) => (
              <div key={s.name}>
                <div className="flex items-center justify-between text-sm mb-3">
                  <div>
                    
                    <li className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-sky-500" />
                          {s.name}
                        </li>
                  </div>
                </div>
                
              </div>
            ))}
          
        </div>

        <div className="p-6 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)]">
          <h3 className="font-semibold mb-4">Soft Skills</h3>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-gray-200">
            {SKILLS.soft.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

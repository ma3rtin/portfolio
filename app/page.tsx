'use client'
import { Github, Linkedin, Mail, MapPin, ToolCase} from 'lucide-react'

export default function Portfolio() {
  const projects = [
    {
      name: 'Oniria',
      role: 'Final university project',
      desc: 'Web app where users submit dreams to get AI interpretations and interact with a customizable 3D room.',
    },
    {
      name: 'Gestión de Stock',
      role: 'Freelance project',
      desc: 'Private multi-branch inventory and sales management system for a real avocado business.',
    },
    {
      name: 'Illustrate',
      role: 'API experiment',
      desc: 'Simulated art-themed API for generating and validating painting data via mockapi.io.',
    },
  ]

  return (
    <div className="font-sans text-[#111]">
      {/* 1️⃣ ABOUT SECTION */}
      <section className="min-h-screen bg-white flex flex-col justify-center px-10 py-20 border-b-8 border-red-600">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl md:text-7xl font-extrabold leading-none tracking-tight">
              MARTÍN<br />
              <span className="text-red-600">MUTUVERRÍA</span>
            </h1>
            <h2 className="mt-4 text-2xl font-semibold uppercase text-[#333]">Desarrollador fullstack</h2>
            <p className="mt-6 text-lg text-[#444]">
              Construyo sistemas y experiencias digitales desde una perspectiva técnica y expresiva.  
              Me especializo en desarrollo backend y arquitectura de servicios.
            </p>
          </div>

          <div>
            <div className="space-y-2 text-lg">
              <p className="flex items-center gap-2"><MapPin size={16} color='red' /> Buenos Aires, Argentina</p>
              <p className="flex items-center gap-2"><ToolCase size={16} color='red' /> Stack principal</p>
              <ul className="ml-4">
                <li>Java · Node.js · C# · PHP</li>
                <li>React · Angular · Next.js · NestJS</li>
                <li>PostgreSQL · MySQL · MongoDB</li>
                <li>TypeScript · JavaScript · Git</li>
              </ul>
            </div>

            <div className="flex gap-6 mt-8 text-red-600">
              <a href="#"><Github size={26} /></a>
              <a href="#"><Linkedin size={26} /></a>
              <a href="mailto:tu@email.com"><Mail size={26} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ PROJECTS SECTION */}
      <section className="bg-red-600 text-white py-32 px-10 border-b-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-extrabold uppercase mb-16 tracking-tight">Projects</h2>
          <div className="space-y-20">
            {projects.map((p) => (
              <div key={p.name} className="border-t border-white/30 pt-8">
                <h3 className="text-4xl font-bold uppercase">{p.name}</h3>
                <p className="text-lg font-semibold opacity-90">{p.role}</p>
                <p className="mt-3 text-lg max-w-3xl opacity-90">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ CONTACT SECTION */}
      <section className="bg-white text-center py-40 px-10">
        <h2 className="text-5xl font-extrabold text-red-600 uppercase mb-10">Get in touch</h2>
        <p className="text-xl text-[#333] mb-8">
          Siempre abierto a colaborar en proyectos creativos o técnicos.
        </p>
        <a
          href="mailto:tu@email.com"
          className="text-3xl font-bold text-red-600 border-4 border-red-600 px-8 py-4 inline-block hover:bg-red-600 hover:text-white transition-all uppercase"
        >
          tu@email.com
        </a>
      </section>
    </div>
  )
}

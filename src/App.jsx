import React from "react";
import HeroBackgroundExtreme from "./HeroBackgroundExtreme.jsx";
import { Link } from "react-router-dom";

function SectionWrapper({ id, title, children }) {
  return (
    <section
      id={id}
      className="w-full max-w-5xl mx-auto px-6 py-16 scroll-mt-20"
    >
      <h2 className="text-2xl font-semibold text-acento mb-6">{title}</h2>
      <div className="text-gray-300 text-base leading-relaxed">{children}</div>
    </section>
  );
}

function ProjectCard({ title, desc, stack, linkCode, linkDemo }) {
  const isInternal = typeof linkCode === "string" && linkCode.startsWith("/");
  return (
    <div className="bg-card/80 border border-white/5 rounded-2xl p-5 shadow-xl flex flex-col gap-3 hover:-translate-y-1 hover:shadow-2xl transition">
      <h3 className="text-white font-semibold text-lg">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
      <p className="text-gray-500 text-xs">
        <span className="font-medium text-gray-300">Stack:</span> {stack}
      </p>
      <div className="flex gap-3 flex-wrap text-sm">
        {linkCode &&
          (isInternal ? (
            <Link
              to={linkCode}
              className="bg-acento text-black font-medium px-3 py-1 rounded-lg shadow-[0_10px_30px_rgba(56,189,248,0.7)] hover:brightness-110 hover:shadow-[0_15px_40px_rgba(56,189,248,0.9)] transition"
            >
              Ver proyecto
            </Link>
          ) : (
            <a
              href={linkCode}
              target="_blank"
              rel="noreferrer"
              className="bg-acento/20 text-acento px-3 py-1 rounded-lg border border-acento/40 hover:bg-acento/30"
            >
              Ver código
            </a>
          ))}

        {linkDemo && (
          <a
            href={linkDemo}
            target="_blank"
            rel="noreferrer"
            className="bg-white/10 text-white px-3 py-1 rounded-lg border border-white/20 hover:bg-white/20"
          >
            Ver demo
          </a>
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* NAV / HEADER */}
      <header className="fixed top-0 left-0 right-0 bg-fondo/80 backdrop-blur border-b border-white/10 z-50">
        <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4 text-sm text-gray-300">
          <a
            href="#top"
            className="font-semibold text-white hover:text-acento transition-colors"
          >
            David Tejero <span className="text-acento">/ Dev Web</span>
          </a>

          <div className="flex gap-4">
            <a className="hover:text-acento" href="#proyectos">Proyectos</a>
            <a className="hover:text-acento" href="#stack">Stack</a>
            <a className="hover:text-acento" href="#sobre-mi">Sobre mí</a>
            <a className="hover:text-acento" href="#contacto">Contacto</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="top"
        className="relative min-h-screen flex items-center px-6 pt-28 pb-24 overflow-hidden bg-[#000814] text-white"
      >
        {/* Fondo futurista extremo */}
        <HeroBackgroundExtreme />

        {/* Contenido principal */}
        <div className="relative z-20 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white drop-shadow-[0_0_20px_rgba(56,189,248,0.8)]">
              Soy David Tejero,
              <br />
              <span className="text-acento drop-shadow-[0_0_25px_rgba(56,189,248,1)]
                               [text-shadow:0_0_10px_rgba(56,189,248,0.8),0_0_40px_rgba(168,85,247,0.5)]">
                Desarrollador Web Full Stack Junior
              </span>
            </h1>

            <p className="text-gray-300 text-base leading-relaxed max-w-[50ch]">
              Dise&ntilde;o y construyo aplicaciones web reales con React, Node.js y PostgreSQL:
              sistemas de suscripci&oacute;n, paneles de administraci&oacute;n, subida de
              contenido privado y roles seguros. Listo para incorporarme ya.
            </p>

            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href="/CV_DavidTejero.pdf"
                download="CV_David_Tejero.pdf"
                className="bg-acento text-black font-medium px-4 py-2 rounded-xl
                           hover:brightness-110
                           shadow-[0_20px_60px_rgba(56,189,248,0.9),0_0_60px_rgba(168,85,247,0.5)]"
              >
                Descargar CV
              </a>

              <a
                href="#contacto"
                className="bg-card text-white font-medium px-4 py-2 rounded-xl border border-white/10 hover:bg-card/70
                           shadow-[0_20px_80px_rgba(0,0,0,0.8),0_0_40px_rgba(0,0,0,0.8)]"
              >
                Hablemos
              </a>
            </div>
          </div>

          <div className="relative z-20 bg-card/30 border border-white/10 rounded-2xl p-6 shadow-xl text-sm text-gray-300 backdrop-blur-[3px]
                          ring-1 ring-acento/30
                          shadow-[0_60px_200px_rgba(56,189,248,0.4),0_0_120px_rgba(168,85,247,0.4)]">
            <p className="text-white font-semibold mb-2">Ahora mismo busco:</p>
            <ul className="space-y-2 list-disc list-inside text-gray-200">
              <li>Puesto junior (frontend React o full stack)</li>
              <li>Entornos donde seguir buenas prácticas y aprender rápido</li>
              <li>Trabajo en Zaragoza o remoto</li>
            </ul>
            <p className="text-xs text-gray-500 mt-4">
              Disponible incorporación inmediata.
            </p>
          </div>
        </div>

        {/* Vignette negra alrededor para que el foco vaya al centro */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_40%,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_40%,rgba(0,0,0,0.6)_70%,rgba(0,0,0,0.95)_100%)]" />
      </section>

      {/* PROYECTOS */}
      <SectionWrapper id="proyectos" title="Proyectos destacados">
        <div className="grid gap-6 md:grid-cols-2">
          <ProjectCard
            title="NovaClub – Plataforma para academias de baile"
            desc="Aplicación con roles (admin/profesor/alumno), ranking con puntos,
            calendario de clases y contenido privado para suscriptores. Incluye
            subida de imágenes a AWS y pagos por suscripción."
            stack="React · Node.js (Express) · PostgreSQL · AWS (RDS / S3 / CloudFront)"
            linkCode="https://github.com/tgr4k8/ProyectoNova"
            linkDemo="https://d3s4eab53kjee6.cloudfront.net/"
          />

          <ProjectCard
            title="Panel de administración / Dashboard"
            desc="Panel interno tipo SAP para gestionar usuarios, planes activos,
            y actividad reciente. Filtros dinámicos, tarjetas de estado y
            endpoints REST protegidos con JWT."
            stack="React · TailwindCSS · Express API · Auth JWT"
            linkCode="/SAP-NovaClub"
            linkDemo={null}
          />

          <ProjectCard
            title="Landing responsive para captación"
            desc="Landing page totalmente responsive con métricas de prueba social
            y CTA directo a registro. Optimizada para carga rápida y nota alta
            en Lighthouse."
            stack="React · Vite · TailwindCSS"
            linkCode="https://github.com/turepo/landing"
            linkDemo="https://tudemo.web.app"
          />
        </div>
      </SectionWrapper>

      {/* STACK */}
      <SectionWrapper id="stack" title="Tecnologías que uso">
        <div className="flex flex-wrap gap-3 text-sm">
          {[
            "React",
            "JavaScript (ES6+)",
            "HTML5 / CSS3 / Tailwind",
            "Node.js · Express",
            "REST APIs",
            "PostgreSQL / MySQL",
            "JWT Auth",
            "AWS (RDS, S3, CloudFront)",
            "Git / GitHub",
            "Docker básico",
          ].map((tech) => (
            <span
              key={tech}
              className="bg-card/60 text-gray-200 border border-white/10 rounded-xl px-3 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      </SectionWrapper>

      {/* SOBRE MÍ */}
      <SectionWrapper id="sobre-mi" title="Sobre mí">
        <p className="mb-4">
          Me gusta construir cosas útiles, no solo ejercicios de clase.
          Disfruto hablar con la gente que va a usar la herramienta, entender
          qué necesita de verdad y convertirlo en pantallas claras y
          funcionales. También me gusta dejar todo documentado para que el
          siguiente dev pueda continuar sin volverse loco.
        </p>
        <p>
          Busco incorporarme como desarrollador junior en un equipo donde pueda
          aportar desde el primer día y seguir creciendo (frontend con React o
          full stack con Node).
        </p>
      </SectionWrapper>

      {/* CONTACTO */}
      <SectionWrapper id="contacto" title="Contacto">
        <div className="space-y-4 text-gray-300">
          <p>
            ¿Quieres que hablemos? Estoy disponible para entrevistas técnicas,
            pruebas de código o colaboración en proyectos.
          </p>
          <div className="space-y-2 text-sm">
            <p>
              <span className="text-gray-500">Email:</span>{" "}
              <a
                className="text-acento hover:underline"
                href="mailto:tuemail@loquesea.com"
              >
                tuemail@loquesea.com
              </a>
            </p>
            <p>
              <span className="text-gray-500">LinkedIn:</span>{" "}
              <a
                className="text-acento hover:underline"
                href="https://www.linkedin.com/in/tu-user"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/tu-user
              </a>
            </p>
            <p>
              <span className="text-gray-500">GitHub:</span>{" "}
              <a
                className="text-acento hover:underline"
                href="https://github.com/tu-user"
                target="_blank"
                rel="noreferrer"
              >
                github.com/tu-user
              </a>
            </p>
          </div>
        </div>
      </SectionWrapper>

      <footer className="text-center text-xs text-gray-600 py-10">
        © {new Date().getFullYear()} David Tejero — Portfolio
      </footer>
    </main>
  );
}

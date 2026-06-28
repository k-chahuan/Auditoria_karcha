import ReactMarkdown from 'react-markdown'
import './App.css'
import resumen from '../docs_karcha/01_resumen_karcha.md?raw'
import sqli from '../docs_karcha/02_sqli_karcha.md?raw'
import xss from '../docs_karcha/03_xss_karcha.md?raw'
import comandos from '../docs_karcha/04_comandos_karcha.md?raw'
import activos from '../docs_karcha/05_activos_karcha.md?raw'
import matriz from '../docs_karcha/06_matriz_karcha.md?raw'
import controles from '../docs_karcha/07_controles_karcha.md?raw'
import recuperacion from '../docs_karcha/08_recuperacion_karcha.md?raw'
import prompts from '../docs_karcha/09_prompts_karcha.md?raw'

function normalizeMarkdown(markdown) {
  return markdown.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, src) => {
    if (/^(https?:)?\/\//i.test(src) || src.startsWith('/')) {
      return match
    }

    const normalizedSrc = src.startsWith('img_karcha/') ? `/img_karcha/${src.replace(/^img_karcha\//, '')}` : `/${src}`
    return `![${alt}](${normalizedSrc})`
  })
}

function getTitle(markdown) {
  const match = markdown.match(/^#\s+(.+)$/m)
  return match ? match[1] : 'Documento técnico'
}

function MarkdownCard({ title, content }) {
  return (
    <article className="card">
      <h2>{title}</h2>
      <div className="markdown-body">
        <ReactMarkdown>{normalizeMarkdown(content)}</ReactMarkdown>
      </div>
    </article>
  )
}

function App() {
  const sections = [
    { title: getTitle(resumen), content: resumen },
    { title: getTitle(sqli), content: sqli },
    { title: getTitle(xss), content: xss },
    { title: getTitle(comandos), content: comandos },
    { title: getTitle(activos), content: activos },
    { title: getTitle(matriz), content: matriz },
    { title: getTitle(controles), content: controles },
    { title: getTitle(recuperacion), content: recuperacion },
    { title: getTitle(prompts), content: prompts },
  ]

  return (
    <div className="app-shell">
      <header className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Auditoría de Seguridad Web</p>
          <h1>Portal de Seguridad y Gestión de Riesgos</h1>
          <p className="hero-text">
            Presentación profesional de los hallazgos, controles, activos y planes de recuperación del proyecto.
          </p>
        </div>
      </header>

      <main className="content-grid">
        {sections.map((section) => (
          <MarkdownCard key={section.title} title={section.title} content={section.content} />
        ))}
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <span>Estudiante: Karim Eduardo Chahuán Segura</span>
          <span>Docente: Rubén Schnettler - INACAP Valparaíso</span>
        </div>
      </footer>
    </div>
  )
}

export default App

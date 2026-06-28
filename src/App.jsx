import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
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
  const withoutCodeWrappers = markdown.replace(/`(!\[[^\]]*\]\([^)]+\))`/g, '$1')

  return withoutCodeWrappers.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, src) => {
    if (/^(https?:)?\/\//i.test(src) || src.startsWith('/')) {
      return match
    }

    const normalizedSrc = src.startsWith('img_karcha/') ? `/img_karcha/${src.replace(/^img_karcha\//, '')}` : `/${src}`
    return `![${alt}](${normalizedSrc})`
  })
}

function getTitle(markdown, fallbackTitle) {
  const match = markdown.match(/^#\s+(.+)$/m)
  return match ? match[1] : fallbackTitle
}

function MarkdownCard({ title, content }) {
  return (
    <article className="card">
      <h2>{title}</h2>
      <div className="markdown-body">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{normalizeMarkdown(content)}</ReactMarkdown>
      </div>
    </article>
  )
}

function App() {
  const sections = [
    { title: getTitle(resumen, 'Resumen - Seguridad Web'), content: resumen },
    { title: getTitle(sqli, 'Análisis SQLi'), content: sqli },
    { title: getTitle(xss, 'Análisis XSS'), content: xss },
    { title: getTitle(comandos, 'Análisis Command Injection'), content: comandos },
    { title: getTitle(activos, 'Activos y Riesgos'), content: activos },
    { title: getTitle(matriz, 'Matriz de Riesgo'), content: matriz },
    { title: getTitle(controles, 'Controles y Mitigación'), content: controles },
    { title: getTitle(recuperacion, 'Recuperación y Continuidad'), content: recuperacion },
    { title: getTitle(prompts, 'Promts y reflexión del uso de la Inteligencia artificial (IA)'), content: prompts },
  ]

  return (
    <div className="app-shell">
      <header className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Proyecto de Auditoría</p>
          <h1>Seguridad Web y Gestión de Riesgos</h1>
        </div>
      </header>

      <main className="content-grid">
        {sections.map((section) => (
          <MarkdownCard key={section.title} title={section.title} content={section.content} />
        ))}
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-left">
            <span>Estudiante: Karim Eduardo Chahuán Segura</span>
            <a
              href="https://github.com/k-chahuan"
              target="_blank"
              rel="noreferrer"
              className="github-button"
            >
              GitHub
            </a>
          </div>
          <span>Docente: Rubén Schnettler - INACAP Valparaíso</span>
        </div>
      </footer>
    </div>
  )
}

export default App

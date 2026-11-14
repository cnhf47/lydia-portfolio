
import { useState } from 'react'

// Individual diagram with its own zoom controls
function DiagramCard({ diagram }) {
  const [zoom, setZoom] = useState(1)

  const minZoom = 0.5
  const maxZoom = 3
  const zoomStep = 0.25

  function zoomIn() {
    setZoom((previous) =>
      Math.min(previous + zoomStep, maxZoom)
    )
  }

  function zoomOut() {
    setZoom((previous) =>
      Math.max(previous - zoomStep, minZoom)
    )
  }

  function resetZoom() {
    setZoom(1)
  }

  return (
    <article className="machinations-card">

      {/* Zoom controls */}
      <div className="machinations-toolbar">
        <div
          className="machinations-zoom-controls"
          role="group"
          aria-label={`Zoom controls for ${diagram.title}`}
        >
          <button
            type="button"
            onClick={zoomOut}
            disabled={zoom <= minZoom}
            aria-label="Zoom out"
          >
            −
          </button>

          <span className="machinations-zoom-level">
            {Math.round(zoom * 100)}%
          </span>

          <button
            type="button"
            onClick={zoomIn}
            disabled={zoom >= maxZoom}
            aria-label="Zoom in"
          >
            +
          </button>

          <button
            type="button"
            onClick={resetZoom}
            className="machinations-reset"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Scrollable diagram */}
      <div className="machinations-image-container">
        <img
          src={diagram.image}
          alt={diagram.alt}
          className="machinations-image"
          style={{ width: `${zoom * 100}%` }}
        />
      </div>

      {/* Diagram description */}
      <div className="machinations-content">
        <h3>{diagram.title}</h3>

        <p>{diagram.description}</p>

        <a
          href={diagram.link}
          target="_blank"
          rel="noopener noreferrer"
          className="machinations-link"
        >
          View Interactive Diagram ↗
        </a>
      </div>

    </article>
  )
}

// Main section displaying both diagrams
function MachinationsSection({ diagrams }) {
  return (
    <section className="detail-section">
      <h2>Game Systems Design — Machinations</h2>

      <p>
        I used Machinations to design and visualise
        the relationships between gameplay systems,
        visitor behaviour and progression.
      </p>

      <div className="machinations-list">
        {diagrams.map((diagram) => (
          <DiagramCard
            key={diagram.title}
            diagram={diagram}
          />
        ))}
      </div>
    </section>
  )
}

export default MachinationsSection


import { useState } from 'react'

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!images || images.length === 0) {
    return null
  }

  const currentImage = images[currentIndex]

  // Show the next image
  function nextImage() {
    setCurrentIndex((previousIndex) =>
      (previousIndex + 1) % images.length
    )
  }

  // Show the previous image
  function previousImage() {
    setCurrentIndex((previousIndex) =>
      (previousIndex - 1 + images.length) % images.length
    )
  }

  return (
    <figure className="image-carousel">

      {/* Main image with arrows */}
      <div className="carousel-frame">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="carousel-image"
        />

        <button
          type="button"
          className="carousel-arrow carousel-prev"
          onClick={previousImage}
          aria-label="Previous image"
        >
          ‹
        </button>

        <button
          type="button"
          className="carousel-arrow carousel-next"
          onClick={nextImage}
          aria-label="Next image"
        >
          ›
        </button>
      </div>

      {/* Navigation dots */}
      <div
        className="carousel-dots"
        aria-label="Choose a screenshot"
      >
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            className={
              index === currentIndex
                ? 'carousel-dot active'
                : 'carousel-dot'
            }
            onClick={() => setCurrentIndex(index)}
            aria-label={`Show image ${index + 1}: ${image.title}`}
            aria-pressed={index === currentIndex}
          />
        ))}
      </div>

      {/* Image information */}
      <figcaption className="carousel-caption">
        <h3>{currentImage.title}</h3>
        <p>{currentImage.description}</p>
      </figcaption>

    </figure>
  )
}

export default ImageCarousel

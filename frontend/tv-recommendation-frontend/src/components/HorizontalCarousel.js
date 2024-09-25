import React, { useEffect, useRef } from 'react';
import '../styles/HorizontalCarousel.css';

function HorizontalCarousel({ category }) {
  const scrollRef = useRef(null);

  // Automatically scroll the carousel
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }, 3000); // Adjust time interval for scrolling
    return () => clearInterval(scrollInterval);  // Cleanup
  }, []);

  const tvShows = [
    { id: 1, title: "Show 1", poster: "https://via.placeholder.com/150" },
    { id: 2, title: "Show 2", poster: "https://via.placeholder.com/150" },
    { id: 3, title: "Show 3", poster: "https://via.placeholder.com/150" },
    // Add more shows here
  ];

  return (
    <div className="carousel-container" ref={scrollRef}>
      {tvShows.map((show) => (
        <div key={show.id} className="carousel-item">
          <img src={show.poster} alt={show.title} />
          <p>{show.title}</p>
        </div>
      ))}
    </div>
  );
}

export default HorizontalCarousel;
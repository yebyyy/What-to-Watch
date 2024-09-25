import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Drama = () => {
  const [dramaShows, setDramaShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDramaShows() {
      try {
        const response = await axios.get('http://localhost:8000/api/shows?category=drama'); // Replace with your API
        setDramaShows(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching drama shows:', error);
        setLoading(false);
      }
    }

    fetchDramaShows();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex overflow-x-auto space-x-4 mt-4">
      {dramaShows.map((show) => (
        <div key={show.id} className="flex-none w-48 bg-card rounded-lg shadow-lg p-4">
          <img
            src={show.imgSrc}
            alt={`${show.name} Show`}
            className="w-full rounded-md"
          />
          <h4 className="mt-2 font-bold">{show.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default Drama;
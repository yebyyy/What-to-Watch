import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ForYou = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecommendations() {
      try {
        const response = await axios.get('http://localhost:8000/api/recommendations'); // Replace with your personalized API
        setRecommendations(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching personalized recommendations:', error);
        setLoading(false);
      }
    }

    fetchRecommendations();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex overflow-x-auto space-x-4 mt-4">
      {recommendations.map((show) => (
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

export default ForYou;
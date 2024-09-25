import React from 'react';

// Sample data for categories (replace with your actual data from API later)
const categories = [
  { id: 1, name: "TV1", imgSrc: "https://placehold.co/200x300" },
  { id: 2, name: "TV2", imgSrc: "https://placehold.co/200x300" },
  { id: 3, name: "TV3", imgSrc: "https://placehold.co/200x300" },
  { id: 4, name: "TV4", imgSrc: "https://placehold.co/200x300" },
  { id: 5, name: "TV5", imgSrc: "https://placehold.co/200x300" },
];

const Comedy = () => {
  return (
    <div className="flex overflow-x-auto space-x-4 mt-4">
      {categories.map((Comedy) => (
        <div key={Comedy.id} className="flex-none w-48 bg-card rounded-lg shadow-lg p-4">
          <img
            src={Comedy.imgSrc}
            alt={`${Comedy.name} Shows`}
            className="w-full rounded-md"
          />
          <h4 className="mt-2 font-bold">{Comedy.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default Comedy;
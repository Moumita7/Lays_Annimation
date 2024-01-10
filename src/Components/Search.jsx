import React, { useState } from 'react';

const Search = () => {
  const initialObjects = [
    { id: 1, title: 'Object 1', area: 10 },
    { id: 2, title: 'Object 2', area: 20 },
    // ... more objects
  ];

  const [objects, setObjects] = useState(initialObjects);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const searchTerm = event.target.value;

    // Filter the array based on the search term
    const filteredObjects = initialObjects.filter(obj =>
      obj.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Update the state with the filtered array
    setObjects(filteredObjects);
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={handleSearch}
      />

      {/* Display the filtered objects */}
      <ul>
        {objects.map(obj => (
          <li key={obj.id}>{`Title: ${obj.title}, Area: ${obj.area}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;

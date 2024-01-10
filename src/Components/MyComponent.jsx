import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [originalData, setOriginalData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async (apiEndpoint) => {
      try {
        const response = await axios.get(apiEndpoint);
        return response.data;
      } catch (error) {
        console.error('Error fetching data from API:', error);
        throw error;
      }
    };

    const fetchDataFromAllApis = async () => {
      const apiEndpoints = [
        // 'https://jsonplaceholder.typicode.com/posts',
        // 'https://jsonplaceholder.typicode.com/comments',
        'https://jsonplaceholder.typicode.com/todos',
      ];

      try {
        const apiResults = await Promise.all(apiEndpoints.map(fetchDataFromApi));
        const consolidatedResults = apiResults.reduce((acc, result) => {
          return acc.concat(result);
        }, []);

        // Set both original data and filtered results
        setOriginalData(consolidatedResults);
        setFilteredResults(consolidatedResults);
      } catch (error) {
        console.error('Error fetching data from APIs:', error);
      }
    };

    fetchDataFromAllApis();
  }, []); // Run once when the component mounts

  const handleButtonClick = () => {
    // Update results with filtered data based on the title
    const newFilteredResults = originalData.filter((result) =>
      result.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredResults(newFilteredResults);
  };

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Enter search text"
      />

      <button onClick={handleButtonClick}>Update Results</button>

      <ul>
        {filteredResults.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;

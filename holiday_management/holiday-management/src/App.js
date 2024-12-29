import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [country, setCountry] = useState('');
  const [year, setYear] = useState('');
  const [holidays, setHolidays] = useState([]);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  const fetchHolidays = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/holidays/`, {
        params: { country, year },
      });
      console.log("Holidays Data:", response.data);  // Log the data to check its structure
      setHolidays(response.data);
    } catch (err) {
      console.error("Error fetching holidays:", err);
      setError('Failed to fetch holidays.');
    }
  };

  // Filter holidays by name based on the search query
  const filteredHolidays = holidays.filter(holiday =>
    holiday.name?.toLowerCase().includes(searchQuery.toLowerCase()) // Case-insensitive search
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Holiday Management</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Country Code"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border p-2 mr-2"
        />
        <button
          onClick={fetchHolidays}
          className="bg-blue-500 text-white p-2"
        >
          Search
        </button>
      </div>

      {/* Search bar for filtering holidays by name */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by holiday name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2"
        />
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <div>
        {filteredHolidays.length > 0 ? (
          filteredHolidays.map((holiday, index) => (
            <div key={index} className="border p-2 mb-2">
              <h2 className="font-bold">{holiday.name ? holiday.name.common : holiday.name}</h2> {/* If name is an object */}
              <p>{holiday.description}</p>
              <p>{holiday.date ? holiday.date.iso : holiday.date}</p> {/* If date is an object */}
            </div>
          ))
        ) : (
          <p>No holidays found.</p>
        )}
      </div>
    </div>
  );
}

export default App;

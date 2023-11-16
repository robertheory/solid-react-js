import React, { useState } from 'react';

const SearchAndSort = () => {
  const [sorting, setSorting] = useState<'asc' | 'desc'>('asc');

  const [search, setSearch] = useState<string>('');

  const [data, setData] = useState<any[]>([]);

  const [loading, setLoading] = useState<boolean>(false);

  const [error, setError] = useState<string>('');

  const handleSort = () => {
    setSorting(sorting === 'asc' ? 'desc' : 'asc');
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos?title=${search}`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        {error}

        <button onClick={() => setError('')}>Retry</button>
      </div>
    );
  }

  return (
    <div>
      <div>
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch} disabled={loading}>
          Search
        </button>
      </div>
      <div>
        <button onClick={handleSort}>Sort</button>
      </div>
      <div>
        {data.map((item, index) => (
          <div key={index}>{item.title}</div>
        ))}
      </div>
    </div>
  );
};

export default SearchAndSort;

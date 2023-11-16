import React, { useState } from 'react';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const seachToDos = async (search: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?title=${search}`
  );

  const data = (await response.json()) as Todo[];

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  return data;
};

const SearchComponent = ({
  onSearch,
}: {
  onSearch: (todos: Todo[]) => void;
}) => {
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSearch = async () => {
    try {
      setLoading(true);

      const data = await seachToDos(search);

      onSearch(data);
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
      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch} disabled={loading}>
        Search
      </button>
    </div>
  );
};

const ListTodoComponent = ({ todos }: { todos: Todo[] }) => (
  <div>
    {todos.map((item, index) => (
      <div key={index}>
        <h1>{item.title}</h1>
        <p>{item.completed ? 'Completed' : 'Not completed'}</p>
      </div>
    ))}
  </div>
);

const SearchAndSort = () => {
  const [sorting, setSorting] = useState<'asc' | 'desc'>('asc');

  const [data, setData] = useState<Todo[]>([]);

  const handleSort = () => {
    setSorting(sorting === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div>
      <SearchComponent onSearch={setData} />

      <button onClick={handleSort}>Sort</button>

      <ListTodoComponent todos={data} />
    </div>
  );
};

export default SearchAndSort;

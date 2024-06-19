import React, { useState, useEffect } from 'react';

const DataFetchingComponent: React.FC = () => {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default DataFetchingComponent;
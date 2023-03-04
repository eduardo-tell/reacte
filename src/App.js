// ? é usado, pois quando carregar, ele pode ser null

import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.scss';
import { useFetch } from './hooks/useFetch';

function App() {
  const { data } = useFetch("https://api.github.com/users/eduardo-tell/repos")

  return (
    <div>
      <ul>
        {data?.map(repo => {
          return (
            <li key={repo.id}>
              {repo.name}
            </li>
          )
        })}
      </ul>      
    </div>
  );
}

export default App;

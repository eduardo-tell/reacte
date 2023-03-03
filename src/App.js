import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [news, setNews] = useState([])

  useEffect(() => {
    fetch("https://api.github.com/users/eduardo-tell/repos")
    .then(results => results.json())
    .then(json => {
      setNews(json)
    })  
  }, [])

  return (
    <div>
      <ul>
          {news.map(repo => {
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

// ? é usado, pois quando carregar, ele pode ser null

import './App.scss';
import { useFetch } from './hooks/useFetch';
import CardRepo from './components/card-repo/CardRepo';
import { useState } from 'react';

function App() {
  const { data: repositories } = useFetch("https://api.github.com/users/eduardo-tell/repos")
  const [ search, setSearch ] = useState('')
  const filteredRepos = search.length > 0 ? repositories.filter(repo => repo.name.includes(search)) : repositories

  return (
    <>
      <fieldset>
        <input itemType='text' name='busca' placeholder='Buscar...' onChange={e => setSearch(e.target.value)} value={search} />
      </fieldset>

      {filteredRepos?.map(repo => {
        return (
          <CardRepo key={ repo.id } title={ repo.name } />
        )
      })}
    </>
  );
}

export default App;

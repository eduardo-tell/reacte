// ? é usado, pois quando carregar, ele pode ser null

import { useFetch } from './hooks/useFetch';
import CardRepo from './components/card-repo/CardRepo';
import { useState } from 'react';

function App() {
  const { data: repositories } = useFetch("https://api.github.com/users/eduardo-tell/repos")
  const [ search, setSearch ] = useState('')
  const filteredRepos = search.length > 0 ? repositories.filter(repo => repo.name.includes(search)) : repositories

  return (
    <main className="main-content">
      <div className="container">
        <div className="row">
          <fieldset>
            <input itemType='text' name='busca' placeholder='Buscar...' onChange={e => setSearch(e.target.value)} value={search} />
          </fieldset>
        </div>
      </div>

      <div className="container">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filteredRepos?.map(repo => {
            return (
              <CardRepo key={ repo.id } title={ repo.name } />
            )
          })}
        </div>
      </div>
    </main>
  );
}

export default App;

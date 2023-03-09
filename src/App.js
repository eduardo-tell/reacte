// ? é usado, pois quando carregar, ele pode ser null

import { useFetch } from './hooks/useFetch';
import React, { useState, useContext } from 'react';

import CardRepo from './components/card-repo/CardRepo';
import Header from './components/header/Header';
import { FavoritesContext } from './context/Favorites';

export default function App() {
  const { data: repositories } = useFetch("https://api.github.com/users/eduardo-tell/repos")
  const [ search, setSearch ] = useState('')
  const filteredRepos = search.length > 0 ? repositories.filter(repo => repo.name.includes(search)) : repositories
  const { toggleFavoriteItem }= useContext(FavoritesContext)

  return (
    <>
      <div className="p-6">
        <Header />
        
        <main className="main-content">
          <fieldset className=''>
            <input itemType='text' name='busca' placeholder='Buscar...' onChange={e => setSearch(e.target.value)} value={search} className="border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded sm:text-xl focus:ring-1" />
          </fieldset>

          <div className="container">
            <div className="mt-6 grid md:grid-cols-4 gap-4">
              {filteredRepos?.map(repo => {
                return (
                  <button key={repo.id} onClick={() => toggleFavoriteItem(repo)}>
                    <CardRepo title={repo.name} id={repo.id} />
                  </button>
                )
              })}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
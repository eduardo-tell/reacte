import React, { useState, useEffect } from 'react';
import CardUser from '../components/card-user/CardUser';
import { useDispatch, useSelector } from 'react-redux';
import { addRepo } from './../features/repositories/repositories';
import { useFetch } from '../hooks/useFetch';

export default function Home() {
  const dispatch = useDispatch();
  const repositories = useSelector(state => state.repositories)
  const { data: repositoriesStart } = useFetch("https://jsonplaceholder.typicode.com/users/")

  useEffect(() => {
    dispatch(addRepo(repositoriesStart))
  }, [repositoriesStart])

  const [ search, setSearch ] = useState('')
  const filteredRepos = search.length > 0 ? repositories.filter(repo => repo.name.toLowerCase().includes(search.toLowerCase())) : repositories

  return (    
    <>
      <div className="p-6">
        <main className="main-content">
          <fieldset className='container m-auto'>
            <input itemType='text' name='busca' placeholder='Buscar...' onChange={e => setSearch(e.target.value)} value={search} className="border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded sm:text-xl focus:ring-1" />
          </fieldset>

          <div className="container m-auto">
            <div className="mt-6 grid grid-cols-4 gap-4">
              {filteredRepos?.map(repo => {
                return (
                  <CardUser key={repo.id} props={repo} />
                )
              })}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
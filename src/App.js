// ? é usado, pois quando carregar, ele pode ser null

import './App.scss';
import { useFetch } from './hooks/useFetch';
import CardRepo from './components/card-repo/CardRepo';

function App() {
  const { data: repositories, isFetching } = useFetch("https://api.github.com/users/eduardo-tell/repos")

  return (
    <div className={ isFetching && 'loading' }>
      {repositories?.map(repo => {
        return (
          <CardRepo title={ repo.name } id={ repo.id } />
        )
      })}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import CardProduct from '../components/card-product/CardProduct';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../features/products/products';
import { useFetch } from '../hooks/useFetch';

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products)
  const { data: productsStart } = useFetch("https://dummyjson.com/products?limit=8")

  // Salvando no cache os primeiros dados da API
  useEffect(() => {
    dispatch(addProduct(productsStart))
  }, [productsStart])

  const [ search, setSearch ] = useState('')
  const filteredProducts = search.length > 0 ? products.filter(product => product.title.toLowerCase().includes(search.toLowerCase())) : products

  return (    
    <>
      <div className="p-6 bg-slate-100 dark:bg-slate-800">
        <main className="main-content">
          <fieldset className='container m-auto'>
            <input itemType='text' name='busca' placeholder='Buscar...' onChange={e => setSearch(e.target.value)} value={search} className="border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-blue-600 block w-full rounded sm:text-xl focus:ring-1" />
          </fieldset>

          <div className="container m-auto">
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredProducts?.map(product => {
                return (
                  <CardProduct key={product.id} props={product} />
                )
              })}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
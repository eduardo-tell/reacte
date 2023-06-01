import React, { useState, useEffect } from 'react';
import CardProduct from '../components/card-product/CardProduct';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../features/products/products';
import { useFetch } from '../hooks/useFetch';

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products)
  const { data: productsStart } = useFetch("https://dummyjson.com/products?limit=8")

  // Exemplo de como salvar no cache
  // useEffect(() => {
  //   dispatch(addProduct(productsStart))
  // }, [productsStart])

  const [ search, setSearch ] = useState('')
  const filteredProducts = search.length > 0 ? products.filter(product => product.title.toLowerCase().includes(search.toLowerCase())) : products

  return (    
    <>
      <div className="p-6">
        <main className="main-content">
          <fieldset className='container m-auto'>
            <input itemType='text' name='busca' placeholder='Buscar...' onChange={e => setSearch(e.target.value)} value={search} className="border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded sm:text-xl focus:ring-1" />
          </fieldset>

          <div className="container m-auto">
            <div className="mt-6 grid grid-cols-4 gap-4">
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
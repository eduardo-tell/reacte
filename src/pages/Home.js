import React, { useState, useEffect } from 'react';
import CardProduct from '../components/card-product/CardProduct';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../features/products/products';
import { useFetch } from '../hooks/useFetch';

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products)
  var { data: productsStart } = []


    fetch("http://localhost:1337/api/products?sort", {
        headers: {
            Authorization: "57f2dae90a53857f23f8ed117e8f516b9302d09b6e4afdb9434b5a9f3c889d8e5d1f6fd06f7033ecf14279c0406c589fcec607f2452b73ba302e18d642336f5932184a82baea5a6ddc7a5e8244ab09883ca880327fe5d86255e70fb9a327a18d7d74e803ef49052645be5aab7a630593d34c990bbc06da31ce10ce01916c1a41",
        }
    })
    .then((response) => response.json())
    .then((response) => {
        productsStart = useFetch("https://dummyjson.com/products?limit=8")

        // response.data.map(item => {
        //     console.log(item);
        // })
    })

  // Salvando no cache os primeiros dados da API
  useEffect(() => {
    dispatch(addProduct(productsStart))
  }, [productsStart])

  const [ search, setSearch ] = useState('')
  const filteredProducts = search.length > 0 ? products.filter(product => product.title.toLowerCase().includes(search.toLowerCase())) : products

  return (
    <>
      <div className="p-6 dark:bg-slate-800">
        <main className="main-content">
          <fieldset className='container m-auto'>
            <input itemType='text' name='busca' placeholder='Buscar...' onChange={e => setSearch(e.target.value)} value={search} className="border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-blue-600 block w-full rounded sm:text-xl focus:ring-1" />
          </fieldset>

          <div className="container m-auto">
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
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

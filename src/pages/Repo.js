import React from 'react';
import { useForm } from 'react-hook-form';

export default function Repo() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    return (    
        <>
            <main className="main-content p-6">
                <div className="container m-auto">
                    <p> Repo </p>
                </div>

                <div className="container m-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <fieldset>
                            <input type="text" className='w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none' placeholder="Seu nome" {...register("name", {required: true, maxLength: 80})} />
                            {errors.name && <span>This field is required</span>}
                        </fieldset>
                        
                        <fieldset>
                            <select className='w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none' {...register("Sexo", { required: true })}>
                                <option value="M">Masculino</option>
                                <option value="F">Fêminino</option>
                            </select>
                        </fieldset>

                        <button className='btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500'>Salvar</button>
                    </form>
                </div>
            </main>
        </>
    )
}
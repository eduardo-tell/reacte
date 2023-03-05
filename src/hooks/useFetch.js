// Todo hook é uma função react

import axios from "axios"
import { useState, useEffect } from "react"

export function useFetch(url) {
    const [data, setData] = useState(null)
    const [isFetching, setIsFetching] = useState(true) // Guardando um estado de carregando

    useEffect(() => {
        axios.get(url)
        .then(response => {
            setData(response.data)
        })
        .finally(() => {
            setIsFetching(false)
        })  
    }, [])

    return { data, isFetching }
}
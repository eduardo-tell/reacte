// Todo hook é uma função react

import axios from "axios"
import { useState, useEffect } from "react"

export function useFetch(url: String) {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(url)
        .then(response => {
            setData(response.data)
        })  
    }, [])

    return { data }
}
import { useState, useEffect } from "react"

export function useCookie(props) {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(url).then(response => {
            setData(response.data)
        })
    }, [url])
}
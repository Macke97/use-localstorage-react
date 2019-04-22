import { useState, useEffect } from 'react'

const useLocalStorage = (defaultVal, key = 'useLocalStorage') => {
    const [state, setState] = useState(() => {
        let value
        try {
            value = JSON.parse(window.localStorage.getItem(key) || JSON.stringify(defaultVal))
        } catch (error) {
            value = null
        }
        return value
    })

    useEffect(() => {
        // Set localStorage item whenever state changes
        window.localStorage.setItem(key, state)
    }, [state])
    return [state, setState]
}

export default useLocalStorage
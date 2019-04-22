import React from 'react'
import useLocalStorage from './lib'

export default () => {
    const [val, setVal] = useLocalStorage(2, 'test')
    return <button onClick={() => setVal(val + 1)}>{val}</button>
}
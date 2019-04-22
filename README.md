# use-localstorage-react
A custom hook to save state to localstorage!

# Usage

1. Import it
```js
import useLocalStorage from 'use-localstorage-react'
```

2. Set key and initial value

```js
const [count, setCount] = useLocalStorage(0, 'counter')
```
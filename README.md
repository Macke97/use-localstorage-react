# use-localstorage-react
A custom hook to save state to localstorage!

# Usage

### Import it
```js
import useLocalStorage from 'use-localstorage-react'
```

### Set key and initial value

```js
const [count, setCount] = useLocalStorage(0, 'counter')
```

Reload to see that the value stays the same.
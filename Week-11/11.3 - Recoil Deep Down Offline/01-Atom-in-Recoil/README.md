# Recoil and it's Hooks

### useRecoilValue

The `useRecoilValue` hook is a **Recoil utility** used to **read the current value** of a Recoil atom or selector in a React component. It ensures that the component re-renders whenever the atom or selector's value changes.

### Syntax:
```javascript
const value = useRecoilValue(atomOrSelector);
```

### Key Points:
- **Read-only:** You can only read the value, not modify it.
- **Automatically subscribes:** The component re-renders when the value updates.

### Example:
```javascript

import { useRecoilValue } from 'recoil';
import { counterAtom } from './store';

function Counter() {
  const count = useRecoilValue(counterAtom); // Reads the current value of counterAtom
  return <div>Counter: {count}</div>;
}
```

### useRecoilState

The `useRecoilState` hook is a **Recoil utility** that provides both the **current value** and a **setter function** for a Recoil atom or writable selector. It allows you to read and update the state in a single hook.

### Syntax:
```javascript
const [value, setValue] = useRecoilState(atomOrSelector);
```

### Key Points:
- **Read and Write:** You can read the current state and update it.
- **Automatically subscribes:** The component re-renders when the state updates.

### Example:
```javascript
import { useRecoilState } from 'recoil';
import { counterAtom } from './store';

function CounterControls() {
  const [count, setCount] = useRecoilState(counterAtom); // Get state and setter

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <p>Count: {count}</p>
    </div>
  );
}
```

### useSetRecoilState

The `useSetRecoilState` hook is a **Recoil utility** that provides a **setter function** to update the value of a Recoil atom or writable selector. It is used when you only need to modify the state and don’t need to read it.

### Syntax:
```javascript
const setValue = useSetRecoilState(atomOrSelector);
```

### Key Points:
- **Write-only:** You can update the state but cannot read it.
- **Efficient:** Ideal for components that only trigger state updates without needing the current value.

### Example:
```javascript
import { useSetRecoilState } from 'recoil';
import { counterAtom } from './store';

function IncrementButton() {
  const setCount = useSetRecoilState(counterAtom); // Get setter function

  return <button onClick={() => setCount(count => count + 1)}>Increase</button>;
}
```
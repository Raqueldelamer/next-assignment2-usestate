# Sheep Counter App

This is a simple **Sheep Counter** application built using **Next.js** and **React**. The app displays a count of sheep that starts at 10 and increments by 1 each time the "More Sheep" button is clicked. This example demonstrates how to use the `useState` hook for managing state in React.

See the file: src/pages/sheep/index.js

## Features
- Displays the current count of sheep.
- Button to increment the count by 1.
- The count is maintained using the `useState` hook in React.

## Code Overview

### Key Parts of the Code:
- **State Management**: 
  - The sheep count is managed using the `useState` hook. 
  - The initial count is set to `10`.
  
  ```js
  const [count, setCount] = useState(10);
  ```

- **Increment Function**:
  - The `handleClick` function increments the current count by 1 when the "More Sheep" button is clicked.
  
  ```js
  function handleClick() {
    setCount(count + 1);
  }
  ```

### Example Code:
```js
import { useState } from 'react';

export default function SheepCounterPage() {
  const [count, setCount] = useState(10);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Hello Sheep!!!!!</h1>
      <div>
        <h3>You have {count} sheep.</h3>
        <button onClick={handleClick}>More Sheep</button>
      </div>
    </div>
  );
}
```

## How to Run

1. **Clone the repository**:
   ```bash
   git clone <repo-url>
   ```

2. **Navigate to the project directory**:
   ```bash
   cd <project-directory>
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000/sheep` to view the Sheep Counter app.

## How to Use
- Click the "More Sheep" button to increase the sheep count by 1.
- The updated count will be displayed on the screen.

## License
This project is open source and available under the MIT License. Feel free to use and modify the code!
import { useState } from 'react';

import TodoItem from './components/TodoItem';

const App = () => {
  const initialItems = [
    { id: 1, name: "Wake up", status: "pending" }
  ];

  const [ items, setItems ] = useState( initialItems );

  return (
    <div>
      {
        items.map( item => <TodoItem name={item.name} key={item.id} /> )
      }
    </div>
  )
}

export default App;
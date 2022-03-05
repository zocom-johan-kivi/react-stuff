import { useState } from 'react';
import './App.css';
import Pizza from './Pizza';

function App() {

  const pizzas = [
    {
        name: 'Margherita',
        ingredients: ['tomato sauce', 'mozarella cheese'],
    },
    {
        name: 'Hawaii',
        ingredients: ['tomato sauce', 'mozarella cheese', 'ham', 'pineapple']
    },
    {
        name: 'Capricciosa',
        ingredients: ['tomato sauce', 'mozarella cheese', 'ham', 'champinjons'],
    },
    {
      name: 'Romana',
      ingredients: ['tomato sauce', 'mozarella cheese', 'ham', 'pork filet', 'garlic', 'basil']
    },
    {
      name: 'Laguna',
      ingredients: ['tomato sauce', 'mozarella cheese', 'ham', 'shrimps', 'pepper']
    }
  ];

  function addToCart(pizza){
      setCart([...cart, pizza])
  }

  const menu = pizzas.map((pizza, index) => {
    return <Pizza name={pizza.name} ingredients={pizza.ingredients} key={index} addToCart={addToCart} />
  })

  const [cart, setCart] = useState([]);




  return (
    <div className="App">
      <p><b>{cart.length}</b> pizzas in cart.</p>
     <h1>Pizza Menu</h1>
     <div className='menu'>
      {menu}
     </div>
    </div>
  );
}

export default App;

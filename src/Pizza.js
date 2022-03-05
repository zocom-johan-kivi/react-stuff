import Ingredient from './Ingredient';

function Pizza({ name, ingredients, addToCart }) {

  const ingredientList = ingredients.map((ingredient, index) => {
    return <Ingredient name={ingredient} key={index} />
  })

  return (
    <div className="Pizza" onClick={() => { addToCart(name) }}>
      <h2>{name}</h2>
      <ul>
        {ingredientList}
      </ul>
    </div>
  );
}

export default Pizza;
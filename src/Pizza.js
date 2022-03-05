import Ingredient from './Ingredient';

function Pizza({ name, ingredients }) {

  const ingredientList = ingredients.map((ingredient, index) => {
    return <Ingredient name={ingredient} key={index} />
  })

  return (
    <div className="Pizza">
      <h2>{name}</h2>
      <ul>
        {ingredientList}
      </ul>
    </div>
  );
}

export default Pizza;
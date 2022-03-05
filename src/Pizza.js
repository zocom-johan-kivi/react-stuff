import Ingredient from './Ingredient';

function Pizza({ name, ingredients, updatePizza }) {

  const ingredientList = ingredients.map((ingredient, index) => {
    return <Ingredient name={ingredient} key={index} />
  })

  function addPizza(name){
    return updatePizza(name)    
  }

  return (
    <div className="Pizza" onClick={addPizza}>
      <h2>{name}</h2>
      <ul>
        {ingredientList}
      </ul>
    </div>
  );
}

export default Pizza;
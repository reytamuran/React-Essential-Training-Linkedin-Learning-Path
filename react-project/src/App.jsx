import './App.css'

function Header({name, year}) { 
return (
  <header>
    <h1>{name}'s Kitchen </h1>
    <p>Copyright {year}</p>
  </header>
)
}


const items = [ //create items
  "Macaroni and Cheese",
  "Salmon with Potatoes",
  "Tofu with Vegetables",
  "Soup"
];

const dishObjects= items.map((dish, i) => ({ //using dish objects to give every items of dish to an id
  id: i,
  title: dish
}));

function Main({dishes}) {
  return (
    <ul>
      {dishes.map((dish) => (
        <li key={dish.id} style={{listStyleType:"none"}}>
          {dish.title}
        </li>
      ))}
    </ul>
  )
}

function App() {
  return (
    <div>
      <Header name="Alex" year={new Date().getFullYear()} />  
      <Main dishes={dishObjects}  />
      
    </div>
   

  )
}

export default App

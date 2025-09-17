import './App.css'

function Header({name, year}) {  //simplify and we dont have to use prop. anymore
return (
  <header>
    <h1>{name}'s Kitchen </h1>
    <p>Copyright {year}</p>
  </header>
)
}

const items = [
  "Macaroni and Cheese",
  "Salmon with Potatoes",
  "Tofu with Vegetables"
];

function Main({dishes}) {
  return (
    <ul>
      {dishes.map((dish) => (
        <li style={{listStyleType:"none"}}>{dish}</li>))}
    </ul>


  )
}

function App() {
  return (
    <div>
      <Header name="Alex" year={new Date().getFullYear()} />  {/* when we render the component, 
                                  we pass the properties into the component */}
      <Main dishes={items}  />
      
    </div>
   

  )
}

export default App

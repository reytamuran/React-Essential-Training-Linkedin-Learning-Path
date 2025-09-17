import './App.css'

function Header({name, year}) {  //simplify and we dont have to use prop. anymore
return (
  <header>
    <h1>{name}'s Kitchen </h1>
    <p>Copyright {year}</p>
  </header>
)
}

function App() {
  return (
    <div>
       <Header name="Alex" year={new Date().getFullYear()} />  {/* when we render the component, 
                                  we pass the properties into the component */}
      <main>
        <h2> We serve the most delicious food around</h2>
      </main>
    </div>
   

  )
}

export default App

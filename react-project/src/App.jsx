import './App.css'

function Header(props) {  // we can reference those properties on the props 
                          // object that is passed into each one of these values
return (
  <header>
    <h1>{props.name}'s Kitchen </h1>
    <p>Copyright {props.year}</p>
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

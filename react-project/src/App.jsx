import './App.css'

let language = "React";  //create variable
let moon = "☽";

function App() {
  return (
   <h1>Hello {language.toUpperCase()} World! {moon}</h1> 
   //variables can be injected into the body of the component using curly braces
   // and methods works inside these braces
  )
}

export default App

const Hello = (props) => {
   console.log()
   return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
   )
}

function App() {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a + b)
  const name = 'Erizo'
  const age = 34

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name = 'Eric' age = {26+10} />
      <Hello name = 'Alejandro' age = {age}/>
      <p>Hello World, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a+b}
      </p>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />      
    </div>
  )
}

//EVENT HANDLERS
const App = () => {

  const [ counter, setCounter ] = useState(0)
  // const handleClick = () => {    console.log('clicked')  }
  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )
  console.log('rendering...', counter)
  return (
    <div>
    <div>{counter}</div>
    //event handlers are FUNCTIONS OR FUNCTION REFERENCES, NOT FUNCTION CALLS!!!
    <div><button onClick={() => setCounter(counter + 1)}> plus</button></div>
    <div><button onClick={() => setCounter(0)}>         zero      </button></div>
    </div>
  )
}

export default App
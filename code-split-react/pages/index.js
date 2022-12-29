import { useEffect, useState } from "react"
import Nav from "../components/nav/nav"

export default function Home() {

  const [inputOneValue, setInputOneValue] = useState("")
  const [inputTwoValue, setInputTwoValue] = useState("")

  const [result, setResult] = useState(0)

  function handleClick() {
    import("../utils/sum").then(module => {
      const res = module.default(inputOneValue, inputTwoValue)
      setResult(res)
    });
  }

  return (
    <div>
      <h1>Home page</h1>
      <Nav />
      <input 
        placeholder="input 1"
        onChange={e => setInputOneValue(e.target.value)}
        value={inputOneValue}
      />
      <input
        placeholder="input 2"
        onChange={e => setInputTwoValue(e.target.value)}
        value={inputTwoValue}
      />
      <button onClick={handleClick}>sum</button>
      <p>{result}</p>
    </div>
  )
}

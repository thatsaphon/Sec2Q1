import logo from "./logo.svg"
import "./App.css"
import { useState } from "react"

function App() {
  const [number, setNumber] = useState(1)
  const [option, setOption] = useState("isPrime")
  const [result, setResult] = useState("False")

  const handleNumberChange = (e) => {
    if (!e.target.value || e.target.value < 1) setNumber(1)
    else setNumber(Math.round(e.target.value))
    // console.log(result)
    handleResult(e.target.value)
  }

  const handleOptionChange = (e) => {
    setOption(e.target.value)
    handleResult(number, e.target.value)
  }

  const handleResult = (n, o = option) => {
    if (o === "isPrime") {
      if (n == 1) setResult("False")
      if (n == 2 || n == 3) {
        setResult("True")
      } else {
        for (let i = 2; i < n; i++) {
          console.log(n, i, n % i)
          if (n % i == 0) {
            setResult("False")
            break
          } else if (i ** 2 > n) {
            setResult("True")
            break
          }
        }
      }
    }
    if (o === "isFibonacci") {
      const fibonacci = [0, 1, 1]
      if (n == 0 || n == 1) {
        setResult("True")
      } else
        for (let i = 2; i < 999999; i++) {
          if (n == fibonacci[i]) {
            setResult("True")
            break
          } else if (n < fibonacci[i]) {
            setResult("False")
            break
          } else {
            fibonacci.push(fibonacci[i] + fibonacci[i - 1])
            console.log(fibonacci)
          }
        }
    }
  }

  return (
    <div className="">
      <div className="Container">
        <div className="Frame Frame1">
          <input type="number" onChange={handleNumberChange} />
          <h1>{number}</h1>
        </div>
        <div className="Frame Frame2">
          <select name="" id="" onChange={handleOptionChange}>
            <option value="isPrime">isPrime</option>
            <option value="isFibonacci">isFibonacci</option>
          </select>
        </div>
        <div className="Frame Frame3">
          <h1>{result}</h1>
        </div>
      </div>
    </div>
  )
}

export default App

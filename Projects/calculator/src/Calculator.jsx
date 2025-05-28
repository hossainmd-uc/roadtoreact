import  { useEffect, useState, useRef } from 'react'
import './style.css'

const Calculator = () => {

  const [answer, setAnswer] = useState(null);

  let operands = useRef([])


  const [display, setDisplay] = useState("");
  const [method, setMethod] = useState("");

  const [operandCount, setOperandCount] = useState(0)

  const calculate = () => {
    let res = operands.current[0]
    if (res[1] !== null){
      switch (method) {
        case "+":
          res = res + operands.current[1]
          break;
        case "-":
          res = res - operands.current[1]
          break;
        case "*":
          res = res * operands.current[1]
          break;
        case "/":
          res = res / operands.current[1]
          break;
        default:
          break;
      }
      
    }
    setAnswer(res)
    return res;
  }

  const push = (method) => {
    if (display !== '') {
      operands.current.push(parseFloat(display))
      setMethod(method)
      setDisplay("");
      setOperandCount((prev) => prev + 1)
    }
  }

  const show = (number) => {
    switch (number) {
      case ".":
        if (!(display.includes("."))){
          setDisplay(display + ".")
        }
        break;
    
      default:
        setDisplay(prev => prev + number);
    }
  }

  const clear = () => {
    setDisplay("");
    setAnswer(null);
    operands.current = []
    setOperandCount(0)
    console.log("emptied: ")
    console.log(operands.current)
  }

  useEffect(() => {
    console.log('changed to: ')
    console.log(operands.current)
    console.log('operand count: ')
    console.log(operandCount)
    if (operandCount == 2){
      const res = calculate()
      //setDisplay(res)
      setOperandCount(1);
      clear()
      operands.current.push(res)
      setOperandCount(1)
    }

  }, [operandCount])
    
  return (
    <>
    {answer && <p>{answer}</p>}
    <form className='calculator' name='calc'>

    <input className='value' value={display}></input>
    <span className='num clear' onClick={() => clear()}>Clear</span>

    <span onClick={() => push("/")}>/</span>
    <span onClick={() => push("*")}>*</span>

    <span onClick={() => show("7")}>7</span>
    <span onClick={() => show("8")}>8</span>
    <span onClick={() => show("9")}>9</span>

    <span  onClick={() => push("-")}>-</span>

    <span onClick={() => show("4")}>4</span>
    <span onClick={() => show("5")}>5</span>
    <span onClick={() => show("6")}>6</span>

    <span className='plus' onClick={() => push("+")}>+</span>

    <span onClick={() => show("1")}>1</span>
    <span onClick={() => show("2")}>2</span>
    <span onClick={() => show("3")}>3</span>
    <span onClick={() => show("0")}>0</span>

    <span onClick={() => show(".")}>.</span>
    <span className='equals' onClick={() => calculate()}> = </span>





    </form>
    </>
    
  )
}

export default Calculator
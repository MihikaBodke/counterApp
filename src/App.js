import './App.css';
import { useState } from "react";
import "./style.css";

function App() {
// chheck for initialization value + ceck for null
const getInitialValue = () => {
  const val =  prompt("Enter initial count value and press ok or press cancel to start at 1");
  let count;
  if(val == null || val == "" )
  {
    count = 1;
    // setState({count:1, countInitialValueFlag:true});

  }
  else{
  alert("You entered " +val);
    count = parseInt(val);
    // setState({count:parseInt(val), countInitialValueFlag:true});
  }

  const maxValue = prompt("Enter the max value (click cancel or leave empty to set max as 1000)");
  let maxValueVar;
  if(maxValue === null || maxValue === "")
  {
    maxValueVar = 1000;
    // setState({count:state.count, maxValue:1000, maxValueSetFlag:true});
  }
  else
  {
    
    alert("New Max Value = "+maxValue);
    maxValueVar = parseInt(maxValue);
    // setState({count:state.count, maxValue:maxValue, maxValueSetFlag:true});
  } 
  // Handling the case where initialized count is more than the max value
  if(maxValueVar >= count)
    setState({count:count, countInitialValueFlag:true, maxValue:maxValueVar, maxValueSetFlag:true})
  else
  {
    alert("Incorrect values entered! Initialized count value can't be greater than the Max Value.")
    getInitialValue();
  }
  };

const getMaxValue = () => {
  const maxValue = prompt("Enter the max value (click cancel or leave empty to set max as 1000)");
  if(maxValue === null || maxValue === "")
  {
    setState({count:state.count, maxValue:1000, maxValueSetFlag:true});
  }
  else
  {
    alert("New Max Value = "+maxValue);
    setState({count:state.count, maxValue:maxValue, maxValueSetFlag:true});
  }
  // return True
}
const [state, setState] = useState({count:1, countInitialValueFlag:false, maxValue: 1000, maxValueSetFlag:false}); //useState(getInitialValue());

//c/ max value
// check for max Value reached

// textbox as the value of counter, so that
// it can be edited in the future


const incrementCounter = () => {
  if(state.count <= state.maxValue - 1)
  {
    setState({count:state.count+1, maxValue:state.maxValue})
  }
}
const handleCountChange = (e) => {
  const curVal = parseInt(e.target.value.substr(0, 100));
  if(curVal > state.maxValue)
  {
    alert("Entered value is greater than the max value");
  }
  else{
  setState({count:curVal, maxValue:state.maxValue})
  } 
}
const colors = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
  
};
const color = "primary";
const backgroundColor = "tertiary";
const borderColor = "primary" ;
  
  

const buttonStyles = {
  width : 60,
  height : "100%",
  borderWidth : 0,
  borderStyle : "solid",
  borderColor: `var(--${colors[borderColor]}-color)`,
  // color: `var(--${colors[color]}-color)`,
  // backgroundColor: `var(--${colors[backgroundColor]}-color)`,
  };

  
const buttonStylesDecr = {
  width : 60,
  height : "100%",
  borderWidth : 0,
  borderStyle : "solid",
  borderColor: `var(--${colors[borderColor]}-color)`,
  // color: `var(--${colors[color]}-color)`,
  backgroundColor: "white",
  };


  
const buttonStylesIncr = {
  width : 60,
  height : "100%",
  borderWidth : 0,
  borderStyle : "solid",
  borderColor: `var(--${colors[borderColor]}-color)`,
  color: "white",
  backgroundColor: "#b24242",
  };


  return (
    <div className="App">
        <div className = "wrapper">
      {state.countInitialValueFlag === false && getInitialValue()}
      {/* {state.maxValueSetFlag === false && getMaxValue()} */}
      <div className="counter">
      <button onClick={() => setState({count:state.count-1, maxValue:state.maxValue})}  
      style={buttonStylesDecr}
      className = "countdecrease"
      label="-"
          >-</button>

      {/* <h2>{state.count}</h2> */}
        <input
        type="number"
          value={state.count} 
          onChange={  handleCountChange}
      className="count-input"
      />
       <button onClick={() => incrementCounter() }    
       style={buttonStylesIncr}
       label="+"
    width={60}
    height={56}
    color="white"
    backgroundColor= "#b24242"
    borderWidth="0 0 0 1px"
    borderColor="primary">+</button>
    </div>
    </div>
        {/* <h1>Max {state.maxValue}</h1>  */}
    </div>
  );
}

export default App;

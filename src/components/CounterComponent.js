
function CounterComponent() {
  return (
    <div>
      <button onClick={() => incrementCounter() }>+</button>

          <input type="text" value={state.count} onChange={handleCountChange}/>
        <button onClick={() => setState({count:state.count-1, maxValue:state.maxValue})}>-</button>
      </div>
  )
};
export default CounterComponent;    
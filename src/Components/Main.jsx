import React, { useState } from 'react'

function Main() {
    const [counter,setCounter]=useState(0)

    function IncrementCounter()
    {
        setCounter(counter+1)
    }
    function DecrementCounter()
    {
        if (counter>0)
        {
            setCounter(counter-1)
        }
    }
    function ResetCounter()
    {
        setCounter(0)
    }
  return (
    <div className='m-3 p-5 d-flex'>
        <div className="container m-5 p-5 justify-content-center">
            <h3 className='text-success fw-bolder mb-5'>COUNTER APP</h3>
            <h1 className='mb-5'>{counter}</h1>
            <button className="btn btn-primary me-3" onClick={IncrementCounter}>Increment</button>
            <button className="btn btn-dark me-3" onClick={DecrementCounter}>Decrement</button>
            <button className="btn btn-danger me-3" onClick={ResetCounter}>Reset</button>
        </div>
    </div>
  )
}

export default Main
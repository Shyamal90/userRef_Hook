import React, { useRef } from 'react'

function Form() {
    const name = useRef("");

    const submitForm = (event)=>{
        event.preventDefault();
        console.log(name.current.value);
    }
  return (
    <div>
      <form onSubmit={submitForm}>
          <input type="text" ref={name}/>
          <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Form

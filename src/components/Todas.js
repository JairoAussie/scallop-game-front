import React, { useEffect } from 'react'
import { getQuizzes } from '../services/quiz_services'


const Todas = () => {

  //useReducer has two arguments
  // reducer function
  
  

  useEffect(()=>{
    //setMessageList(initialMessageList)
    //will run the reducer, and will send an object that is the action
    console.log("effect")
    getQuizzes()
      .then((messages)=>{
        console.log(messages)
      })
      .catch(error => console.log(error))
    
  },[])
  

  return (
    <div >
      <h1>Check the log</h1>     
    </div>
  )
}

export default Todas
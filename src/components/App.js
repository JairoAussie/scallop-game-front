import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NotFound from './NotFound'
import Master from './Master'
import QuestionDetails from './QuestionDetails'
import UserQuestion from './UserQuestion'
import Winner from './Winner'
import './App.css'
// import LoginForm from './LoginForm'
// import MessageForm from './MessageForm'
// import Messages from './Messages'
// import Message from './Message'
const App = () => {

  return (
    <div >
      <h1>El juego del scallop</h1>
       <BrowserRouter>
        <Switch>
          <Route exact path="/master" component={Master} />
          <Route exact path="/master/:id" component={QuestionDetails}/>
          <Route exact path="/question/:id" component={UserQuestion}/>
          <Route exact path="/question/:id/winner" component={Winner}/>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
          
    </div>
  )
}

export default App

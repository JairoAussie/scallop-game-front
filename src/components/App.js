import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NotFound from './NotFound'
import Master from './Master'
import Todas from './Todas'
import QuestionDetails from './QuestionDetails'
import UserQuestion from './UserQuestion'
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
          <Route exact path="/todas" component={Todas} />
          <Route exact path="/question/:id" component={UserQuestion}/>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
          
    </div>
  )
}

export default App

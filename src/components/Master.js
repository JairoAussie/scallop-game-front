import React, { useState } from 'react'
// import { useGlobalState } from '../utils/stateContext'
import { createQuiz} from '../services/quiz_services'

const MessageForm =({history})=>{
    // const {store, dispatch} = useGlobalState()
    // const {loggedInUser} = store
    // const {id} = useParams()

    const initialFormData = {
        question: ""
    }

    const [formData, setFormData] = useState(initialFormData)

    function handleFormData(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        //console.log(formData)
        
        createQuiz(formData)
        .then((quiz) => {
            console.log("add message to the list", quiz)
            return history.push(`/master/${quiz._id}`)
        })
        .catch(error => {console.log(error)})
        
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="text">Escribe la pregunta: </label>
                    <input type="text" name="question" id="question" value={formData.question} onChange={handleFormData}/>
                </div>
                <input type="submit" value="Enviar pregunta" />
            </form>
            
        </div>
    )
}

export default MessageForm
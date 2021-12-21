import React, { useState } from 'react'
// import { useGlobalState } from '../utils/stateContext'
import { createQuiz} from '../services/quiz_services'

const Master =({history})=>{
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
            return history.push(`/master/${quiz._id}`)
        })
        .catch(error => {console.log(error)})
        
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="question" id="question" placeholder='Escribe aquí la pregunta' value={formData.question} onChange={handleFormData}/>
                </div>
                <div><input type="submit" value="Enviar pregunta" className="btn" /> </div>

            </form>
            
        </div>
    )
}

export default Master
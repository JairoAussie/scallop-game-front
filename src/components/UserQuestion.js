import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { getQuizById, postAnswer } from '../services/quiz_services'

const UserQuestion =()=>{

    const [quiz, setQuiz] = useState(null)
    const {id} = useParams()
    const [participar, setParticipar] = useState(null)
    const initialFormData = {
        username: "", 
        answer: ""
    }

    const [formData, setFormData] = useState(initialFormData)

    function handleFormData(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        getQuizById(id)
        .then(quiz => setQuiz(quiz)) 
        .catch(error => console.log(error))
    },[id])

    function handleSubmit(e){
        e.preventDefault()
        //console.log(formData)
        
        postAnswer(id, formData)
        .then(() => {
            //return history.push(`/master/${quiz._id}`)
            setQuiz(initialFormData)
            setParticipar("gracias por participar")
        })
        .catch(error => {console.log(error)})
        
    }
    //if (!message) return null

    return(
        <div>
            {quiz? 
            <>
                <h4>{quiz.question}</h4>
                {participar? 
                    <p>{participar}</p>
                :
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                        <label htmlFor="text">Nombre del jugador: </label>
                        <input type="text" name="username" id="username" value={formData.username} onChange={handleFormData}/>
                        </div>
                        <div> 
                        <label htmlFor="text">Cuál es la respuesta a la pregunta?</label>
                        <input type="text" name="answer" id="answer" value={formData.answer} onChange={handleFormData}/>
                        </div>
                        <input type="submit" value="Envía tu respuesta" />
                    </form>
                </div>
            
                }
            </>
            :
                <>
                    <p>Loading...</p>
                </>
            }
        </div>
        
    )
}

export default UserQuestion
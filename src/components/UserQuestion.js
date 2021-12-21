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
                {participar? 
                    <p>{participar}</p>
                :
                <div>
                    <span className='ayuda'> La pregunta de la semana:</span>
                    <h4 className='pregunta'>{quiz.question}</h4>
                    <form onSubmit={handleSubmit}>
                        <div>
                        <input type="text" name="username" id="username" placeholder='Tu nombre' value={formData.username} onChange={handleFormData}/>
                        </div>
                        <div> 
                        <input type="text" name="answer" id="answer" placeholder='La respuesta a la pregunta' value={formData.answer} onChange={handleFormData}/>
                        </div>
                        <input className='btn' type="submit" value="Envía tu respuesta" />
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
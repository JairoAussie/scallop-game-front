import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { getQuizById, setWinner } from '../services/quiz_services'
import {
    WhatsappShareButton, 
    WhatsappIcon
// 
  } from "react-share";


const QuestionDetails =({history})=>{
    const [quiz, setQuiz] = useState(null)
    const {id} = useParams()

    useEffect(()=>{
        getQuizById(id)
        .then(quiz => setQuiz(quiz)) 
        .catch(error => console.log(error))
    },[id])

    function selectWinner(e){
        e.preventDefault()
        console.log(e.target.getAttribute('value'))
        setWinner(id, {username: e.target.getAttribute('value')})
        .then(() => {
            return history.push(`/question/${quiz._id}/winner`)

        })
        .catch(error => {console.log(error)})
    }
    //if (!message) return null

    return(
        <div>
            {quiz? 
            <>
                <span className='ayuda'> La pregunta de la semana:</span>
                <h4 className='pregunta'>{quiz.question}</h4>
                
                <WhatsappShareButton
                    url={`https://scallop-game.netlify.app/question/${id}`}
                    title="Aquí está la pregunta del scallop de esta semana"
                    separator="-> "
                >
                    <WhatsappIcon size={40} round />
                </WhatsappShareButton>
                <span className="ayuda">Click aquí para compartir la pregunta</span>
                <h4>Respuestas</h4>
                <ul>
                {quiz.answers.map((answer, index)=>
                    <li onClick={selectWinner} key={index} value={answer.username}>{answer.username}: {answer.answer}</li>
                )}
                </ul>
                <span className="ayuda">y ahora... click para elegir al ganador...</span>
                
            </>
            :
                <>
                    <p>Cargando...</p>
                </>
            }
        </div>
        
    )
}

export default QuestionDetails
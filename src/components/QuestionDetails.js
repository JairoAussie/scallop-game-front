import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { getQuizById } from '../services/quiz_services'
import {
    WhatsappShareButton, 
    WhatsappIcon
// 
  } from "react-share";


const QuestionDetails =()=>{
    const [quiz, setQuiz] = useState(null)
    const {id} = useParams()

    useEffect(()=>{
        getQuizById(id)
        .then(quiz => setQuiz(quiz)) 
        .catch(error => console.log(error))
    },[id])


    //if (!message) return null

    return(
        <div>
            {quiz? 
            <>
                <h4>{quiz.question}</h4>
                <p>Haz click en el ícono para compartir la pregunta por Whatsapp</p>
                <WhatsappShareButton
                    url={`https://scallop-game.netlify.app/question/${id}`}
                    title="Aquí está la pregunta del scallop de esta semana"
                    separator="-> "
                >
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <h4>Respuestas</h4>
                {quiz.answers.map((answer, index)=>
                    <p key={index}>{answer.username}: {answer.answer}</p>
                )}
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
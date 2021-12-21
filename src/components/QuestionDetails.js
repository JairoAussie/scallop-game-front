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
                <span className='ayuda'> La pregunta de la semana:</span>
                <h4 className='pregunta'>{quiz.question}</h4>
                
                <WhatsappShareButton
                    url={`https://scallop-game.netlify.app/question/${id}`}
                    title="Aquí está la pregunta del scallop de esta semana"
                    separator="-> "
                >
                    <WhatsappIcon size={40} round />
                </WhatsappShareButton>
                <span className="ayuda">Haz click en el ícono para compartir la pregunta por Whatsapp</span>
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
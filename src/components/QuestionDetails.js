import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { getQuizById } from '../services/quiz_services'
import {
    WhatsappShareButton, 
    WhatsappIcon

  } from "react-share";
//import { useGlobalState } from '../utils/stateContext'
//import { deleteMessage } from '../services/messagesService'


const QuestionDetails =()=>{
    //console.log(match)
    //console.log(message)
    //const {store, dispatch} = useGlobalState()
    //const {loggedInUser} = store
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
                <p>Click en el ícono para compartir la pregunta por Whatsapp</p>
                <WhatsappShareButton
                    url={`https://scallop-game.netlify.app/question/${id}`}
                    title="This is the scallop question"
                    separator=":: "
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
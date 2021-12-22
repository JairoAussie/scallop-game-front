import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { getQuizById } from '../services/quiz_services'
import logo from './scallop.jpg';


const Winner =()=>{
    const [quiz, setQuiz] = useState(null)
    const {id} = useParams()

    useEffect(()=>{
        getQuizById(id)
        .then(quiz => setQuiz(quiz)) 
        .catch(error => console.log(error))
    },[id])

    return(
        <div>
            <span className='ayuda'>Y el ganador es...</span>
            {quiz? 
            <>
                {quiz.answers.filter(answer => 
                    answer.winner).map((filteredAnswer, index) => (
                    <p key={index}>
                        {filteredAnswer.username}
                    </p>
                ))}  
                <img src={logo} />
            </>
            :
                <>
                    <p>Cargando...</p>
                </>
            }
        </div>
        
    )
}

export default Winner
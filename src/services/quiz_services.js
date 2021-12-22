import scallopAPI from "../config/api"

export async function getQuizzes(){
    console.log("getMessages")
    const response = await scallopAPI.get("/quiz")
    console.log(response)
    return response.data
}

export async function getQuizById(id){
    //console.log("getMessages")
    const response = await scallopAPI.get(`/quiz/${id}`)
    //console.log(response)
    return response.data
}

export async function postAnswer(id, data){
    const response = await scallopAPI.put(`/quiz/${id}`, data)
    //console.log(response)
    return response.data
}

export async function setWinner(id, data){
    const response = await scallopAPI.put(`/quiz/${id}/winner`, data)
    //console.log(response)
    return response.data
}

export async function createQuiz(data){
    const response = await scallopAPI.post("/quiz", data)
    console.log(response.data)
    return response.data

}


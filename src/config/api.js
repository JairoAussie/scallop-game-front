import axios from 'axios'

const scallopAPI = axios.create({
    baseURL: 'https://scallop-game.herokuapp.com/'
})



export default scallopAPI
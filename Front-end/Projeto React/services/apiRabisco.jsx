import axios from 'axios'

const api = axios.create({baseURL: 'http://127.0.0.1:5000'})

export async function getProdutos(){
    try{
        const response = await api.get('/produto')
        return response.data
    } catch (error){
        console.error(`Erro ao buscar produtos: ${error.mensage}`)
    }
}
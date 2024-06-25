import Titulo from '@/components/Titulo'
import Headerb from '../components/Headerb'
import CardListFuncionarios from '@/components/CardListFuncionarios';

import {useState, useEffect} from 'react'
import { getFuncionarios} from '@/services/apiReqres'


export default function funcionarios() {
    const [funcionarios, setFuncionarios] = useState([])
   
        async function buscaFuncionarios(){
            try{
                const data = await getFuncionarios()
                setFuncionarios(data)
            }catch (error){
                console.error('Erro ao buscar funcionarios:', error)
            }
        }

        useEffect(() => {
            buscaFuncionarios()
            const atualiza = setInterval(buscaFuncionarios, 5000)
            return function (){
                clearInterval(atualiza)
            }
        }, [])

  return (
    <div>
      <Headerb />
      <Titulo texto="Entre em contato conosco!" />
      <CardListFuncionarios funcionarios = {funcionarios}/>
  </div>
  );
}
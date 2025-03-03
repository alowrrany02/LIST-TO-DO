import {useState} from 'react'

const TodoForm = () => {
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviou form!")
    }
    
  return (
    <div>
      <div className='todo-form' >
        <h2>Criar Tarefa:</h2>
        <form>
            <input type="text" placeholder='Digite o título' />
            <select>
                <option value=""> Selecione uma Categoria</option>
                <option value="Trabalho"> Selecione uma Categoria</option>
                <option value="Pessoal"> Selecione uma Categoria</option>
                <option value="Estudos"> Selecione uma Categoria</option>
            </select>
            <button type='submit'>Criar Tarefa</button>
        </form>
      </div>
    </div>
  )
}

export default TodoForm

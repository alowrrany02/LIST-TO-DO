import React from 'react'

const TodoForm = () => {
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

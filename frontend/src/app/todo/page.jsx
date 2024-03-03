import React from 'react'

const Todo = () => {
  return (
    <div>
        <div className='container py-4'>
            <h1 className='display-3 fw-bold text-center'>Todo List</h1>
            <div className='card shadow'>
                <div className='card-header'>
                    <input className='form-control border-3 border-primary' type="text" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Todo
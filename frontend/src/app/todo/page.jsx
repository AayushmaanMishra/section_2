'use client'
import React, { useState } from 'react'


const Todo = () => {
  const [taskArray, setTaskArray] = useState([
   
  ]);
  const addnewtasks = (e) =>{
    // console.log(e.code);

    if (e.code === 'Enter'){
      console.log(e.target.value);
      const obj = {text: e.target.value, completed : false}
      setTaskArray([obj, ...taskArray])
      e.target.value = '';
    }
  }

  const deleteTasks = (index) => {
    console.log(index);
    const temp = taskArray;
    temp.splice(index, 1);
    setTaskArray([...temp]);
  }

  const completeTask = (index) => {
    const temp = taskArray;
    temp[index].completed = true;
    setTaskArray([...temp]);
    console.log(temp);
  }

  return (
    <div>
        <div className='container py-4'>
            <h1 className='display-3 fw-bold text-center'>Todo List</h1>
            <div className='card shadow'>
                <div className='card-header'>
                    <input onKeyDown={addnewtasks}   className='form-control border-3 border-primary' type="text" />
                </div>
                <div className='card body'>
                    {
                      taskArray.map((task, index) => {
                        return <div key={index} className='d-flex justify-content-between p-3'>
                          <p>{task.text}</p>
                          {task.completed ? 
                          <span className='badge bg-success'>Finished </span> 
                          : <span className='badge bg-warning'> Pending</span>}
                          <button onClick={() => {deleteTasks(index)}} className='btn btn-danger'>Delete</button>
                          <button onClick={() => {completeTask(index)}}className='btn btn-success' >Complete</button>
                          </div>
                      })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Todo
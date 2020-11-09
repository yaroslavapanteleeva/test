import React, { useState } from 'react'
import FormAddNotes from './FormAddNotes'

const FormAddTasks = () => {
    const [value, setValue] = useState('')

    return (
        <form className="form-add-tasks" >
            <input
                type="text"
                className="form-control"
                placeholder="Введите название списка"
                value={value}
                onChange= {e => {setValue(e.target.value)}}
            />
            <div className="form-group form-check">
                <input 
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">Срочное</label>
            </div>
            
            <button type="submit" className="btn btn-warning">Добавить дело</button>
        </form>
    )
}

export default FormAddTasks
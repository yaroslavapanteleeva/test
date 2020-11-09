import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from '../../redux/actions/noteActions'
import FormAddNotes from './FormAddNotes'

const FormAddTasks = ({note, notes}) => {
    const [value, setValue] = useState('')

    const dispatch = useDispatch()
    console.log(note.id)

    const handleSubmit = e => {
        e.preventDefault()
        const obj = {
            
                    text : value,
                    id: Math.random()
           
        }

        const newTask = notes.map(item => {
            if (item.id === note.id) {
                console.log(item.tasks)

                item.tasks = [...item.tasks, obj]
            }
            return item

        })
        dispatch(addNote(newTask))

        setValue('')
    }

    return (
        <form className="form-add-tasks" onSubmit={handleSubmit}>
            <input
                type="text"
                className="form-control"
                placeholder="Введите дело"
                value={value}
                onChange= {e => {setValue(e.target.value)}}
            />
            <div className="form-group form-check">
                <input 
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">Срочное</label>
            </div>
            
            <button type="submit" className="btn btn-warning">Добавить дело</button>
        </form>
    )
}

export default FormAddTasks
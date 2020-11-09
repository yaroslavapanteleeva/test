import React, {useState} from 'react';
import {useDispatch } from 'react-redux';
import {addNote} from '../../redux/actions/noteActions'

import './Form.scss'

const FormAddNotes = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')

    
  
    const handleSubmit = e => {
        e.preventDefault()
        const notes = {
            title: value
        }
        dispatch(addNote(notes))
        console.log(notes)
        setValue('')
    
    }
    return (
        <form className="form-add-notes" onSubmit={handleSubmit}>
            <input
                type="text"
                className="form-control"
                placeholder="Введите название списка"
                value={value}
                onChange= {e => {setValue(e.target.value)}}
            />
            <button type="submit" className="btn btn-warning">Добавить список</button>
        </form>
    )
    
}


export default FormAddNotes;
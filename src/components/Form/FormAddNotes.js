import React, {useState} from 'react';
import { connect } from 'react-redux';
import {addNote} from '../../redux/actions/noteActions'

import './Form.scss'

const FormAddNotes = () => {
    const [value, setValue] = useState('')

    
  
    const handleSubmit = e => {
        e.preventDefault()
        addNote(value)
        setValue('')
    }
    return (
        <form className="form-add-notes" onSubmit={handleSubmit}>
            <input
                type="text"
                className="form-control"
                placeholder="Введите название списка"
                onChange= {e => {setValue(e.target.value)}}
            />
            <button type="submit" className="btn btn-warning">Добавить список</button>
        </form>
    )
    
}

const mapDispatchToProps = dispatch => {
    return {
        addNote: (note) => dispatch(addNote(note))
    }
}

export default connect(null, mapDispatchToProps)(FormAddNotes)
import React from 'react'
import { connect } from 'react-redux'
import FormAddTasks from '../Form/FormAddTasks'
import Tasks from '../Tasks/Tasks'

import './Content.scss'

 const Content = ({note, notes}) => {
    console.log(note.id)
    console.log(notes)
    return (
        <div className="content">
            <h1>{note.title}</h1>
            <Tasks lists={note}/>
            <FormAddTasks note={note} notes={notes}/>
        </div>
        
    )
}


export default Content
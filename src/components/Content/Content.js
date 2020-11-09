import React from 'react'
import FormAddNotes from '../Form/FormAddNotes'
import FormAddTasks from '../Form/FormAddTasks'

import './Content.scss'

export const Content = () => {
    return (
        <div className="content">
            <h1>Hello</h1>
            <FormAddTasks />
        </div>
        
    )
}
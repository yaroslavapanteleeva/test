import React from 'react';
import FormAddNotes from '../Form/FormAddNotes';
import Notes from '../Notes/Notes';



import './Sidebar.scss'

export const Sidebar = () => {
    return (
        
        <div className="sidebar">
           <Notes />
            <FormAddNotes />
        </div>
        
    )
}
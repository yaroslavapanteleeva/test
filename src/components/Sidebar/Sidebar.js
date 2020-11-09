import React, { useState } from 'react';
import FormAddNotes from '../Form/FormAddNotes';
import Notes from '../Notes/Notes';



import './Sidebar.scss'

export const Sidebar = ({activeItem, setActiveItem}) => {
    
    return (
        
        <div className="sidebar">
           <Notes activeItem={activeItem} setActiveItem={setActiveItem}/>
            <FormAddNotes />
        </div>
        
    )
}
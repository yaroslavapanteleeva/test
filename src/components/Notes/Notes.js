import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'

import './Notes.scss'

const Notes = ({notes}) => {
    return (
        <div className="list-group">
            {notes && notes.map(note => (
                <NavLink
                    
                    className="list-group-item list-group-item-action"
                    key={note.id}
                    to="/notes-one"
                    exact
                    
                >
                    <div className="list-group-item__container">
                        <strong>{note={note}}</strong>
                        <button type="button" className="btn btn-outline-danger btn-sm">&times;</button>
                    </div>
                
                </NavLink>

            ))}
        
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state);
    const notes = state.firestore.ordered.notes;
    return {
      notes: notes
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect((ownProps) => [
      {
        collection: "notes",
        orderBy: ["date", "desc"]
      }
    ])
)(Notes);
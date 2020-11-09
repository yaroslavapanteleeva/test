import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import './Tasks.scss'

const Tasks = ({lists}) => {
    console.log(lists.id)
    return (
        <ul className="list-group">

            {lists.tasks && lists.tasks.map(task => (
                <li key={task.id} className="list-group-item task">
                    <div className="list-group-item__container">
                        <strong>{task.text}</strong>
                        <button type="button" className="btn btn-outline-danger btn-sm" >&times;</button>
                    </div>
                </li>
                
            ))}
            
        </ul>
    )
}

/* const mapStateToProps = (state) => {
    console.log(state)
    const lists= state.firestore.ordered.notes;
    return {
      lists: lis
     
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect(() => [
      {
        collection: "notes",
        orderBy: ["date", "desc"]
      }
    ])
)(Tasks); */

export default Tasks
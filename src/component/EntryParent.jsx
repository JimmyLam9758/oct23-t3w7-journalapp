import { useState } from 'react'

export default function EntryParent(props){

    let [editMode, setEditMode] = useState(false);

    return(
        <section>
        {editMode ? <EntryForm /> : <Entry /> } 
        
        <button onClick={() => setEditMode(!editMode)}>Toggle Edit Mode</button>
        </section>
    )
}
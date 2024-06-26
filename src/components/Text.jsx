import React, {useState} from 'react'
import Draggable from 'react-draggable'

function Text() {
    const [editMode, setEditMode] = useState(false)
    const [val , setVal] =useState('Double Click to Edit');
    
  return (
    <Draggable>
        {
          editMode ? (
          <input value={val} 
          onDoubleClick={e=> setEditMode(false)}
          onChange={e=> setVal(e.target.value)}/> 
          ): (
            <h3 onDoubleClick={e=> setEditMode(true)}>{val}</h3>
            )
        }
    </Draggable>
  )
}

export default Text
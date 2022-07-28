import React from 'react'

const Sidebar = ({notes, currentNote, setCurrentNote}) => {

  const noteElements = notes.map((note, index) => (
    <div key={note.id}>
      <h4>Note {index + 1}</h4>
    </div>
    )
)

  return (
    <div className="sidebar-main-container">
      <div className="sidebar-sub-container">
        <h3>Notes</h3>
        <button className="new-note">+</button>
      </div>
      {noteElements}
    </div>
  )
}

export default Sidebar
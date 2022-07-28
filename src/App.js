import Sidebar from './components/Sidebar'
import Editor from './components/Editor'
import { useEffect, useState } from 'react';
import Split from 'react-split'
import { nanoid } from 'nanoid'

import React from 'react'

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  )

  const [currentNote, setCurrentNote] = useState(notes[0] || '')

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  const createNote = () => {
    const newNote = {
      body: "# Type your new note here ...",
      id: nanoid()
    }
    setNotes(prevNotes => [newNote, ...prevNotes ])
    setCurrentNote(newNote)
  }

  const updateNote = (text) => {
    setNotes(oldNotes => {
      const newNotes = []
      for (let i = 0; i < notes.length; i++) {
        const oldNote = oldNotes[i]
        if (oldNote.id === currentNote.id) {
          newNotes.unshift({...oldNote, body: text})
        } else {
          newNotes.push(oldNote)
        }
      }
      return newNotes
    })
  }

  return (
    <div className="App">
    { notes.length > 0 
      ? 
      <Split
        sizes={[20, 80]}
        direction="horizontal" 
        className='split'
      >
        <Sidebar notes={notes} currentNote={currentNote} setCurrentNote={setCurrentNote}/>
        <Editor currentNote={currentNote} updateNote={updateNote}/>
      </Split>
      :
      <div>
        <h1>You have no notes</h1>
        <button onClick={createNote}>Create a Note</button>
      </div> 
    }
    </div>
  );
}

export default App;

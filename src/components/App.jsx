import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Note from './Note.jsx';
// import notes from '../notes.js';
import CreateArea from './CreateArea.jsx'




function App() {    
    const [notes, setNotes] = React.useState([])

    function addNote(newNote) {
        setNotes((prevNotes) => {
            return [...prevNotes, newNote]
        })
    }

    function deleteNote(id) {
        setNotes((prevNotes) => {
            return prevNotes.filter((notesItem, index) => {
                return index !== id
            })
        })
    }

    return (
    <div>
        <Header />

        <CreateArea 
            onAdd={addNote}
        />
        
        {notes.map((notesItem, index) => {
            return (
                <Note
                key={index}
                id={index}
                title={notesItem.title}
                content={notesItem.content}
                onDelete={deleteNote}
                />
            )
        })}

        {/* {notes.map((notesItem) => {
            return (
                <Note 
                title={notesItem.title}
                content={notesItem.content}
                />
            )
        })} */}
        
        <Footer />
    </div>
    );
}

export default App;
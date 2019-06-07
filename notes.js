const fs = require('fs');
const chalk = require('chalk');

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);


    if(!duplicateNote) {
        const newNote = {
            title: title,
            body: body
        }
        notes.push(newNote);
        saveNotes(notes);
        console.log('new note adding succesfully ');
    }else{
        console.log('new note is taken!')
    }
}

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', notesJSON);
}



const loadNotes = () => {
    try {
        const bufferData = fs.readFileSync('notes.json');
        const toString = bufferData.toString();
        return JSON.parse(toString);
    } catch (err) {
        return []
    }
}

const removeNotes = (title) => {
 
        const notes = loadNotes();
        const checknotes = notes.filter((note) => note.title !== title);
     
        if(notes.length > checknotes.length){
            saveNotes(checknotes);
            console.log(chalk.green.bold.inverse('note removed !') );
        }else{
            console.log(chalk.red.bold.inverse('no note found !') );
        }      
}

const listnote = () => {
    const notes = loadNotes();
    console.log(chalk.green.inverse('your notes') );
    notes.forEach(note => {
        
        console.log('Title: ', note.title);
        console.log('Body ',note.body)
    })
}

const readNotes = (title) => {
    const notes = loadNotes();
    const findByTitle = notes.find((note) => note.title === title);
    if(findByTitle){
        console.log(chalk.green.inverse('reading notes ....') )
        console.log('Title: ', findByTitle.title)
        console.log('Body: ', findByTitle.body)
    }else{
        console.log(chalk.red('no note found'))
    }
}


module.exports = {addNotes, removeNotes, listnote, readNotes};
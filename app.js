const notes = require('./notes');
const yargs = require('yargs');

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new Note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
       notes.addNotes(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove note',
    builder: {
        title: {
            describe:'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list',
    handler(){
        notes.listnote();
    }
})

yargs.command({
    command: 'read',
    describe: 'Read note ...',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title);
    }
})

yargs.parse()
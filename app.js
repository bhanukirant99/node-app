const fs = require('fs');

fs.appendFileSync('note.txt', '. This is written by nodejs core mudules -> fs.appendFileSync function');

const event = {
    event: 'event',
    name: function() {
        console.log(this.event);
    }
}

const event = {
    event: 'event',
    name: () => {
        console.log(this.event);
    }
}

const event = {
    event: 'event',
    guests: ['raj', 'ram', 'sam'],
    name() {
        console.log(this.event);
        this.guests.forEach((guest) => {
            console.log(guest);
        })
    }
}

event.name();

//mongod.exe --dbpath=/Users/91988/MongoDB-data
//C:\Users\91988\MongoDB\Server\4.2\bin>mongod.exe --dbpath=/Users/91988/MongoDB-data
// cd Users\91988\MongoDB\Server\4.2\bin>mongod.exe
const fs = require('fs');

// const book = {
//     title: 'Think and Grow Rich',
//     author: 'Nepolian Hill'
// };

// const bookjson = JSON.stringify(book);

// fs.writeFileSync('book.json', bookjson);

// const bookin = fs.readFileSync('book.json');
// const bookjson = bookin.toString();
// const book = JSON.parse(bookjson);

// console.log(book);

const bookin = fs.readFileSync('book.json');
const bookjson = bookin.toString();
const book = JSON.parse(bookjson);

const newBook = book;

newBook.name = 'Raj';
newBook.age= 17;

const newbookjson = JSON.stringify(newBook);
fs.writeFileSync('book.json', newbookjson);
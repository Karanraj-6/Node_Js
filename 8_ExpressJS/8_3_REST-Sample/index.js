const express = require('express')
const app = express()


const books = [
    {
        id: 1,
        Name: "book1",
        author: "author1" 
    },
    {
        id: 2,
        Name: "book2",
        author: "author2" 
    },
    {
        id: 3,
        Name: "book3",
        author: "author3" 
    }
]


app.use(express.json())


// home page
app.get('/',(req,res)=>{
    res.status(200).send('this is home page!');
})

// get all books
app.get('/all',(req,res) =>{
    if (books.length > 0){
        res.status(200).send(books);
    }
    else{
        res.status(200).send(`No any book available`);
    }
})

// get a single book 
app.get('/all/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const book = books.find(book => book.id === id );
    if (!book){
        res.status(400).send(`requested book in not present`);
    }
    else{
        res.status(200).send(book);
    } 
});

// add a new book

app.post('/add',(req,res)=>{
    try{
    const bookdata = req.body;

    const newbook = {
        id : bookdata.id,
        Name: bookdata.Name,
        author: bookdata.author
    }
    
    books.push(newbook);
    res.status(200).send(`new book added`);
    }catch(e){
        res.status(400).send(`something went wrong! ${e.message}`);
    }
})

// update a book 

app.put('/update/:id', (req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const bookData = req.body;

        const book = books.find(b => b.id === id);

        if (!book) {
            return res.status(404).send('Book not found');
        }

        // Update the book fields
        book.id = bookData.id || book.id;
        book.Name = bookData.Name || book.Name;
        book.author = bookData.author || book.author;

        res.status(200).send('Book updated successfully');
    } catch (e) {
        res.status(400).send(`Something went wrong: ${e.message}`);
    }
})

// delete a book 

app.delete('/delete/:id', (req, res)=>{
    try {
        const id = parseInt(req.params.id);

        const index = books.findIndex(b => b.id === id);

        if (index === -1) {
            return res.status(404).send('Book not found');
        }

        books.splice(index, 1); // removes the book at that index

        res.status(200).send('Book deleted successfully');
    } catch (e) {
        res.status(400).send(`Something went wrong: ${e.message}`);
    }
});


// start express server
app.listen(PORT=3000,()=>{
    console.log(`Server running on http/localhost:${PORT}`);
});
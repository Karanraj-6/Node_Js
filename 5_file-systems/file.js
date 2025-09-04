// File System Module in Node.js
// ----------------------------
// The 'fs' module provides functions to interact with the file system (read, write, create, delete files and folders).
// The 'path' module helps handle file and directory paths.

const fs = require('fs');
const path = require('path');

// 1. Create a 'data' folder in the current directory if it doesn't exist
let dataFolder = path.join(__dirname, 'data');

if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log('Data folder successfully created');
} else {
    console.log('Data folder already exists');
}

// 2. Create a file and write content to it
let filepath = path.join(dataFolder, 'file.txt');
fs.writeFileSync(filepath, 'This file was created in the data folder as file.txt. This text was written using writeFileSync.');
console.log('File created and content written to file.txt');

// 3. Read content from the file
let readContent = fs.readFileSync(filepath, 'utf8');
console.log(`Reading content from ${filepath}:`, readContent);

// Additional Useful Methods:
// - fs.appendFileSync(filepath, data): Appends data to a file
// - fs.unlinkSync(filepath): Deletes a file
// - fs.readdirSync(dataFolder): Lists files in a directory
// - fs.rmdirSync(dataFolder): Removes a directory

// Notes:
// - Use synchronous methods (e.g., writeFileSync) for simple scripts. For production, prefer asynchronous methods (e.g., writeFile) to avoid blocking the event loop.
// - Always handle errors in real applications using try/catch or callbacks.
// - __dirname is the absolute path of the current directory.

// async fs functions

let dataFolderAsync = path.join(__dirname, 'dataAsync');
if (!fs.existsSync(dataFolderAsync)) {
    fs.mkdirSync(dataFolderAsync);
    let pathfileAsync = path.join(dataFolderAsync, "Asyncfile.txt");
    // Write to file asynchronously
    fs.writeFile(pathfileAsync, "This is text written in Asyncfile.txt", (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('Async file created and content written.');
        // Read the file asynchronously after writing
        fs.readFile(pathfileAsync, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                return;
            }
            console.log(`Reading content from ${pathfileAsync}:`, data);
        });
    });
} else {
    console.log('Data folder already exists');
}


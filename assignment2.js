//1 Write a function that logs the current file path and directory.(0.5 Grade)
// • Output Example: {File: “/home/user/project/index.js”, Dir: “/home/user/project”}
function File() {
    return { File: __filename, Dir: __dirname }
}
console.log(File());
//2 Write a function that takes a file path and returns its file name.(0.5 Grade)
// • Input Example: /user/files/report.pdf
// • Output Example:"report.pdf "

function getFileName(filePath) {
    return filePath.split('/').pop();
}

console.log(getFileName("/user/files/report.pdf"));
// 3. Write a function that builds a path from an object (0.5 Grade)
// • Input Example:{ dir:"/folder", name:"app", ext:".js"}
// • Output Example: “/folder/app.js”
const path = require('path');
function buildPath(pathObj) {
    return path.format(pathObj);
}
console.log(buildPath({ dir: "/folder", name: "app", ext: ".js" }));
// 4. Write a function that returns the file extension from a given file path.(0.5 Grade)
// • Input Example: /docs/readme.md"
// • Output Example: “.md”
function getFileExtension(filePath) {
    return filePath.substring(filePath.lastIndexOf('.'));
}

console.log(getFileExtension("/docs/readme.md"));
// 5. Write a function that parses a given path and returns its name and ext.(0.5 Grade)
// • Input Example: /home/app/main.js
// • Output Example:{Name: “main”, Ext:“.js”}


function parsePath(filePath) {
    const parsed = path.parse(filePath);
    return { Name: parsed.name, Ext: parsed.ext };
}
console.log(parsePath("/home/app/main.js"));


// 6. Write a function that checks whether a given path is absolute.(0.5 Grade)
// • Input Example: /home/user/file.txt
// • Output Example: true
function isAbsolute(filePath) {
    return path.isAbsolute(filePath);
}
console.log(isAbsolute("/home/user/file.txt"));
// 7. Write a function that joins multiple segments (0.5 Grade)
// • Input:"src","components", "App.js"
// • Output Example: src/components/App.js
function joinSegments(...segments) {
    return path.join(...segments);
}
console.log(joinSegments("src", "components", "App.js"));

// 8. Write a function that resolves a relative path to an absolute one.(0.5 Grade)
// • Input Example: ./index.js
// • Output Example: /home/user/project/src/index.js
function resolvePath(relativePath) {
    return path.resolve(relativePath);
}
console.log(resolvePath("./index.js"));

// 9. Write a function that joins two paths.(0.5 Grade)
// • Input Example: /folder1, folder2/file.txt
// • Output Example: /folder1/folder2/file.txt
function joinTwoPaths(path1, path2) {
    return path.join(path1, path2);
}
console.log(joinTwoPaths("/folder1", "folder2/file.txt"));

// 10. Write a function that deletes a file asynchronously.(0.5 Grade)
// • Input Example: /path/to/file.txt
// • Output Example: The file.txt is deleted.
const fs = require('fs');

function deleteFile(filePath) {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.log("Error");
            return;
        }
        console.log("The file.txt is deleted.");
    });
}
// 11. Write a function that creates a folder synchronously.(0.5 Grade)
// • Output Example: “Success”
function createFolder() {
    fs.writeFile("newFolder", "", (err) => {
        if (err) {
            console.log("Error");
            return;
        }
        console.log("Success");
    });
}

createFolder();

// 12. Create an event emitter that listens for a "start" event and logs a welcome message.(0.5 Grade)
// • Output Example: Welcome event triggered!
const EventEmitter = require('events');
const events = new EventEmitter();

events.on('start', () => {
    console.log("Welcome event triggered!");
});

events.emit('start');

// 13. Emit a custom "login" event with a username parameter.(0.5 Grade)
// • Input Example: "Ahmed"
// • Output Example:“User logged in: Ahmed”
events.on('login', (username) => {
    console.log("User logged in: " + username);
});

events.emit('login', "ziad")

// 14. Read a file synchronously and log its contents.(0.5 Grade)
// • Input Example: "./notes.txt"
// • Output Example: the file content => “This is a note.”
function readFileContent() {
    const content = fs.readFileSync("./text.txt", "utf8");
    console.log("the file content => " + content);
}

readFileContent();

// 15. Write asynchronously to a file.(0.5 Grade)
// • Input: path: "./async.txt", content: "Async save"
function writeFileAsync() {
    fs.writeFile("./text.txt", "Async save", (err) => {
        if (err) {
            console.log("Error");
            return;
        }
        console.log("Success");
    });
}

writeFileAsync();

// 16. Check if a directory exists. (0.5 Grade)
// • Input Example: "./notes.txt"
// • Output Example: true
function checkExist() {
    const result = fs.existsSync("./text.txt");
    console.log(result);
}

checkExist();

// 17. Write a function that returns the OS platform and CPU architecture. (0.5 Grade)
// • Output Example: {Platform: “win32”, Arch: “x64”}
const os = require('os');

function getSystemInfo() {
    console.log({
        Platform: os.platform(),
        Arch: os.arch()
    });
}

getSystemInfo();
// 18. Use a readable stream to read a file in chunks and log each chunk. (0.5 Grade)
// • Input Example: "./big.txt"
// • Output Example: log each chunk
function readInChunks() {
    const stream = fs.createReadStream("./big.txt", "utf8");

    stream.on('data', (chunk) => {
        console.log(chunk);
    });
}

readInChunks();

// 19. Use readable and writable streams to copy content from one file to another. (0.5 Grade)
// • Input Example: "./source.txt", "./dest.txt"
// • Output Example: File copied using streams
function copyFileUsingStreams() {
    const readable = fs.createReadStream("./source.txt");
    const writable = fs.createWriteStream("./dest.txt");

    readable.pipe(writable);

    writable.on('finish', function () {
        console.log("File copied using streams");
    });
}

copyFileUsingStreams();

// 20. Create a pipeline that reads a file, compresses it, and writes it to another file. (0.5 Grade)
// • Input Example: "./data.txt", "./data.txt.gz"
function copyFile() {
    const readable = fs.createReadStream("./data.txt");
    const writable = fs.createWriteStream("./data.txt.gz");

    readable.pipe(writable);

    console.log("Success");
}

copyFile();
// 1)Create an API that adds a new user to your users stored in a JSON file (1 Grade)
// (ensure that the email of the new user doesn’t exist before)
// o URL: POST /user
const http = require("http");

let users = [
    { id: 1, name: "User 1", age: 27, email: "user@email.com" }
];

const server = http.createServer((req, res) => {
    if (req.url == "/user" && req.method == "POST") {
        let addUser = "";
        req.on("data", (chunk) => {
            addUser += chunk;
        });
        req.on("end", () => {
            let newUser = JSON.parse(addUser);
            let found = false;

            for (let i = 0; i < users.length; i++) {
                if (users[i].email == newUser.email) {
                    found = true;
                    break;
                }
            }

            if (found) {
                res.end(JSON.stringify({ message: "Email already exists." }));
            } else {
                newUser.id = users.length + 1;
                users.push(newUser);
                res.end(JSON.stringify({ message: "User added successfully." }));
            }
        });
    }
});

server.listen(3000, () => {
    console.log("server is running port 3000");
});

// 2)Create an API that updates an existing user's name, age, or email by their ID. The user ID should be retrieved
// from the URL (1 Grade)
// Note: Remember to update the corresponding values in the JSON file
// o URL: PATCH /user/id
const http = require("http");

let users = [
    { id: 1, name: "User 1", age: 27, email: "user@email.com" }
];

const server = http.createServer((req, res) => {
    if (req.url.startsWith("/user/") && req.method == "PATCH") {
        let id = req.url.split("/")[2];
        let updateData = "";

        req.on("data", (chunk) => {
            updateData += chunk;
        });

        req.on("end", () => {
            let updates = JSON.parse(updateData);
            let userFound = false;

            for (let i = 0; i < users.length; i++) {
                if (users[i].id == id) {
                    userFound = true;
                    if (updates.name) users[i].name = updates.name;
                    if (updates.age) users[i].age = updates.age;
                    if (updates.email) users[i].email = updates.email;
                    break;
                }
            }

            if (userFound) {
                res.end(JSON.stringify({ message: "User age updated successfully." }));
            } else {
                res.end(JSON.stringify({ message: "User ID not found." }));
            }
        });
    }
});

server.listen(3000, () => {
    console.log("server is running port 3000");
});

// 3)Create an API that deletes a User by ID. The user id should be retrieved from the URL (1 Grade)
// Note: Remember to delete the user from the file
// o URL: DELETE /user/id
const http = require("http");

let users = [
    { id: 1, name: "User 1", age: 27, email: "user@email.com" }
];

const server = http.createServer((req, res) => {
    if (req.url.startsWith("/user/") && req.method == "DELETE") {
        let id = req.url.split("/")[2];
        let userIndex = -1;

        for (let i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                userIndex = i;
                break;
            }
        }

        if (userIndex >= 0) {
            users.splice(userIndex, 1);
            res.end(JSON.stringify({ message: "User deleted successfully." }));
        } else {
            res.end(JSON.stringify({ message: "User ID not found." }));
        }
    }
});

server.listen(3000, () => {
    console.log("server is running port 3000");
});

// 4)Create an API that gets all users from the JSON file. (1 Grade)
// o URL: GET /user
const http = require("http");

let users = [
    { id: 1, name: "User 1", age: 27, email: "user@email.com" }
];

const server = http.createServer((req, res) => {
    if (req.url == "/user" && req.method == "GET") {
        res.end(JSON.stringify(users));
    }
});

server.listen(3000, () => {
    console.log("server is running port 3000");
});
// 5)Create an API that gets User by ID. (1 Grade)
// o URL: GET /user/:id
// o Output:
const http = require("http");

let users = [
    { id: 1, name: "User 1", age: 27, email: "user@email.com" }
];

const server = http.createServer((req, res) => {
    if (req.url.startsWith("/user/") && req.method == "GET") {
        let id = req.url.split("/")[2];
        let foundUser = null;

        for (let i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                foundUser = users[i];
                break;
            }
        }

        if (foundUser) {
            res.end(JSON.stringify(foundUser));
        } else {
            res.end(JSON.stringify({ message: "User not found." }));
        }
    }
});

server.listen(3000, () => {
    console.log("server is running port 3000");
});
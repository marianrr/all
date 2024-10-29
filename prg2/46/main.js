const fs = require("fs")

fs.appendFile("file1.txt", "\ndj guga la felipa", (err) => {
    if (err) throw err;
    console.log('Text adăugat!');
});

fs.readFile("file1.txt", "utf8", (err, data) => {
    if(err) {
        console.error(err)
        return
    }
    console.log(data)
})
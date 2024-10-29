
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const vowels = ["a", "e", "i", "o", "u"]

function vowelCipher(string) {
    c = ''
for(let r of string) {

if(!vowels.includes(r)) {
 c+=r
 
}

else {
    c+= alphabet[alphabet.indexOf(r)+1]
}

}

return c
}


console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"
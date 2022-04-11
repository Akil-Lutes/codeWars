/* 
Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"
*/

const nameShuffler = (str) => {
    // reverse .split(' ') takes the whole word like "john" and "McClane"
    // https://www.freecodecamp.org/news/javascript-split-how-to-split-a-string-into-an-array-in-js/ that explains answer
    // split the string based on the space ('  ') character. Here the space character acts as a splitter or divider.
    return str.split(' ').reverse().join(' ');
    
}

console.log(nameShuffler('john McClane'));
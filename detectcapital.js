//Objective is to see whether a string has the correct capitalization.
//A string's capitalization is correct if all characters are capital OR 
//if only the first character is capital

let word = 'USA'


//O(n) solution that uses regex to check if all characters are uppercase
//then uses other checks to see if any other characters are also uppercase

if (word.match(/^[A-Z]*$/)) {
    return true
}

let count = 0

for (let char of word) {
    if (char == char.toUpperCase()) {
        count++
    }
}

if (count == 1 && word[0] == word[0].toUpperCase()) {
    return true
}

for (let char of word) {
    if (char == char.toUpperCase()) {
        return false
    }
}

return true
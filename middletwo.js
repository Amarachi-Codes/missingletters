// String-1 -- middleTwo
// Given a string of even length, return a string made of the middle two chars, so the string "string" 
// yields "ri". The string length will be at least 2.

// Examples

// middleTwo('string') →
// middleTwo('code') →
// middleTwo('Practice') →

function middleTwo(str) {
    let len = str.length / 2
    let end = len + 1
    let start = len - 1
    if (str.length % 2 === 0 && str.length >= 2) {
        let substr = str.slice(start, end)
        return substr
    } return ''
} console.log(middleTwo('string'));
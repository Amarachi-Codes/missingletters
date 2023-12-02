// Missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and returns the missing letter in the array.

// You will always get a valid array. And it will always be exactly one letter missing. The length of the array will always be at least 2. The array will always contain letters in only one case.

// E.g ['a','b','c','d','f'] =>'e'
// ['O','Q','R','S']=>'P'

function missingletter(arr){
    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let start = alphabet.indexOf(arr[0])
    let end = alphabet.indexOf(arr[arr.length-1])
    let subarr = alphabet.slice(start,end+1)
    for(let i = 0; i < subarr.length; i++){
        let letter = subarr[i]
        if(!arr.includes(letter)){
            return letter
        }
    }return "No missing letter"
}console.log(missingletter(['a','b','c','d','f']));

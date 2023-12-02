// String-1 -- withoutX
// Given a string, if the first or last chars are 'x', return the string without those 'x' chars, 
// and otherwise return the string unchanged.

// Examples

// withoutX('xHix') → Hi
// withoutX('xHi') → Hi
// withoutX('Hxix') → Hxi

function withoutX(str){
 let start = str.indexOf(str.charAt(1))
let end = str.length -1
if(str.startsWith("x") && str.endsWith("x")){
   let substr = str.slice(start,end) 
   return substr
}if(str.startsWith("x")){
    let frontx = str.slice(start) 
    return frontx
 }if(str.endsWith("x")){
    let endx = str.slice(0,end) 
    return endx
 } return str
}console.log(withoutX('chxiu'));
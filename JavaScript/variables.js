// var has scope everywhere in function ->
function variable_function() {
    for (var i = 0; i < 10; i++){
        console.log(i)
    }
    console.log(i)
}
// variable_function()

//HOISTING: using a variable and declaring it later
a = 12345
console.log(a)
var a    //NOTE: let AND const DO NOT WORK, ONLY var

const dog={
    age: 3
  }
dog.age = 5
// dog = { name: 'biko'}
console.log(dog)

var b
b = 34
for(let b =0; b<4; b++){
 console.log(b) //in this case the b in the loop is printed
}
console.log(b) //in this case the b = 34 is printed


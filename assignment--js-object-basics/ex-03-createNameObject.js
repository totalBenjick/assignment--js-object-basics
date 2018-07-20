/**
 * createNameObject()
 *
 * Write a function called `createNameObject` that takes a full first
 * & last name string and returns an object with `firstName`
 * and `lastName` properties that have string values.
 * TENEMOS QUE  TOMAR 
**/ 


// ++ YOUR CODE HERE
function createNameObject(palabra){
	var novaArray = palabra.split(" ");
	var nombre = novaArray[0]
	var apellido =  novaArray[1]

	var nuevoObjeto = {
		firstName : nombre,
		lastName : apellido
	}
 	
 	return nuevoObjeto
}
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-03');
  console.log('%cFunction: createNameObject', 'background-color: green; color: white')
console.groupEnd();


var nameObj1 = createNameObject("Benzo Lorenzo")
var nameObj2 = createNameObject("Felipe Tortuga")
var nameObj3 = createNameObject("Lupe Maria")

/* ----------------------- TEST-1  ----------------------- */
// Function returns an object
/* ------------------------------------------------------ */
console.log('TEST-1');

console.assert(typeof nameObj1 === "object")
console.assert(typeof nameObj2 === "object")


/* ----------------------- TEST-2  ----------------------- */
// Function accepts full name string separated by space
//   returns object with `firstName` and `lastName` properties
//
/* ------------------------------------------------------ */
console.log('TEST-2');

console.assert(nameObj1.firstName === 'Benzo')
console.assert(nameObj1.lastName === 'Lorenzo')

console.assert(nameObj2.firstName === 'Felipe')
console.assert(nameObj2.lastName === 'Tortuga')

console.assert(nameObj3.firstName === 'Lupe')
console.assert(nameObj3.lastName === 'Maria')




//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

/* Sum of Resistors in Series
Calculate the sum of all resistors connected in series*/ 

function sumResistors(resistors){
    // Uso del método .reduce para sumar los valores absolutos
    const totalResistance = resistors.reduce((sum, resistor) => sum + Math.abs(resistor), 0); //Math.abs para saber si el numero es un entero positivo
    return `${totalResistance} ohms`; //Devuelve la suma en string
}

console.log(sumResistors([26, 20, 51, 2]));
console.log(sumResistors([1, 2, 3]));
console.log(sumResistors([1, 3, 5, 7, 9, 11, 15, 17, 19]));




/*Number divided into halves 
Given a number, return the number divided into halves in an array*/ 
function divNumber(number){
    return[number/2, number/2];
}
console.log(divNumber(80));
console.log(divNumber(130));



/*Secret society 
Find the name of a secret society based on the first letter of each member's name*/ 
function hiddenName(names){
    //Uso del método .map para crear un nuevo array con el indice 0 de cada elemento
    return names.map(name => name[0]).join(''); //.join para juntas las letras en string
}
console.log(hiddenName(["Juarez", "Avion", "Vara", "Antioquia"]));
console.log(hiddenName(["Secreto", "Oso", "Fabula", "Ingles", "Antartica"]));




/*Online Status 
Display online status for a list of users*/ 
function onlineStatus(users) {
    if(users.length === 1) return `${users[0]} online`; //Si el numero de usuarios es estrictamente igual a 1 entonces devolver el primer nombre de usuario (indice 0) 
    if(users.length === 2) return `${users[0]} and ${users[1]} online`;//Si el numero de usuario es estrictamente igual a 2 entonces devolver el primer nombre de usuario (indice 0), y el segundo nombre de usuario (indice 2)
    return `${users[0]}, ${users[1]} and ${users.length - 2} more online`;
}
console.log(onlineStatus(['Mozart82', 'HappyGirl_I', 'BadMichael0', 'MartinG']))




/*Array of Multiples 
Create a function that takes two parameters (number, length), and returns an array of length containing multiples of the number*/ 
function arrayMultiples(number, length){  //La funcion toma dos parametros
    return Array.from({length}, (_, i) => number *(i+1)); //Array.from para crear un array con una longitud específica
}
console.log(arrayMultiples(20, 5));



/*Positive dominance in Array 
Write a function to determine if an array is positively dominant. 
An array is positively dominant when the majority of its elements are positive.*/
function positiveDom(arr){
    const positiveElement = arr.filter(num => num > 0).length; //arr.filter es un metodo para crear un nuevo array con los numeros positivos
    return positiveElement > arr.length / 2;
}
console.log(positiveDom([1, 4, 6, 7, -18]));
console.log(positiveDom([-1, -4, -6, -7, 18]));




/*Antipodal Average 
- Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
- Sum each number of the first part with the inverse numbers of the second part.
- Divide each number of the resulting array by 2.*/
function antipodalAverage(arr){
    if (arr.length % 2 !== 0) arr.splice(Math.floor(arr.length / 2), 1);
    const half = arr.length / 2; 
    const firstHalf = arr.slice(0, half);
    const secondHalf = arr.slice(half).reverse();
    return firstHalf.map((num, index) => (num + secondHalf[index]) / 2);
}
console.log(antipodalAverage([1, 2, 3, 5, 22, 6]));
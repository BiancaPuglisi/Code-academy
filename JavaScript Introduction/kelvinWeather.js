//forecast today in kelvin
const kelvin = 293;
//kelvin to celsius
let celsius = kelvin - 273;
//celsius to fahrenheit and rounded result
let fahrenheit = (Math.floor(celsius * (9 / 5) + 32));
console.log('The temperature is ' + fahrenheit + ' degrees Fahrenheit');
//newton outro modo
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log('The temperature is ' + newton + ' degrees Newton');
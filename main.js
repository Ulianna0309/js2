console.log('Sample JavaScript #2 HW #16');

/*
 * #1
 *
 * Создайте объект userObj, описывающий человека.
 *
 * Следующие поля обязательны:
 * firstName – любое имя, строка
 * lastName – любая фамилия, строка
 * age – любой возраст, число
 */
var userObj = {
	age: 28,
	firstName: 'Julia',
	lastName: 'Vishnevskaya',
	//prob: ' ',
	fullName(){
		return `${userObj.firstName} ${userObj.lastName}`
		//return userObj.firstName + userObj.prob + userObj.lastName; 
	}
}

console.log(userObj);


/*
 * #2
 *
 * Для объекта из п.1 создайте метод fullName, который будет возвращать полное имя,
 * состоящее из firstName и lastName, склеенных в строку через пробел.
 *
 * Например:
 * userObj.firstName ← 'Имя
 * userObj.lastName ← Фамилия'
 * userObj.fullName() → 'Имя Фамилия'.
 */

console.log(userObj.fullName())
//console.log(userObj.fullName(userObj.firstName + userObj.prob + userObj.lastName));


/*
 * #3
 *
 * Дана функция defUpperStr('My text'), которая возвращает текст, преобразованный в верхний регистр, т.е:
 * defUpperStr('My text') → 'MY TEXT'.
 *
 * Если функция вызывается без параметра defUpperStr(), она не должна возвращать undefined,
 * в этом случае требуется вернуть строку текста по умолчанию в верхнем регистре, т.е:
 * defUpperStr() → 'DEFAULT TEXT'.
 *
 * При выполнении задачи не используйте оператор if, требуется решение с логическим оператором ||.
 */

/* eslint-disable capitalized-comments */
// console.log(defUpperStr('My text')); // MY TEXT

// console.log(defUpperStr()); // DEFAULT TEXT
var str = 'my text';
var def = 'default text';
function defUpperStr(str){
	return (str || def).toUpperCase();
}
console.log(defUpperStr(str.toUpperCase()));
console.log(defUpperStr(def.toUpperCase()));

/**/
/*
 * #4
 *
 * Создайте функцию evenFn(n), которая принимает параметром число – количество итераций цикла,
 * т.е. for 0..n. Функция должна вернуть массив, состоящий только из четных значений, генерируемых в цикле.
 *
 * Причем:
 * 0 не должен попадать в результирующий массив
 * цикл должен работать до n включительно
 * разрешен только оператор for
 *
 * Например:
 * evenFn(10) → [2, 4, 6, 8, 10]
 * evenFn(15) → [2, 4, 6, 8, 10, 12, 14]
 * evenFn(20) → [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
 */

// console.log(evenFn(10)); // [2, 4, 6, 8, 10]

// console.log(evenFn(15)); // [2, 4, 6, 8, 10, 12, 14]

// console.log(evenFn(20)); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

function evenFn(n){
	var arr = [];
	for (var i = 1; i <= n ; i++)
		if (i % 2 === 0 ) arr.push(i);
			return arr;
}
console.log(evenFn(10));
console.log(evenFn(15));
console.log(evenFn(20));



 


/*
 * #5
 *
 * Создайте функцию weekFn(n), которая принимает номер дня недели, а возвращает его название.
 * Если вводится строка, любое дробное число или число вне диапазона 1..7 – функция должна вернуть null.
 *
 * Например:
 * 1 → 'Понедельник'
 * 2 → 'Вторник'
 * ...
 * 7 → 'Воскресенье'
 *
 * В реализации функции обязательно должны быть использованы операторы switch / case / default.
 */

// console.log(weekFn(1)); // 'Понедельник'

// console.log(weekFn(3)); // 'Среда'

// console.log(weekFn(7)); // 'Воскресенье'

// console.log(weekFn(9)); // null

// console.log(weekFn(1.5)); // null

// console.log(weekFn('2')); // null


function weekFn(dayName){
	
switch (dayName) {
    case 1:
        dayName = 'Понедельник';
        break;
    case 2:
        dayName = 'Вторник';
        break;
    case 3:
        dayName = 'Среда';
        break;
    case 4:
        dayName = 'Четверг';
        break;
    case 5:
        dayName = 'Пятница';
        break;
    case 6:
        dayName = 'Суббота';
        break;
    case 7:
        dayName = 'Воскресенье';
        break;
    default:
        dayName = null;
	}
	 return dayName;
}

console.log(weekFn(1)); // 'Понедельник'

console.log(weekFn(3)); // 'Среда'

console.log(weekFn(7)); // 'Воскресенье'

console.log(weekFn(9)); // null

console.log(weekFn(1.5)); // null

console.log(weekFn('2')); // null
/*
 * #6
 *
 * создайте функцию ageClassification(n), которая будет в качестве параметра принимать любые числа
 * и возвращать строку согласно следующим условиям, n:
 *           менее 0 – null
 *             0..24 – 'детский возраст'
 *           24+..44 – 'молодой возраст'
 *           44+..65 – 'средний возраст'
 *           65+..75 – 'пожилой возраст'
 *           75+..90 – 'старческий возраст'
 *          90+..122 – 'долгожители'
 *         более 122 – null
 *
 * При выполнении задания допускается использовать только тернарный оператор ?.
 * Использование операторов if, switch – запрещено.
 */

// console.log('-1 :', ageClassification(-1)); // -1 : null

// console.log('5 :', ageClassification(5)); // 5 : детский возраст

// console.log('34 :', ageClassification(34)); // 34 : молодой возраст

// console.log('50 :', ageClassification(50)); // 50 : средний возраст

// console.log('65.1 :', ageClassification(65.1)); // 65.1 : пожилой возраст

// console.log('80 :', ageClassification(80)); // 80 : старческий возраст

// console.log('110 :', ageClassification(110)); // 110 : долгожители

// console.log('130 :', ageClassification(130)); // 130 : null

function ageClassification(num) {
  return num > 0
    ? num > 24
      ? num > 44
        ? num > 65
          ? num > 75
            ? num > 90
              ? num > 122
                ? null
                : 'долгожители'
              : 'старческий возраст'
            : 'пожилой возраст'
          : 'средний возраст'
        : 'молодой возраст'
      : 'детский возраст'
    : null;
}
console.log('-1 :', ageClassification(-1)); // -1 : null
console.log('5 :', ageClassification(5)); // 5 : детский возраст
console.log('34 :', ageClassification(34)); // 34 : молодой возраст
/*console.log('50 :', ageClassification(50)); // 50 : средний возраст
console.log('65.1 :', ageClassification(65.1)); // 65.1 : пожилой возраст

// console.log('80 :', ageClassification(80)); // 80 : старческий возраст

// console.log('110 :', ageClassification(110)); // 110 : долгожители

// console.log('130 :', ageClassification(130)); // 130 : null*/
/*
 * Блок тестирования:
 * console.log(1, ageClassification(-1) === null);
 * console.log(2, ageClassification(1) === 'детский возраст');
 * console.log(3, ageClassification(24) === 'детский возраст');
 * console.log(4, ageClassification(24.01) === 'молодой возраст');
 * console.log(5, ageClassification(44) === 'молодой возраст');
 * console.log(6, ageClassification(44.01) === 'средний возраст');
 * console.log(7, ageClassification(65) === 'средний возраст');
 * console.log(8, ageClassification(65.01) === 'пожилой возраст');
 * console.log(9, ageClassification(75) === 'пожилой возраст');
 * console.log(10, ageClassification(75.01) === 'старческий возраст');
 * console.log(11, ageClassification(90) === 'старческий возраст');
 * console.log(12, ageClassification(90.01) === 'долгожители');
 * console.log(13, ageClassification(122) === 'долгожители');
 * console.log(14, ageClassification(122.01) === null);
 * console.log(15, ageClassification(150) === null);
 */

/*
 * #7
 *
 * Создайте функцию oddFn(n), которая принимает параметром число – количество итераций цикла.
 * Функция должна вернуть массив, состоящий только из нечетных значений, генерируемых в цикле.
 *
 * Причем:
 * 0 не должен попадать в результирующий массив
 * цикл должен работать до n включительно
 * разрешен только оператор while
 *
 * Например:
 * oddFn(10) → [1, 3, 5, 7, 9]
 * oddFn(15) → [1, 3, 5, 7, 9, 11, 13, 15]
 * oddFn(20) → [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
 */

// console.log(oddFn(10)); // [1, 3, 5, 7, 9]

// console.log(oddFn(15)); // [1, 3, 5, 7, 9, 11, 13, 15]

// console.log(oddFn(20)); // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
function oddFn(n){
	var arr = [];
	var i = 0;
  	while (i++ < n) if (i % 2 !== 0) arr.push(i);
	return arr;
}
console.log(oddFn(10)); // [1, 3, 5, 7, 9]
console.log(oddFn(15)); // [1, 3, 5, 7, 9, 11, 13, 15]
console.log(oddFn(20)); // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
/*
 * #8
 *
 * Создайте основную функцию mainFunc(a, b, func), которая принимает три параметра:
 * a – число
 * b - число
 * func –  обрабатывающая параметры a и b, возвратная (callback) функция
 *
 * Реализуйте проверку: если третьим параметром передается не функция, нужно вернуть false.
 *
 */
function mainFunc(a, b, func){
	if (typeof func === 'function') {
		return func(a, b);
	} 
	else {
	return false;
	}
}
function cbRandom(a, b) {
  return (Math.floor(Math.random()*(a - b) + b +1));
}
function cbPow(a, b) {
  return Math.pow(a, b);
}
function cbAdd(a, b){
	return (a+b);
}

console.log(mainFunc(2, 5, cbRandom)); // целые числа в диапазоне 2..5
console.log(mainFunc(2, 5, cbPow)); // 32
console.log(mainFunc(2, 5, cbAdd)); //7
console.log(mainFunc(2, 5, 'not a func')); // false

/*
 * реализуйте следующие функции, которые будут осуществлять механизм callback в основной функции,
 * возвращая ей результат собственного вычисления...
 * для возведения в степень и получения произвольного значения можете воспользоваться методами объекта Math.
 */

// cbRandom(a, b) – вычисляет и возвращает произвольное целое число в диапазоне между a и b включительно.

// cbPow(a, b) – вычисляет и возвращает результат возведения числа a в степень b.

// cbAdd(a, b) – вычисляет и возвращает сумму двух чисел a и b.

/*
 * mainFunc() должна возвращать результат работы переданной ей возвратной функции, например:
 * mainFunc(2, 5, cbRandom) → случайно от 2 до 5 включительно
 * mainFunc(10, 30, cbRandom) → случайно 10..30 включительно
 * mainFunc(2, 5, cbPow) → 32
 * mainFunc(2, 5, cbAdd) → 7
 * mainFunc(2, 5, 'not a func') → false
 */

// console.log(mainFunc(2, 5, cbRandom)); // целые числа в диапазоне 2..5

// console.log(mainFunc(2, 5, cbPow)); // 32

// console.log(mainFunc(2, 5, cbAdd)); // 7

// console.log(mainFunc(2, 5, 'not a func')); // false


/*var firstName = "Julia";
var lastName = "Vishnevskaya";
var age =28;

var str;
str = 'Нello my name is'+firstName+''+lastName;

str ='<ul>'+
		'<li>firstName: +firstName+</li>'+
		'<li>lastName: +lastName+</li>'+
		'<li>Age +age+</li>'+
		'</ul>';

str = `<ul>
			<li>firstName: ${firstName}</li>
			<li>lastName: ${lastName}</li>
			<li>Age: ${age}</li>
			<li>Math.random: ${Math.random()}</li>
		</ul>`;
document.body.innerHTML = str;

var user = {
	firstName: 'Julia',
	age: 28,
	isProgrammer: true,
	'address':{
		city: 'Dnipro'
	},
	skills:['html','css','js']
};

let value;
let prop = 'skills';

value = user.firstName;
value = user.isProgrammer;
value = user.address.city;
value = user[prop][1];
user.firstName = 'Yi'
value = user.firstName;
user.info = 'fgfgfhfh';
value = user.info;
user.address.city = "kiev";
user.address.country = "ukraine"
value = user.address.city;
value = user.address.country;
console.log(value);
console.log(user);
var value='';
 if (value){
 	console.log('fgh');
 } else{
 	console.log('none');
 }
 var user = {
 	name: 'Julia'
 };
 if(user.name){
 	console.log(user.name);
 }else{
 	console.log('else');
 }


let dayName='Воскресенье';
 switch (dayName) {
    case 1:
        dayName = 'Понедельник';
        break;
    case 2:
        dayName = 'Вторник';
        break;
        default: console.log("error")
}
let i =10;
while(i--){
	console.log(i);
}
do{
	console.log('cfgcgf');
}while(i>0);


var str = "Hello";
var res ='';

for (var i = 0; i < str.length; i++) {
 	res +=str[i] + '*';
}
console.log(res);

var colors = ['white', 'red', 'orange']
for (var i = 0; i < colors.length; i++) {
	console.log(colors[i]);
	colors[i]=colors[i].toUpperCase();
}
console.log(colors);
function hallo(firstName, lastName){
	if(!firstName) return;
	console.log(firstName, lastName)
	return`Hello ${firstName} ${lastName}`
}
let res = hallo('julia', 'vasya');
console.log(res);

var func = function (callback) {
	var name = 'students';
	callback(name);
}
func(function(n){
console.log('Hello ' + n); // Hello students
});

var sayHello = function (name) {
return 'Hello ' + name;
}('students');
console.log(sayHello);
const arr = [2, 32, 65, 45, 343];
let value;
value= arr.length;
value = arr[2];
arr[2]= 55;
value= arr.indexOf(32);
value =arr.push(100);
value =arr.pop(100);
value = arr.unshift();
value = arr.splice(3, 0, 'one' );
value = arr.concat(arr);
value = arr.join('*');
value = 'Hello'.split();
console.log(value, arr)*/
/*function foo(){
	console.log('Hello World');
}
foo();
foo.field = 'Julia';
console.log(foo.field)
var arr = ['Julia', 'Ivan','Maks','Olga'];
let newArr = [];
for(let i=0; i < arr.length; i++){
	newArr.push(arr[i].length);
}
console.log(newArr);


var arr = ['Julia', 'Ivan','Maks','Olga'];
let newArr2=[];
for(let i=0; i < arr.length; i++){
	newArr2.push(arr[i].toUpperCase());
}
console.log(newArr2);
var names = ['Julia', 'Ivan','Maks','Olga', 'John'];
function mapArray(arr, fn){
	var res =[];
	for(let i=0; i < arr.length; i++){
	res.push(fn(arr[i]));
 	}
return res;
}
function name(el){
	console.log(el);
	return el.length;
}
function nameUp(el){
	return el.toUpperCase();
}
var result = mapArray(names, name);
var result2 = mapArray(names, nameUp);
console.log(result);
console.log(result2);*/

function greet(firstName){
	return function(lastName){
		return `Hello, ${firstName} ${lastName}`;
	};
}
/*const testGreeting = greet('Julia');
console.log(testGreeting);
const fullName = testGreeting('Vishu');
console.log(fullName);*/
const fullName = greet('Julia')('Vishu');
//console.log(fullName);

/*function question(job){
const jobDictionary ={
	developer: 'что такое JS?',
	teatcher: 'какой предмет вы ведете?'
};

return function(name){
	return `${name}, ${jobDictionary[job]}?`;
};
}
const developerQuestion = question('developer');
console.log(developerQuestion('Julia'));
const teatcherQuestion = question('teatcher');
console.log(teatcherQuestion('Maria'));*/


let numbers = [1,2,3,4,5,6];
function sum(total, value){
  return total / value;
}
let total = numbers.reduce(sum);
console.log(total);

function createGenerator(prefix){
  let index = 0;
  return function generateNewID(){
    index++;
    return prefix + index.toString();
  }
}
let generateNewID = createGenerator("вызов номер: ");
console.log(generateNewID()); //вызов номер: 1
console.log(generateNewID()); //вызов номер: 2
console.log(generateNewID()); //вызов номер: 3


function getPrice(){
	console.log(this.price);
}
const prod={
	name: 'Intel',
	price: 100,
	getPrice,
	getName(){
		console.log(this.name);
	},
	info: {
		inform:'2.3',
		getInfo: function(){
			console.log(this);
		},
	},
};
prod.getPrice();
prod.info.getInfo();
prod.getName();


const prod2 = {
	name: "amd",
	price: 50,
	getPrice,

}
prod2.getName= prod.getName; 
prod2.getPrice();
prod2.getName();


var str = "Hello world";
const reversStr = str.split('').reverse().join('');
console.log(reversStr);
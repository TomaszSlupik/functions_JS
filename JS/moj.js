// Funkcje

function square(x) {
	console.log(`${x * x}`);
}

square(10, 10);

function circuit(a, b) {
	console.log(2 * a + 2 * b);
}

circuit(25, 25);

function add(parametr) {
	console.log(`Podany arument to:` + parametr);
}
add("test");

function subtraction(c, d) {
	if (c > d) return;

	console.log(d - c);
}

subtraction(15, 25);

function person(first_name, age) {
	console.log(`Cześć mam na imię ${first_name}. Mam ${age} lat.`);
}

person("Tomek", 28);

// Funkcja anonimowa

const heading = document.querySelector("h1");

heading.addEventListener("click", function () {
	console.log(`Kliknięto w napis h1: Funckje`);
});

// Funckje strzałkowe

const persontwo = (last_name) => {
	console.log(`Mam na nazwisko: ${last_name}`);
};
persontwo("Kowalski");

const division = (num1, num2) => {
	console.log(`Wynik z dzielenia`);
	return num1 / num2;
};

// Z domyślnym parametrem
const hello = (name = "Wiesław") => {
	console.log(`Cześć, jak sie masz ${name}`);
};

hello();

const multiplicationtest = (x = 10, y = 14) => {
	console.log(x * y);
};

multiplicationtest();

// Operator REST

const numerTest = (x, y, ...z) => {
	console.log(`${(x, y, z)}`);
	console.log(z);
};

numerTest(1, 2, 3, 99, 21, 45, 14, 18, 100, "test");

const animals = (first_animal, ...second_animal) => {
	console.log(`${second_animal}`);
	console.log(`${first_animal}`);
};

animals("pies", "kot", "kaczka", "ptak");

// Zakres Globalny i Lokalny

const name_v1 = "Tomasz";

const testn = () => {
	const name_v1 = "Piotr";
	console.log(`Imię w funkcji: ${name_v1}. Zakres Lokalny`);

	const testn1 = () => {
		console.log(`Tutaj będzie imię Piotrek. Sprawdzenie: ${name_v1}`);
	};
	testn1();
};

testn();

console.log(`Imię poza funkcją: ${name_v1}. Zakres globalny`);

const food = "pierogi ruskie🍛";
let foodNext;
const testFood = () => {
	const food = "schabowy🥩";
	console.log(`Ulubione danie: ${food} - zakres lokalny`);

	const testFoodTwo = () => {
		console.log(
			`To też jest zakres lokalny, więc będzie kotlet schabowy.Sprawdzenie: ${food}`
		);
		foodNext = "pizza🍕";
		console.log(`Let z pizzy: ${foodNext}`);

		const testFoodThree = () => {
			const food = "burger🍔";
			console.log(`Kolejny zakres lokalny. Wynik Burger. Sprawdzenie ${food}`);
		};
		testFoodThree();
	};
	testFoodTwo();
};

testFood();

console.log(`Danie: ${food} - zakres globalny`);

// forEach oraz callback

const numberElement = [1, 2, 3, 4, 5];
numberElement.forEach((element) => console.log(element * element));

const names = ["Kasia", "Tomek", "Martyna", "Paweł"];

const bigNames = names.map((name) => name.toUpperCase());
console.log(bigNames);

// callback

const nameBig = (name) => {
	console.log(name.toUpperCase());
};

names.forEach(nameBig);

// Zadanie 1 Dodanie do siebie dwóch wartości i sprawdzenie czy liczba jest parzysta/nieparzysta

let score;

const addTaskOne = (a, b) => {
	score = a + b;
	if (score % 2 == 0) {
		functionOne();
	} else {
		functionTwo();
	}
};

const functionOne = () => {
	console.log(`Liczba ${score} jest parzysta`);
};

const functionTwo = () => {
	console.log(`Liczba ${score} jest nieparzysta`);
};

addTaskOne(10, 25);

// Zadanie 2 - Zamiana stopni Celciuszy na Fahrenheit
let celsius;
let temp;

const fahrenheit = (a) => {
	celsius = a;
	temp = `${celsius}` * 1.8 + 32;
	console.log(`${celsius}[°C] = ${temp}[°F]`);
};

fahrenheit(30);

// Zadanie 3 Dodanie elementów do tablicy numbers (tylko 10 elementów) i sprawdzenie czy liczba jest podzielna przez 3

let num = 10;
let numbers = [];

for (let i = 0; i < 10; i++) {
	numbers.push(i);
}

console.log(numbers);

const taskThree = (z) => {
	if (z % 3 === 0 && z !== 0) {
		console.log(`${z} jest podzielne przez 3`);
	} else {
		console.log(`${z} nie jest podzielne przez 3 lub ${z} = 0`);
	}
};

numbers.forEach(taskThree);

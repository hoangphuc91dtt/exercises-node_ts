// The Fortune Teller

let numberOfChildren: number = 2;
let partnerName: string = "John";
let geographicLocation: string = "Seattle";
let jobTitle: string = "Software Engineer";

console.log(
  `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`
);

// The Age Calculator
const birthYear: number = 1990;
const futureYear: number = 2030;

const age1: number = futureYear - birthYear;
const age2: number = age1 - 1;

console.log(`I will be either ${age1} or ${age2} in ${futureYear}`);

// The Lifetime Supply Calculator
let currentAge: number = 25;
let maximumAge: number = 80;
let amountPerDay: number = 2;

let yearsRemaining: number = maximumAge - currentAge;
let daysRemaining: number = yearsRemaining * 365;
let totalNeeded: number = daysRemaining * amountPerDay;

console.log(
  `You will need ${totalNeeded} to last you until the ripe old age of ${maximumAge}.`
);

// The Geometrizer
let radius: number = 5;

let circumference: number = 2 * Math.PI * radius;
console.log(`The circumference is ${circumference}.`);

let area: number = Math.PI * radius ** 2;
console.log(`The area is ${area}.`);

//The Temperature Converter

let celsiusTemperature: number = 30;
let fahrenheitTemperature: number = 86;

let fahrenheitFromCelsius: number = (celsiusTemperature * 9) / 5 + 32;
console.log(`${celsiusTemperature}°C is ${fahrenheitFromCelsius}°F.`);

let celsiusFromFahrenheit: number = ((fahrenheitTemperature - 32) * 5) / 9;
console.log(`${fahrenheitTemperature}°F is ${celsiusFromFahrenheit}°C.`);

//The Student Rating
let mathScore: number = 8.5;
let physicsScore: number = 6.5;
let chemistryScore: number = 5;

let averageScore: number = (mathScore + physicsScore + chemistryScore) / 3;
console.log(`The average score is ${averageScore}.`);

if (mathScore >= 8.5 && physicsScore >= 8.5 && chemistryScore >= 8.5) {
  console.log("Rank: A");
} else if (averageScore >= 6.5) {
  console.log("Rank: B");
} else if (averageScore > 5) {
  console.log("Rank: C");
} else {
  console.log("Rank: D");
}

const countries = [
  'Serbia',
  'Hungary',
  'United Kingdom',
  'Sweden',
  'Denmark',
  'Finland',
  'Kenya',
  'Ireland',
  'Japan',
  'Germany',
  'Canada',
];

const webTechs = [
  'HTML',
  'CSS',
  'React',
  'JS',
  'Redux',
  'Node',
  'MongDB',
];

// 1. Declare an empty array;

const emptyArray = [];
// 2. Declare an array with more than 5 number of elements

const pets = ['Cat', 'Dog', 'Rabbit', 'Humpster', 'Rat', 'Parrot', 'Guinea pig'];
// 3. Find the length of your array

console.log('Length of pets array is:', pets.length);
// 4. Get the first item, the middle item and the last item of the array

console.log('First item of pets is:', pets[0])
console.log('Middle item of pets is:', pets[3])
console.log('Last item of pets is:', pets[6])
// 5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = ['Peter', 'Peterson', 26, true, { country: 'United Kingdom', city: 'London' }, { skills: ['HTML', 'CSS', 'JS', 'React', 'Redux'] }];
console.log(mixedDataTypes.length);
// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// 7. Print the array using console.log()

console.log(itCompanies);
// 8. Print the number of companies in the array

console.log('Number of companies in the array is:', itCompanies.length);
// 9. Print the first company, middle and last company

console.log('First company is:', itCompanies[0]);
console.log('Middle company is:', itCompanies[2]);
console.log('Last company is:', itCompanies[6]);
// 10. Print out each company

for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}
// 11. Change each company name to uppercase one by one and print them out

itCompanies.forEach( c => {
  console.log(c.toUpperCase());
});
// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.


// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// 14. Filter out companies which have more than one 'o' without the filter method
// 15. Sort the array using sort() method
// 16.Reverse the array using reverse() method
// 17. Slice out the first 3 companies from the array
// 18. Slice out the last 3 companies from the array
// 19. Slice out the middle IT company or companies from the array
// 20. Remove the first IT company from the array
// 21. Remove the middle IT company or companies from the array
// 22. Remove the last IT company from the array
// 23. Remove all IT companies

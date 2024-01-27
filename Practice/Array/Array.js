// Initialize an array of countries
let countries = ["Pakistan", "India", "USA", "Canada", "UK"];

// Prompt the user for the operation
let operation = prompt("Enter 'add' to add a country or 'remove' to remove a country:");

// Perform the requested operation
if (operation === "add") {
    // Prompt the user to enter a new country
    let newCountry = prompt("Enter the name of the country to add:");
    
    // Add the new country to the array
    countries.push(newCountry);
} else if (operation === "remove") {
    // Prompt the user to enter a country to remove
    let countryToRemove = prompt("Enter the name of the country to remove:");
    
    // Remove the specified country from the array
    let indexToRemove = countries.indexOf(countryToRemove);
    if (indexToRemove !== -1) {
        countries.splice(indexToRemove, 1);
    } else {
        console.log("Country not found in the list.");
    }
} else {
    console.log("Invalid operation. Please enter 'add' or 'remove'.");
}

// Display the updated list of countries in the console
console.log("Updated list of countries:", countries);

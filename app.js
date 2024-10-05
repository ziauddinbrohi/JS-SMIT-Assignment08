// Question No. 1

// Create an array of random numbers
var numbers = [34, 12, 5, 67, 23, 89, 2];

// Sort in ascending order
var ascendingOrder = numbers.slice(); // Create a copy of the array
for (var i = 0; i < ascendingOrder.length; i++) {
    for (var j = 0; j < ascendingOrder.length - 1; j++) {
        if (ascendingOrder[j] > ascendingOrder[j + 1]) {
            // Swap
            var temp = ascendingOrder[j];
            ascendingOrder[j] = ascendingOrder[j + 1];
            ascendingOrder[j + 1] = temp;
        }
    }
}

// Sort in descending order
var descendingOrder = numbers.slice(); // Create a copy of the array
for (var i = 0; i < descendingOrder.length; i++) {
    for (var j = 0; j < descendingOrder.length - 1; j++) {
        if (descendingOrder[j] < descendingOrder[j + 1]) {
            // Swap
            var temp = descendingOrder[j];
            descendingOrder[j] = descendingOrder[j + 1];
            descendingOrder[j + 1] = temp;
        }
    }
}

// Output the results
console.log("Original Array:", numbers);
console.log("Sorted in Ascending Order:", ascendingOrder);
console.log("Sorted in Descending Order:", descendingOrder);


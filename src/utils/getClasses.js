// Defining a function named getClasses that takes an array of classes as a parameter
export const getClasses = (classes) =>
  classes
    // Filtering out empty strings from the array of classes
    .filter((item) => item !== "")
    // Joining the filtered classes into a single string separated by spaces
    .join(" ")
    // Trimming any leading or trailing spaces from the resulting string
    .trim();

// Function to calculate grade points based on marks for main subjects
function calculateMainGradePoints(marks) {
    if (marks >= 80) {
        return 5.00;
    } else if (marks >= 70) {
        return 4.00;
    } else if (marks >= 60) {
        return 3.50;
    } else if (marks >= 50) {
        return 3.00;
    } else if (marks >= 40) {
        return 2.00;
    } else if (marks >= 33) {
        return 1.00;
    } else {
        return 0.00;
    }
}

// Function to calculate grade points based on marks for the optional subject
function calculateOptionalGradePoints(marks) {
    if (marks >= 80) {
        return 3.00;
    } else if (marks >= 70) {
        return 2.00;
    } else if (marks >= 60) {
        return 1.00;
    } else {
        return 0.00;
    }
}

// Input marks for each subject
let totalMainGradePoints = 0.0;
let totalOptionalGradePoints = 0.0;

for (let i = 1; i <= 6; ++i) {
    // Input marks for main subjects
    const marks = parseInt(prompt(`Enter marks for main subject ${i}:`));
    totalMainGradePoints += calculateMainGradePoints(marks);
}

// Input marks for the optional subject
const optionalMarks = parseInt(prompt("Enter marks for optional subject:"));
totalOptionalGradePoints = calculateOptionalGradePoints(optionalMarks);

// Calculate GPA for main subjects
const mainGPA = totalMainGradePoints / 6;

// Calculate GPA for optional subject
const optionalGPA = totalOptionalGradePoints / 1;

// Calculate overall GPA
const overallGPA = (totalMainGradePoints + totalOptionalGradePoints) / 6;

// Output GPAs
alert(`Your GPA for main subjects is: ${mainGPA.toFixed(2)}
Your GPA for the optional subject is: ${optionalGPA.toFixed(2)}
Your overall GPA is: ${overallGPA.toFixed(2)}`);

// Function to calculate and display the grade based on student marks
function calculateGrade() {
    // Get the input value
    const marks = parseFloat(document.getElementById("marksInput").value);

    // Check if the input is a valid number between 0 and 100
    if (isNaN(marks) || marks < 0 || marks > 100) {
        document.getElementById("gradeResult").textContent = "Invalid input. Marks should be between 0 and 100.";
        return;
    }

    // Calculate and display the grade based on the input
    let grade = "";
    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 50) {
        grade = "C";
    } else if (marks >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }

    document.getElementById("gradeResult").textContent = `Grade: ${grade}`;
}

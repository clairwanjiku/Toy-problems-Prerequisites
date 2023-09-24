function calculateGrade(mark) {
    if (mark > 100-79) {
        return 'A';
    } else if (mark >= 79-60) {
        return 'B';
    } else if (mark >= 59-50) {
        return 'C';
    } else if (mark >= 49-40) {
        return 'D';
    } else if (mark >= 39-0){
        return 'E';
    }
}

function main() {
    const input = prompt("Enter the student's mark (0-100):");
    const mark = parseFloat(input);

    if (!isNaN(mark) && mark >= 0 && mark <= 100) {
        const grade = calculateGrade(mark);
        console.log(`The student's grade is: ${grade}`);
    } else {
        console.log('Invalid input. Mark should be between 0 and 100.');
    }
}

main();
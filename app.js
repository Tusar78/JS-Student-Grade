//Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade. 

var students = [
    ['Rakib', 80],
    ['Sharif', 77],
    ['Tusar', 88],
    ['Muslima', 95],
    ['Sharmin', 68]
]

var averageMarks = 0;
for(var i = 0; i < students.length; i++) {
    averageMarks += students[i][1];
    var avg = averageMarks/students.length;
}


console.log('Average grade: ', avg);

if (avg < 60) {
    console.log('Grade', 'F')
} else if (avg < 70) {
    console.log('Grade', 'D')
} else if (avg < 80) {
    console.log('Grade', 'C')
} else if (avg < 90) {
    console.log('Grade', 'B')
} else if (avg < 100) {
    console.log('Grade', 'A')
} 
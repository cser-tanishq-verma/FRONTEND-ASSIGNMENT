function getGradeIfElse(marks){
    if(marks >=76 && marks<=100){
        return "A";
    }

    else if(marks >=61 && marks<=75){
        return "B";
    }
    else if (marks >=56 && marks<=60){
        return "C";
    }
    else if(marks >=41 && marks<=55){
        return "D";
    }
    else if (marks >=0 && marks<=40){
        return "Failed"
    }
    else{
        return "Invalid Marks ";
    }
}

function getGradeSwitch(marks){
    switch(true){
        case (marks>=76 && marks<=100):
            return "A";
        case (marks>=61 && marks<=75):
            return "B";
        case(marks >=56 && marks<=60):
            return "C";
        case(marks >=41 && marks<=55):
            return "D";
        case(marks >=0 && marks<=40):
            return "Failed";
        default:
            return "Invalid Marks";
    }
}

let studentsMarks = [85, 72, 58, 45, 30, -5, 105];
console.log("Using If-Else:");
studentsMarks.forEach(marks => {
    console.log(`Marks: ${marks} - Grade : ${getGradeIfElse(marks)}`);
});


let studentsMark = [-89, 63, 56, 23, 79, 41];
console.log("Using Switch:");
studentsMark.forEach(marks => {
    console.log(`Marks: ${marks} - Grade : ${getGradeSwitch(marks)}`);
});

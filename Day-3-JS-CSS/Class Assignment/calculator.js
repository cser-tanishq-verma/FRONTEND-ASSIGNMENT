let add=function(a,b){
    return a+b;
}
let sub=function(a,b){
    return a-b;
}
let mul=function(a,b){
    return a*b;
}
let div=function(a,b){
    return a/b;
}
function calculator(a,b,opFn){
    if(opFn=='add'){
        console.log("Addition: "+add(a,b));
    }
    else if(opFn=='sub'){
        console.log("Subtraction: "+sub(a,b));
    }
    else if(opFn=='mul'){
        console.log("Multiplication: "+mul(a,b));
    }
    else if(opFn=='div'){
        console.log("Division: "+div(a,b));
    }
}
calculator(10,20,'add');
calculator(10,20,'sub');
calculator(10,20,'mul');
calculator(10,20,'div');
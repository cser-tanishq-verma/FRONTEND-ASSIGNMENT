function outer(){
    let a=100;
    let b=200;
    return function(){
        console.log(a);
    }
}
    debugger
    let res=outer();
    res();
    outer()(); //function currying

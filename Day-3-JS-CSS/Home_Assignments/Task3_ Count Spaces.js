function countSpaces(str){
    let count =0;
    for(let char of str){
        if(char==" "){
            count++;
        }
    }
    return count;
}

console.log(countSpaces("Hey all, have a good day!!"));
console.log(countSpaces("Frontend and Coding"));
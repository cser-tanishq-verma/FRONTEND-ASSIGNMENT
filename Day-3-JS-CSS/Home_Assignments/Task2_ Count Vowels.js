function countVowels(str){
    const vowels=['a','e','i','o','u'];
    let count =0;
    for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;    
}
console.log(countVowels("Hello World"));
console.log(countVowels("Tanya"));
console.log(countVowels("Frontend HTML, CSS, JS, Typescript, Angular, React"));
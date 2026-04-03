function ValidEmail(email){
    return email.includes('@') && email.endsWith('.com') || email.endsWith('.in');
}


console.log(ValidEmail("abc@gmail.com"));
console.log(ValidEmail("abc@yahoo.com"));
console.log(ValidEmail("abc@icloud.com"));
console.log(ValidEmail("abc@mail"));
console.log(ValidEmail("abc.com"));
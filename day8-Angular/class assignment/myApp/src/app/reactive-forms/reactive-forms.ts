import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { ValidationError } from '@angular/forms/signals';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css',
})
export class ReactiveForms {
  loginForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(10)]),
    currency:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z]{3}$/)]),
    gender:new FormControl('',[Validators.required]),
    termsAndConditions:new FormControl(false,[Validators.requiredTrue]),
    skills:new FormArray([]),
    confirmPassword:new FormControl('',Validators.required)
  })
  handleSubmit(){
    console.log(this.loginForm.value);
    console.log(this.loginForm);
  }
  public get skills(){
    return this.loginForm.get('skills') as FormArray;
  }
  handlecheckboxes(event:Event){
    console.log(event);
    let html=event.target as HTMLInputElement
    if(html.checked){
        this.skills.push(new FormControl(html.value));
    }
    else{
        let index=this.skills?.controls.findIndex((ele)=> ele.value===html.value);
        this.skills?.removeAt(index);
    }
  }
}

export function checkPassword(control:AbstractControl):ValidationErrors{
  let a = false
  let b = false
  
  for(let ele of control.value.split('')) {
    if((ele>='a' && ele<='z') || (ele>='A' && ele<='Z')){
      a = true
    }
    else if(ele>='0' && ele<='9'){
      b = true
    }
    else{
      return {checkPassword:'password must be alphanumeric'}
    }
  }
  
  if(a && b){
    return {
      message:'password is valid'
    }
  }
  return {checkPassword:'password must be alphanumeric'}
}

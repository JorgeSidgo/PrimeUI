import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    this.handleSubmit();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  handleSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    alert(JSON.stringify(this.loginForm.value));
  }

  get f() { return this.loginForm.controls }



}

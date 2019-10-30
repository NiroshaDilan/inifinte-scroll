import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MustMatch} from '../helper/must-match.validator';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-reacttive-form',
  templateUrl: './reacttive-form.component.html',
  styleUrls: ['./reacttive-form.component.scss']
})
export class ReacttiveFormComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  todayDate = new Date();

  constructor(private formBuilder: FormBuilder,
              private userService: UserService) { }

  ngOnInit() {
    this.createForm();
    this.setFirstName();
    this.loadData();
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.minLength(6)],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validators: MustMatch('password', 'confirmPassword')
    });
  }

  loadData() {

    this.userService.getUser(100068)
      .subscribe(res => {

      });
  }

  setFirstName() {
    this.registerForm.get('firstName').setValue("Dilan Fernando")
    this.registerForm.get('dateOfBirth').setValue(this.todayDate);
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
















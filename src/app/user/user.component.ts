import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MustMatch} from '../helper/must-match.validator';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  zoneForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,
              private userService: UserService) { }

  ngOnInit() {

    this.createForm();
    this.loadData();
  }

  createForm() {
    this.zoneForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      createdDate: [''],
      dateOfBirth: ['', Validators.required],
    });
  }

  loadData() {

    this.userService.getUser(100077)
      .subscribe(res => {

        this.zoneForm.get('name').setValue(res['name']);
        this.zoneForm.get('email').setValue(res['email']);
        this.zoneForm.get('createdDate').setValue(new Date(res['createdDate']));
        this.zoneForm.get('dateOfBirth').setValue(new Date(res['dateOfBirth']));

      });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.zoneForm.controls;
  }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.zoneForm.invalid) {
      return;
    }

    let userData = {
      'name': this.zoneForm.value.name,
      'email': this.zoneForm.value.email,
      'dateOfBirth': this.zoneForm.value.dateOfBirth
    }

    this.userService.addUser(userData)
      .subscribe(res => {
        this.zoneForm.get('name').setValue(res['name']);
        this.zoneForm.get('email').setValue(res['email']);
        this.zoneForm.get('createdDate').setValue(new Date(res['createdDate']));
        this.zoneForm.get('dateOfBirth').setValue(new Date(res['dateOfBirth']));
      });
  }

  onReset() {
    this.submitted = false;
    this.zoneForm.reset();
  }

}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  angForm: FormGroup;
  startAt = new Date();
  myEmail: string = 'myemail@gmail.com';


  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      insertDate: [''],
      email: [''],
      password: ['']
    });
  }

  onClickSubmit(email, password) {


    this.angForm.get('insertDate').setValue(this.startAt);
    console.log(email + " " + password);
  }

}

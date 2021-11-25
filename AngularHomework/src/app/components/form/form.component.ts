import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../../User";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() onAddUser: EventEmitter<User> = new EventEmitter();

  name!: string;
  age!: string;
  email!: string;

  constructor() { }

  ngOnInit(): void {
  }

  addUser() {
    if (!this.name) {
      alert("Please enter the name");
      return;
    }
    else if (!this.age) {
      alert("Please enter the age\nAge should be a number");
      return;
    }
    else if (!this.email) {
      alert("Please enter the email");
      return;
    }

    const newUser = {
      name: this.name,
      age: this.age,
      email: this.email
    }

    this.onAddUser.emit(newUser)

    this.name = '';
    this.age = '';
    this.email = '';
  }

}

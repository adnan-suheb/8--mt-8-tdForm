import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ImodeOfContact, IuserInfo } from '../../interface/tdForm.interface';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent {

  @ViewChild('signUp') signUp!: NgForm

  mocArray: Array<ImodeOfContact> = [
    {
      moc: "Email",
      id: 1
    },
    {
      moc: "Mobile",
      id: 2
    }
  ];

  userInfo: IuserInfo = {
    credentials: {
      username: "iamJohn",
      email: "jd@gmail.com",
    },
    securityQuestion: "favBook",
    ans: "Rich Dad, Poor Dad",
    contact:9876543210,
    isSubscribed: true,
    modeOfContact: "Email"
  }

  onSignUp() {

    // if (this.signUp.valid) {
      console.log(this.signUp)
      console.log(this.signUp.value)
    // }
  }

  onEdit() {
    this.signUp.form.patchValue(this.userInfo);
  }

}

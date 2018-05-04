import { Component, OnInit } from '@angular/core';
import { RegUser } from '../../dashboard-module/models/regUser';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-reg-in',
  templateUrl: './reg-in.component.html',
  styleUrls: ['./reg-in.component.css'],
  providers: [AuthService]
})
export class RegInComponent implements OnInit {

  constructor(private auth : AuthService, private toastr: ToastrService) { }

  public newUser: RegUser

  ngOnInit() {
    this.newUser = new RegUser()
    this.initNewUser()
  }

  initNewUser(){
    this.newUser.email = "Konstantin@gmail.com"
    this.newUser.firstName = "Konstantin"
    this.newUser.lastName = "Konstantin"
    this.newUser.password = "qwerty"
    this.newUser.phoneNumber = "+21432132121"
    this.newUser.role = "manager"
  }
  log(){
    this.showSuccess()
    console.log(this.newUser);
  }

  Enter(){
    this.auth.createNewUser(this.newUser).subscribe(
      result =>  console.log(result),
      error => {
        this.showError(error)
      }
    );  
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  showError(message: string) {
    this.toastr.error('Error', message);
  }
}

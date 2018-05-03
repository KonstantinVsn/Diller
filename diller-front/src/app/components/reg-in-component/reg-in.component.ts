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
    //this.initNewUser()
  }

  initNewUser(){
    this.newUser.email = ""
    this.newUser.firstName = ""
    this.newUser.lastName = ""
    this.newUser.password = ""
    this.newUser.phoneNumber = ""
    this.newUser.role = ""
  }
  log(){
    this.showSuccess()
    console.log(this.newUser);
  }

  Enter(){
    debugger;
    this.auth.createNewUser(this.newUser).subscribe(
                          (data: string) => {console.log(data)},
                          error => console.log(error)
                      );
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}

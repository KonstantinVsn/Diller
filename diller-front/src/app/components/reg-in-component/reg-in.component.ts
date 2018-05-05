import { Component, OnInit } from '@angular/core';
import { RegUser } from '../../dashboard-module/models/regUser';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Notify } from '../../shared/notify';
@Component({
  selector: 'app-reg-in',
  templateUrl: './reg-in.component.html',
  styleUrls: ['./reg-in.component.css'],
  providers: [AuthService]
})
export class RegInComponent extends Notify implements OnInit {

  constructor(private auth : AuthService, public toastr: ToastrService) {
    super(toastr)
   }
  public hide: boolean = true
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
    this.newUser.role = "Manager"
  }

  Enter(){
    this.hide = false
    this.auth.createNewUser(this.newUser)
    .subscribe(
      data => {
        this.showSuccess()
      },
      err => this.showError(err),
      () => console.log('Completed')
    ); 
  }
}

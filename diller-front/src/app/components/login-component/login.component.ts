import { Component, OnInit, Input } from '@angular/core';
import { LoginUser } from '../../dashboard-module/models/loginUser';
import { AuthService } from '../../services/auth.service';
import { Notify } from '../../shared/notify';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent extends Notify implements OnInit {

  public loginUser: LoginUser
  constructor(private auth: AuthService, public toastr: ToastrService) {
    super(toastr)
   }

  ngOnInit() {
    this.loginUser = new LoginUser()
  }

  enter() {
    this.auth.logIn(this.loginUser).subscribe(
      data => {
        this.log(data.json().auth_token)
        this.showSuccess()
      },
      err => this.showError(err),
      () => console.log('Completed')
    );
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { LoginUser } from '../../dashboard-module/models/loginUser';
import { AuthService } from '../../services/auth.service';
import { Notify } from '../../shared/notify';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService, Notify]
})
export class LoginComponent implements OnInit {

  public loginUser: LoginUser
  constructor(private auth: AuthService, public notificator: Notify, private router: Router) {
   }

  ngOnInit() {
    this.loginUser = new LoginUser()
  }

  enter() {
    this.auth.logIn(this.loginUser).subscribe(
      data => {
        this.notificator.log(data.json().auth_token)
        this.notificator.showSuccess()
        this.router.navigate(['dashboard']);
      },
      err => this.notificator.showError(err),
      () => console.log('Completed')
    );
  }
}

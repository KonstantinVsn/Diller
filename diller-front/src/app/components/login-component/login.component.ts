import { Component, OnInit, Input } from '@angular/core';
import { LoginUser } from '../../dashboard-module/models/loginUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()

  public loginUser: LoginUser
  constructor() { }

  ngOnInit() {
  }


}

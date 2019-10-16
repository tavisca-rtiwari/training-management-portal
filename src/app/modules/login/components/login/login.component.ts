import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Login } from '../../Models/Login';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  submitted = false;
  invalid = false;
  isLogin = false;
  login:Login;
  private response:any;
  constructor
  (
    private formBuilder: FormBuilder,
    private service:LoginService
  ) 
  { 
    this.login = new Login();
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required]]
    });
  }

  get forms(){
    return this.loginForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.login = this.loginForm.value;
    this.service.doLogin(this.login);
    this.response = this.service.response;
    this.invalid = this.service.invalid;
    this.isLogin = this.service.isLogin;
    console.log(this.login);
  }


}

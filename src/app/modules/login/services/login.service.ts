import { Injectable } from '@angular/core';
import { LoginMock } from '../Data/login-mock';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private creden:LoginMock;
  public response : any;
  public invalid = false;
  public isLogin = false;
  constructor() {
    this.creden = new LoginMock();
  }

  doLogin(credentials){
    console.log(credentials);
    if(this.creden.username == credentials.username && this.creden.password == credentials.password){
      this.response = "Successfully Logged into TMS.";
      console.log("successfully logged in TMS.");
      this.isLogin=true;
      this.invalid=false;
    }
    else{
      this.response = "The username or password you entered is invalid"
      console.log("The username or password you entered is invalid")
      this.invalid = true;
      this.isLogin = false;
    }
  }
}

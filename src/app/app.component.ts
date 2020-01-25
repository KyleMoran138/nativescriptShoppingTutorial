import { Component } from "@angular/core";

@Component({
  selector: "gr-login",
  moduleId: module.id,
  templateUrl: "./login/login.component.html",
  styleUrls: ["./login/login.component.css"]
})
export class AppComponent {
  email: string = "";

  submit(): void{
    const message: string = `You're using this email: ${this.email}`;
    console.log(message);
    alert(`You're using this email: ${this.email}`);
  }
  
}
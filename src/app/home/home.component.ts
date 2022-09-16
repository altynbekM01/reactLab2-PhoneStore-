import { Component, OnInit } from '@angular/core';
import {Phones} from "../Phones";
import {StoreService} from "../store.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private foodService:StoreService, private route: ActivatedRoute, private router:Router) {
  }

  isAdmin: boolean = false
  login :string =   ""
  password: string = ""
  go() {
    // let login = document.getElementById('login')
    // let password = document.getElementById("password").nodeValue
    if (this.login == "admin" && this.password == "123"){
      alert("Вы вошли как админ")
      this.isAdmin = true
      this.router.navigate(["/admin"])}

    else if (this.login == "user" && this.password == "123"){
      alert("Вы вошли как клиент ")
      this.router.navigate(["/client"])}

    else
      alert("Вы ввели неправильный логин или пароль")
  }
  ngOnInit(): void {
  }


}

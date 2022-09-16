import { Component, OnInit } from '@angular/core';
import {Phones} from "../Phones";
import {StoreService} from "../store.service";
import {ActivatedRoute} from "@angular/router";
import {count} from "rxjs";
import {ShopComponent} from "../shop/shop.component";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  phones: Phones[] = []

  constructor(private storeService: StoreService
  ) {
  }



  ngOnInit(): void {
    this.phones = this.storeService.getAll()

  }

}

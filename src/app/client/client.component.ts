import {Input, Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Phones} from "../Phones";
import {ShopComponent} from "../shop/shop.component";
import {StoreService} from "../store.service";


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})


export class ClientComponent implements OnInit {

  phones: Phones[] = []
  cart: string[] = []
  add(name: string){
    this.cart.push(name)
  }

  constructor(private storservice: StoreService) { }


  ngOnInit(): void {

    this.phones=this.storservice.getAll()
  }

}

import {Component, OnInit, Output} from '@angular/core';
import {StoreService} from "../store.service";
import {Phones} from "../Phones";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  @Output() test:string ="test"
  phones: Phones[] = []
  phones2: Phones[] = []






  constructor(private storeService: StoreService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.phones = this.storeService.getAll()
    })

  }
}






import { Injectable } from '@angular/core';
import { Phones } from './Phones';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  getAll(): Phones[] {
    return [
      {
        id: 1,
        name: 'Samsung 20',
        price: 1000,
        count: 20
      },
      {
        id: 2,
        name: 'Iphone 12',
        price: 1500,
        count: 20
      },
      {
        id: 3,
        name: 'Samsung Z',
        price: 1200,
        count: 20
      },
      {
        id: 4,
        name: 'Iphone 11',
        price: 1400,
        count: 20
      },
      {
        id: 5,
        name: 'Lg 9',
        price: 1000,
        count: 20
      }
      ];}

  constructor() { }
}

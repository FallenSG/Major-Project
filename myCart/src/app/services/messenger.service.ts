import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { Product } from 'src/app/models/product'
@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  constructor() { }

  subject = new Subject();

  sendMsg(product){
    this.subject.next(product)
  }

  getMsg(){
    return this.subject.asObservable()

  }
}

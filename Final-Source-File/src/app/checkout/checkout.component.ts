import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(public router: Router) { }

  qty1: number = 1;
  qty2: number = 1;
  qty3: number = 1;
  price1: number = 110;
  price2: number = 110;
  price3: number = 110;

  ngOnInit() {
  }

  addQty1() {
    this.qty1 = this.qty1 + 1
  }
  addQty2() {
    this.qty2 = this.qty2 + 1
  }
  addQty3() {
    this.qty3 = this.qty3 + 1
  }
  removeQty1() {
    if (this.qty1 > 0) {
      this.qty1 = this.qty1 - 1
    }
  }
  removeQty2() {
    if (this.qty2 > 0) {
      this.qty2 = this.qty2 - 1
    }
  }
  removeQty3() {
    if (this.qty3 > 0) {
      this.qty3 = this.qty3 - 1
    }
  }

  orderComplete() {
    this.router.navigate(["/success"])
  }

}

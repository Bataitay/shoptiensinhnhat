import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-choose',
  templateUrl: './button-choose.component.html',
  styleUrls: ['./button-choose.component.css']
})
export class ButtonChooseComponent implements OnInit {
  @Output() AddToCartEvent = new EventEmitter<number>();
  @Input() data: any;
  numberOrder: any;
  constructor() { }

  ngOnInit() {

  }
  addToCart(Addnumber:any) {
   this.AddToCartEvent.emit(this.numberOrder);
  }

}

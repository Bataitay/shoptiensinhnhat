import { Component, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppService } from './app.service';
import { ModalComponent } from './modal/modal.component';
declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tiennamsinh';
  data: any = [];
  listOrder: any = [];
  getOrder: any = [];
  faceBook = '';
  phone = '';
  zalo = '';
  quantity:any;
  formModal: any;
  serachBase !: FormGroup;
  serachCouple !: FormGroup;
  constructor(
    private fb: FormBuilder,
    private appService: AppService,

  ) {

  }
  ngOnInit(): void {
    localStorage.setItem('data_order', this.listOrder || undefined);
    this.serachBase = this.fb.group({
      day: [''],
      month: [''],
      year: [''],
    });
    this.serachCouple = this.fb.group({
      year1: [''],
      year2: [''],
    });
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('check-order')
    )
    this.getOrder = JSON.parse(localStorage['data_order']);
  }

  handdleSearch() {
    let day = this.serachBase.value.day
    let month = this.serachBase.value.month
    let year = this.serachBase.value.year
    let search = day + '/' + month + '/' + year;
    this.appService.searchBase(search).then((res: any) => {
      this.data = res.data.list;
    })
  }
  handdleSearchCouple() {
    let year1 = this.serachCouple.value.year1
    let year2 = this.serachCouple.value.year2
    let value: any = {
      year1: year1,
      year2: year2,
    }
    this.appService.searchCouple(value).then((res: any) => {
      this.data = res.data.list;
    })
  }
  open() {
    this.formModal.show()
  }
  addToCart(item: any) {
    if (item) {
      if (localStorage['data_order']?.length == 2) {
        this.listOrder = [];
        this.getOrder = [];
      }
      this.listOrder.push(item);
      localStorage.setItem('data_order', JSON.stringify(this.listOrder));
      this.getOrder = JSON.parse(localStorage['data_order']);
      this.quantity = this.getOrder.length;
    }
  }
  onQuantityChanged(newQuantity: number) {
    this.quantity = newQuantity;
  }
}

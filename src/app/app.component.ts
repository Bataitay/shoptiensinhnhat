import {Component, Input, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {AppService} from './app.service';
import {ModalComponent} from './modal/modal.component';
import Swal from "sweetalert2";

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
  faceBook = 'https://www.facebook.com/tienseringaysinhnhat';
  phone = '0786277999';
  zalo = '';
  address = 'Số 6A Ngõ 1 Lĩnh Nam, Mai Động, Hoàng Mai, Hà Nội';
  quantity: any;
  formModal: any;
  serachBase !: FormGroup;
  serachCouple !: FormGroup;
  message: string = '';
  price1k: number = 100000;
  price2k: number = 120000;
  price5k: number = 160000;
  price10k: number = 200000;
  price20k: number = 220000;
  price50k: number = 250000;
  price100k: number = 300000;
  price200k: number = 400000;
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
  }

  handdleSearch() {
    let day = this.serachBase.value.day
    let month = this.serachBase.value.month
    let year = this.serachBase.value.year
    let search = day + '/' + month + '/' + year;
    if (day && month && year) {
      this.appService.searchBase(search).then((res: any) => {
        this.data = res.data.list;
        this.message = '';
        if (res.data.list.length == 0) {
          this.message = 'Số này hiện không có, bạn liên hệ Fanpage hoặc Zalo để được tư vấn thêm';
        }
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Có lỗi xảy ra!',
        text: 'Vui lòng điền ngày tháng năm sinh',
      })
    }
  }

  handdleSearchCouple() {
    let year1 = this.serachCouple.value.year1
    let year2 = this.serachCouple.value.year2
    let value: any = {
      year1: year1,
      year2: year2,
    }
    if (year1 && year2) {
      this.appService.searchCouple(value).then((res: any) => {
        this.data = res.data.list;
        if (res.data.list.length == 0) {
          this.message = 'Số này hiện không có, bạn liên hệ Fanpage hoặc Zalo để được tư vấn thêm';
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Có lỗi xảy ra!',
        text: 'Vui lòng điền đủ 2 năm sinh',
      })
    }
  }

  open() {
    this.formModal.show()
  }

  addToCart(item: any) {
    if (item) {
      if (item) {
        let checkData = localStorage['data_order'];

        if (checkData) {
          this.getOrder = JSON.parse(checkData);
        }

        this.getOrder.push(item);
        localStorage.setItem('data_order', JSON.stringify(this.getOrder));
        this.getOrder = JSON.parse(localStorage['data_order']);
        this.quantity = this.getOrder.length;
      }
    }
  }

  onQuantityChanged(newQuantity: number) {
    this.quantity = newQuantity;
  }
}

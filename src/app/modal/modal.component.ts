import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalServiceService } from './modal-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, AfterViewInit {
  @Input() getOrder: any = [];
  @Output() quantity = new EventEmitter<number>();
  @ViewChild("codeAndSeri", { read: ElementRef })
  codeAndSeri!: ElementRef;
  @ViewChild("faceValueOfMoney", { read: ElementRef })
  faceValueOfMoney!: ElementRef;
  @ViewChild("total", { read: ElementRef })
  total!: ElementRef;
  @ViewChild("price", { read: ElementRef })
  price!: ElementRef;
  method = 1;
  number_account: string = '8162186418426';
  message: string = '';
  inforForm !: FormGroup;
  price1k: number = 100000;
  price2k: number = 120000;
  price5k: number = 160000;
  price10k: number = 200000;
  price20k: number = 220000;
  price50k: number = 250000;
  price100k: number = 300000;
  price200k: number = 400000;
  ship: number = 30000;

  constructor(private fb: FormBuilder,
    private modalService: ModalServiceService) { }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.inforForm = this.fb.group({
      name: [''],
      phone: [''],
      address: [''],
      note: [''],
      seri: [''],
      code: [''],
      displayValue: [''],
      pay_method: [''],
    });
  }
  code() {
    this.method = 1;
  }
  tranfer() {
    this.method = 2;
  }
  toOrder() {
    let data = {
      codeAndSeri: this.codeAndSeri?.nativeElement?.textContent,
      faceValueOfMoney: this.faceValueOfMoney?.nativeElement?.textContent,
      total: this.total?.nativeElement?.textContent,
      price: this.price?.nativeElement?.textContent,
      name: this.inforForm.value.name,
      phone: this.inforForm.value.phone,
      address: this.inforForm.value.address,
      note: this.inforForm?.value.note,
      pay_method: this.method,
    }
    this.modalService.sendMail(data).then((res: any) => {
      console.log(res);

    })
  }
  delete(id: any) {
    let newObj = JSON.parse(localStorage['data_order']);
    newObj.forEach((element: any, index: any) => {
      console.log(id, index);
      if (index == id) {
        newObj.splice(index, 1);
        localStorage.clear();
        localStorage.setItem('data_order', JSON.stringify(newObj));
        this.getOrder = JSON.parse(localStorage['data_order']);
        this.quantity.emit(this.getOrder.length);
        console.log(this.quantity);

      }
    });
  }
  copyText(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}

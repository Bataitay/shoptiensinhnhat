import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppService } from './app.service';
declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tiennamsinh';
  data: any = [];
  faceBook = '';
  phone = '';
  zalo = '';
  order:any;
  serachBase !: FormGroup;
  serachCouple !: FormGroup;
  constructor(
    private fb: FormBuilder,
    private appService: AppService,

  ) {
   
   }
  ngOnInit(): void {
    this.serachBase = this.fb.group({
      day: [''],
      month: [''],
      year: [''],
    });
    this.serachCouple = this.fb.group({
      year1: [''],
      year2: [''],
    });
    this.order = new window.bootstrap.Modal(
      document.getElementById('check-order')
    )
  }
  handdleSearch() {
    let day = this.serachBase.value.day
    let month = this.serachBase.value.month
    let year = this.serachBase.value.year
    let search = day + '/' + month + '/' + year;
    this.appService.searchBase(search).then((res: any) => {
      console.log(res.data.list);
      this.data = res.data.list;
    })
  }
  handdleSearchCouple() {
    let year1 = this.serachCouple.value.year1
    let year2 = this.serachCouple.value.year2
    let value:any = {
      year1: year1,
      year2: year2,
    }
    this.appService.searchCouple(value).then((res:any) => {
      this.data = res.data.list;
    })
  }
  open() {
      this.order.show()
	}
}

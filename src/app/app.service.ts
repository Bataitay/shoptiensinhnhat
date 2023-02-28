import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  searchBase(data:string){
    const response = new Promise(resolve => {
      this.http.get(environment.url+`?query=${data}&saleStatus=available`).subscribe(res => {
        resolve(res)
      }, err => {
        console.log(err);
      });
    });
    return response;
  }
  searchCouple(data:any){
    const response = new Promise(resolve => {
      this.http.get(environment.url+`/cap-doi?year1=${data.year1}&year2=${data.year2}`).subscribe(res => {
        resolve(res)
      }, err => {
        console.log(err);
      });
    });
    return response;
  }
}

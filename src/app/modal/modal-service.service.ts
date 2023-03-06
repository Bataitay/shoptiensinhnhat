import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {
  constructor(private http: HttpClient) { }
  sendMail(data: any) {
    const response = new Promise(resolve => {
      this.http.post(environment.urlBackend + `send-mail-when-order`, data).subscribe(res => {
        resolve(res)
        console.log(res);

      }, err => {
        let error = err.error.message;
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Có lỗi xảy ra!',
          text: error.codeAndSeri || error.name || error.phone || error.address,
        })
      });
    });
    return response;
  }
}

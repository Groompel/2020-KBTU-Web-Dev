import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  apiKey = "iOUAla0Bg11ELIbI8oEhP2HFt95MrTNu1aR6M7z3";

  constructor(private httpClient: HttpClient) { }

  getProductInfo(id): Observable<any> {
    const res = this.httpClient.post("https://api.zapiex.com/v1/products", {
      productId: id,
    },{
      headers: new HttpHeaders({
        "x-api-key": this.apiKey
      }),
    });

    return res;
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from './IProduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  _url = '../assets/Data/products.json';

  constructor(private http: HttpClient) {}

  GetAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this._url);
  }

}

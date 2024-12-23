import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PredictionService {
  constructor(private http: HttpClient) {}

  predictStockPrice(stockSymbol: string, stockPrice: number): Observable<any> {
    const req = {
      stockSymbol: stockSymbol,
      stockPrice: stockPrice,
    };
    return this.http.post<any>('http://localhost:5000/predict', req);
  }
}

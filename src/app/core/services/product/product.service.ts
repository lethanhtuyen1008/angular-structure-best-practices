import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../auth/api.service';
import { Product } from '../../models';

@Injectable()
export class ProductService {
  constructor(private apiService: ApiService) {}

  getListProduct(): Observable<Product> {
    return this.apiService.get('/product');
  }
}

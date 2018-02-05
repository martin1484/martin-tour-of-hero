import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CarService {
  constructor(private http: HttpClient) {
  }
  getAll(): Observable<any> {
    return this.http.get('https://martin-spring-boot-example.herokuapp.com/api/cool-cars');
  }
}
